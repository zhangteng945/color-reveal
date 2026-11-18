/* 《拾光之旅》纯状态引擎：不依赖 DOM，浏览器与 Node 共用。
 * 核心规则：四列队首、可见三排+隐藏队列、固定五个出巢位、只摘露在外面的星、
 * 暂时够不着就占位等待、一罐精灵全部出发后立刻腾位、槽满不判负、无合法进展才失败、
 * 队列全部拿完后收尾加速。
 *
 * 本轮机制（详见 docs/evidence/mechanics-50-selection.md）：
 * - 连体星罐：两罐同时在队首才可取，一次占两个位子；一方派完仍占位等搭档，两方都完才一起空出。
 * - 星锁与星钥：钥匙叠在画里，四周被清空后自动开最靠前的一把锁；锁顶在队首时整列点不了。
 * - 冰壳：冰格要两口，先破冰（计一口、星还在），再采色；罐数已含破冰口。
 *
 * 兼容星具（按进度解锁、每关各一次，不是过关必需）：
 * - 借槽：临时加第 6 个出巢位，前五槽不左挤。
 * - 选后排：取一列后排的一罐；连体罐不能从后排单取。
 * - 清除：清一格并从同色队尾罐扣口数；冰壳格冰层与颜色一起清。
 * - 吸收：收走一种不在槽/不在途的颜色与冰层，队列该色罐全移走。
 */
(function (global) {
  'use strict';

  const DIRS = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  const MAX_SLOTS = 5;
  const MAX_BORROWED_SLOTS = 6; // 借槽临时加到第 6 位；基础五槽不变

  function cloneGrid(grid) { return grid.map(row => row.slice()); }

  function isLockEntry(entry) { return !!entry && entry.type === 'lock'; }

  class ShiguangGame {
    constructor(level, opts) {
      if (!level || !level.cells || !level.columns) throw new Error('bad level');
      this.level = level;
      this.N = level.cells.length;
      this.slotCount = Math.max(1, (opts && opts.slotCount) || MAX_SLOTS);
      this.visibleRows = Math.max(1, (opts && opts.visibleRows) || 3);
      this.reset();
    }

    reset() {
      this.board = this.level.cells.map(row => row.map(c => c || null));
      this.ice = new Set(Array.isArray(this.level.ice) ? this.level.ice : []);
      this.keys = (Array.isArray(this.level.keys) ? this.level.keys : []).map((index, i) => ({
        id: i + 1,
        index,
        triggered: false,
      }));
      this.keysTriggered = 0;
      this.locksOpened = 0;
      this.colorTotal = 0;
      for (const row of this.board) for (const c of row) if (c) this.colorTotal++;
      this.total = this.colorTotal + this.ice.size;
      this.collected = 0;
      this.colorCollected = 0;
      this.iceBroken = 0;
      this.moves = 0;
      this.status = 'playing'; // playing | cleared | lost
      this.columns = this.level.columns.map((col, ci) =>
        col.map((j, ji) => {
          if (j.type === 'lock' || j.lock) {
            return {
              uid: `${this.level.id || 'level'}-lock-${ci}-${ji}`,
              type: 'lock',
              lockId: j.lockId || `${ci}-${ji}`,
              column: ci,
              order: ji,
            };
          }
          return {
            uid: j.uid || `${this.level.id || 'level'}-${ci}-${ji}`,
            type: 'jar',
            color: j.color,
            count: j.count,
            remaining: j.count,
            total: j.count,
            column: ci,
            order: ji,
            linkId: j.linkId || null,
            linkPartner: null,
            done: false,
          };
        })
      );
      // 连体双方互相引用，方便槽里显示「等搭档」。
      const byLink = {};
      for (const col of this.columns) for (const e of col) {
        if (e.type !== 'jar' || !e.linkId) continue;
        (byLink[e.linkId] = byLink[e.linkId] || []).push(e);
      }
      for (const id of Object.keys(byLink)) {
        const pair = byLink[id];
        if (pair.length === 2) {
          pair[0].linkPartner = pair[1].uid;
          pair[1].linkPartner = pair[0].uid;
        }
      }
      this.slots = Array.from({ length: this.slotCount }, (_, i) => ({
        index: i,
        jar: null,
        enteredAt: 0,
        leaveAt: 0,
      }));
      this.claimed = new Map(); // cellIndex -> {slotIndex, color, claimId}
      this.pending = 0;
      this.nextClaimId = 1;
      this.dispatchCursor = 0;
      this.queueEmptied = false;
      this.events = [];
      this.lastAction = null;
      // 画边的钥匙开局就算露出；正常关卡不会把钥匙放在画边。
      this.activateKeys();
      this.checkStatus();
    }

    get maxCols() { return this.level.columns.length; }
    get starsLeft() { return this.total - this.collected; }
    get slotsFull() { return this.slots.every(s => s.jar !== null); }
    get hasEmptySlot() { return this.slots.some(s => s.jar === null); }
    get emptySlotCount() { return this.slots.filter(s => s.jar === null).length; }
    get queueEmpty() { return this.columns.every(c => c.every(e => isLockEntry(e))); }
    get speedFactor() { return this.queueEmptied ? 2.4 : 1.0; }

    firstEmptySlot() {
      for (let i = 0; i < this.slots.length; i++) if (!this.slots[i].jar) return i;
      return -1;
    }

    firstEmptySlots(n) {
      const out = [];
      for (let i = 0; i < this.slots.length && out.length < n; i++) if (!this.slots[i].jar) out.push(i);
      return out;
    }

    slotOfJar(uid) {
      for (const s of this.slots) if (s.jar && s.jar.uid === uid) return s;
      return null;
    }

    // 第 3 关“借槽”：在六格预留宽度内临时加一个出巢位；本局内不再左挤。
    addSlot() {
      if (this.status !== 'playing') return { ok: false, reason: 'ended' };
      if (this.slots.length >= MAX_BORROWED_SLOTS) return { ok: false, reason: 'max' };
      const index = this.slots.length;
      this.slots.push({ index, jar: null, enteredAt: 0, leaveAt: 0 });
      this.slotCount = this.slots.length;
      this.events.push({ type: 'add-slot', index });
      return { ok: true, index, slotCount: this.slotCount };
    }

    topEntry(col) {
      const c = this.columns[col];
      return c && c.length ? c[0] : null;
    }

    topJar(col) {
      const e = this.topEntry(col);
      return e && e.type === 'jar' ? e : null;
    }

    visibleQueue(col) {
      const c = this.columns[col] || [];
      return {
        visible: c.slice(0, this.visibleRows),
        hidden: Math.max(0, c.length - this.visibleRows),
        depth: c.length,
      };
    }

    lockPositions() {
      const out = [];
      for (let c = 0; c < this.columns.length; c++) {
        this.columns[c].forEach((e, row) => {
          if (isLockEntry(e)) out.push({ col: c, row, lock: e });
        });
      }
      return out;
    }

    // 最靠前 = 排位最浅；同一排取最左。
    foremostLock() {
      let best = null;
      for (const p of this.lockPositions()) {
        if (!best || p.row < best.row || (p.row === best.row && p.col < best.col)) best = p;
      }
      return best;
    }

    isKeyExposed(index) {
      const x = index % this.N, y = Math.floor(index / this.N);
      if (x === 0 || y === 0 || x === this.N - 1 || y === this.N - 1) return true;
      return DIRS.some(([dx, dy]) => !this.board[y + dy][x + dx]);
    }

    // 每次真正清掉一格后调用：所有已露出的钥匙依次开锁。
    activateKeys() {
      const opened = [];
      for (const key of this.keys) {
        if (key.triggered) continue;
        if (!this.isKeyExposed(key.index)) continue;
        key.triggered = true;
        this.keysTriggered++;
        const pos = this.foremostLock();
        let unlocked = null;
        if (pos) {
          this.columns[pos.col].splice(pos.row, 1);
          this.locksOpened++;
          unlocked = { col: pos.col, row: pos.row, lockId: pos.lock.lockId, keyId: key.id };
          opened.push(unlocked);
          this.events.push({ type: 'unlock', ...unlocked });
          if (this.queueEmpty) this.queueEmptied = true;
        } else {
          this.events.push({ type: 'key-spent', keyId: key.id });
        }
      }
      return opened;
    }

    linkPartnerTop(col) {
      const jar = this.topJar(col);
      if (!jar || !jar.linkId) return null;
      for (let c = 0; c < this.columns.length; c++) {
        if (c === col) continue;
        const other = this.topJar(c);
        if (other && other.linkId === jar.linkId) return { col: c, jar: other };
      }
      return null;
    }

    takeReason(col) {
      if (this.status !== 'playing') return 'ended';
      const top = this.topEntry(col);
      if (!top) return 'empty';
      if (isLockEntry(top)) return 'locked';
      if (top.type !== 'jar') return 'empty';
      if (top.linkId) {
        const partner = this.linkPartnerTop(col);
        if (!partner) return 'partner-not-front';
        if (this.emptySlotCount < 2) return 'need-two-slots';
      } else if (!this.hasEmptySlot) return 'no-slot';
      return '';
    }

    canTakeColumn(col) { return !this.takeReason(col); }

    takeColumn(col, now) {
      const reason = this.takeReason(col);
      if (reason) return { ok: false, reason };
      const top = this.topJar(col);
      if (top.linkId) return this.takeLinked(col, now);
      const jar = this.columns[col].shift();
      const slotIndex = this.firstEmptySlot();
      const slot = this.slots[slotIndex];
      slot.jar = jar;
      slot.enteredAt = now || 0;
      slot.leaveAt = 0;
      jar.done = false;
      this.moves++;
      if (this.queueEmpty) this.queueEmptied = true;
      this.lastAction = { type: 'take', col, slotIndex, jar, jars: [jar], queueEmptied: this.queueEmptied };
      this.checkStatus();
      return { ok: true, jar, jars: [jar], slotIndex, slots: [slotIndex], queueEmptied: this.queueEmptied, slot, linked: false };
    }

    // 连体：一次取走两罐，占两个最左空位；空位固定，不左挤。
    takeLinked(col, now) {
      const jar = this.topJar(col);
      const partner = this.linkPartnerTop(col);
      if (!partner) return { ok: false, reason: 'partner-not-front' };
      const slots = this.firstEmptySlots(2);
      if (slots.length < 2) return { ok: false, reason: 'need-two-slots' };
      const a = this.columns[col].shift();
      const b = this.columns[partner.col].shift();
      const entries = [
        { jar: a, slotIndex: slots[0] },
        { jar: b, slotIndex: slots[1] },
      ];
      for (const e of entries) {
        const slot = this.slots[e.slotIndex];
        slot.jar = e.jar;
        slot.enteredAt = now || 0;
        slot.leaveAt = 0;
        e.jar.done = false;
      }
      this.moves++;
      if (this.queueEmpty) this.queueEmptied = true;
      this.lastAction = {
        type: 'take-linked',
        col,
        partnerCol: partner.col,
        slotIndex: slots[0],
        jar: a,
        jars: [a, b],
        slots,
        queueEmptied: this.queueEmptied,
      };
      this.checkStatus();
      return {
        ok: true,
        linked: true,
        jar: a,
        jars: [a, b],
        slotIndex: slots[0],
        slots,
        queueEmptied: this.queueEmptied,
        slot: this.slots[slots[0]],
      };
    }

    // 第 4 关“选后排”：从某一列的后排取一罐；上面的罐不补到下面，下面的罐补位。
    // 星锁顶在队首时仍可点后排的非锁罐；连体罐不能从后排单取一只，避免拆散连体。
    takeJarAt(col, row, now) {
      if (this.status !== 'playing') return { ok: false, reason: 'ended' };
      const c = this.columns[col];
      if (!c || row < 0 || row >= c.length) return { ok: false, reason: 'empty' };
      if (row === 0) return this.takeColumn(col, now);
      const entry = c[row];
      if (isLockEntry(entry)) return { ok: false, reason: 'locked' };
      if (entry.type !== 'jar') return { ok: false, reason: 'empty' };
      if (entry.linkId) return { ok: false, reason: 'linked-rear' };
      if (!this.hasEmptySlot) return { ok: false, reason: 'no-slot' };
      const jar = c.splice(row, 1)[0];
      const slotIndex = this.firstEmptySlot();
      const slot = this.slots[slotIndex];
      slot.jar = jar;
      slot.enteredAt = now || 0;
      slot.leaveAt = 0;
      jar.done = false;
      this.moves++;
      if (this.queueEmpty) this.queueEmptied = true;
      this.lastAction = { type: 'take-back', col, row, slotIndex, jar, jars: [jar], queueEmptied: this.queueEmptied };
      this.checkStatus();
      return { ok: true, jar, jars: [jar], slotIndex, slots: [slotIndex], queueEmptied: this.queueEmptied, slot, backRow: row, linked: false };
    }

    allQueueJars() {
      const out = [];
      for (let ci = 0; ci < this.columns.length; ci++) {
        for (let ji = 0; ji < this.columns[ci].length; ji++) {
          const jar = this.columns[ci][ji];
          if (jar.type === 'jar') out.push({ col: ci, row: ji, jar });
        }
      }
      return out;
    }

    findLinkedJar(linkId, exclude) {
      for (const item of this.allQueueJars()) {
        if (item.jar.linkId === linkId && item.jar !== exclude) return item.jar;
      }
      for (const slot of this.slots) {
        if (slot.jar && slot.jar.linkId === linkId && slot.jar !== exclude) return slot.jar;
      }
      return null;
    }

    // 吸收/清除都不能只拿走连体的一只。不同色的连体对若只吸走一色，另一只
    // 会永远等不到搭档，因此这种颜色要从“可吸收”里排除。
    colorLinkSafe(color) {
      for (const item of this.allQueueJars()) {
        const jar = item.jar;
        if (jar.color !== color || !jar.linkId) continue;
        const partner = this.findLinkedJar(jar.linkId, jar);
        if (!partner || partner.color !== color) return false;
      }
      return true;
    }

    // 清除一格会从同色队尾罐扣口数。为了不把连体对拆成单只：
    // - 不同色连体罐最多扣到剩 1；
    // - 同色连体对可作为一组整体扣完（两只一起移除），否则每只都至少留 1。
    // 返回扣减计划；口数不够时返回 null，调用方不得留下半扣状态。
    planJarConsumption(color, units) {
      const queue = this.allQueueJars().filter(item => item.jar.color === color && item.jar.remaining > 0);
      const seenLinks = new Set();
      const groups = [];
      for (const item of queue) {
        const jar = item.jar;
        if (jar.linkId) {
          if (seenLinks.has(jar.linkId)) continue;
          seenLinks.add(jar.linkId);
          const partner = this.findLinkedJar(jar.linkId, jar);
          if (partner && partner.color === color) {
            const entries = queue.filter(q => q.jar.linkId === jar.linkId && q.jar.color === color);
            groups.push({ kind: 'pair', entries, total: entries.reduce((n, q) => n + q.jar.remaining, 0), col: item.col, row: item.row });
          } else {
            groups.push({ kind: 'linked-single', entry: item, max: jar.remaining - 1, col: item.col, row: item.row });
          }
        } else {
          groups.push({ kind: 'single', entry: item, max: jar.remaining, col: item.col, row: item.row });
        }
      }
      groups.sort((a, b) => (b.col * 10000 + b.row) - (a.col * 10000 + a.row));
      const plan = [];
      let need = units;
      for (const g of groups) {
        if (need <= 0) break;
        if (g.kind === 'single' || g.kind === 'linked-single') {
          const take = Math.min(g.max, need);
          if (take <= 0) continue;
          plan.push({ entry: g.entry, take, remove: g.kind === 'single' && take >= g.entry.jar.remaining });
          need -= take;
        } else {
          if (need >= g.total) {
            plan.push({ entries: g.entries, take: g.total, remove: true, col: g.col });
            need -= g.total;
          } else if (need <= g.total - 2) {
            let left = need;
            for (const entry of g.entries) {
              const take = Math.min(entry.jar.remaining - 1, left);
              if (take > 0) { plan.push({ entry, take, remove: false }); left -= take; }
              if (!left) break;
            }
            if (left) return null;
            need = 0;
          }
        }
      }
      if (need > 0) return null;
      return plan;
    }

    applyJarConsumption(plan) {
      const removeUids = new Set();
      for (const step of plan) {
        if (step.entries) {
          for (const entry of step.entries) {
            entry.jar.remaining = 0;
            removeUids.add(entry.jar.uid);
          }
          continue;
        }
        step.entry.jar.remaining -= step.take;
        if (step.remove) removeUids.add(step.entry.jar.uid);
      }
      if (removeUids.size) {
        this.columns = this.columns.map(col => col.filter(e => !removeUids.has(e.uid)));
      }
    }

    // 由 UI 在罐子进位动画结束后才允许调用。返回一只出发的小精灵与它认领的星。
    dispatchNext(origins, now, ready) {
      if (this.status !== 'playing') return null;
      const n = this.slots.length;
      const start = this.dispatchCursor % n;
      for (let step = 0; step < n; step++) {
        const i = (start + step) % n;
        if (ready && ready[i] === false) continue;
        const slot = this.slots[i];
        if (!slot.jar || slot.jar.remaining <= 0) continue;
        const origin = (origins && origins[i]) || this.defaultOrigin(i);
        const target = this.nearestTarget(slot.jar.color, origin);
        if (!target) continue;
        const jar = slot.jar;
        jar.remaining--;
        const claim = {
          id: this.nextClaimId++,
          index: target.index,
          x: target.x,
          y: target.y,
          color: jar.color,
          slotIndex: i,
          jarUid: jar.uid,
          ice: this.ice.has(target.index),
        };
        this.claimed.set(target.index, claim);
        this.pending++;
        let cleared = false;
        const clearedSlots = [];
        let waitingPartner = false;
        if (jar.remaining === 0) {
          if (jar.linkId) {
            jar.done = true;
            const partner = this.slots.find(s => s.jar && s.jar !== jar && s.jar.linkId === jar.linkId);
            if (partner && partner.jar.done) {
              // 两方都派完，两个位子一起空出。
              clearedSlots.push(i, partner.index);
              slot.leaveAt = now || 0;
              slot.jar = null;
              partner.leaveAt = now || 0;
              partner.jar = null;
              cleared = true;
            } else {
              waitingPartner = true; // 仍占位，等搭档
            }
          } else {
            slot.jar = null;
            slot.leaveAt = now || 0;
            clearedSlots.push(i);
            cleared = true;
          }
        }
        this.events.push({ type: 'dispatch', claim, slotIndex: i, cleared, clearedSlots, waitingPartner });
        this.dispatchCursor = (i + 1) % n;
        this.checkStatus();
        return { claim, slotIndex: i, slotCleared: cleared, clearedSlots, waitingPartner, speed: this.speedFactor };
      }
      return null;
    }

    defaultOrigin(slotIndex) {
      // 测试/无 UI 时的近似：从底部一排槽位出发
      return { x: (slotIndex + 0.5) * (this.N / this.slots.length), y: this.N + 1.8 };
    }

    nearestTarget(color, origin) {
      let best = null;
      let bestD = Infinity;
      for (let y = 0; y < this.N; y++) {
        for (let x = 0; x < this.N; x++) {
          if (this.board[y][x] !== color) continue;
          const index = y * this.N + x;
          if (this.claimed.has(index)) continue;
          if (!this.isReachable(x, y)) continue;
          const dx = x + 0.5 - origin.x;
          const dy = y + 0.5 - origin.y;
          const d = dx * dx + dy * dy;
          if (d < bestD) { bestD = d; best = { x, y, index }; }
        }
      }
      return best;
    }

    isReachable(x, y) {
      if (y < 0 || y >= this.N || x < 0 || x >= this.N) return false;
      if (!this.board[y][x]) return false;
      if (x === 0 || y === 0 || x === this.N - 1 || y === this.N - 1) return true;
      return !this.board[y - 1][x] || !this.board[y + 1][x] || !this.board[y][x - 1] || !this.board[y][x + 1];
    }

    reachableCells(color) {
      const out = [];
      for (let y = 0; y < this.N; y++) {
        for (let x = 0; x < this.N; x++) {
          if (this.board[y][x] !== color) continue;
          if (this.claimed.has(y * this.N + x)) continue;
          if (!this.isReachable(x, y)) continue;
          out.push({ x, y, index: y * this.N + x, ice: this.ice.has(y * this.N + x) });
        }
      }
      return out;
    }

    hasDispatchableSlot(origins) {
      for (let i = 0; i < this.slots.length; i++) {
        const s = this.slots[i];
        if (!s.jar || s.jar.remaining <= 0) continue;
        const o = (origins && origins[i]) || this.defaultOrigin(i);
        if (this.nearestTarget(s.jar.color, o)) return true;
      }
      return false;
    }

    hasTakeableColumn() {
      for (let c = 0; c < this.columns.length; c++) if (this.canTakeColumn(c)) return true;
      return false;
    }

    // 小精灵到达才真正取走星；claimed 星在图中仍然算“未取走”，会挡路。
    // 冰格第一口只破冰：collected 也加一（总口数含冰层），但颜色格还在。
    collect(index, now) {
      const claim = this.claimed.get(index);
      if (!claim) return { ok: false };
      this.claimed.delete(index);
      this.pending--;
      const x = index % this.N;
      const y = Math.floor(index / this.N);
      const color = this.board[y][x];
      let brokeIce = false;
      if (this.ice.has(index)) {
        this.ice.delete(index);
        this.iceBroken++;
        this.collected++;
        brokeIce = true;
      } else if (color) {
        this.board[y][x] = null;
        this.colorCollected++;
        this.collected++;
      }
      const unlocked = brokeIce ? [] : this.activateKeys();
      this.checkStatus();
      return {
        ok: true, color, x, y, index, claim, brokeIce, unlocked,
        cleared: this.status === 'cleared', lost: this.status === 'lost',
      };
    }

    // 第 8 关“清除至多 12 块”：点掉一颗星，同时从该色队尾星罐扣掉对应口数。
    // 冰壳格一次清掉冰层与颜色，共扣 2 口；清空后该格不再占冰、也不再占色。
    // 只允许清除当前没有精灵在途、也没有占槽的颜色，避免与飞行中的认领打架。
    clearStarAt(index) {
      if (this.status !== 'playing') return { ok: false, reason: 'ended' };
      const x = index % this.N, y = Math.floor(index / this.N);
      if (y < 0 || y >= this.N || x < 0 || x >= this.N) return { ok: false, reason: 'range' };
      const color = this.board[y][x];
      if (!color) return { ok: false, reason: 'empty' };
      if (this.claimed.has(index)) return { ok: false, reason: 'claimed' };
      for (const s of this.slots) if (s.jar && s.jar.color === color) return { ok: false, reason: 'in-slot' };
      for (const c of this.claimed.values()) if (c.color === color) return { ok: false, reason: 'in-flight' };
      const hadIce = this.ice.has(index);
      const units = hadIce ? 2 : 1;
      const plan = this.planJarConsumption(color, units);
      if (!plan) return { ok: false, reason: 'no-jar' };
      let col = -1;
      for (const step of plan) {
        if (step.col != null) { col = step.col; break; }
        if (step.entry) { col = step.entry.col; break; }
      }
      this.applyJarConsumption(plan);
      if (hadIce) {
        this.ice.delete(index);
        this.iceBroken++;
      }
      this.board[y][x] = null;
      this.collected += units;
      this.colorCollected++;
      this.moves++;
      const unlocked = this.activateKeys();
      if (this.queueEmpty) this.queueEmptied = true;
      this.events.push({ type: 'clear', index, color, col, units, iceCleared: hadIce });
      this.checkStatus();
      return { ok: true, color, x, y, index, col, units, iceCleared: hadIce, left: this.starsLeft, unlocked };
    }

    // 第 10 关“吸收”：吸收一种当前不在槽/不在途的颜色，画上该色全收、队列里该色罐全移走。
    // 冰层也属于该色口数；不同色连体对不能只吸走一色，故从候选中排除。
    absorbCandidates() {
      const map = {};
      for (let y = 0; y < this.N; y++) for (let x = 0; x < this.N; x++) {
        const c = this.board[y][x];
        if (c) map[c] = (map[c] || 0) + 1;
      }
      for (const index of this.ice) {
        const y = Math.floor(index / this.N), x = index % this.N;
        const c = this.level.cells[y] && this.level.cells[y][x];
        if (c) map[c] = (map[c] || 0) + 1;
      }
      for (const s of this.slots) if (s.jar) delete map[s.jar.color];
      for (const c of this.claimed.values()) delete map[c.color];
      const queued = new Set();
      for (const item of this.allQueueJars()) queued.add(item.jar.color);
      for (const color of Object.keys(map)) {
        if (!queued.has(color) || !this.colorLinkSafe(color)) delete map[color];
      }
      return Object.keys(map).sort((a, b) => (map[b] - map[a]) || (a < b ? -1 : a > b ? 1 : 0))
        .map(color => ({ color, count: map[color] }));
    }

    absorbColor(color) {
      if (this.status !== 'playing') return { ok: false, reason: 'ended' };
      if (!color) return { ok: false, reason: 'no-color' };
      for (const s of this.slots) if (s.jar && s.jar.color === color) return { ok: false, reason: 'in-slot' };
      for (const c of this.claimed.values()) if (c.color === color) return { ok: false, reason: 'in-flight' };
      if (!this.colorLinkSafe(color)) return { ok: false, reason: 'linked-partner' };
      let cells = 0, iceRemoved = 0;
      for (let y = 0; y < this.N; y++) for (let x = 0; x < this.N; x++) {
        if (this.board[y][x] === color) cells++;
      }
      for (const index of [...this.ice]) {
        const y = Math.floor(index / this.N), x = index % this.N;
        if (this.level.cells[y] && this.level.cells[y][x] === color) iceRemoved++;
      }
      const removed = cells + iceRemoved;
      if (!removed) return { ok: false, reason: 'empty' };
      for (let y = 0; y < this.N; y++) for (let x = 0; x < this.N; x++) {
        if (this.board[y][x] === color) this.board[y][x] = null;
      }
      for (const index of [...this.ice]) {
        const y = Math.floor(index / this.N), x = index % this.N;
        if (this.level.cells[y] && this.level.cells[y][x] === color) this.ice.delete(index);
      }
      let queueRemoved = 0;
      for (let ci = 0; ci < this.columns.length; ci++) {
        const before = this.columns[ci].length;
        this.columns[ci] = this.columns[ci].filter(e => e.type === 'lock' || e.color !== color);
        queueRemoved += before - this.columns[ci].length;
      }
      this.collected += removed;
      this.colorCollected += cells;
      this.iceBroken += iceRemoved;
      this.moves++;
      const unlocked = this.activateKeys();
      if (this.queueEmpty) this.queueEmptied = true;
      this.events.push({ type: 'absorb', color, removed, cells, iceRemoved, queueRemoved });
      this.checkStatus();
      return { ok: true, color, removed, cells, iceRemoved, queueRemoved, unlocked, left: this.starsLeft, queueEmptied: this.queueEmptied };
    }

    checkStatus() {
      if (this.status !== 'playing') return this.status;
      if (this.collected >= this.total) {
        this.status = 'cleared';
        this.events.push({ type: 'cleared' });
        return this.status;
      }
      if (this.pending > 0) return this.status;
      const dispatchable = this.slots.some(s => s.jar && s.jar.remaining > 0 &&
        this.reachableCells(s.jar.color).length > 0);
      const addable = this.hasTakeableColumn();
      if (!dispatchable && !addable) {
        this.status = 'lost';
        this.events.push({ type: 'lost' });
      }
      return this.status;
    }

    // 仅用于提示/测试：当前是否还有任何一条动作可选
    canProgress(origins) {
      if (this.status !== 'playing') return false;
      if (this.pending > 0) return true;
      if (this.hasTakeableColumn()) return true;
      return this.hasDispatchableSlot(origins);
    }

    colorRemaining() {
      const map = {};
      for (let y = 0; y < this.N; y++) {
        for (let x = 0; x < this.N; x++) {
          const c = this.board[y][x];
          if (c) map[c] = (map[c] || 0) + 1;
        }
      }
      for (const claim of this.claimed.values()) {
        if (claim.color) map[claim.color] = (map[claim.color] || 0) + 1;
      }
      return map;
    }

    colorCounts() {
      const map = {};
      for (const row of this.level.cells) for (const c of row) if (c) map[c] = (map[c] || 0) + 1;
      return map;
    }

    iceCounts() {
      const map = {};
      for (const index of this.ice) {
        const y = Math.floor(index / this.N), x = index % this.N;
        const c = this.level.cells[y] && this.level.cells[y][x];
        if (c) map[c] = (map[c] || 0) + 1;
      }
      return map;
    }

    jarColorTotals() {
      const map = {};
      for (const col of this.level.columns) for (const e of col) {
        if (isLockEntry(e)) continue;
        map[e.color] = (map[e.color] || 0) + e.count;
      }
      return map;
    }

    jarRemainingTotals() {
      const map = {};
      for (const col of this.columns) for (const e of col) {
        if (e.type !== 'jar') continue;
        map[e.color] = (map[e.color] || 0) + e.remaining;
      }
      for (const s of this.slots) {
        if (s.jar && s.jar.type === 'jar') map[s.jar.color] = (map[s.jar.color] || 0) + s.jar.remaining;
      }
      return map;
    }

    snapshot() {
      return {
        board: cloneGrid(this.board),
        collected: this.collected,
        colorCollected: this.colorCollected,
        iceBroken: this.iceBroken,
        total: this.total,
        colorTotal: this.colorTotal,
        moves: this.moves,
        status: this.status,
        speed: this.speedFactor,
        queueEmptied: this.queueEmptied,
        slots: this.slots.map(s => s.jar ? {
          color: s.jar.color,
          remaining: s.jar.remaining,
          linkId: s.jar.linkId || null,
          done: !!s.jar.done,
        } : null),
        queue: this.columns.map(c => c.map(e => isLockEntry(e)
          ? { type: 'lock', lockId: e.lockId }
          : { type: 'jar', color: e.color, count: e.count, remaining: e.remaining, linkId: e.linkId || null })),
        pending: this.pending,
        ice: [...this.ice].sort((a, b) => a - b),
        keys: this.keys.map(k => ({ id: k.id, index: k.index, triggered: k.triggered })),
        locksOpened: this.locksOpened,
        keysTriggered: this.keysTriggered,
      };
    }
  }

  function validateLevel(level, opts) {
    const errors = [];
    if (!level.cells || !level.cells.length) { errors.push('棋盘不能为空'); return errors; }
    const N = level.cells.length;
    if (N < 4 || N > 40) errors.push('棋盘边长需在 4–40');
    if (!Array.isArray(level.columns) || level.columns.length !== 4) errors.push('必须是四列星罐');
    const counts = {};
    for (const row of level.cells) {
      if (row.length !== N) errors.push('棋盘必须是 N×N 方阵');
      for (const c of row) if (c) counts[c] = (counts[c] || 0) + 1;
    }

    // 冰层：每个索引只算一层，必须落在有颜色的格上。
    const iceSet = new Set();
    for (const index of (Array.isArray(level.ice) ? level.ice : [])) {
      if (!Number.isInteger(index) || index < 0 || index >= N * N) { errors.push(`冰层索引越界 ${index}`); continue; }
      if (iceSet.has(index)) { errors.push(`冰层重复 ${index}`); continue; }
      const y = Math.floor(index / N), x = index % N;
      if (!level.cells[y][x]) errors.push(`冰层落在空格 ${index}`);
      iceSet.add(index);
    }
    const iceByColor = {};
    for (const index of iceSet) {
      const y = Math.floor(index / N), x = index % N;
      const c = level.cells[y][x];
      if (c) iceByColor[c] = (iceByColor[c] || 0) + 1;
    }

    // 钥匙：叠在普通星光上的标记，不额外占格、不是颜色。
    const keySet = new Set();
    for (const index of (Array.isArray(level.keys) ? level.keys : [])) {
      if (!Number.isInteger(index) || index < 0 || index >= N * N) { errors.push(`星钥索引越界 ${index}`); continue; }
      if (keySet.has(index)) { errors.push(`星钥重复 ${index}`); continue; }
      const y = Math.floor(index / N), x = index % N;
      if (!level.cells[y][x]) errors.push(`星钥落在空格 ${index}`);
      keySet.add(index);
    }

    const jars = {};
    const lockIds = new Set();
    const links = {};
    for (let ci = 0; ci < level.columns.length; ci++) {
      const col = level.columns[ci];
      for (let ji = 0; ji < col.length; ji++) {
        const j = col[ji];
        if (j.type === 'lock' || j.lock) {
          const id = j.lockId || `${ci}-${ji}`;
          if (lockIds.has(id)) errors.push(`星锁 id 重复 ${id}`);
          lockIds.add(id);
          continue;
        }
        if (!j.color) { errors.push(`星罐缺少颜色 ${ci}-${ji}`); continue; }
        jars[j.color] = (jars[j.color] || 0) + j.count;
        if (j.linkId) {
          (links[j.linkId] = links[j.linkId] || []).push({ col: ci, row: ji, color: j.color });
        }
      }
    }
    for (const color of Object.keys(counts)) {
      const expected = counts[color] + (iceByColor[color] || 0);
      if (jars[color] !== expected) {
        errors.push(`色量不守恒 ${color}: 棋盘 ${counts[color]} + 冰层 ${iceByColor[color] || 0}，星罐 ${jars[color] || 0}`);
      }
    }
    for (const color of Object.keys(jars)) {
      if (!(color in counts)) errors.push(`星罐里有棋盘没有的颜色 ${color}`);
    }
    for (const id of Object.keys(links)) {
      const pair = links[id];
      if (pair.length !== 2) errors.push(`连体 ${id} 必须正好两罐，实际 ${pair.length}`);
      else if (pair[0].col === pair[1].col) errors.push(`连体 ${id} 的两罐必须在不同列`);
    }
    if (level.keys && level.keys.length && !lockIds.size) errors.push('有星钥但没有星锁');
    if (lockIds.size && !(level.keys && level.keys.length)) errors.push('有星锁但没有星钥');
    return errors;
  }

  // 用一串“点击第几列”验证可解；调用方需等每只精灵出发后再点下一罐，
  // 这里用同步模拟：take -> 反复 dispatch -> 立即 collect。
  // proof 的每一步可以是列号，也可以是 [列A, 列B] 表示连体对。
  function simulateProof(level, proof, opts) {
    const game = new ShiguangGame(level, opts);
    let clicks = 0;
    let guard = 0;
    function drain() {
      while (game.status === 'playing') {
        const d = game.dispatchNext(null, guard++);
        if (!d) break;
        game.collect(d.claim.index, guard++);
      }
    }
    while (game.status === 'playing' && guard++ < 20000) {
      drain();
      if (game.status !== 'playing') break;
      if (clicks >= proof.length) break;
      const step = proof[clicks];
      if (Array.isArray(step)) {
        const a = step[0], b = step[1];
        const topA = game.topJar(a), topB = game.topJar(b);
        if (!topA || !topB || !topA.linkId || topA.linkId !== topB.linkId) {
          return { ok: false, reason: `第 ${clicks + 1} 步不是可取的连体对`, state: game.snapshot() };
        }
        const r = game.takeColumn(a, guard++);
        if (!r.ok) return { ok: false, reason: `第 ${clicks + 1} 步连体失败: ${r.reason}`, state: game.snapshot() };
      } else {
        const r = game.takeColumn(step, guard++);
        if (!r.ok) return { ok: false, reason: `第 ${clicks + 1} 击失败: ${r.reason}`, state: game.snapshot() };
      }
      clicks++;
    }
    drain();
    return {
      ok: game.status === 'cleared',
      reason: game.status === 'cleared' ? '' : `未通关，状态 ${game.status}，剩 ${game.starsLeft} 口，点击 ${clicks}/${proof.length}`,
      clicks,
      state: game.snapshot(),
    };
  }

  const api = { ShiguangGame, validateLevel, simulateProof, DIRS, MAX_SLOTS, MAX_BORROWED_SLOTS };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  global.SHIGUANG_ENGINE = api;
})(typeof window !== 'undefined' ? window : globalThis);
