/* 《拾光之旅》交互与表现层。零依赖，file:// 可直接打开。 */
(function () {
  'use strict';

  const ENGINE = window.SHIGUANG_ENGINE;
  const ART = window.SHIGUANG_ART;
  const LEVELS = window.SHIGUANG_LEVELS || [];
  const PALETTE = window.SHIGUANG_PALETTE || {};
  const PROOFS = window.SHIGUANG_PROOFS || {};
  const STORE_KEY = 'shiguang-progress-v1';
  const CUSTOM_STORE_KEY = 'shiguang-custom-levels-v1';
  const JAR_ENTER_MS = 270;
  const DISPATCH_MS = 145;
  const BASE_SPEED = 168;

  const PROPS = [
    { id: 'borrow-slot', name: '借槽', glyph: '＋', unlockLevel: 3, desc: '临时多一个出巢位' },
    { id: 'pick-back', name: '选后排', glyph: '⇡', unlockLevel: 4, desc: '从一列的后排取一罐' },
    { id: 'clear-12', name: '清除', glyph: '✕', unlockLevel: 8, desc: '清除至多 12 格' },
    { id: 'absorb', name: '吸收', glyph: '◌', unlockLevel: 10, desc: '吸收同色星' },
  ];
  // 已验证列排列的变体：四列的全部 24 种排列，每次进入/重来随机抽一个；一局内不再变。
  const VARIANT_PERMS = (() => {
    const out = [];
    const walk = (rest, acc) => {
      if (!rest.length) { out.push(acc); return; }
      rest.forEach((v, i) => walk(rest.slice(0, i).concat(rest.slice(i + 1)), acc.concat(v)));
    };
    walk([0, 1, 2, 3], []);
    return out;
  })();
  function makeVariants(level, proof) {
    const base = level.columns || [];
    return VARIANT_PERMS.map(perm => ({
      columns: perm.map(ci => (base[ci] || []).map(j => ({ color: j.color, count: j.count }))),
      proof: (proof || []).map(ci => perm.indexOf(ci)),
    }));
  }
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const nowMs = () => (window.performance && performance.now()) || Date.now();

  const el = {
    app: $('#app'),
    home: $('#homeScreen'),
    play: $('#playScreen'),
    levelList: $('#levelList'),
    homeProgress: $('#homeProgress'),
    backHome: $('#backHome'),
    restartBtn: $('#restartBtn'),
    levelChapter: $('#levelChapter'),
    levelName: $('#levelName'),
    starsLeft: $('#starsLeft'),
    boardFrame: $('#boardFrame'),
    boardCanvas: $('#boardCanvas'),
    cottage: $('#cottage'),
    collectedCount: $('#collectedCount'),
    totalCount: $('#totalCount'),
    slotFrame: $('#slotFrame'),
    slotGrid: $('#slotGrid'),
    queueCard: $('#queueCard'),
    queueGrid: $('#queueGrid'),
    queueTip: $('#queueTip'),
    propTray: $('#propTray'),
    fx: $('#fxCanvas'),
    toast: $('#toast'),
    coach: $('#coach'),
    coachText: $('#coachText'),
    overlay: $('#overlay'),
    modalEyebrow: $('#modalEyebrow'),
    modalTitle: $('#modalTitle'),
    modalText: $('#modalText'),
    modalPainting: $('#modalPainting'),
    modalPrimary: $('#modalPrimary'),
    modalSecondary: $('#modalSecondary'),
    modalClose: $('#modalClose'),
    nextPill: $('#nextPill'),
    nextFromPill: $('#nextFromPill'),
    enterVeil: $('#enterVeil'),
  };

  const state = {
    screen: 'home',
    levelIndex: 0,
    game: null,
    startedAt: 0,
    loadingLevel: null,
    slotEls: [],
    arriving: {},
    leaving: {},
    fairies: [],
    bursts: [],
    flashes: [],
    lastFrame: 0,
    lastDispatch: 0,
    lastHud: -1,
    status: 'playing',
    lostAt: 0,
    clearedAt: 0,
    revealStarted: false,
    revealAt: 0,
    revealDuration: 1450,
    winPrompted: false,
    overlayMode: null,
    overlayOpen: false,
    nextIndex: -1,
    timers: new Set(),
    coachTimer: 0,
    toastTimer: 0,
    coachKey: null,
    coachAnchor: null,
    firstTipLevel: -1,
    timeScale: 1,
    waitingSince: {},
    propsUsed: {},
    propMode: null,
    holdColor: null,
    holdTimer: 0,
    holdActive: false,
    suppressClick: false,
    currentProof: [],
    currentVariant: 0,
    fixedVariant: null,
    levelVariants: [],
  };

  const HOME_META = [
    { season: '长夜季', theme: '萤溪与玻璃屋', night: '第一晚', steps: 9 },
    { season: '长夜季', theme: '月下的玻璃花房', night: '第二晚', steps: 15 },
    { season: '长夜季', theme: '纸船与星港', night: '第三晚', steps: 13 },
    { season: '长夜季', theme: '雾岭与灯屋', night: '第四晚', steps: 14 },
    { season: '长夜季', theme: '破晓与铃兰', night: '第五晚', steps: 15 },
  ];
  LEVELS.forEach((level, i) => {
    const m = HOME_META[i] || { season: '长夜季', theme: '未命名的画', night: `第${i + 1}晚` };
    level.season = m.season; level.theme = m.theme; level.night = m.night;
    level.steps = (PROOFS[level.id] || []).length || m.steps;
    level.chapter = level.chapter || m.night;
    level.no = i + 1; // 内置关的进度号；自定关固定为 0，不绕过星具解锁
  });
  const progress = loadProgress();
  const tipSeen = progress.tips || {};
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function loadCustomLevels(params) {
    let list = [];
    try { list = JSON.parse(localStorage.getItem(CUSTOM_STORE_KEY) || '[]'); } catch (e) { list = []; }
    if (!Array.isArray(list)) list = [];
    let play = null;
    if (params && params.get('custom') === '1') {
      try { play = JSON.parse(localStorage.getItem('shiguang-custom-play-v1') || 'null'); } catch (e) { play = null; }
      if (play) list = [play].concat(list.filter(l => l && l.id !== play.id));
    }
    let firstCustom = null;
    for (const raw of list) {
      if (!raw || !Array.isArray(raw.cells) || !Array.isArray(raw.columns) || !Array.isArray(raw.proof)) continue;
      const N = raw.cells.length;
      if (N < 8 || N > 24 || raw.columns.length !== 4) continue;
      if (LEVELS.some(l => l.id === raw.id)) continue;
      const level = { ...raw };
      level.season = level.season || '自定季';
      level.theme = level.theme || '上传的画';
      level.night = level.night || '自定晚';
      level.chapter = level.chapter || level.night;
      level.no = 0;
      level.steps = level.actualMoves || (level.proof ? level.proof.length : 0);
      level.cells = level.cells.map(row => row.slice());
      LEVELS.push(level);
      PROOFS[level.id] = level.proof.slice();
      if (!firstCustom && play && level.id === play.id) firstCustom = level;
    }
    return firstCustom || (play ? LEVELS.find(l => l.id === play.id) || null : null);
  }

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return { completed: {}, tips: {} };
      const p = JSON.parse(raw);
      return { completed: p.completed || {}, tips: p.tips || {} };
    } catch (e) { return { completed: {}, tips: {} }; }
  }
  function saveProgress() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(progress)); } catch (e) { /* 本地文件/隐私模式也可玩 */ }
  }
  function markTip(key) { tipSeen[key] = true; progress.tips = tipSeen; saveProgress(); }

  function later(fn, ms) {
    const id = setTimeout(() => { state.timers.delete(id); fn(); }, ms);
    state.timers.add(id);
    return id;
  }
  function clearTimers() {
    for (const id of state.timers) clearTimeout(id);
    state.timers.clear();
    clearTimeout(state.coachTimer);
    clearTimeout(state.toastTimer);
  }
  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  }
  function colorMeta(color) {
    return PALETTE[color] || { name: color, fill: '#7a6a9a', glow: '#cdbce8' };
  }
  function jarStyle(color) {
    // 罐子用与星点同一套高饱和色，玩家看罐色就能对上夜空里的星色。
    const sc = ART.starColor(color);
    const rgb = ART.hexToRgb(sc.ray);
    const lum = (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;
    const ink = lum > .58 ? '#241a30' : '#fff7e5';
    const shadow = lum > .58 ? '0 1px 0 rgba(255,255,255,.22), 0 0 6px rgba(255,255,255,.12)' : '0 1px 2px rgba(9,6,18,.85), 0 0 9px rgba(9,6,18,.5)';
    return `--jar-fill:${sc.ray};--jar-glow:${sc.core};--jar-soft:${ART.rgba(sc.ray, .18)};--jar-ink:${ink};--jar-ink-shadow:${shadow}`;
  }
  function jarMarkup(color, count, cls) {
    return `<span class="jar ${cls || ''}" style="${jarStyle(color)}" role="img" aria-label="${colorMeta(color).name}星罐，${count}颗星">
      <span class="jar-shine"></span><span class="jar-count">${count}</span>
    </span>`;
  }

  /* ---------- 背景与小屋 ---------- */
  function injectWorld() {
    const forest = $('[data-forest]');
    if (forest) forest.innerHTML = ART.forestSVG();
    $$('[data-cottage]').forEach((node, i) => {
      node.innerHTML = ART.cottageSVG('c' + i);
    });
    $$('[data-fairy]').forEach(node => { node.innerHTML = ART.fairySVG(); });
  }

  /* ---------- 首页 ---------- */
  function buildHome() {
    el.levelList.innerHTML = '';
    LEVELS.forEach((level, i) => {
      const done = progress.completed[level.id];
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'level-card' + (done ? ' is-done' : '');
      card.dataset.level = String(i);
      card.setAttribute('aria-label', `${level.season} ${level.night}，${level.name}，${level.theme}，${level.difficulty}${done ? '，已拾回' : ''}，点按开始`);
      const canvas = document.createElement('canvas');
      canvas.width = 64; canvas.height = 64;
      const thumb = document.createElement('span');
      thumb.className = 'level-thumb';
      thumb.appendChild(canvas);
      const info = document.createElement('span');
      info.className = 'level-info';
      const stepText = level.steps ? `约 ${level.steps} 步 · ` : '';
      info.innerHTML = `<span class="level-kicker"><i class="dot"></i>${escapeHtml(level.season)} · ${escapeHtml(level.night)} · ${escapeHtml(level.difficulty)}</span><span class="level-name">${escapeHtml(level.name)}</span><span class="level-sub">${escapeHtml(level.theme)} · ${stepText}${escapeHtml(level.intro)}</span>`;
      const go = document.createElement('span');
      go.className = 'card-go';
      go.innerHTML = done ? `已拾回<b>${done.moves} 步</b>` : `启程<b>→</b>`;
      card.appendChild(thumb);
      card.appendChild(info);
      card.appendChild(go);
      if (done) {
        const stamp = document.createElement('span');
        stamp.className = 'card-done';
        stamp.textContent = '已拾回';
        card.appendChild(stamp);
      }
      card.addEventListener('click', () => requestLevel(i, card));
      el.levelList.appendChild(card);
      drawThumb(canvas, level, !!done);
    });
    const doneCount = LEVELS.filter(l => progress.completed[l.id]).length;
    el.homeProgress.textContent = `${doneCount} / ${LEVELS.length}`;
  }

  function drawThumb(canvas, level, done) {
    const ctx = canvas.getContext('2d');
    const N = level.cells.length, cell = canvas.width / N;
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      const p = colorMeta(level.cells[y][x]);
      ctx.fillStyle = p.fill;
      ctx.fillRect(x * cell, y * cell, cell + .2, cell + .2);
      ctx.fillStyle = 'rgba(255,248,228,.09)';
      ctx.fillRect(x * cell, y * cell, cell + .2, Math.max(.6, cell * .14));
    }
    if (!done) {
      ctx.fillStyle = 'rgba(13,11,27,.48)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
        const p = colorMeta(level.cells[y][x]);
        ctx.fillStyle = ART.rgba(p.glow, .42 + ((x * 7 + y * 11) % 5) * .05);
        const r = Math.max(.6, cell * .09);
        ctx.fillRect(x * cell + cell / 2 - r, y * cell + cell / 2 - r, r * 2, r * 2);
      }
    }
    ctx.strokeStyle = 'rgba(255,246,219,.1)';
    ctx.lineWidth = 1;
    ctx.strokeRect(.5, .5, canvas.width - 1, canvas.height - 1);
  }

  function requestLevel(index, card) {
    if (state.loadingLevel !== null) return;
    if (!card) card = el.levelList.querySelector(`[data-level="${index}"]`);
    state.loadingLevel = index;
    if (card) {
      card.classList.add('is-loading');
      const go = card.querySelector('.card-go');
      if (go) go.innerHTML = '进入中<b>···</b>';
    }
    // 第一次有效点击立刻出现可见反馈；本地无网络，稍作停顿让过渡可读。
    el.enterVeil.hidden = false;
    later(() => startLevel(index, { fromHome: true }), reducedMotion ? 20 : 190);
  }

  function startLevel(index, opts) {
    opts = opts || {};
    if (index < 0 || index >= LEVELS.length) { toHome(); return; }
    clearTimers();
    state.levelIndex = index;
    state.loadingLevel = null;
    const baseLevel = LEVELS[index];
    const variants = makeVariants(baseLevel, PROOFS[baseLevel.id] || []);
    state.levelVariants = variants;
    const forced = opts.variant != null ? opts.variant : state.fixedVariant;
    const variantIndex = forced != null
      ? Math.abs(parseInt(forced, 10) || 0) % Math.max(1, variants.length)
      : Math.floor(Math.random() * Math.max(1, variants.length));
    const variant = variants[variantIndex] || { columns: baseLevel.columns, proof: PROOFS[baseLevel.id] || [] };
    state.currentVariant = variantIndex;
    state.currentProof = variant.proof.slice();
    state.game = new ENGINE.ShiguangGame(
      { ...baseLevel, columns: variant.columns.map(col => col.map(j => ({ ...j }))) },
      { slotCount: 5, visibleRows: 3 }
    );
    state.timeScale = 1;
    state.startedAt = nowMs();
    state.arriving = {};
    state.leaving = {};
    state.fairies = [];
    state.bursts = [];
    state.flashes = [];
    state.lastDispatch = 0;
    state.lastHud = -1;
    state.status = 'playing';
    state.lostAt = 0;
    state.clearedAt = 0;
    state.revealStarted = false;
    state.revealAt = 0;
    state.winPrompted = false;
    state.overlayMode = null;
    state.overlayOpen = false;
    state.nextIndex = index + 1 < LEVELS.length ? index + 1 : -1;
    state.coachKey = null;
    state.waitingSince = {};
    state.propsUsed = {};
    state.propMode = null;
    state.holdColor = null;
    state.holdActive = false;
    state.suppressClick = false;
    clearTimeout(state.holdTimer);
    hideCoach();
    el.overlay.hidden = true;
    el.nextPill.hidden = true;
    el.nextFromPill.disabled = false;
    el.nextFromPill.textContent = '前往下一关';
    el.enterVeil.hidden = true;
    el.play.classList.remove('is-dead');
    el.boardFrame.classList.remove('is-complete', 'is-revealing');
    el.modalPainting.style.display = '';
    el.queueCard.classList.remove('is-final');
    el.home.hidden = true;
    el.play.hidden = false;
    el.play.classList.remove('is-entering');
    void el.play.offsetWidth;
    el.play.classList.add('is-entering');
    state.screen = 'play';
    buildSlots();
    buildProps();
    const level = LEVELS[index];
    el.levelChapter.textContent = `${level.season || level.chapter} · ${level.night || level.chapter}`;
    el.levelName.textContent = level.name;
    el.totalCount.textContent = state.game.total;
    renderAll();
    fitLayout();
    scheduleEnterTips();
    if (opts.instant) el.play.classList.remove('is-entering');
    // 让第一次点击后能看到画面，再恢复按钮状态
    el.enterVeil.hidden = true;
    if (state.loadingLevel === null) {
      $$('.level-card.is-loading').forEach(c => c.classList.remove('is-loading'));
    }
  }

  function scheduleEnterTips() {
    const index = state.levelIndex;
    const level = LEVELS[index];
    if (index === 0 && !tipSeen['first-tap']) {
      later(() => {
        const tipCol = (state.currentProof || PROOFS[level.id] || [0])[0] || 0;
        const first = el.queueGrid.querySelector(`.queue-jar-btn[data-col="${tipCol}"][data-row="0"]`);
        if (!first || state.screen !== 'play') return;
        first.classList.add('is-prompted');
        showCoach('点每列最上面的星罐，让小精灵出发。', first, { key: 'first-tap', ms: 5200, mark: false });
        state.firstTipLevel = index;
      }, 380);
    } else if (!tipSeen['intro-' + level.id]) {
      later(() => { showToast(level.intro, 2600); markTip('intro-' + level.id); }, 500);
    }
  }

  function toHome() {
    clearTimers();
    hideCoach();
    hideToast();
    state.game = null;
    state.fairies = [];
    state.bursts = [];
    state.flashes = [];
    state.screen = 'home';
    el.overlay.hidden = true;
    el.nextPill.hidden = true;
    el.enterVeil.hidden = true;
    el.play.hidden = true;
    el.home.hidden = false;
    el.home.classList.remove('is-entering');
    void el.home.offsetWidth;
    el.home.classList.add('is-entering');
    state.loadingLevel = null;
    $$('.level-card.is-loading').forEach(c => c.classList.remove('is-loading'));
    buildHome();
    drawFx(nowMs(), true);
  }

  /* ---------- 关卡渲染 ---------- */
  function buildSlots() {
    el.slotGrid.innerHTML = '';
    state.slotEls = [];
    for (let i = 0; i < state.game.slotCount; i++) {
      const cell = document.createElement('div');
      cell.className = 'slot-cell';
      cell.dataset.slot = String(i);
      cell.setAttribute('role', 'group');
      cell.setAttribute('aria-label', `出巢位 ${i + 1}，空`);
      el.slotGrid.appendChild(cell);
      state.slotEls.push(cell);
    }
  }

  function renderAll() { renderQueue(); renderSlots(); updateHud(true); }

  function propUnlocked(p) { return !!(state.game && state.game.level && (state.game.level.no || 0) >= p.unlockLevel); }

  function buildProps() {
    if (!el.propTray) return;
    el.propTray.innerHTML = '';
    PROPS.forEach(p => {
      const unlocked = propUnlocked(p);
      const used = !!state.propsUsed[p.id];
      const active = state.propMode === p.id;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'prop-btn' + (unlocked ? ' is-unlocked' : ' is-locked') + (used ? ' is-used' : '') + (active ? ' is-active' : '');
      btn.dataset.prop = p.id;
      btn.disabled = !unlocked || used;
      btn.setAttribute('aria-label', unlocked ? `${p.name}，${used ? '本关已用' : p.desc}` : `${p.name}，第 ${p.unlockLevel} 关解锁`);
      const label = unlocked ? p.name : `第${p.unlockLevel}关`;
      btn.innerHTML = `<span class="prop-icon">${p.glyph}</span><span class="prop-name">${label}</span>` +
        (!unlocked ? '<span class="prop-lock">锁</span>' : used ? '<span class="prop-check">✓</span>' : '');
      btn.addEventListener('click', () => useProp(p.id));
      el.propTray.appendChild(btn);
    });
  }

  function useProp(id) {
    const p = PROPS.find(x => x.id === id);
    if (!p || !state.game) return;
    if (!propUnlocked(p)) { showToast(`第 ${p.unlockLevel} 关解锁${p.name}。`); return; }
    if (state.propsUsed[id]) { showToast('这一关已经用过了。'); return; }
    if (id === 'borrow-slot') {
      const r = state.game.addSlot();
      if (!r.ok) { showToast('出巢位已经到六位上限。'); return; }
      state.propsUsed[id] = true;
      buildSlots();
      renderSlots();
      buildProps();
      updateHud(true);
      fitLayout();
      showToast('借到一个新位子。');
      return;
    }
    if (id === 'pick-back') {
      state.propMode = state.propMode === 'pick-back' ? null : 'pick-back';
      buildProps();
      renderQueue();
      showToast(state.propMode ? '点一罐后排的星罐。' : '已收起选后排。');
      return;
    }
    // 第 8/10 关才解锁的星具：本轮没有对应关卡，保留锁与关次说明。
    showToast(`${p.name}会在第 ${p.unlockLevel} 关解锁。`);
  }

  function clearPropMode() {
    state.propMode = null;
    if (el.queueGrid) el.queueGrid.querySelectorAll('.is-back-target').forEach(b => b.classList.remove('is-back-target'));
    buildProps();
  }

  function startHold(color, btn) {
    clearTimeout(state.holdTimer);
    state.holdActive = false;
    state.holdColor = null;
    state.holdTimer = setTimeout(() => {
      if (!state.game || state.screen !== 'play') return;
      state.holdActive = true;
      state.holdColor = color;
      state.suppressClick = true;
      if (btn) btn.classList.add('is-holding');
      drawBoardFrame();
    }, 220);
  }

  function endHold(btn) {
    clearTimeout(state.holdTimer);
    if (state.holdActive) {
      state.holdActive = false;
      state.holdColor = null;
      if (btn) btn.classList.remove('is-holding');
      drawBoardFrame();
      setTimeout(() => { state.suppressClick = false; }, 320);
    }
  }

  function renderQueue() {
    if (!state.game) return;
    const game = state.game;
    const frag = document.createDocumentFragment();
    for (let c = 0; c < game.maxCols; c++) {
      const info = game.visibleQueue(c);
      const col = document.createElement('div');
      col.className = 'queue-col';
      for (let r = 0; r < game.visibleRows; r++) {
        const jar = info.visible[r];
        const row = document.createElement('div');
        row.className = 'queue-row' + (!jar ? ' is-empty' : '') + (r > 0 ? ' is-back' : '');
        if (!jar) {
          col.appendChild(row);
          continue;
        }
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'queue-jar-btn' + (r === 0 && jar ? ' is-top' : '') +
          (r === 0 && !game.hasEmptySlot ? ' is-unavailable' : '') +
          (r > 0 && state.propMode === 'pick-back' ? ' is-back-target' : '');
        btn.dataset.col = String(c);
        btn.dataset.row = String(r);
        btn.dataset.uid = jar.uid;
        const top = r === 0;
        btn.setAttribute('aria-label', `${colorMeta(jar.color).name}星罐，${jar.count} 颗星${top ? '，可点' : '，被前面的罐子挡住'}`);
        btn.setAttribute('aria-disabled', top && game.hasEmptySlot ? 'false' : 'true');
        btn.tabIndex = top ? 0 : -1;
        btn.innerHTML = jarMarkup(jar.color, jar.count, top ? 'is-top' : '') + '<span class="tap-ring" aria-hidden="true"></span>';
        btn.addEventListener('click', () => onQueueClick(c, r));
        btn.addEventListener('pointerdown', () => startHold(jar.color, btn));
        btn.addEventListener('pointerup', () => endHold(btn));
        btn.addEventListener('pointercancel', () => endHold(btn));
        btn.addEventListener('pointerleave', () => endHold(btn));
        row.appendChild(btn);
        col.appendChild(row);
      }
      const hidden = document.createElement('div');
      hidden.className = 'hidden-pill' + (info.hidden > 0 ? '' : ' is-none');
      hidden.innerHTML = info.hidden > 0 ? `还有 <b>${info.hidden}</b>` : '&nbsp;';
      col.appendChild(hidden);
      // 深层罐数也读给读屏
      if (info.hidden > 0) col.setAttribute('aria-label', `第 ${c + 1} 列，可见 ${info.visible.length} 罐，深处还有 ${info.hidden} 罐`);
      frag.appendChild(col);
    }
    el.queueGrid.innerHTML = '';
    el.queueGrid.appendChild(frag);
    // 队列提示只显示事实，不做常驻说明书
    let hiddenTotal = 0;
    for (let c = 0; c < game.maxCols; c++) hiddenTotal += game.visibleQueue(c).hidden;
    el.queueTip.textContent = game.queueEmpty ? '星罐都出发了' : (hiddenTotal > 0 ? `深处还有 ${hiddenTotal} 罐` : '四列星罐');
    el.queueCard.classList.toggle('is-final', game.queueEmptied);
    // 第一次提示的环形高亮在重绘后重新挂回队首
    if (state.firstTipLevel === state.levelIndex && !tipSeen['first-tap']) {
      const tipCol = (state.currentProof || PROOFS[state.game.level.id] || [0])[0] || 0;
      const first = el.queueGrid.querySelector(`.queue-jar-btn[data-col="${tipCol}"][data-row="0"]`);
      if (first) first.classList.add('is-prompted');
    }
  }

  function renderSlots() {
    if (!state.game) return;
    const game = state.game;
    const now = nowMs();
    for (let i = 0; i < state.slotEls.length; i++) {
      const cell = state.slotEls[i];
      const slot = game.slots[i];
      const jar = slot.jar;
      cell.className = 'slot-cell';
      const leave = state.leaving[i];
      if (leave && now - leave.at > 280) delete state.leaving[i];
      if (!jar) {
        if (leave && now - leave.at <= 280) {
          cell.classList.add('has-jar', 'is-leaving');
          cell.innerHTML = jarMarkup(leave.jar.color, 0, 'slot-jar leaving');
          cell.setAttribute('aria-label', `出巢位 ${i + 1}，正在空出`);
        } else {
          cell.innerHTML = '';
          const next = game.firstEmptySlot() === i;
          if (next) cell.classList.add('is-next');
          cell.setAttribute('aria-label', `出巢位 ${i + 1}，空`);
        }
        continue;
      }
      cell.classList.add('has-jar');
      const age = now - slot.enteredAt;
      if (age < JAR_ENTER_MS) {
        // 罐子还在进位：先给一个落位光晕，精灵不出场
        cell.classList.add('is-arriving');
        cell.innerHTML = '';
        cell.setAttribute('aria-label', `出巢位 ${i + 1}，星罐正在落位`);
        continue;
      }
      const ready = age >= JAR_ENTER_MS;
      const waiting = ready && jar.remaining > 0 && game.reachableCells(jar.color).length === 0;
      cell.innerHTML = jarMarkup(jar.color, jar.remaining, 'slot-jar' + (waiting ? ' is-waiting' : ''));
      cell.setAttribute('aria-label', `出巢位 ${i + 1}，${colorMeta(jar.color).name}星罐，还剩 ${jar.remaining} 只精灵${waiting ? '，正在等星露出来' : ''}`);
    }
  }

  function updateHud(force) {
    if (!state.game) return;
    const game = state.game;
    const left = game.starsLeft;
    if (force || left !== state.lastHud) {
      el.starsLeft.textContent = left;
      el.collectedCount.textContent = game.collected;
      el.totalCount.textContent = game.total;
      el.starsLeft.classList.remove('pulse');
      void el.starsLeft.offsetWidth;
      el.starsLeft.classList.add('pulse');
      state.lastHud = left;
    }
  }

  /* ---------- 点击 ---------- */
  function onQueueClick(col, row) {
    if (state.screen !== 'play' || !state.game) return;
    if (state.game.status !== 'playing') return;
    if (state.loadingLevel !== null || !el.enterVeil.hidden) return;
    const top = state.game.topJar(col);
    if (!top) return;
    if (state.suppressClick) { state.suppressClick = false; return; }
    const useBack = state.propMode === 'pick-back' && row > 0;
    if (row !== 0 && !useBack) {
      showToast('只能点每列最上面的星罐。');
      return;
    }
    if (!state.game.hasEmptySlot) {
      el.slotFrame.animate
        ? el.slotFrame.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-3px)' }, { transform: 'translateX(3px)' }, { transform: 'translateX(0)' }], { duration: 220 })
        : null;
      showToast('出巢位满了，等精灵出发腾出位子。');
      maybeTip('slots-full', '五个位子满了不会立刻失败；精灵出发后罐子就会离开。', el.slotFrame, 4200);
      return;
    }
    // 取罐前记录被点元素的位置，做一次真实的“飞入出巢位”过渡
    const takeRow = useBack ? row : 0;
    const btn = el.queueGrid.querySelector(`.queue-jar-btn[data-col="${col}"][data-row="${takeRow}"]`);
    const fromRect = btn ? btn.getBoundingClientRect() : null;
    const res = useBack ? state.game.takeJarAt(col, takeRow, nowMs()) : state.game.takeColumn(col, nowMs());
    if (!res.ok) {
      showToast(res.reason === 'no-slot' ? '出巢位满了，等精灵腾位。' : '这一列暂时没有星罐。');
      return;
    }
    if (useBack) { state.propsUsed['pick-back'] = true; clearPropMode(); }
    markTip('first-tap');
    hideCoach();
    state.firstTipLevel = -1;
    delete state.waitingSince[res.slotIndex];
    state.arriving[res.slotIndex] = { at: nowMs(), from: fromRect, jar: res.jar };
    flyJarGhost(fromRect, res.slotIndex, res.jar);
    renderQueue();
    renderSlots();
    updateHud(true);
    later(() => {
      delete state.arriving[res.slotIndex];
      renderSlots();
      maybeWaitingTip(res.slotIndex, res.jar);
      if (state.game && state.game.status === 'lost') scheduleLoss(nowMs());
    }, JAR_ENTER_MS + 20);
    if (res.queueEmptied) {
      el.queueCard.classList.add('is-final');
      later(() => {
        if (state.game && state.game.status === 'playing') {
          showToast('星罐都出发了，收尾会快一些。', 2400);
          markTip('speed');
        }
      }, 850);
    }
    const otherReachable = otherColumnsReachable(col);
    const mineReachable = state.game.reachableCells(res.jar.color).length > 0;
    if (!mineReachable && otherReachable && state.levelIndex >= 1 && !tipSeen['skip-temptation']) {
      later(() => {
        const alt = suggestAlternative(col);
        maybeTip('skip-temptation', '这一罐暂时够不着，可以先看看别的列。', alt || state.slotEls[res.slotIndex], 4600, true);
      }, 700);
    }
    const occupied = state.game.slots.filter(s => s.jar).length;
    if (state.levelIndex === 2 && !tipSeen['leave-empty-3'] && occupied >= 3) {
      later(() => maybeTip('leave-empty-3', '留一个空位，下一罐才有地方落脚。', el.slotFrame, 4600, true), 600);
    }
    if (state.levelIndex === 3 && !tipSeen['leave-empty-4'] && occupied >= 4) {
      later(() => maybeTip('leave-empty-4', '位子快满了，先看哪一罐能先出发。', el.slotFrame, 4600, true), 600);
    }
    // 立即再画一次，让首帧就有反馈
    drawBoardFrame();
    drawFx(nowMs());
  }

  function otherColumnsReachable(skipCol) {
    if (!state.game) return false;
    for (let c = 0; c < state.game.maxCols; c++) {
      if (c === skipCol) continue;
      const j = state.game.topJar(c);
      if (j && state.game.reachableCells(j.color).length) return true;
    }
    return false;
  }

  // 只做一次轻环提示，不替玩家点，也不高亮整条解法。
  function suggestAlternative(skipCol) {
    if (!state.game) return null;
    for (let c = 0; c < state.game.maxCols; c++) {
      if (c === skipCol) continue;
      const j = state.game.topJar(c);
      if (!j || !state.game.reachableCells(j.color).length) continue;
      const btn = el.queueGrid.querySelector(`.queue-jar-btn[data-col="${c}"][data-row="0"]`);
      if (!btn) continue;
      btn.classList.add('is-suggested');
      setTimeout(() => btn.classList.remove('is-suggested'), 4400);
      return btn;
    }
    return null;
  }

  function maybeWaitingTip(slotIndex, jar) {
    if (!state.game || state.game.status !== 'playing') return;
    if (state.game.reachableCells(jar.color).length > 0) return;
    if (state.levelIndex < 1) return;
    const slot = state.slotEls[slotIndex];
    maybeTip('waiting', '这种星还埋在画里，小精灵会在罐里等一等。', slot, 4600, true);
  }

  function flyJarGhost(fromRect, slotIndex, jar) {
    if (!fromRect || reducedMotion) return;
    const to = state.slotEls[slotIndex].getBoundingClientRect();
    if (!to.width) return;
    const ghost = document.createElement('div');
    ghost.className = 'flying-jar';
    const p = colorMeta(jar.color);
    ghost.style.cssText = `position:fixed;z-index:55;left:${fromRect.left}px;top:${fromRect.top}px;width:${fromRect.width}px;height:${fromRect.height}px;pointer-events:none;transition:transform .25s cubic-bezier(.25,.8,.35,1),opacity .25s ease;${jarStyle(jar.color)}`;
    ghost.innerHTML = jarMarkup(jar.color, jar.count, '');
    document.body.appendChild(ghost);
    const dx = to.left + to.width / 2 - (fromRect.left + fromRect.width / 2);
    const dy = to.top + to.height / 2 - (fromRect.top + fromRect.height / 2);
    requestAnimationFrame(() => {
      ghost.style.transform = `translate(${dx}px,${dy}px) scale(.92)`;
      ghost.style.opacity = '.82';
    });
    setTimeout(() => ghost.remove(), 300);
  }

  /* ---------- 提示 ---------- */
  function maybeTip(key, text, anchor, ms, once) {
    if (once && tipSeen[key]) return;
    if (once) markTip(key);
    showCoach(text, anchor, { key, ms, mark: false });
  }

  function showCoach(text, anchor, opts) {
    opts = opts || {};
    if (!text) return;
    // 同屏只留一条提示：出现更具体的动作提示时，让短 toast 退场。
    hideToast();
    el.coachText.textContent = text;
    el.coach.hidden = false;
    el.coach.classList.remove('below');
    state.coachKey = opts.key || null;
    state.coachAnchor = anchor || null;
    positionCoach();
    clearTimeout(state.coachTimer);
    state.coachTimer = setTimeout(() => hideCoach(), opts.ms || 4200);
    if (opts.mark) markTip(opts.key);
  }

  function positionCoach() {
    if (el.coach.hidden) return;
    let rect = null;
    const a = state.coachAnchor;
    if (a && a.getBoundingClientRect) rect = a.getBoundingClientRect();
    if (!rect || !rect.width) {
      rect = { left: innerWidth / 2, right: innerWidth / 2, top: 210, width: 1, height: 1 };
    }
    const bubbleW = Math.min(280, Math.max(150, el.coachText.textContent.length * 13 + 28));
    const half = bubbleW / 2;
    const targetX = rect.left + rect.width / 2;
    const x = clamp(targetX, 12 + half, innerWidth - 12 - half);
    let y = rect.top - 12;
    let below = false;
    if (y < 76) { y = rect.bottom + 12; below = true; }
    el.coach.classList.toggle('below', below);
    el.coach.style.left = `${x}px`;
    el.coach.style.top = `${y}px`;
    el.coach.style.width = `${bubbleW}px`;
    // 气泡被屏幕边缘夹住时，尾巴仍指向目标，而不是跟着气泡中心跑。
    const tailX = clamp(targetX - (x - half), 14, bubbleW - 14);
    el.coach.style.setProperty('--tail-x', `${tailX}px`);
  }

  function hideCoach() {
    el.coach.hidden = true;
    el.coachText.textContent = '';
    state.coachKey = null;
    state.coachAnchor = null;
    clearTimeout(state.coachTimer);
    $$('.queue-jar-btn.is-prompted,.queue-jar-btn.is-suggested').forEach(b => { b.classList.remove('is-prompted'); b.classList.remove('is-suggested'); });
  }

  function showToast(text, ms) {
    el.toast.textContent = text;
    el.toast.hidden = false;
    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(hideToast, ms || 2200);
  }
  function hideToast() { el.toast.hidden = true; el.toast.textContent = ''; }

  /* ---------- 布局 ---------- */
  function fitLayout() {
    if (!state.game || el.play.hidden) return;
    const contentW = Math.min(360, el.play.clientWidth - 24);
    let jarW = Math.floor((contentW - 18 - 25) / 6);
    jarW = clamp(jarW, 38, 52);
    const jarH = Math.round(jarW * .96);
    el.play.style.setProperty('--jar-w', jarW + 'px');
    el.play.style.setProperty('--jar-h', jarH + 'px');
    // 先让 jar 尺寸生效，再测量固定区域
    const topH = $('.topbar').offsetHeight;
    const terraceH = $('.terrace').offsetHeight;
    const queueH = el.queueCard.offsetHeight;
    const propH = el.propTray ? el.propTray.offsetHeight : 0;
    const style = getComputedStyle(el.play);
    const padT = parseFloat(style.paddingTop) || 0;
    const padB = parseFloat(style.paddingBottom) || 0;
    const mainGap = parseFloat(getComputedStyle($('.play-main')).rowGap) || 6;
    const avail = el.play.clientHeight - padT - padB - topH - terraceH - queueH - propH - mainGap * 3 - 8;
    // 不再有 18px 金框，棋盘可以多占一点夜空；上限仍受可视高度约束。
    const maxBoard = Math.min(336, contentW - 4);
    let board = Math.min(maxBoard, avail);
    board = clamp(board, 224, 336);
    el.play.style.setProperty('--board', Math.floor(board) + 'px');
    // 迫使画框按新尺寸排一次，再画
    void el.boardFrame.offsetWidth;
    rebuildFairyPaths();
    drawBoardFrame();
    drawFx(nowMs());
  }


  // 手机浏览器工具栏展开/收起会改变可视高度；正在飞的小精灵需要换到新坐标，
  // 否则会继续飞向旧位置。状态与认领不变，只重算屏幕路径。
  function rebuildFairyPaths() {
    if (!state.game || !state.fairies.length) return;
    for (const f of state.fairies) {
      try {
        f.outPath = buildFlightPath(f.slotIndex, f.claim.index, f.lane);
        if (f.status === 'out') f.path = f.outPath;
        else f.path = buildReturnPath(f);
        const p = pointAt(f.path, f.t);
        f.x = p.x; f.y = p.y; f.trail = [];
      } catch (e) { /* 布局尚未就绪时保持原路径 */ }
    }
  }

  function drawBoardFrame() {
    if (!state.game) return;
    const now = nowMs();
    const reveal = state.revealStarted
      ? clamp((now - state.revealAt) / state.revealDuration, 0, 1)
      : 0;
    ART.drawBoard(el.boardCanvas, state.game, {
      now,
      flashes: state.flashes,
      complete: state.revealStarted,
      reveal,
      highlightColor: state.holdColor,
    });
  }

  /* ---------- 飞行路径 ---------- */
  function boardGeom() {
    const r = el.boardCanvas.getBoundingClientRect();
    const N = state.game.N;
    return { rect: r, cell: r.width / N, N };
  }
  function cellPoint(x, y) {
    const b = boardGeom();
    return { x: b.rect.left + (x + .5) * b.cell, y: b.rect.top + (y + .5) * b.cell };
  }
  function slotPoint(i) {
    const r = state.slotEls[i].getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + 4 };
  }
  function cottagePoint() {
    const r = el.cottage.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height * .64 };
  }
  function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
  function dedupe(points) {
    const out = [];
    for (const p of points) {
      if (!out.length || dist(out[out.length - 1], p) > .6) out.push(p);
    }
    return out;
  }
  function buildPath(points) {
    const pts = dedupe(points);
    const cum = [0];
    for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + dist(pts[i - 1], pts[i]));
    return { points: pts, cum, length: cum[cum.length - 1] || 1 };
  }
  function pointAt(path, t) {
    const d = clamp(t, 0, 1) * path.length;
    let i = 1;
    while (i < path.cum.length && path.cum[i] < d) i++;
    if (i >= path.cum.length) i = path.cum.length - 1;
    const a = path.points[i - 1], b = path.points[i] || a;
    const seg = Math.max(.001, path.cum[i] - path.cum[i - 1]);
    const u = clamp((d - path.cum[i - 1]) / seg, 0, 1);
    return { x: a.x + (b.x - a.x) * u, y: a.y + (b.y - a.y) * u, angle: Math.atan2(b.y - a.y, b.x - a.x) };
  }

  function corridor(targetIndex) {
    const g = state.game, N = g.N;
    const tx = targetIndex % N, ty = Math.floor(targetIndex / N);
    const key = (x, y) => y * N + x;
    const q = [[tx, ty]];
    const seen = new Set([key(tx, ty)]);
    const parent = new Map();
    let edge = null;
    while (q.length) {
      const [x, y] = q.shift();
      if ((x === 0 || y === 0 || x === N - 1 || y === N - 1) && !(x === tx && y === ty)) { edge = [x, y]; break; }
      if ((x === 0 || y === 0 || x === N - 1 || y === N - 1) && (x === tx && y === ty)) { edge = [x, y]; break; }
      for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
        const k = key(nx, ny);
        if (seen.has(k)) continue;
        if (g.board[ny][nx] !== null) continue;
        seen.add(k); parent.set(k, [x, y]); q.push([nx, ny]);
      }
    }
    if (!edge) return [[tx, ty]];
    const path = [];
    let cur = edge;
    while (cur) {
      path.push(cur);
      if (cur[0] === tx && cur[1] === ty) break;
      cur = parent.get(key(cur[0], cur[1]));
    }
    path.reverse(); // edge -> target
    return path;
  }

  function buildFlightPath(slotIndex, targetIndex, lane) {
    const g = state.game, N = g.N;
    const b = boardGeom();
    const r = b.rect;
    const tx = targetIndex % N, ty = Math.floor(targetIndex / N);
    const target = cellPoint(tx, ty);
    const start = slotPoint(slotIndex);
    const margin = Math.max(10, Math.min(16, b.cell * .7));
    const laneOff = (lane || 0) * Math.max(2, b.cell * .16);
    const corr = corridor(targetIndex);
    const first = corr[0] || [tx, ty];
    const entry = { x: r.left + (first[0] + .5) * b.cell, y: r.top + (first[1] + .5) * b.cell };
    const side = first[0] === 0 ? 'left' : first[0] === N - 1 ? 'right' : first[1] === 0 ? 'top' : 'bottom';
    const entryX = entry.x, entryY = entry.y;
    const railLeft = r.left - margin - laneOff, railRight = r.right + margin + laneOff;
    const railBottom = r.bottom + margin + laneOff, railTop = r.top - margin - laneOff;
    const railSide = side === 'left' ? 'left' : side === 'right' ? 'right' : (entry.x < r.left + r.width / 2 ? 'left' : 'right');
    const railX = railSide === 'left' ? railLeft : railRight;
    const belowY = Math.max(railBottom, start.y - 10);
    const pts = [
      { x: start.x, y: start.y - 2 },
      { x: start.x, y: belowY },
      { x: railX, y: belowY },
    ];
    // 从出巢位下方绕到画框外沿，再沿外沿走到目标所在边
    if (side === 'bottom') {
      pts.push({ x: entryX, y: railBottom });
      pts.push({ x: entryX, y: r.bottom + Math.max(4, margin * .35) });
    } else if (side === 'left') {
      if (railSide === 'left') {
        pts.push({ x: railX, y: entryY });
        pts.push({ x: r.left - Math.max(4, margin * .35), y: entryY });
      } else {
        pts.push({ x: railLeft, y: railBottom });
        pts.push({ x: railLeft, y: entryY });
        pts.push({ x: r.left - Math.max(4, margin * .35), y: entryY });
      }
    } else if (side === 'right') {
      if (railSide === 'right') {
        pts.push({ x: railX, y: entryY });
        pts.push({ x: r.right + Math.max(4, margin * .35), y: entryY });
      } else {
        pts.push({ x: railRight, y: railBottom });
        pts.push({ x: railRight, y: entryY });
        pts.push({ x: r.right + Math.max(4, margin * .35), y: entryY });
      }
    } else { // top
      if (railSide === 'left') {
        pts.push({ x: railLeft, y: railTop });
        pts.push({ x: entryX, y: railTop });
        pts.push({ x: entryX, y: r.top - Math.max(4, margin * .35) });
      } else {
        pts.push({ x: railRight, y: railTop });
        pts.push({ x: entryX, y: railTop });
        pts.push({ x: entryX, y: r.top - Math.max(4, margin * .35) });
      }
    }
    // 从目标边的外侧进入只有空格组成的走廊；这段直线不会越过未摘的星
    for (const [cx, cy] of corr) pts.push(cellPoint(cx, cy));
    return buildPath(pts);
  }

  function buildReturnPath(fairy) {
    const out = fairy.outPath.points.slice().reverse();
    const door = cottagePoint();
    const slot = slotPoint(fairy.slotIndex);
    // 回到槽位上方后转向小屋门口；这一段在 UI 前景层，不穿过棋盘
    out.push({ x: slot.x, y: slot.y - 8 });
    out.push({ x: door.x, y: door.y + 26 });
    out.push(door);
    return buildPath(out);
  }

  /* ---------- 小精灵与主循环 ---------- */
  function spawnFairy(result, now) {
    const claim = result.claim;
    const lane = (claim.id % 7) - 3;
    const outPath = buildFlightPath(result.slotIndex, claim.index, lane);
    state.fairies.push({
      claim,
      slotIndex: result.slotIndex,
      color: claim.color,
      phase: (claim.index * .37) % (Math.PI * 2),
      lane,
      status: 'out',
      t: 0,
      speed: BASE_SPEED,
      outPath,
      path: outPath,
      trail: [],
      angle: 0,
      fade: 1,
      startAt: now,
      carrying: false,
    });
  }

  function updateFairies(now, dt) {
    if (!state.game) return;
    const speed = BASE_SPEED * state.game.speedFactor;
    for (let i = state.fairies.length - 1; i >= 0; i--) {
      const f = state.fairies[i];
      f.speed = speed;
      if (f.status === 'out') {
        f.t += (f.speed * dt / 1000) / f.path.length;
        if (f.t >= 1) {
          f.t = 1;
          const pos = pointAt(f.path, 1);
          const col = f.color;
          const res = state.game.collect(f.claim.index, now);
          state.flashes.push({ x: f.claim.x, y: f.claim.y, color: col, at: now });
          state.bursts.push({ x: pos.x, y: pos.y, color: col, at: now, seed: f.phase });
          updateHud(true);
          renderSlots();
          f.status = 'back';
          f.carrying = true;
          f.t = 0;
          f.path = buildReturnPath(f);
          f.trail = [];
          f.glow = true;
          if (state.game.status === 'lost') scheduleLoss(now);
          if (state.game.status === 'cleared' && !state.clearedAt) {
            state.clearedAt = now;
            state.status = 'cleared';
          }
        }
      } else if (f.status === 'back') {
        f.t += (f.speed * dt / 1000) / f.path.length;
        if (f.t >= .86) f.fade = Math.max(0, 1 - (f.t - .86) / .14);
        if (f.t >= 1) {
          state.fairies.splice(i, 1);
          if (state.game && state.game.status === 'cleared') {
            // 所有精灵都回家后再原画显现
            if (!state.clearedAt) state.clearedAt = now;
          }
          continue;
        }
      }
      const pos = pointAt(f.path, f.t);
      const targetAngle = pos.angle;
      let da = targetAngle - f.angle;
      while (da > Math.PI) da -= Math.PI * 2;
      while (da < -Math.PI) da += Math.PI * 2;
      f.angle += da * Math.min(1, dt / 110);
      f.x = pos.x; f.y = pos.y;
      f.trail.push({ x: pos.x, y: pos.y });
      if (f.trail.length > 14) f.trail.shift();
    }
    // 失败的兜底检查（例如最后一只出发后没有可摘）
    if (state.game.status === 'lost') scheduleLoss(now);
  }

  function drawFx(now, clearOnly) {
    const canvas = el.fx;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const w = innerWidth, h = innerHeight;
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    }
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    if (clearOnly || state.screen !== 'play' || !state.game) return;
    // 出巢位里只保留罐体与静态氤氲彩光，不画实体光球；小精灵只在出发后出现。
    // 飞行中的小精灵
    for (const f of state.fairies) {
      if (f.x == null) {
        const p = pointAt(f.path, 0);
        f.x = p.x; f.y = p.y;
      }
      ctx.save();
      ctx.globalAlpha = f.fade == null ? 1 : f.fade;
      ART.drawFairy(ctx, f.x, f.y, f.color, {
        time: now, phase: f.phase, angle: f.angle * .32,
        glow: f.status === 'back', carrying: f.status === 'back',
        trail: f.trail, scale: .92,
      });
      ctx.restore();
    }
    // 取星爆点
    for (let i = state.bursts.length - 1; i >= 0; i--) {
      const b = state.bursts[i];
      const age = now - b.at;
      if (age > 560) { state.bursts.splice(i, 1); continue; }
      ART.drawBurst(ctx, b.x, b.y, b.color, age, b.seed || 0);
    }
    // 完成后的一圈暖光粒子
    if (state.revealStarted) {
      const p = clamp((now - state.revealAt) / 1700, 0, 1);
      const b = boardGeom().rect;
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      for (let i = 0; i < 22; i++) {
        const a = i / 22 * Math.PI * 2 + now * .00018;
        const rr = b.width * (.52 + .11 * Math.sin(i * 1.7 + now * .001));
        const x = b.left + b.width / 2 + Math.cos(a) * rr;
        const y = b.top + b.height / 2 + Math.sin(a) * rr * .78;
        ctx.fillStyle = ART.rgba(i % 3 ? '#ffe6a8' : '#9fe0d4', (1 - p) * .36 + .05);
        ctx.beginPath(); ctx.arc(x, y, 1.2 + (i % 3) * .7, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();
    }
    // flashes 过期清理
    state.flashes = state.flashes.filter(f => now - f.at < 600);
  }

  function updateGameplay(now) {
    if (!state.game || state.game.status !== 'playing') {
      if (state.game && state.game.status === 'lost') scheduleLoss(now);
      return;
    }
    if (state.loadingLevel !== null || !el.enterVeil.hidden) return;
    // 星罐进位结束后才允许精灵出现和出发
    const ready = state.game.slots.map(s => !!s.jar && now - s.enteredAt >= JAR_ENTER_MS);
    const origins = state.game.slots.map((s, i) => {
      if (!s.jar) return null;
      const r = state.slotEls[i].getBoundingClientRect();
      const b = boardGeom();
      return { x: (r.left + r.width / 2 - b.rect.left) / b.cell, y: (r.top - b.rect.top) / b.cell - .4 };
    });
    if (now - state.lastDispatch >= DISPATCH_MS / state.timeScale) {
      const result = state.game.dispatchNext(origins, now, ready);
      if (result) {
        state.lastDispatch = now;
        spawnFairy(result, now);
        renderSlots();
        updateHud(true);
        if (result.slotCleared) {
          delete state.waitingSince[result.slotIndex];
          state.leaving[result.slotIndex] = { at: now, jar: result.jar || { color: result.claim.color } };
          later(() => { delete state.leaving[result.slotIndex]; renderSlots(); }, 300);
        }
        if (state.game.status === 'lost') scheduleLoss(now);
      }
    }
    // 槽位里出现等待时，第一次解释
    for (let i = 0; i < state.game.slots.length; i++) {
      const s = state.game.slots[i];
      if (!s.jar || now - s.enteredAt < JAR_ENTER_MS) continue;
      if (s.jar.remaining > 0 && state.game.reachableCells(s.jar.color).length === 0) {
        if (!state.waitingSince[i]) state.waitingSince[i] = now;
        if (state.levelIndex >= 1 && !tipSeen['waiting'] && !state.coachKey && now - state.waitingSince[i] > 700) {
          maybeTip('waiting', '这种星还埋在画里，小精灵会在罐里等一等。', state.slotEls[i], 4600, true);
        }
        if (state.levelIndex === 4 && !tipSeen['long-wait'] && now - state.waitingSince[i] > 8000) {
          maybeTip('long-wait', '等一等也没关系，外层的星清空后，里面的星就露出来了。', state.slotEls[i], 4800, true);
        }
        break;
      } else {
        state.waitingSince[i] = 0;
      }
    }
    if (state.game.queueEmptied && !state.game._speedTipDone) {
      state.game._speedTipDone = true;
    }
  }

  function scheduleLoss(now) {
    if (state.status === 'lost' || state.overlayMode) return;
    if (!state.game || state.game.status !== 'lost') return;
    if (!state.lostAt) {
      state.lostAt = now || nowMs();
      el.play.classList.add('is-dead');
      hideCoach();
      el.queueCard.classList.add('is-final');
    }
    if (now - state.lostAt > 900) showLoss();
  }

  function startReveal() {
    if (state.revealStarted) return;
    state.revealStarted = true;
    state.status = 'cleared';
    state.revealAt = nowMs();
    hideCoach();
    el.boardFrame.classList.add('is-complete', 'is-revealing');
    saveCompletion();
    later(() => el.boardFrame.classList.remove('is-revealing'), 2400);
    // 弹层不在这里定时：等原画绘完、最后一只精灵也回家后再弹，避免盖住显现过程。
  }

  function saveCompletion() {
    if (!state.game) return;
    const level = LEVELS[state.levelIndex];
    const prev = progress.completed[level.id];
    const moves = state.game.moves;
    const seconds = Math.round((nowMs() - state.startedAt) / 1000);
    if (!prev || moves < prev.moves) {
      progress.completed[level.id] = { moves, seconds, at: new Date().toISOString().slice(0, 10) };
      saveProgress();
    }
  }

  /* ---------- 弹层 ---------- */
  function showLoss() {
    if (state.overlayOpen) return;
    state.overlayMode = 'loss';
    state.overlayOpen = true;
    el.modalEyebrow.textContent = '星路暂歇';
    el.modalTitle.textContent = '星路停住了';
    const game = state.game;
    const waiting = game.slots.filter(s => s.jar).length;
    el.modalText.textContent = waiting >= 5
      ? '五个位子都在等星，暂时没有能摘的星了。重来免费，进度不会丢。'
      : '星罐都放完了，剩下的星还被埋在画里。重来免费，进度不会丢。';
    el.modalPainting.style.display = 'none';
    el.modalPrimary.textContent = '免费重来';
    el.modalSecondary.textContent = '回到选关';
    el.modalClose.hidden = true;
    el.overlay.hidden = false;
    el.nextPill.hidden = true;
    later(() => el.modalPrimary.focus(), 50);
  }

  function showWinModal() {
    if (!state.game) return;
    state.overlayMode = 'win';
    state.overlayOpen = true;
    const level = LEVELS[state.levelIndex];
    const next = state.nextIndex;
    el.modalEyebrow.textContent = next >= 0 ? '原画重现' : '五幅画都回来了';
    el.modalTitle.textContent = level.name;
    el.modalText.textContent = next >= 0
      ? `全部星都回家了。《${level.name}》已经完整显现。`
      : '最后一幅画也回来了。谢谢你陪小精灵走完这一程。';
    el.modalPainting.style.display = '';
    el.modalPainting.style.backgroundImage = `url(${ART.paintDataURL(level, 208)})`;
    el.modalPrimary.textContent = next >= 0 ? '去下一关' : '回到选关';
    el.modalPrimary.disabled = false;
    el.modalSecondary.textContent = next >= 0 ? '再看看' : '再看看原画';
    el.modalClose.hidden = false;
    el.overlay.hidden = false;
    el.nextPill.hidden = true;
    if (next >= 0) {
      // 本地预生成下一关，纯内存，不拉任何资源；点击即走
      }
    later(() => el.modalPrimary.focus(), 60);
  }

  function closeOverlay() {
    if (state.overlayMode === 'loss') return;
    el.overlay.hidden = true;
    state.overlayOpen = false;
    if (state.overlayMode === 'win') {
      const next = state.nextIndex;
      el.nextPill.hidden = !next;
      if (next >= 0) el.nextFromPill.textContent = '前往下一关';
    }
    state.overlayMode = null;
  }

  function goNext() {
    if (state.loadingLevel !== null) return;
    const next = state.nextIndex;
    if (next < 0) { toHome(); return; }
    state.loadingLevel = next;
    el.modalPrimary.disabled = true;
    el.modalPrimary.innerHTML = '<span class="spinner" aria-hidden="true"></span>正在点亮…';
    el.nextFromPill.disabled = true;
    el.nextFromPill.textContent = '正在点亮…';
    later(() => {
      el.overlay.hidden = true;
      state.overlayOpen = false;
      state.overlayMode = null;
      el.enterVeil.hidden = false;
      later(() => {
        startLevel(next);
        el.modalPrimary.disabled = false;
        el.nextFromPill.disabled = false;
        el.nextFromPill.textContent = '前往下一关';
      }, 150);
    }, 120);
  }

  /* ---------- 主循环 ---------- */
  function loop(now) {
    if (!state.lastFrame) state.lastFrame = now;
    const rawDt = clamp(now - state.lastFrame, 0, 48);
    const dt = rawDt * state.timeScale;
    state.lastFrame = now;
    if (state.screen === 'play' && state.game) {
      state.status = state.game.status;
      updateGameplay(now);
      updateFairies(now, dt);
      // 到点把“正在落位”的槽渲染成罐体
      if (Object.keys(state.arriving).length) {
        let changed = false;
        for (const k of Object.keys(state.arriving)) {
          if (now - state.arriving[k].at >= JAR_ENTER_MS) { delete state.arriving[k]; changed = true; }
        }
        if (changed) renderSlots();
      }
      if (state.game.status === 'cleared') {
        if (!state.clearedAt) state.clearedAt = now;
        // 最后一颗星摘到后就让原画在盘面上绘出来；不用等小精灵全部回家。
        if (!state.revealStarted && now - state.clearedAt > 200) startReveal();
        if (state.revealStarted && !state.winPrompted && !state.overlayOpen &&
            state.fairies.length === 0 &&
            now - state.revealAt > state.revealDuration + (reducedMotion ? 120 : 760)) {
          state.winPrompted = true;
          showWinModal();
        }
      }
      if (state.game.status === 'lost') scheduleLoss(now);
      drawBoardFrame();
      drawFx(now);
    }
    requestAnimationFrame(loop);
  }

  /* ---------- 事件 ---------- */
  function bind() {
    el.backHome.addEventListener('click', toHome);
    el.restartBtn.addEventListener('click', () => {
      if (state.loadingLevel !== null) return;
      el.overlay.hidden = true;
      state.overlayOpen = false;
      state.overlayMode = null;
      el.nextPill.hidden = true;
      startLevel(state.levelIndex);
      showToast('重来一次。');
    });
    el.modalPrimary.addEventListener('click', () => {
      if (state.overlayMode === 'loss') {
        el.overlay.hidden = true;
        state.overlayOpen = false;
        state.overlayMode = null;
        startLevel(state.levelIndex);
        showToast('重来一次。');
      } else if (state.overlayMode === 'win') {
        goNext();
      }
    });
    el.modalSecondary.addEventListener('click', () => {
      if (state.overlayMode === 'loss') { toHome(); return; }
      closeOverlay();
    });
    el.modalClose.addEventListener('click', closeOverlay);
    el.nextFromPill.addEventListener('click', goNext);
    el.overlay.addEventListener('click', (e) => {
      if (e.target === el.overlay && state.overlayMode === 'win') closeOverlay();
    });
    window.addEventListener('keydown', (e) => {
      if (state.screen !== 'play') return;
      if (e.key === 'Escape') {
        if (!el.overlay.hidden) { if (state.overlayMode === 'win') closeOverlay(); }
        else toHome();
      } else if (e.key === 'r' || e.key === 'R') {
        if (el.overlay.hidden) { el.overlay.hidden = true; startLevel(state.levelIndex); }
      } else if (['1','2','3','4'].includes(e.key)) {
        if (el.overlay.hidden && el.enterVeil.hidden) onQueueClick(Number(e.key) - 1, 0);
      }
    });
    let resizeTimer = 0;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { fitLayout(); positionCoach(); }, 80);
    });
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => { fitLayout(); positionCoach(); }, 80);
      });
    }
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) state.lastFrame = nowMs();
    });
  }

  function exposeDebug() {
    window.__SHIGUANG__ = {
      get game() { return state.game; },
      get state() { return state; },
      startLevel, toHome, fitLayout,
      useProp,
      get currentProof() { return state.currentProof; },
      get levelVariants() { return state.levelVariants; },
      sampleBoard(x, y) {
        // 仅用于本地验收：读取盘面中心的实际像素，验证“摘走后星消失”和“同格绘出原画”。
        const cv = el.boardCanvas;
        const ctx = cv.getContext('2d');
        const dpr = cv.width / (cv.clientWidth || 1);
        const cell = cv.width / state.game.N;
        const px = Math.floor((x + .5) * cell);
        const py = Math.floor((y + .5) * cell);
        const d = ctx.getImageData(px, py, 1, 1).data;
        return { r: d[0], g: d[1], b: d[2], a: d[3], dpr, size: cv.width };
      },
      setTimeScale(v) { state.timeScale = Math.max(0.25, Math.min(20, +v || 1)); return state.timeScale; },
      proofs: PROOFS,
      forceLossForPreview() {
        if (!state.game) return;
        // 仅用于截图：摆出五个都在等待的罐子，检查失败弹层与槽位文案
        const colors = ['violet', 'teal', 'gold', 'rose', 'pine'];
        state.game.slots.forEach((s, i) => {
          s.jar = { uid: 'preview-' + i, color: colors[i], count: 2, remaining: 2, total: 2, column: i, order: 0 };
          s.enteredAt = -10000;
        });
        state.game.status = 'lost';
        state.status = 'lost';
        state.lostAt = nowMs() - 1000;
        renderSlots();
        showLoss();
      },
      completeForPreview() {
        if (!state.game) return;
        // 仅用于本地截图验证：把剩余格全部按真实状态收掉
        for (let y = 0; y < state.game.N; y++) for (let x = 0; x < state.game.N; x++) {
          if (state.game.board[y][x]) {
            state.game.board[y][x] = null;
            state.game.collected++;
          }
        }
        state.game.claimed.clear();
        state.game.pending = 0;
        state.game.status = 'cleared';
        state.game.slots.forEach(s => { s.jar = null; });
        state.game.columns.forEach(c => c.length = 0);
        state.fairies = [];
        state.clearedAt = nowMs();
        updateHud(true);
        renderSlots();
        renderQueue();
        drawBoardFrame();
        startReveal();
        state.winPrompted = false;
      }
    };
  }

  function init() {
    injectWorld();
    bind();
    const params = new URLSearchParams(location.search);
    const customPlay = loadCustomLevels(params);
    buildHome();
    if (params.get('debug') === '1') exposeDebug();
    const qVariant = parseInt(params.get('variant'), 10);
    if (Number.isFinite(qVariant) && qVariant >= 0) state.fixedVariant = qVariant;
    const qLevel = params.get('level');
    if (qLevel) {
      const byId = LEVELS.findIndex(l => l.id === qLevel || l.name === qLevel);
      const byNum = parseInt(qLevel, 10) - 1;
      const index = byId >= 0 ? byId : (Number.isFinite(byNum) && byNum >= 0 && byNum < LEVELS.length ? byNum : -1);
      if (index >= 0) {
        startLevel(index, { instant: params.get('instant') === '1' });
      }
    } else if (customPlay) {
      const index = LEVELS.findIndex(l => l.id === customPlay.id);
      if (index >= 0) startLevel(index, { instant: params.get('instant') === '1' });
    }
    requestAnimationFrame(loop);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
