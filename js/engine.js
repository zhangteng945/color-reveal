/* 《拾光之旅》纯状态引擎：不依赖 DOM，浏览器与 Node 共用。
 * 规则对齐：四列队首、可见三排+隐藏队列、5 个固定出巢位、只摘露在外面的星、
 * 暂时够不着就占位等待、一罐精灵全部出发后立刻腾位、槽满不判负、无合法进展才失败、
 * 队列全部拿完后收尾加速。
 */
(function (global) {
  'use strict';

  const DIRS = [[0,-1],[1,0],[0,1],[-1,0]];

  function cloneGrid(grid) { return grid.map(row => row.slice()); }

  class ShiguangGame {
    constructor(level, opts) {
      if (!level || !level.cells || !level.columns) throw new Error('bad level');
      this.level = level;
      this.N = level.cells.length;
      this.slotCount = Math.max(1, (opts && opts.slotCount) || 5);
      this.visibleRows = Math.max(1, (opts && opts.visibleRows) || 3);
      this.reset();
    }

    reset() {
      this.board = this.level.cells.map(row => row.map(c => c || null));
      this.total = 0;
      for (const row of this.board) for (const c of row) if (c) this.total++;
      this.collected = 0;
      this.moves = 0;
      this.status = 'playing'; // playing | cleared | lost
      this.columns = this.level.columns.map((col, ci) =>
        col.map((j, ji) => ({
          uid: `${this.level.id || 'level'}-${ci}-${ji}`,
          color: j.color,
          count: j.count,
          remaining: j.count,
          total: j.count,
          column: ci,
          order: ji,
        }))
      );
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
    }

    get maxCols() { return this.level.columns.length; }
    get starsLeft() { return this.total - this.collected; }
    get slotsFull() { return this.slots.every(s => s.jar !== null); }
    get hasEmptySlot() { return this.slots.some(s => s.jar === null); }
    get queueEmpty() { return this.columns.every(c => c.length === 0); }
    get speedFactor() { return this.queueEmptied ? 2.4 : 1.0; }

    firstEmptySlot() {
      for (let i = 0; i < this.slots.length; i++) if (!this.slots[i].jar) return i;
      return -1;
    }

    // 第 3 关“借槽”：在六格预留宽度内临时加一个出巢位；本局内不再左挤。
    addSlot() {
      if (this.slots.length >= 6) return { ok: false, reason: 'max' };
      const index = this.slots.length;
      this.slots.push({ index, jar: null, enteredAt: 0, leaveAt: 0 });
      this.slotCount = this.slots.length;
      this.events.push({ type: 'add-slot', index });
      return { ok: true, index, slotCount: this.slotCount };
    }

    topJar(col) {
      const c = this.columns[col];
      return c && c.length ? c[0] : null;
    }

    visibleQueue(col) {
      const c = this.columns[col] || [];
      return {
        visible: c.slice(0, this.visibleRows),
        hidden: Math.max(0, c.length - this.visibleRows),
        depth: c.length,
      };
    }

    canTakeColumn(col) {
      if (this.status !== 'playing') return false;
      if (!this.columns[col] || !this.columns[col].length) return false;
      return this.hasEmptySlot;
    }

    takeColumn(col, now) {
      if (this.status !== 'playing') return { ok: false, reason: 'ended' };
      if (!this.columns[col] || !this.columns[col].length) return { ok: false, reason: 'empty' };
      if (!this.hasEmptySlot) return { ok: false, reason: 'no-slot' };
      const jar = this.columns[col].shift();
      const slotIndex = this.firstEmptySlot();
      const slot = this.slots[slotIndex];
      slot.jar = jar;
      slot.enteredAt = now || 0;
      slot.leaveAt = 0;
      this.moves++;
      if (this.queueEmpty) this.queueEmptied = true;
      this.lastAction = { type: 'take', col, slotIndex, jar, queueEmptied: this.queueEmptied };
      this.checkStatus();
      return { ok: true, jar, slotIndex, queueEmptied: this.queueEmptied, slot };
    }

    // 第 4 关“选后排”：从某一列的第二/第三排取罐；上面的罐不补到下面，下面的罐补位。
    takeJarAt(col, row, now) {
      if (this.status !== 'playing') return { ok: false, reason: 'ended' };
      const c = this.columns[col];
      if (!c || row < 0 || row >= c.length) return { ok: false, reason: 'empty' };
      if (row === 0) return this.takeColumn(col, now);
      if (!this.hasEmptySlot) return { ok: false, reason: 'no-slot' };
      const jar = c.splice(row, 1)[0];
      const slotIndex = this.firstEmptySlot();
      const slot = this.slots[slotIndex];
      slot.jar = jar;
      slot.enteredAt = now || 0;
      slot.leaveAt = 0;
      this.moves++;
      if (this.queueEmpty) this.queueEmptied = true;
      this.lastAction = { type: 'take-back', col, row, slotIndex, jar, queueEmptied: this.queueEmptied };
      this.checkStatus();
      return { ok: true, jar, slotIndex, queueEmptied: this.queueEmptied, slot, backRow: row };
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
        };
        this.claimed.set(target.index, claim);
        this.pending++;
        // 全部精灵都出发后，槽位立刻空出（不 wait 回程）。
        let cleared = false;
        if (jar.remaining === 0) {
          slot.jar = null;
          slot.leaveAt = now || 0;
          cleared = true;
        }
        this.events.push({ type: 'dispatch', claim, slotIndex: i, cleared });
        this.dispatchCursor = (i + 1) % n;
        this.checkStatus();
        return { claim, slotIndex: i, slotCleared: cleared, speed: this.speedFactor };
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
      return !this.board[y-1][x] || !this.board[y+1][x] || !this.board[y][x-1] || !this.board[y][x+1];
    }

    reachableCells(color) {
      const out = [];
      for (let y = 0; y < this.N; y++) {
        for (let x = 0; x < this.N; x++) {
          if (this.board[y][x] !== color) continue;
          if (this.claimed.has(y * this.N + x)) continue;
          if (this.isReachable(x, y)) out.push({ x, y, index: y * this.N + x });
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

    // 小精灵到达才真正取走星；claimed 星在图中仍然算“未取走”，会挡路。
    collect(index, now) {
      const claim = this.claimed.get(index);
      if (!claim) return { ok: false };
      this.claimed.delete(index);
      this.pending--;
      const x = index % this.N;
      const y = Math.floor(index / this.N);
      const color = this.board[y][x];
      if (color) {
        this.board[y][x] = null;
        this.collected++;
      }
      this.checkStatus();
      return { ok: true, color, x, y, index, claim, cleared: this.status === 'cleared', lost: this.status === 'lost' };
    }

    // 第 8 关“清除至多 12 块”：点掉一颗星，同时从该色队尾星罐扣掉一格。
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
      // 从最深的一罐扣起，尽量不改变队首的可玩性
      let found = null;
      for (let ci = this.columns.length - 1; ci >= 0 && !found; ci--) {
        const col = this.columns[ci];
        for (let ji = col.length - 1; ji >= 0; ji--) {
          if (col[ji].color === color && col[ji].remaining > 0) { found = { ci, ji, jar: col[ji] }; break; }
        }
      }
      if (!found) return { ok: false, reason: 'no-jar' };
      found.jar.remaining--;
      if (found.jar.remaining <= 0) this.columns[found.ci].splice(found.ji, 1);
      this.board[y][x] = null;
      this.collected++;
      this.moves++;
      if (this.queueEmpty) this.queueEmptied = true;
      this.events.push({ type: 'clear', index, color, col: found.ci });
      this.checkStatus();
      return { ok: true, color, x, y, index, col: found.ci, left: this.starsLeft };
    }

    // 第 10 关“吸收”：吸收一种当前不在槽/不在途的颜色，画上该色全收、队列里该色罐全移走。
    absorbCandidates() {
      const map = {};
      for (let y = 0; y < this.N; y++) for (let x = 0; x < this.N; x++) {
        const c = this.board[y][x];
        if (c) map[c] = (map[c] || 0) + 1;
      }
      for (const s of this.slots) if (s.jar) delete map[s.jar.color];
      for (const c of this.claimed.values()) delete map[c.color];
      for (const col of this.columns) for (const j of col) if (!(j.color in map)) delete map[j.color];
      return Object.keys(map).sort((a, b) => map[b] - map[a]).map(color => ({ color, count: map[color] }));
    }

    absorbColor(color) {
      if (this.status !== 'playing') return { ok: false, reason: 'ended' };
      if (!color) return { ok: false, reason: 'no-color' };
      for (const s of this.slots) if (s.jar && s.jar.color === color) return { ok: false, reason: 'in-slot' };
      for (const c of this.claimed.values()) if (c.color === color) return { ok: false, reason: 'in-flight' };
      let removed = 0;
      for (let y = 0; y < this.N; y++) for (let x = 0; x < this.N; x++) {
        if (this.board[y][x] === color) { this.board[y][x] = null; removed++; }
      }
      if (!removed) return { ok: false, reason: 'empty' };
      for (let ci = 0; ci < this.columns.length; ci++) {
        this.columns[ci] = this.columns[ci].filter(j => j.color !== color);
      }
      this.collected += removed;
      this.moves++;
      if (this.queueEmpty) this.queueEmptied = true;
      this.events.push({ type: 'absorb', color, removed });
      this.checkStatus();
      return { ok: true, color, removed, left: this.starsLeft, queueEmptied: this.queueEmptied };
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
      const addable = this.hasEmptySlot && !this.queueEmpty;
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
      if (this.hasEmptySlot && !this.queueEmpty) return true;
      return this.hasDispatchableSlot(origins);
    }

    colorRemaining() {
      const map = {};
      for (let y = 0; y < this.N; y++) for (let x = 0; x < this.N; x++) {
        const c = this.board[y][x];
        if (c) map[c] = (map[c] || 0) + 1;
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

    jarColorTotals() {
      const map = {};
      for (const col of this.level.columns) for (const j of col) map[j.color] = (map[j.color] || 0) + j.count;
      return map;
    }

    snapshot() {
      return {
        board: cloneGrid(this.board),
        collected: this.collected,
        total: this.total,
        moves: this.moves,
        status: this.status,
        speed: this.speedFactor,
        queueEmptied: this.queueEmptied,
        slots: this.slots.map(s => s.jar ? { color: s.jar.color, remaining: s.jar.remaining } : null),
        queue: this.columns.map(c => c.map(j => ({ color: j.color, count: j.count }))),
        pending: this.pending,
      };
    }
  }

  function validateLevel(level, opts) {
    const errors = [];
    if (!level.cells || !level.cells.length) { errors.push('棋盘不能为空'); return errors; }
    const N = level.cells.length;
    if (N < 4 || N > 36) errors.push('棋盘边长需在 4–36');
    const counts = {};
    for (const row of level.cells) {
      if (row.length !== N) errors.push('棋盘必须是 N×N 方阵');
      for (const c of row) counts[c] = (counts[c] || 0) + 1;
    }
    const jars = {};
    for (const col of level.columns) for (const j of col) jars[j.color] = (jars[j.color] || 0) + j.count;
    for (const color of Object.keys(counts)) {
      if (counts[color] !== jars[color]) errors.push(`色量不守恒 ${color}: 棋盘 ${counts[color]}，星罐 ${jars[color] || 0}`);
    }
    for (const color of Object.keys(jars)) {
      if (!(color in counts)) errors.push(`星罐里有棋盘没有的颜色 ${color}`);
    }
    return errors;
  }

  // 用一串“点击第几列”验证可解；调用方需等每只精灵出发后再点下一罐，
  // 这里用同步模拟：take -> 反复 dispatch -> 立即 collect。
  function simulateProof(level, proof, opts) {
    const game = new ShiguangGame(level, opts);
    let clicks = 0;
    let guard = 0;
    while (game.status === 'playing' && guard++ < 5000) {
      // 先把所有可出发的精灵派出并即时收星（等价于等动画结束）
      let dispatched = false;
      while (true) {
        const d = game.dispatchNext(null, guard);
        if (!d) break;
        dispatched = true;
        game.collect(d.claim.index, guard);
        if (game.status !== 'playing') break;
      }
      if (game.status !== 'playing') break;
      if (game.pending > 0) break;
      if (clicks >= proof.length) break;
      const col = proof[clicks];
      const r = game.takeColumn(col, guard);
      if (!r.ok) return { ok: false, reason: `第 ${clicks + 1} 击失败: ${r.reason}`, state: game.snapshot() };
      clicks++;
      if (game.queueEmpty) { /* 下一步循环会消费加速 */ }
      if (!dispatched && game.status === 'lost') break;
    }
    // 最后补收
    for (const claim of [...game.claimed.values()]) game.collect(claim.index, guard++);
    return {
      ok: game.status === 'cleared',
      reason: game.status === 'cleared' ? '' : `未通关，状态 ${game.status}，剩 ${game.starsLeft} 星，点击 ${clicks}/${proof.length}`,
      clicks,
      state: game.snapshot(),
    };
  }

  const api = { ShiguangGame, validateLevel, simulateProof };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  global.SHIGUANG_ENGINE = api;
})(typeof window !== 'undefined' ? window : globalThis);
