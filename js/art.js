/* 《拾光之旅》原创 Canvas / SVG 美术。所有图形由本文件程序化绘制，不使用官方素材。 */
(function (global) {
  'use strict';

  const PALETTE = global.SHIGUANG_PALETTE || {};

  function hexToRgb(hex) {
    const h = hex.replace('#', '');
    const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }
  function rgba(hex, a) {
    const c = hexToRgb(hex);
    return `rgba(${c.r},${c.g},${c.b},${a})`;
  }
  function hash2(x, y, seed) {
    let h = Math.imul(x + 1, 374761393) + Math.imul(y + 1, 668265263) + Math.imul(seed || 1, 2246822519);
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  }
  function roundRect(ctx, x, y, w, h, r) {
    const rr = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
    ctx.closePath();
  }

  /* ---------------- 夜色山林 ---------------- */
  function forestSVG() {
    const far = '#2b294d', mid = '#20233f', near = '#111925', deep = '#0b1119';
    let trees = '';
    const tree = (x, y, w, h, color, op) => {
      const half = w / 2;
      return `<path d="M${x} ${y} L${x - half} ${y + h} L${x + half} ${y + h} Z" fill="${color}" opacity="${op}"/>`;
    };
    const xs = [8, 28, 47, 69, 92, 114, 137, 159, 182, 204, 226, 248, 270, 292, 314, 336, 358, 380];
    xs.forEach((x, i) => {
      const h = 42 + ((i * 37) % 46);
      trees += tree(x, 702 - h, 25 + (i % 3) * 7, h, i % 2 ? deep : near, .78);
      trees += tree(x + 11, 728 - h * .65, 18, h * .65, deep, .62);
    });
    return `<svg viewBox="0 0 390 844" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id="far-hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${far}" stop-opacity=".62"/><stop offset="1" stop-color="${far}" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="near-hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${mid}" stop-opacity=".92"/><stop offset="1" stop-color="${deep}" stop-opacity=".98"/>
        </linearGradient>
        <linearGradient id="tree-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#0b1119" stop-opacity=".4"/><stop offset="1" stop-color="#080d14" stop-opacity=".92"/>
        </linearGradient>
      </defs>
      <path d="M0 600 C45 574 75 588 112 566 C150 543 178 559 214 574 C252 590 278 564 318 578 C346 588 370 581 390 590 L390 844 L0 844 Z" fill="url(#far-hill)"/>
      <path d="M0 646 C40 627 64 639 96 619 C130 597 154 616 186 630 C222 646 246 618 282 627 C315 635 350 628 390 643 L390 844 L0 844 Z" fill="url(#near-hill)" opacity=".82"/>
      <g opacity=".8">${trees}</g>
      <path d="M0 770 Q80 744 160 762 T390 754 L390 844 L0 844 Z" fill="url(#tree-fade)"/>
      <path d="M0 738 C70 728 112 742 160 736 C214 729 250 745 302 738 C338 733 364 741 390 736 L390 844 L0 844 Z" fill="#070c13" opacity=".64"/>
      <g opacity=".28" fill="none" stroke="#a0b5b9" stroke-width="1">
        <path d="M0 665 C58 656 112 670 168 660 C226 650 272 666 330 658 C354 655 372 658 390 654"/>
        <path d="M0 690 C56 680 106 695 168 686 C224 678 276 693 334 682"/>
      </g>
    </svg>`;
  }

  /* ---------------- 玻璃小屋 C：双山墙、彩玻璃、暖窗 ---------------- */
  function cottageSVG(prefix) {
    const p = 'cottage-' + (prefix || 'a');
    return `<svg viewBox="0 0 120 98" role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id="${p}-roof" x1="0" y1="0" x2=".7" y2="1">
          <stop offset="0" stop-color="#9a8ab5"/><stop offset=".46" stop-color="#74648f"/><stop offset="1" stop-color="#4a3d69"/>
        </linearGradient>
        <linearGradient id="${p}-roof2" x1="0" y1="0" x2=".8" y2="1">
          <stop offset="0" stop-color="#8877a4"/><stop offset="1" stop-color="#3c315b"/>
        </linearGradient>
        <linearGradient id="${p}-wall" x1="0" y1="0" x2=".4" y2="1">
          <stop offset="0" stop-color="#7e7894" stop-opacity=".74"/><stop offset=".52" stop-color="#5c657d" stop-opacity=".55"/><stop offset="1" stop-color="#3c3d5d" stop-opacity=".8"/>
        </linearGradient>
        <linearGradient id="${p}-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#e6b8c8" stop-opacity=".48"/><stop offset=".48" stop-color="#8fc4bd" stop-opacity=".35"/><stop offset="1" stop-color="#e0b978" stop-opacity=".46"/>
        </linearGradient>
        <linearGradient id="${p}-warm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#fff3bd"/><stop offset=".5" stop-color="#ffd17a"/><stop offset="1" stop-color="#e49a54"/>
        </linearGradient>
        <radialGradient id="${p}-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stop-color="#ffd88b" stop-opacity=".42"/><stop offset=".55" stop-color="#f5b970" stop-opacity=".14"/><stop offset="1" stop-color="#f5b970" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="60" cy="92" rx="44" ry="7" fill="#05040b" opacity=".52"/>
      <ellipse cx="48" cy="71" rx="35" ry="24" fill="url(#${p}-glow)"/>
      <rect x="25" y="13" width="9" height="28" rx="1.6" fill="url(#${p}-roof2)" stroke="#b9a9c9" stroke-opacity=".32"/>
      <rect x="22.6" y="10.2" width="13.8" height="4" rx="1.5" fill="#8e7da9" stroke="#cbbbd9" stroke-opacity=".3"/>
      <!-- walls -->
      <path d="M17 47 Q17 43 22 43 H80 Q86 43 86 49 V84 Q86 89 80 89 H22 Q17 89 17 84 Z" fill="url(#${p}-wall)" stroke="#d4c3df" stroke-opacity=".4" stroke-width="1.2"/>
      <path d="M77 47 H109 Q114 47 114 52 V84 Q114 89 108 89 H81 Z" fill="url(#${p}-wall)" stroke="#d4c3df" stroke-opacity=".34" stroke-width="1.1"/>
      <!-- stained glass panes -->
      <g opacity=".8">
        <path d="M21 52 L34 46 L45 50 L44 84 L21 84 Z" fill="#8fbab6" opacity=".34"/>
        <path d="M45 50 L62 43 L77 47 L77 84 L44 84 Z" fill="#c28fa5" opacity=".28"/>
        <path d="M80 52 L94 47 L105 50 L107 84 L81 84 Z" fill="#d7a267" opacity=".24"/>
        <path d="M21 69 L44 66 L77 71 L107 68" stroke="#f0e5ec" stroke-opacity=".22" fill="none" stroke-width=".8"/>
      </g>
      <!-- roofs -->
      <path d="M8 50 Q9 43 18 36 L43 18 Q47 15 51 19 L76 38 Q84 44 83 52 L80 54 L17 54 Z" fill="url(#${p}-roof)" stroke="#e1cfe8" stroke-opacity=".58" stroke-width="1.4"/>
      <path d="M70 49 L88 28 Q91 24.5 94.5 28 L113 47 Q117 51 111 54 L84 54 L76 54 Z" fill="url(#${p}-roof2)" stroke="#e1cfe8" stroke-opacity=".5" stroke-width="1.3"/>
      <path d="M12 48 Q44 39 79 48" stroke="#f1e5f3" stroke-opacity=".18" fill="none" stroke-width=".8"/>
      <path d="M77 33 L92 43" stroke="#d8c7e4" stroke-opacity=".26" stroke-width=".8"/>
      <g fill="none" stroke="#d9c4e8" stroke-opacity=".28" stroke-width=".7">
        <path d="M20 43 L44 25 L65 41"/><path d="M79 47 L94 32 L105 43"/>
        <path d="M24 50 L52 50"/><path d="M90 49 L108 49"/>
      </g>
      <path d="M37 34 Q32 39 35 44 Q41 47 46 43 Q47 36 40 33 Z" fill="#f3cf85" opacity=".56" stroke="#f8eccb" stroke-opacity=".55" stroke-width=".8"/>
      <!-- windows -->
      <g>
        <rect x="26" y="58" width="15" height="16" rx="3" fill="url(#${p}-warm)" stroke="#45344c" stroke-width="2"/>
        <path d="M33.5 59 V73 M27 66 H40" stroke="#e8c078" stroke-opacity=".8" stroke-width="1"/>
        <rect x="87" y="58" width="15" height="16" rx="3" fill="url(#${p}-warm)" stroke="#45344c" stroke-width="2"/>
        <path d="M94.5 59 V73 M88 66 H101" stroke="#e8c078" stroke-opacity=".8" stroke-width="1"/>
      </g>
      <!-- door -->
      <path d="M50 86 V68 Q50 61 58 61 Q66 61 66 68 V86 Z" fill="#493653" stroke="#d0a86d" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M53 85 V69 Q53 64 58 64 Q63 64 63 69 V85 Z" fill="#95566c" opacity=".8"/>
      <path d="M53 68 Q58 61 63 68" fill="url(#${p}-warm)" opacity=".9"/>
      <circle cx="61.3" cy="78" r="1.1" fill="#ffe8ac"/>
      <path d="M17 86 H86 M78 86 H114" stroke="#d6c4e2" stroke-opacity=".35" stroke-width="1.2"/>
      <path d="M19 88 H114" stroke="#0c0914" stroke-opacity=".55" stroke-width="1.2"/>
    </svg>`;
  }

  /* ---------------- 棋盘星与画 ---------------- */
  const spriteCache = new Map();
  function clearSpriteCache() { spriteCache.clear(); }

  function makeStarSprite(color, cell, dpr) {
    const key = `${color}|${cell.toFixed(2)}|${dpr}`;
    if (spriteCache.has(key)) return spriteCache.get(key);
    const p = PALETTE[color] || { fill: '#d9c9a5', glow: '#fff0c8' };
    const S = Math.max(24, cell * 2.05);
    const cv = document.createElement('canvas');
    cv.width = Math.ceil(S * dpr);
    cv.height = Math.ceil(S * dpr);
    const c = cv.getContext('2d');
    c.scale(dpr, dpr);
    const cx = S / 2, cy = S / 2;
    const fill = p.fill, glow = p.glow;
    c.globalCompositeOperation = 'lighter';
    // 大而柔的色晕
    let g = c.createRadialGradient(cx, cy, 0, cx, cy, S * .30);
    g.addColorStop(0, rgba(glow, .5));
    g.addColorStop(.18, rgba(fill, .46));
    g.addColorStop(.5, rgba(glow, .12));
    g.addColorStop(1, rgba(glow, 0));
    c.fillStyle = g;
    c.beginPath(); c.arc(cx, cy, S * .30, 0, Math.PI * 2); c.fill();
    // 四芒：细长、略斜
    const rays = [
      [1, 0, S * .22, S * .05], [-1, 0, S * .22, S * .05],
      [0, 1, S * .24, S * .05], [0, -1, S * .24, S * .05],
    ];
    c.lineCap = 'round';
    for (const [dx, dy, len, w] of rays) {
      const grd = c.createLinearGradient(cx, cy, cx + dx * len, cy + dy * len);
      grd.addColorStop(0, rgba(glow, .44));
      grd.addColorStop(.45, rgba(glow, .16));
      grd.addColorStop(1, rgba(glow, 0));
      c.strokeStyle = grd; c.lineWidth = w;
      c.beginPath(); c.moveTo(cx - dx * len * .36, cy - dy * len * .36); c.lineTo(cx + dx * len, cy + dy * len); c.stroke();
    }
    // 对角短芒
    for (const [dx, dy] of [[.7, .7], [-.7, .7], [.7, -.7], [-.7, -.7]]) {
      const grd = c.createLinearGradient(cx, cy, cx + dx * S * .16, cy + dy * S * .16);
      grd.addColorStop(0, rgba(glow, .26)); grd.addColorStop(1, rgba(glow, 0));
      c.strokeStyle = grd; c.lineWidth = S * .02;
      c.beginPath(); c.moveTo(cx, cy); c.lineTo(cx + dx * S * .16, cy + dy * S * .16); c.stroke();
    }
    // 色心：保留本色，不漂成白球
    g = c.createRadialGradient(cx - S * .02, cy - S * .03, 0, cx, cy, S * .12);
    g.addColorStop(0, rgba('#fff7e2', .9));
    g.addColorStop(.3, rgba(glow, .85));
    g.addColorStop(.72, rgba(fill, .82));
    g.addColorStop(1, rgba(fill, 0));
    c.fillStyle = g;
    c.beginPath(); c.arc(cx, cy, S * .12, 0, Math.PI * 2); c.fill();
    c.globalCompositeOperation = 'source-over';
    const out = { canvas: cv, size: S };
    spriteCache.set(key, out);
    return out;
  }

  function paintCell(ctx, x, y, cell, color, alpha, opts) {
    const p = PALETTE[color] || { fill: '#555', glow: '#aaa' };
    ctx.save();
    ctx.globalAlpha = alpha == null ? 1 : alpha;
    ctx.fillStyle = p.fill;
    ctx.fillRect(x, y, cell + .2, cell + .2);
    // 上沿微光 / 下沿微暗，保住像素画的手绘层次
    ctx.fillStyle = 'rgba(255,248,228,.10)';
    ctx.fillRect(x, y, cell + .2, Math.max(1, cell * .16));
    ctx.fillStyle = 'rgba(5,4,13,.12)';
    ctx.fillRect(x, y + cell - Math.max(1, cell * .13), cell + .2, Math.max(1, cell * .13));
    // 少量确定性颗粒，避免整块纯色
    const h = hash2(x, y, 5), h2 = hash2(x, y, 9);
    ctx.fillStyle = 'rgba(255,248,230,.075)';
    ctx.fillRect(x + cell * (.15 + h * .6), y + cell * (.2 + h2 * .5), Math.max(1, cell * .06), Math.max(1, cell * .06));
    ctx.fillStyle = 'rgba(6,4,14,.07)';
    ctx.fillRect(x + cell * (.2 + h2 * .55), y + cell * (.15 + h * .55), Math.max(1, cell * .05), Math.max(1, cell * .05));
    ctx.restore();
  }

  function drawBoard(canvas, game, opts) {
    opts = opts || {};
    const size = canvas.clientWidth || parseFloat(getComputedStyle(canvas).width) || 320;
    const dpr = Math.min(2, global.devicePixelRatio || 1);
    const px = Math.round(size * dpr);
    if (canvas.width !== px || canvas.height !== px) { canvas.width = px; canvas.height = px; }
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size, size);
    const N = game.N, cell = size / N;
    const t = opts.now || 0;
    ctx.fillStyle = '#100e20';
    ctx.fillRect(0, 0, size, size);
    // 星图与逐格显现的原画
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        const color = game.level.cells[y][x];
        const present = !!game.board[y][x];
        const left = x * cell, top = y * cell;
        if (!present) {
          paintCell(ctx, left, top, cell, color, 1, opts);
        } else {
          // 未摘走：用深色玻璃把画藏住，只留一点色相
          const p = PALETTE[color] || { fill: '#444' };
          ctx.fillStyle = 'rgba(23,20,43,.94)';
          ctx.fillRect(left, top, cell + .2, cell + .2);
          ctx.fillStyle = rgba(p.fill, .13);
          ctx.fillRect(left, top, cell + .2, cell + .2);
          ctx.fillStyle = 'rgba(8,6,18,.18)';
          ctx.fillRect(left, top + cell - 1, cell + .2, 1);
        }
      }
    }
    // 星
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        const color = game.board[y][x];
        if (!color) continue;
        const index = y * N + x;
        const reach = game.isReachable(x, y);
        const claim = game.claimed.get(index);
        const phase = hash2(x, y, 11);
        const tw = .64 + .36 * Math.sin((t / 1100) * Math.PI * 2 + phase * Math.PI * 2);
        let alpha = (reach ? .64 : .12) + tw * (reach ? .2 : .045);
        if (claim) alpha = Math.min(1, alpha + .12);
        const sprite = makeStarSprite(color, cell, dpr);
        const s = sprite.size;
        ctx.save();
        ctx.globalAlpha = Math.max(.12, Math.min(1, alpha));
        if (cell > 8) {
          ctx.translate(x * cell + cell / 2, y * cell + cell / 2);
          const tilt = (hash2(x, y, 3) - .5) * .16;
          ctx.rotate(tilt);
          ctx.drawImage(sprite.canvas, -s / 2, -s / 2, s, s);
        } else {
          ctx.drawImage(sprite.canvas, x * cell + cell / 2 - s / 2, y * cell + cell / 2 - s / 2, s, s);
        }
        ctx.restore();
        if (claim) {
          const pulse = (Math.sin(t / 180 + phase * 6) + 1) / 2;
          ctx.save();
          ctx.strokeStyle = rgba('#ffe8b2', .5 + pulse * .25);
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.arc(x * cell + cell / 2, y * cell + cell / 2, cell * (.3 + pulse * .08), 0, Math.PI * 2); ctx.stroke();
          ctx.restore();
        }
      }
    }
    // 格线：很轻，让星点保持主角
    ctx.save();
    ctx.strokeStyle = 'rgba(233,221,247,.045)'; ctx.lineWidth = .55;
    for (let i = 1; i < N; i++) {
      ctx.beginPath(); ctx.moveTo(i * cell, 0); ctx.lineTo(i * cell, size); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i * cell); ctx.lineTo(size, i * cell); ctx.stroke();
    }
    ctx.restore();
    // 刚摘到的格子闪一下
    if (opts.flashes) {
      for (const f of opts.flashes) {
        const age = t - f.at;
        if (age > 520) continue;
        const a = Math.max(0, 1 - age / 520);
        const cx = (f.x + .5) * cell, cy = (f.y + .5) * cell;
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        const p = PALETTE[f.color] || { glow: '#ffe8b2' };
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, cell * 1.25);
        g.addColorStop(0, rgba('#fff7e4', a * .7)); g.addColorStop(.35, rgba(p.glow, a * .45)); g.addColorStop(1, rgba(p.glow, 0));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, cell * 1.25, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      }
    }
    // 完成：给整幅画一层温润的光
    if (opts.complete) {
      ctx.save();
      const g = ctx.createLinearGradient(0, 0, size, size);
      g.addColorStop(0, 'rgba(255,236,186,.13)');
      g.addColorStop(.38, 'rgba(255,245,215,.02)');
      g.addColorStop(.7, 'rgba(255,219,160,.05)');
      g.addColorStop(1, 'rgba(255,245,225,.11)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, size, size);
      ctx.strokeStyle = 'rgba(255,240,200,.22)'; ctx.lineWidth = 1;
      roundRect(ctx, 1, 1, size - 2, size - 2, 10); ctx.stroke();
      ctx.restore();
    }
  }

  function paintDataURL(level, size, opts) {
    opts = opts || {};
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const ctx = c.getContext('2d');
    const N = level.cells.length, cell = size / N;
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      paintCell(ctx, x * cell, y * cell, cell, level.cells[y][x], opts.dim ? .72 : 1, opts);
    }
    if (opts.stars) {
      ctx.save();
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
        const p = PALETTE[level.cells[y][x]] || { glow: '#fff' };
        const a = .24 + hash2(x, y, 4) * .35;
        ctx.fillStyle = rgba(p.glow, a);
        const r = Math.max(1, cell * .08);
        ctx.fillRect(x * cell + cell * .5 - r, y * cell + cell * .5 - r, r * 2, r * 2);
      }
      ctx.restore();
    }
    return c.toDataURL('image/png');
  }

  /* ---------------- 小精灵 ---------------- */
  function drawFairy(ctx, x, y, color, opts) {
    opts = opts || {};
    const p = PALETTE[color] || { fill: '#e6cf9d', glow: '#fff1c7' };
    const time = opts.time || 0;
    const phase = opts.phase || 0;
    const flap = opts.idle ? (.56 + .44 * Math.abs(Math.sin(time * .0019 + phase))) : (.52 + .48 * Math.abs(Math.sin(time * .017 + phase)));
    const angle = opts.angle || 0;
    const bob = Math.sin(time * .006 + phase) * (opts.idle ? 1.15 : .55);
    const scale = opts.scale || 1;
    ctx.save();
    ctx.translate(x, y + bob);
    if (opts.trail && opts.trail.length > 1) {
      for (let i = Math.max(0, opts.trail.length - 5); i < opts.trail.length - 1; i++) {
        const q = opts.trail[i];
        const a = (i / opts.trail.length) * .12;
        ctx.fillStyle = rgba(p.glow, a);
        ctx.beginPath(); ctx.arc(q.x - x, q.y - y, 2.2 * (i / opts.trail.length) + .6, 0, Math.PI * 2); ctx.fill();
      }
    }
    ctx.rotate(angle);
    ctx.scale(scale, scale);
    if (opts.glow) {
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 19);
      g.addColorStop(0, rgba(p.glow, .55)); g.addColorStop(.35, rgba(p.fill, .25)); g.addColorStop(1, rgba(p.glow, 0));
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, 19, 0, Math.PI * 2); ctx.fill();
    }
    // 玻璃翅：左右各两片，随拍翅开合
    const wing = (side) => {
      const sx = side;
      ctx.save();
      ctx.scale(sx * Math.max(.2, flap), 1);
      ctx.globalCompositeOperation = 'lighter';
      // 上翼
      ctx.beginPath();
      ctx.moveTo(0, -1);
      ctx.bezierCurveTo(4, -10, 11, -12, 13, -7);
      ctx.bezierCurveTo(14, -3, 8, 1, 1, 1);
      ctx.closePath();
      ctx.fillStyle = rgba(p.glow, .42);
      ctx.fill();
      ctx.strokeStyle = rgba('#f7f1dc', .55); ctx.lineWidth = .65; ctx.stroke();
      // 下翼
      ctx.beginPath();
      ctx.moveTo(0, 1);
      ctx.bezierCurveTo(5, 3, 10, 8, 8, 11);
      ctx.bezierCurveTo(6, 13, 1, 8, 0, 3);
      ctx.closePath();
      ctx.fillStyle = rgba(p.fill, .5);
      ctx.fill();
      ctx.strokeStyle = rgba('#f7f1dc', .4); ctx.lineWidth = .55; ctx.stroke();
      // 翼脉
      ctx.beginPath();
      ctx.moveTo(1, 0); ctx.quadraticCurveTo(7, -7, 12, -7);
      ctx.moveTo(1, .5); ctx.quadraticCurveTo(6, 6, 8, 10);
      ctx.strokeStyle = rgba('#fff7e4', .35); ctx.lineWidth = .45; ctx.stroke();
      ctx.restore();
    };
    wing(-1); wing(1);
    ctx.globalCompositeOperation = 'source-over';
    // 光球身体
    const bodyR = opts.carrying ? 4.5 : 4.1;
    const g2 = ctx.createRadialGradient(-1, -1.3, 0, 0, 0, bodyR * 1.25);
    g2.addColorStop(0, 'rgba(255,252,242,.98)');
    g2.addColorStop(.28, rgba(p.glow, .98));
    g2.addColorStop(.65, rgba(p.fill, .95));
    g2.addColorStop(1, rgba(p.fill, .1));
    ctx.fillStyle = g2;
    ctx.beginPath(); ctx.arc(0, 0, bodyR, 0, Math.PI * 2); ctx.fill();
    if (opts.carrying) {
      const s = 3.2 + Math.sin(time * .008) * .45;
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = rgba('#fff5d6', .95);
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const a = i * Math.PI / 2;
        ctx.lineTo(Math.cos(a) * s, Math.sin(a) * s);
        ctx.lineTo(Math.cos(a + Math.PI / 4) * s * .45, Math.sin(a + Math.PI / 4) * s * .45);
      }
      ctx.closePath(); ctx.fill();
      ctx.restore();
    }
    // 眼睛似的小高光
    ctx.fillStyle = 'rgba(255,255,250,.92)';
    ctx.beginPath(); ctx.arc(-1.25, -1.35, .9, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  function drawBurst(ctx, x, y, color, age, seed) {
    const p = PALETTE[color] || { glow: '#ffe8b2', fill: '#fff' };
    const t = Math.min(1, age / 520);
    const e = 1 - Math.pow(1 - t, 3);
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const ringA = (1 - t) * .5;
    ctx.strokeStyle = rgba(p.glow, ringA); ctx.lineWidth = 1.2;
    ctx.beginPath(); ctx.arc(x, y, 4 + e * 15, 0, Math.PI * 2); ctx.stroke();
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2 + seed;
      const dist = 2 + e * (10 + (i % 3) * 5);
      const px = x + Math.cos(a) * dist, py = y + Math.sin(a) * dist;
      ctx.fillStyle = rgba(i % 2 ? p.glow : p.fill, (1 - t) * .9);
      ctx.beginPath(); ctx.arc(px, py, 1.4 - t * .6, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
  }

  global.SHIGUANG_ART = {
    forestSVG, cottageSVG, drawBoard, paintDataURL, drawFairy, drawBurst, clearSpriteCache,
    palette: PALETTE, hexToRgb, rgba,
  };
})(typeof window !== 'undefined' ? window : globalThis);
