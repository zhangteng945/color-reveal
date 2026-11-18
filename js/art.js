/* 《拾光之旅》原创 Canvas / SVG 美术。所有图形由本文件程序化绘制，不使用官方素材。 */
(function (global) {
  'use strict';

  const PALETTE = global.SHIGUANG_PALETTE || {};
  const ART_VERSION = 4;
  // 可采星点专用高饱和色：原画仍用 PALETTE 的低饱和色，星点单独提纯，
  // 保证同一夜里每种星光的色相能一眼分开。core 只用于最亮的心与高光。
  const STAR_COLORS = {
    ink:    { core: '#f2ecff', ray: '#ad8fff', halo: '#7b5cf0' },
    indigo: { core: '#e9f3ff', ray: '#3d7bff', halo: '#1f4fe0' },
    violet: { core: '#f5e8ff', ray: '#a94cff', halo: '#7a2fe8' },
    lilac:  { core: '#fff0ff', ray: '#f07cff', halo: '#cc4fdf' },
    rose:   { core: '#ffe9f1', ray: '#ff5f96', halo: '#e83a7a' },
    coral:  { core: '#fff0e4', ray: '#ff7448', halo: '#e84a28' },
    gold:   { core: '#fff6d8', ray: '#ffb52a', halo: '#e89000' },
    cream:  { core: '#fffaf0', ray: '#ffe9c4', halo: '#f0c88a' },
    mint:   { core: '#f2ffec', ray: '#8df07d', halo: '#54c45a' },
    teal:   { core: '#e8fff8', ray: '#15d8b8', halo: '#08a890' },
    moss:   { core: '#f8ffe8', ray: '#b8e34a', halo: '#88b820' },
    pine:   { core: '#eafff4', ray: '#2fb85a', halo: '#118a48' },
    sky:    { core: '#ecfaff', ray: '#4fd2ff', halo: '#20a8e0' },
    blue:   { core: '#e8f8ff', ray: '#00c2ff', halo: '#0098d8' },
  };
  function starColor(color) {
    return STAR_COLORS[color] || { core: '#fff8e8', ray: '#e8c88a', halo: '#c89a50' };
  }

  function hexToRgb(hex) {
    const h = hex.replace('#', '');
    const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }
  function rgba(hex, a) {
    const c = hexToRgb(hex);
    return `rgba(${c.r},${c.g},${c.b},${a})`;
  }
  function mix(hexA, hexB, t) {
    const a = hexToRgb(hexA), b = hexToRgb(hexB);
    const c = k => Math.round(a[k] + (b[k] - a[k]) * t);
    return `rgb(${c('r')},${c('g')},${c('b')})`;
  }
  function hash2(x, y, seed) {
    let h = Math.imul(x + 1, 374761393) + Math.imul(y + 1, 668265263) + Math.imul(seed || 1, 2246822519);
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function smooth(t) { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); }
  /* ---------------- 魔幻夜色山林 ---------------- */
  function forestSVG() {
    const conifer = (x, baseY, h, w, fill, op) => {
      let d = '';
      for (let i = 0; i < 3; i++) {
        const t = i / 3;
        const top = baseY - h + h * t * .62;
        const spread = w * (1 - t * .34);
        const bottom = top + h * .34;
        d += `M${x} ${top} L${x - spread / 2} ${bottom} L${x + spread / 2} ${bottom} Z `;
      }
      return `<path d="${d}" fill="${fill}" opacity="${op}"/>`;
    };
    const layer = (count, baseY, minH, maxH, fill, op, seed) => {
      let out = '';
      for (let i = 0; i < count; i++) {
        const t = i / Math.max(1, count - 1);
        const jitter = hash2(i, seed, 13);
        const x = -8 + t * 406 + (jitter - .5) * 14;
        const h = minH + hash2(i, seed, 29) * (maxH - minH);
        out += conifer(x, baseY + (jitter - .5) * 8, h, h * .46, fill, op);
      }
      return out;
    };
    return `<svg viewBox="0 0 390 844" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id="far-hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#5f5996" stop-opacity=".34"/>
          <stop offset=".55" stop-color="#393460" stop-opacity=".42"/>
          <stop offset="1" stop-color="#16142d" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="mid-hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#3c3d74" stop-opacity=".62"/>
          <stop offset=".6" stop-color="#20233f" stop-opacity=".9"/>
          <stop offset="1" stop-color="#111726" stop-opacity="1"/>
        </linearGradient>
        <linearGradient id="near-hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#162132" stop-opacity=".88"/>
          <stop offset="1" stop-color="#070c13" stop-opacity="1"/>
        </linearGradient>
        <linearGradient id="mist-band" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#b7d8d2" stop-opacity="0"/>
          <stop offset=".5" stop-color="#a9cfd0" stop-opacity=".13"/>
          <stop offset="1" stop-color="#8faecc" stop-opacity="0"/>
        </linearGradient>
        <radialGradient id="moon-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0" stop-color="#fff1c6" stop-opacity=".30"/>
          <stop offset=".34" stop-color="#efd9ad" stop-opacity=".13"/>
          <stop offset="1" stop-color="#c7b2e0" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="horizon-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stop-color="#ffd995" stop-opacity=".13"/>
          <stop offset=".5" stop-color="#9b88c9" stop-opacity=".05"/>
          <stop offset="1" stop-color="#6f5fa8" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="cottage-ground" cx="50%" cy="50%" r="50%">
          <stop offset="0" stop-color="#ffd995" stop-opacity=".11"/>
          <stop offset=".55" stop-color="#7fc7bc" stop-opacity=".04"/>
          <stop offset="1" stop-color="#000000" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="326" cy="102" r="88" fill="url(#moon-halo)"/>
      <g opacity=".7">
        <circle cx="326" cy="102" r="25" fill="#f3e2ba" opacity=".16"/>
        <path d="M339 81a24 24 0 1 0 10 33 20 20 0 0 1-10-33Z" fill="#ffecc4" opacity=".34"/>
      </g>
      <ellipse cx="195" cy="676" rx="248" ry="108" fill="url(#horizon-glow)"/>
      <path d="M0 610 C38 578 66 596 104 566 C143 536 174 558 210 574 C250 592 282 554 322 574 C352 588 372 580 390 590 L390 844 L0 844 Z" fill="url(#far-hill)"/>
      <path d="M0 652 C42 628 70 644 104 618 C140 590 166 618 202 632 C242 648 270 614 306 626 C338 637 364 628 390 644 L390 844 L0 844 Z" fill="url(#mid-hill)" opacity=".9"/>
      <g opacity=".55">${layer(22, 700, 56, 108, '#34335f', .55, 4)}</g>
      <g opacity=".68">${layer(17, 748, 70, 136, '#1d233e', .7, 11)}</g>
      <path d="M0 706 C58 692 116 710 174 700 C230 690 286 708 342 698 C360 695 376 698 390 694 L390 844 L0 844 Z" fill="url(#mist-band)" opacity=".9"/>
      <g opacity=".9">${layer(15, 800, 86, 160, '#101827', .92, 23)}</g>
      <path d="M0 772 C68 758 112 774 168 766 C226 758 268 776 330 766 C354 762 374 766 390 762 L390 844 L0 844 Z" fill="url(#near-hill)"/>
      <ellipse cx="195" cy="792" rx="190" ry="46" fill="url(#cottage-ground)"/>
      <g opacity=".26" fill="none" stroke="#bdd8d5" stroke-width="1">
        <path d="M0 684 C58 672 112 688 168 676 C226 664 274 682 334 672 C356 668 374 672 390 666"/>
        <path d="M0 714 C56 702 108 718 168 708 C224 698 278 714 336 702"/>
        <path d="M0 742 C62 732 120 746 180 736 C238 726 292 742 350 732"/>
      </g>
    </svg>`;
  }

  /* ---------------- 玻璃小屋 C：双山墙、彩玻璃、暖窗、屋顶星饰 ---------------- */
  function cottageSVG(prefix) {
    const p = 'cottage-' + (prefix || 'a');
    return `<svg viewBox="0 0 120 102" role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id="${p}-roof" x1="0" y1="0" x2=".7" y2="1">
          <stop offset="0" stop-color="#c3b0dc"/><stop offset=".34" stop-color="#8c77b2"/><stop offset=".72" stop-color="#5d4a85"/><stop offset="1" stop-color="#372c58"/>
        </linearGradient>
        <linearGradient id="${p}-roof2" x1="0" y1="0" x2=".8" y2="1">
          <stop offset="0" stop-color="#ab98cc"/><stop offset=".55" stop-color="#75608f"/><stop offset="1" stop-color="#3a2d5c"/>
        </linearGradient>
        <linearGradient id="${p}-wall" x1="0" y1="0" x2=".35" y2="1">
          <stop offset="0" stop-color="#b9b5c8" stop-opacity=".46"/><stop offset=".42" stop-color="#777c98" stop-opacity=".36"/><stop offset="1" stop-color="#3f4268" stop-opacity=".68"/>
        </linearGradient>
        <linearGradient id="${p}-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f4c4d6" stop-opacity=".55"/><stop offset=".42" stop-color="#8fd4c8" stop-opacity=".42"/><stop offset=".72" stop-color="#f5d38b" stop-opacity=".38"/><stop offset="1" stop-color="#a48bd8" stop-opacity=".48"/>
        </linearGradient>
        <linearGradient id="${p}-warm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#fff9d8"/><stop offset=".44" stop-color="#ffdc92"/><stop offset="1" stop-color="#ef9f55"/>
        </linearGradient>
        <linearGradient id="${p}-door" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ffcf88"/><stop offset=".7" stop-color="#c97a77"/><stop offset="1" stop-color="#70405f"/>
        </linearGradient>
        <radialGradient id="${p}-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stop-color="#ffe3a0" stop-opacity=".46"/><stop offset=".46" stop-color="#ffc978" stop-opacity=".18"/><stop offset="1" stop-color="#f5b970" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="${p}-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0" stop-color="#c7b1ef" stop-opacity=".18"/><stop offset=".55" stop-color="#8fd4c8" stop-opacity=".06"/><stop offset="1" stop-color="#8fd4c8" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="${p}-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#8fc4a8" stop-opacity=".22"/><stop offset="1" stop-color="#6b5a8f" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="52" rx="55" ry="45" fill="url(#${p}-halo)"/>
      <ellipse cx="60" cy="95" rx="47" ry="7" fill="#05040b" opacity=".55"/>
      <ellipse cx="46" cy="75" rx="39" ry="26" fill="url(#${p}-glow)"/>
      <!-- 左侧烟囱 -->
      <rect x="24" y="13" width="9" height="29" rx="1.8" fill="url(#${p}-roof2)" stroke="#d7c6e8" stroke-opacity=".34"/>
      <rect x="21.5" y="10" width="14" height="4.2" rx="1.6" fill="#9b86bb" stroke="#e0d1ee" stroke-opacity=".34"/>
      <path d="M29 8 C27 4 32 3 30 0" fill="none" stroke="#d8c7ec" stroke-opacity=".32" stroke-width="1.1" stroke-linecap="round"/>
      <!-- 墙体 -->
      <path d="M16 48 Q16 43 21.5 43 H80 Q87 43 87 49 V85 Q87 90 81 90 H21.5 Q16 90 16 85 Z" fill="url(#${p}-wall)" stroke="#e1d2ec" stroke-opacity=".46" stroke-width="1.2"/>
      <path d="M77 47 H109 Q115 47 115 53 V85 Q115 90 108 90 H81 Z" fill="url(#${p}-wall)" stroke="#e1d2ec" stroke-opacity=".38" stroke-width="1.1"/>
      <!-- 彩玻璃墙 -->
      <g opacity=".92">
        <path d="M20 53 L34 46 L46 50 L45 86 L20 86 Z" fill="#7fc7bc" opacity=".34"/>
        <path d="M46 50 L63 42 L78 47 L78 86 L45 86 Z" fill="#df9ebc" opacity=".28"/>
        <path d="M81 52 L95 46 L106 50 L108 86 L81 86 Z" fill="#e7ad68" opacity=".26"/>
        <path d="M18 55 L45 49 L78 55 L108 51" stroke="#fff4df" stroke-opacity=".22" fill="none" stroke-width=".8"/>
        <path d="M18 70 L45 65 L78 72 L108 67" stroke="#fff4df" stroke-opacity=".16" fill="none" stroke-width=".8"/>
        <path d="M33 47 L31 86 M62 43 L63 86 M95 47 L97 86" stroke="#f6e6ef" stroke-opacity=".2" fill="none" stroke-width=".7"/>
        <path d="M20 58 L45 53 L78 58 L108 54" stroke="#a485c8" stroke-opacity=".28" fill="none" stroke-width="1.4"/>
      </g>
      <!-- 屋顶：左高右低双山墙 -->
      <path d="M7 50 Q8 43 17 36 L42 18 Q46.5 14.6 51 18.5 L76 38 Q84 44 83 52 L80 55 L16 55 Z" fill="url(#${p}-roof)" stroke="#efe0f3" stroke-opacity=".66" stroke-width="1.4"/>
      <path d="M69 49 L87 28 Q90.5 24 94.5 27.8 L113 47 Q117.5 51 111 55 L84 55 L76 55 Z" fill="url(#${p}-roof2)" stroke="#efe0f3" stroke-opacity=".56" stroke-width="1.3"/>
      <path d="M11 50 Q43 40 78 50" stroke="#fff5e0" stroke-opacity=".26" fill="none" stroke-width="1"/>
      <path d="M76 34 L92 44" stroke="#e7d7ef" stroke-opacity=".32" stroke-width=".8"/>
      <g fill="none" stroke="#ead9f2" stroke-opacity=".3" stroke-width=".7">
        <path d="M19 44 L43 26 L65 41"/><path d="M78 47 L93 33 L105 43"/>
        <path d="M23 50 L52 50"/><path d="M90 50 L108 50"/>
      </g>
      <!-- 屋脊星饰 -->
      <g transform="translate(44 20)">
        <path d="M0 -5 L1.3 -1.3 L5 0 L1.3 1.3 L0 5 L-1.3 1.3 L-5 0 L-1.3 -1.3 Z" fill="#ffe8a8" opacity=".95"/>
        <circle cx="0" cy="0" r="1.2" fill="#fff9e2"/>
      </g>
      <!-- 山墙小圆窗 -->
      <path d="M37 34 Q32 39 35 44 Q41 47 46 43 Q47 36 40 33 Z" fill="#f3cf85" opacity=".62" stroke="#f8eccb" stroke-opacity=".6" stroke-width=".8"/>
      <!-- 暖窗 -->
      <g>
        <rect x="25" y="59" width="15" height="17" rx="3.2" fill="url(#${p}-warm)" stroke="#46334f" stroke-width="2"/>
        <path d="M32.5 60 V74 M26 67.5 H39.5" stroke="#e8b46e" stroke-opacity=".85" stroke-width="1"/>
        <rect x="87" y="59" width="15" height="17" rx="3.2" fill="url(#${p}-warm)" stroke="#46334f" stroke-width="2"/>
        <path d="M94.5 60 V74 M88 67.5 H101.5" stroke="#e8b46e" stroke-opacity=".85" stroke-width="1"/>
        <rect x="91" y="44" width="6" height="9" rx="2" fill="url(#${p}-warm)" opacity=".86" stroke="#5b4264" stroke-width="1"/>
      </g>
      <!-- 门与暖光 -->
      <path d="M50 87 V68 Q50 60.5 58 60.5 Q66 60.5 66 68 V87 Z" fill="url(#${p}-door)" stroke="#e7c07f" stroke-opacity=".62" stroke-width="1.2"/>
      <path d="M53 86 V69 Q53 64 58 64 Q63 64 63 69 V86 Z" fill="#b56a76" opacity=".82"/>
      <path d="M53 68 Q58 60 63 68" fill="url(#${p}-warm)" opacity=".92"/>
      <circle cx="61.6" cy="79" r="1.1" fill="#fff0bc"/>
      <path d="M49 87 H67" stroke="#f0d49a" stroke-opacity=".4" stroke-width="1"/>
      <!-- 门前花与地灯 -->
      <g>
        <path d="M16 87 H87 M78 87 H115" stroke="#e5d3ef" stroke-opacity=".36" stroke-width="1.2"/>
        <path d="M17 90 H115" stroke="#0b0817" stroke-opacity=".55" stroke-width="1.2"/>
        <path d="M20 90 Q25 84 31 90 Z" fill="url(#${p}-ground)"/>
        <path d="M89 90 Q95 83 101 90 Z" fill="url(#${p}-ground)"/>
        <circle cx="30" cy="88" r="1.5" fill="#ffd98b" opacity=".8"/>
        <circle cx="100" cy="88" r="1.3" fill="#8fd4c8" opacity=".7"/>
        <circle cx="34" cy="86" r=".8" fill="#ffc7dc" opacity=".7"/>
        <circle cx="95" cy="86" r=".7" fill="#c6b1ef" opacity=".7"/>
      </g>
    </svg>`;
  }

  /* ---------------- 棋盘星、空玻璃格与完整原画 ---------------- */
  const spriteCache = new Map();
  const artCache = new Map();
  function clearSpriteCache() { spriteCache.clear(); artCache.clear(); }

  function makeStarSprite(color, cell, dpr, variant) {
    const key = `${ART_VERSION}|${color}|${cell.toFixed(2)}|${dpr}|${variant.toFixed(2)}`;
    if (spriteCache.has(key)) return spriteCache.get(key);
    const sc = starColor(color);
    const S = Math.max(22, cell * 1.44);
    const cv = document.createElement('canvas');
    cv.width = Math.ceil(S * dpr);
    cv.height = Math.ceil(S * dpr);
    const c = cv.getContext('2d');
    c.scale(dpr, dpr);
    const cx = S / 2, cy = S / 2;

    // 1) 柔和但色相明确的 bloom：让相邻星点之间只留很细的夜空缝。
    c.globalCompositeOperation = 'lighter';
    let g = c.createRadialGradient(cx, cy, 0, cx, cy, S * .43);
    g.addColorStop(0, rgba(sc.ray, .34));
    g.addColorStop(.30, rgba(sc.halo, .22));
    g.addColorStop(.64, rgba(sc.halo, .08));
    g.addColorStop(1, rgba(sc.halo, 0));
    c.fillStyle = g;
    c.beginPath(); c.arc(cx, cy, S * .43, 0, Math.PI * 2); c.fill();

    // 2) 饱满的四芒星体：用实心星形取代原来的细十字，空隙自然变小。
    const outer = S * .36;
    const inner = S * (.165 + variant * .014);
    const starPath = (rOut, rIn) => {
      c.beginPath();
      for (let i = 0; i < 8; i++) {
        const a = -Math.PI / 2 + i * Math.PI / 4;
        const r = i % 2 ? rIn : rOut;
        const px = cx + Math.cos(a) * r, py = cy + Math.sin(a) * r;
        if (i === 0) c.moveTo(px, py); else c.lineTo(px, py);
      }
      c.closePath();
    };
    let body = c.createRadialGradient(cx - S * .015, cy - S * .02, 0, cx, cy, outer);
    body.addColorStop(0, rgba(sc.core, .96));
    body.addColorStop(.18, rgba(sc.ray, .95));
    body.addColorStop(.48, rgba(sc.ray, .92));
    body.addColorStop(.78, rgba(sc.ray, .50));
    body.addColorStop(1, rgba(sc.halo, 0));
    c.fillStyle = body;
    starPath(outer, inner);
    c.fill();

    // 3) 细长星芒：只在星体尖外延伸一点，保留“星”的锋利感。
    c.lineCap = 'round';
    for (const [dx, dy, len] of [[1, 0, .50], [-1, 0, .50], [0, 1, .53], [0, -1, .53]]) {
      const grd = c.createLinearGradient(cx, cy, cx + dx * S * len, cy + dy * S * len);
      grd.addColorStop(0, rgba(sc.core, .62));
      grd.addColorStop(.30, rgba(sc.ray, .58));
      grd.addColorStop(.72, rgba(sc.ray, .18));
      grd.addColorStop(1, rgba(sc.halo, 0));
      c.strokeStyle = grd; c.lineWidth = S * .023;
      c.beginPath();
      c.moveTo(cx + dx * S * .09, cy + dy * S * .09);
      c.lineTo(cx + dx * S * len, cy + dy * S * len);
      c.stroke();
    }
    for (const [dx, dy] of [[.7, .7], [-.7, .7], [.7, -.7], [-.7, -.7]]) {
      const len = S * (.19 + variant * .02);
      const grd = c.createLinearGradient(cx, cy, cx + dx * len, cy + dy * len);
      grd.addColorStop(0, rgba(sc.ray, .32)); grd.addColorStop(1, rgba(sc.halo, 0));
      c.strokeStyle = grd; c.lineWidth = S * .016;
      c.beginPath(); c.moveTo(cx + dx * S * .07, cy + dy * S * .07); c.lineTo(cx + dx * len, cy + dy * len); c.stroke();
    }

    // 4) 近白的饱满光心：确保缩到 390 宽也是一颗亮星，不是暗点。
    g = c.createRadialGradient(cx - S * .008, cy - S * .012, 0, cx, cy, S * .13);
    g.addColorStop(0, rgba(sc.core, .98));
    g.addColorStop(.30, rgba(sc.core, .72));
    g.addColorStop(.58, rgba(sc.ray, .48));
    g.addColorStop(1, rgba(sc.ray, 0));
    c.fillStyle = g;
    c.beginPath(); c.arc(cx, cy, S * .13, 0, Math.PI * 2); c.fill();

    c.strokeStyle = rgba(sc.core, .78); c.lineWidth = .9;
    c.beginPath(); c.moveTo(cx - S * .04, cy); c.lineTo(cx + S * .04, cy);
    c.moveTo(cx, cy - S * .04); c.lineTo(cx, cy + S * .04); c.stroke();
    c.globalCompositeOperation = 'source-over';
    const out = { canvas: cv, size: S };
    spriteCache.set(key, out);
    return out;
  }

  // 完整原画的一格：像彩色玻璃小切面，格心颜色仍是关卡数据里的本格颜色。
  function paintFacet(ctx, x, y, cell, color, alpha) {
    const p = PALETTE[color] || { fill: '#555', glow: '#aaa' };
    ctx.save();
    ctx.globalAlpha = alpha == null ? 1 : alpha;
    const pad = Math.max(.6, cell * .035);
    // 底层本色
    ctx.fillStyle = p.fill;
    ctx.fillRect(x, y, cell + .25, cell + .25);
    // 切面明暗：只在左上角受光、右下角入影，格心尽量保住本格本色。
    let g = ctx.createLinearGradient(x, y, x + cell * .82, y + cell * .82);
    g.addColorStop(0, 'rgba(255,249,230,.24)');
    g.addColorStop(.30, 'rgba(255,247,224,.04)');
    g.addColorStop(.62, 'rgba(255,247,224,0)');
    g.addColorStop(1, 'rgba(5,4,13,.26)');
    ctx.fillStyle = g;
    ctx.fillRect(x, y, cell + .25, cell + .25);
    // 玻璃高光斜纹
    ctx.fillStyle = 'rgba(255,252,240,.1)';
    ctx.beginPath();
    ctx.moveTo(x, y + cell * .62);
    ctx.lineTo(x + cell * .54, y);
    ctx.lineTo(x + cell * .78, y);
    ctx.lineTo(x, y + cell * .84);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(5,4,14,.10)';
    ctx.beginPath();
    ctx.moveTo(x + cell, y + cell * .34);
    ctx.lineTo(x + cell * .72, y + cell);
    ctx.lineTo(x + cell, y + cell);
    ctx.closePath(); ctx.fill();
    // 色心：保持本格颜色，而不是把格心洗成浅色光斑
    g = ctx.createRadialGradient(x + cell * .46, y + cell * .44, 0, x + cell * .5, y + cell * .5, cell * .64);
    g.addColorStop(0, rgba(p.fill, .22));
    g.addColorStop(.62, rgba(p.glow, .10));
    g.addColorStop(1, rgba(p.glow, 0));
    ctx.fillStyle = g;
    ctx.fillRect(x, y, cell + .25, cell + .25);
    // 确定性颗粒，保留像素画手作感
    const h = hash2(x, y, 5), h2 = hash2(x, y, 9), h3 = hash2(x, y, 31);
    ctx.fillStyle = 'rgba(255,248,230,.12)';
    ctx.fillRect(x + cell * (.12 + h * .62), y + cell * (.16 + h2 * .58), Math.max(1, cell * .07), Math.max(1, cell * .05));
    ctx.fillStyle = 'rgba(6,4,14,.1)';
    ctx.fillRect(x + cell * (.18 + h2 * .6), y + cell * (.2 + h3 * .56), Math.max(1, cell * .06), Math.max(1, cell * .05));
    // 玻璃铅条
    ctx.fillStyle = 'rgba(7,5,16,.26)';
    ctx.fillRect(x + cell - pad, y, pad, cell);
    ctx.fillRect(x, y + cell - pad, cell, pad);
    ctx.fillStyle = 'rgba(255,246,225,.16)';
    ctx.fillRect(x, y, cell, Math.max(.7, pad * .72));
    ctx.fillRect(x, y, Math.max(.7, pad * .72), cell);
    ctx.restore();
  }

  function fullArtCanvas(level, size, dpr) {
    const key = `${ART_VERSION}|${level.id || 'level'}|${Math.round(size)}|${dpr}`;
    if (artCache.has(key)) return artCache.get(key);
    const cv = document.createElement('canvas');
    cv.width = Math.max(1, Math.round(size * dpr));
    cv.height = Math.max(1, Math.round(size * dpr));
    const c = cv.getContext('2d');
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    const N = level.cells.length, cell = size / N;
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      paintFacet(c, x * cell, y * cell, cell, level.cells[y][x], 1);
    }
    // 画面整体空气感
    const g = c.createLinearGradient(0, 0, size, size);
    g.addColorStop(0, 'rgba(255,231,177,.07)');
    g.addColorStop(.42, 'rgba(255,247,225,.018)');
    g.addColorStop(1, 'rgba(118,95,180,.07)');
    c.fillStyle = g; c.fillRect(0, 0, size, size);
    // 星屑与柔光：让完整原画像一块被点亮的彩窗
    c.save();
    c.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 18; i++) {
      const px = size * hash2(i, 4, 41);
      const py = size * hash2(i, 9, 43);
      const a = .08 + hash2(i, 2, 47) * .18;
      const r = .7 + hash2(i, 6, 53) * 1.3;
      c.fillStyle = `rgba(255,244,210,${a})`;
      c.beginPath();
      for (let k = 0; k < 4; k++) {
        const ang = k * Math.PI / 2;
        c.lineTo(px + Math.cos(ang) * r * 2.7, py + Math.sin(ang) * r * 2.7);
        c.lineTo(px + Math.cos(ang + Math.PI / 4) * r * .55, py + Math.sin(ang + Math.PI / 4) * r * .55);
      }
      c.closePath(); c.fill();
    }
    c.restore();
    // 低分辨率回采的柔光，不靠降画质
    try {
      const bcv = document.createElement('canvas');
      bcv.width = Math.max(8, Math.round(cv.width / 4));
      bcv.height = Math.max(8, Math.round(cv.height / 4));
      const bc = bcv.getContext('2d');
      bc.imageSmoothingEnabled = true;
      bc.drawImage(cv, 0, 0, bcv.width, bcv.height);
      c.save();
      c.setTransform(1, 0, 0, 1, 0, 0);
      c.globalCompositeOperation = 'lighter';
      c.globalAlpha = .10;
      c.imageSmoothingEnabled = true;
      c.drawImage(bcv, 0, 0, cv.width, cv.height);
      c.restore();
    } catch (e) { /* 老浏览器忽略柔光，不改主画面 */ }
    artCache.set(key, cv);
    return cv;
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

    // 摘星阶段：画布完全透明。星星直接长在页面夜空中；
    // 没有被摘走的格子底、没有棋盘线、没有装饰散星，摘走一颗就露出真夜空。
    const reveal = opts.reveal == null ? (opts.complete ? 1 : 0) : clamp(opts.reveal, 0, 1);
    if (reveal < 1) {
      for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
          const color = game.board[y][x];
          if (!color) continue;
          const index = y * N + x;
          const claim = game.claimed.get(index);
          const phase = hash2(x, y, 11);
          const variant = hash2(x, y, 17);
          const tw = .5 + .5 * Math.sin((t / 1100) * Math.PI * 2 + phase * Math.PI * 2);
          const highlighted = !!opts.highlightColor && opts.highlightColor === color;
          // 所有星同一亮度：不再按“是否在画边”提亮或压暗。
          let alpha = .82 + tw * .18;
          if (claim) alpha = Math.min(1, alpha + .06);
          if (highlighted) alpha = 1;
          const sprite = makeStarSprite(color, cell, dpr, variant);
          // 大小只由格子密度/DPR 定死，闪烁只改亮度，不随剩余数量变大。
          const s = sprite.size * (.994 + tw * .012);
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.translate(x * cell + cell / 2, y * cell + cell / 2);
          const tilt = (hash2(x, y, 3) - .5) * .16;
          ctx.rotate(tilt);
          ctx.drawImage(sprite.canvas, -s / 2, -s / 2, s, s);
          ctx.restore();

          if (highlighted) {
            const sc = starColor(color);
            const cx = x * cell + cell / 2, cy = y * cell + cell / 2;
            ctx.save();
            const hg = ctx.createRadialGradient(cx, cy, 0, cx, cy, cell * .72);
            hg.addColorStop(0, rgba(sc.core, .20));
            hg.addColorStop(.55, rgba(sc.ray, .10));
            hg.addColorStop(1, rgba(sc.ray, 0));
            ctx.fillStyle = hg;
            ctx.beginPath(); ctx.arc(cx, cy, cell * .72, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = rgba(sc.core, .62);
            ctx.lineWidth = 1.25;
            ctx.beginPath(); ctx.arc(cx, cy, cell * .47, 0, Math.PI * 2); ctx.stroke();
            ctx.restore();
          }
          if (claim) {
            // 精灵认领后只加一点心光，不画环、不提示解序。
            const cx = x * cell + cell / 2, cy = y * cell + cell / 2;
            const sc = starColor(color);
            const pulse = (Math.sin(t / 180 + phase * 6) + 1) / 2;
            ctx.save();
            ctx.globalCompositeOperation = 'lighter';
            const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, cell * .4);
            cg.addColorStop(0, rgba(sc.core, .12 + pulse * .10));
            cg.addColorStop(1, rgba(sc.core, 0));
            ctx.fillStyle = cg;
            ctx.beginPath(); ctx.arc(cx, cy, cell * .4, 0, Math.PI * 2); ctx.fill();
            ctx.restore();
          }
        }
      }
      // 刚摘到的格子闪一下：只有光屑，不留下凹坑或描边。
      if (opts.flashes) {
        for (const f of opts.flashes) {
          const age = t - f.at;
          if (age > 620) continue;
          const a = Math.max(0, 1 - age / 620);
          const cx = (f.x + .5) * cell, cy = (f.y + .5) * cell;
          const sc = starColor(f.color);
          ctx.save();
          ctx.globalCompositeOperation = 'lighter';
          const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, cell * 1.15);
          g.addColorStop(0, rgba(sc.core, a * .82));
          g.addColorStop(.26, rgba(sc.ray, a * .48));
          g.addColorStop(1, rgba(sc.ray, 0));
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, cell * 1.15, 0, Math.PI * 2); ctx.fill();
          ctx.restore();
        }
      }
    }

    // 全部摘完：在同一套 N×N 格子上绘制完整原画（没有外框、没有另贴一张图）。
    if (reveal > 0) {
      const art = fullArtCanvas(game.level, size, dpr);
      const artCell = art.width / N;
      if (reveal >= .999) {
        ctx.drawImage(art, 0, 0, size, size);
      } else {
        const p = reveal;
        for (let y = 0; y < N; y++) {
          for (let x = 0; x < N; x++) {
            const sweep = (x + y) / (2 * N - 2);
            const delay = .03 + sweep * .74 + (hash2(x, y, 21) - .5) * .055;
            const local = smooth((p - delay) / .17);
            if (local <= .002) continue;
            ctx.globalAlpha = local;
            ctx.drawImage(art, x * artCell, y * artCell, artCell, artCell, x * cell, y * cell, cell + .25, cell + .25);
          }
        }
        ctx.globalAlpha = 1;
        // 笔刷般的斜向光带
        const q = clamp(p * 1.08 - .04, 0, 1);
        const cx = q * size, cy = q * size;
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.translate(cx, cy);
        ctx.rotate(-Math.PI / 4);
        const band = ctx.createLinearGradient(-size * .6, 0, size * .6, 0);
        band.addColorStop(0, 'rgba(255,244,214,0)');
        band.addColorStop(.34, 'rgba(255,236,180,.22)');
        band.addColorStop(.5, 'rgba(255,252,235,.48)');
        band.addColorStop(.66, 'rgba(255,220,150,.2)');
        band.addColorStop(1, 'rgba(255,244,214,0)');
        ctx.fillStyle = band;
        ctx.fillRect(-size * .8, -Math.max(4, size * .035), size * 1.6, Math.max(8, size * .07));
        ctx.restore();
        // 光带边的细小星屑
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        for (let i = 0; i < 16; i++) {
          const h = hash2(i, Math.floor(q * 90), 7);
          const ss = clamp(q + (h - .5) * .05, 0, 1);
          const along = size * ss;
          const off = (hash2(i, 3, 19) - .5) * size * .16;
          const px2 = along + off * .7, py2 = along - off * .7;
          const a = (1 - Math.abs(q - ss) / .08) * .55;
          if (a <= 0) continue;
          ctx.fillStyle = `rgba(255,244,213,${a})`;
          const r = .8 + hash2(i, 5, 3) * 1.7;
          ctx.beginPath();
          for (let k = 0; k < 4; k++) {
            const ang = k * Math.PI / 2;
            ctx.lineTo(px2 + Math.cos(ang) * r * 2.4, py2 + Math.sin(ang) * r * 2.4);
            ctx.lineTo(px2 + Math.cos(ang + Math.PI / 4) * r * .6, py2 + Math.sin(ang + Math.PI / 4) * r * .6);
          }
          ctx.closePath(); ctx.fill();
        }
        ctx.restore();
      }
      // 完成后的温润空气光；不描外框，避免又变回“金框方板”。
      const breath = .08 + .02 * Math.sin(t / 900);
      ctx.save();
      const g = ctx.createLinearGradient(0, 0, size, size);
      g.addColorStop(0, `rgba(255,236,186,${breath + .02})`);
      g.addColorStop(.4, 'rgba(255,245,215,.012)');
      g.addColorStop(.72, 'rgba(255,219,160,.028)');
      g.addColorStop(1, `rgba(255,245,225,${breath})`);
      ctx.fillStyle = g; ctx.fillRect(0, 0, size, size);
      ctx.globalCompositeOperation = 'lighter';
      const rg = ctx.createRadialGradient(size * .32, size * .22, 0, size * .5, size * .5, size * .8);
      rg.addColorStop(0, 'rgba(255,244,206,.06)');
      rg.addColorStop(.55, 'rgba(255,226,160,.015)');
      rg.addColorStop(1, 'rgba(255,226,160,0)');
      ctx.fillStyle = rg; ctx.fillRect(0, 0, size, size);
      ctx.restore();
    }
  }

  function paintDataURL(level, size, opts) {
    opts = opts || {};
    const cv = fullArtCanvas(level, size, opts.dpr || 1);
    return cv.toDataURL('image/png');
  }

  /* ---------------- 小精灵（首页静态 SVG） ---------------- */
  function fairySVG() {
    return `<svg viewBox="0 0 64 64" role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id="fairy-wing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#fff8e4" stop-opacity=".86"/>
          <stop offset=".46" stop-color="#ffe3a4" stop-opacity=".6"/>
          <stop offset="1" stop-color="#8fd4c8" stop-opacity=".42"/>
        </linearGradient>
        <linearGradient id="fairy-wing2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#ffe9b8" stop-opacity=".7"/>
          <stop offset="1" stop-color="#b79be8" stop-opacity=".32"/>
        </linearGradient>
        <linearGradient id="fairy-dress" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#fff8e7"/>
          <stop offset=".32" stop-color="#ffe2a2"/>
          <stop offset=".8" stop-color="#e8b96d"/>
          <stop offset="1" stop-color="#c98f75"/>
        </linearGradient>
        <radialGradient id="fairy-aura" cx="50%" cy="50%" r="50%">
          <stop offset="0" stop-color="#ffe6a8" stop-opacity=".45"/>
          <stop offset=".5" stop-color="#ffcf7a" stop-opacity=".14"/>
          <stop offset="1" stop-color="#ffcf7a" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="26" fill="url(#fairy-aura)"/>
      <g class="fairy-wings">
        <g class="wing-l">
          <path d="M29 32 C20 14 10 9 8 15 C6 21 15 31 29 35 Z" fill="url(#fairy-wing)" stroke="#fff4d8" stroke-opacity=".72" stroke-width=".8"/>
          <path d="M29 34 C20 41 15 50 20 53 C25 56 30 44 30 37 Z" fill="url(#fairy-wing2)" stroke="#fff4d8" stroke-opacity=".54" stroke-width=".7"/>
          <path d="M28 33 C20 24 14 18 10 16 M28 34 C23 40 20 46 20 51" fill="none" stroke="#fff8e6" stroke-opacity=".46" stroke-width=".6"/>
        </g>
        <g class="wing-r">
          <path d="M35 32 C44 14 54 9 56 15 C58 21 49 31 35 35 Z" fill="url(#fairy-wing)" stroke="#fff4d8" stroke-opacity=".72" stroke-width=".8"/>
          <path d="M35 34 C44 41 49 50 44 53 C39 56 34 44 34 37 Z" fill="url(#fairy-wing2)" stroke="#fff4d8" stroke-opacity=".54" stroke-width=".7"/>
          <path d="M36 33 C44 24 50 18 54 16 M36 34 C41 40 44 46 44 51" fill="none" stroke="#fff8e6" stroke-opacity=".46" stroke-width=".6"/>
        </g>
      </g>
      <g class="fairy-body">
        <path d="M30 41 C29 45 28 47 27 49 M34 41 C35 45 36 47 37 49" fill="none" stroke="#ffe6ae" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M32 31 C36 31 38 35 38 39 C38 43 42 46 43 48 C38 50 26 50 21 48 C22 46 26 43 26 39 C26 35 28 31 32 31 Z" fill="url(#fairy-dress)" stroke="#5b3a51" stroke-opacity=".42" stroke-width=".7"/>
        <path d="M27 38 C31 37 34 37 37 38" fill="none" stroke="#fff9e6" stroke-opacity=".78" stroke-width=".8"/>
        <path d="M27 35 C25 38 24 41 24 44 M37 35 C39 38 40 41 40 44" fill="none" stroke="#ffe2a0" stroke-width="1.35" stroke-linecap="round"/>
        <circle cx="32" cy="26.4" r="4.3" fill="#fff5cf"/>
        <path d="M28 25 C28 21.4 36 21.4 36 25 C34.7 23.6 29.3 23.6 28 25 Z" fill="#c98f75"/>
        <circle cx="30.6" cy="26.6" r=".62" fill="#4a3150"/>
        <circle cx="33.4" cy="26.6" r=".62" fill="#4a3150"/>
        <circle cx="28.9" cy="24.9" r=".8" fill="#fffdf3" opacity=".9"/>
        <path d="M32 32 L33 35 L36 36 L33 37 L32 40 L31 37 L28 36 L31 35 Z" fill="#fff3c4"/>
      </g>
    </svg>`;
  }

  /* ---------------- 小精灵 ---------------- */
  function drawFairy(ctx, x, y, color, opts) {
    opts = opts || {};
    const p = PALETTE[color] || { fill: '#e6cf9d', glow: '#fff1c7' };
    const sc = starColor(color);
    const time = opts.time || 0;
    const phase = opts.phase || 0;
    const idle = !!opts.idle;
    const flap = idle
      ? (.58 + .42 * Math.abs(Math.sin(time * .0019 + phase)))
      : (.55 + .45 * Math.abs(Math.sin(time * .017 + phase)));
    const angle = opts.angle || 0;
    const bob = Math.sin(time * .006 + phase) * (idle ? 1.15 : .55);
    const scale = opts.scale || 1;
    const lit = !!opts.glow;
    ctx.save();
    ctx.translate(x, y + bob);
    if (opts.trail && lit && opts.trail.length > 1) {
      for (let i = Math.max(0, opts.trail.length - 7); i < opts.trail.length - 1; i++) {
        const q = opts.trail[i];
        const a = (i / opts.trail.length) * .16;
        ctx.fillStyle = rgba(sc.ray, a);
        ctx.beginPath(); ctx.arc(q.x - x, q.y - y, 2.4 * (i / opts.trail.length) + .6, 0, Math.PI * 2); ctx.fill();
      }
    }
    ctx.rotate(angle);
    ctx.scale(scale, scale);

    // 载星回程：整个人和翅膀一起亮；空载去程没有外晕。
    if (lit) {
      const aura = ctx.createRadialGradient(0, -2, 0, 0, -2, 25);
      aura.addColorStop(0, rgba(sc.core, .40));
      aura.addColorStop(.34, rgba(p.glow, .22));
      aura.addColorStop(1, rgba(sc.ray, 0));
      ctx.fillStyle = aura;
      ctx.beginPath(); ctx.arc(0, -2, 25, 0, Math.PI * 2); ctx.fill();
    }

    // 玻璃翅：一对上翅 + 一对下翅，根部收在肩后，能看出是“翅”而不是四瓣花。
    const wing = (side) => {
      ctx.save();
      ctx.scale(side * (.58 + .42 * flap), 1);
      ctx.globalCompositeOperation = lit ? 'lighter' : 'source-over';
      // 上翅
      ctx.beginPath();
      ctx.moveTo(1.1, -3.4);
      ctx.bezierCurveTo(5.2, -12.2, 13.6, -13.4, 13.6, -6.1);
      ctx.bezierCurveTo(13.6, -1.6, 6.8, 1.5, 1.2, .2);
      ctx.closePath();
      let wg = ctx.createLinearGradient(1, -9, 13, 3);
      wg.addColorStop(0, rgba(sc.core, lit ? .82 : .46));
      wg.addColorStop(.48, rgba(p.glow, lit ? .58 : .30));
      wg.addColorStop(1, rgba(sc.ray, lit ? .44 : .18));
      ctx.fillStyle = wg;
      ctx.fill();
      ctx.strokeStyle = rgba(sc.core, lit ? .88 : .38);
      ctx.lineWidth = lit ? .8 : .55;
      ctx.stroke();
      // 下翅
      ctx.beginPath();
      ctx.moveTo(1.2, -.2);
      ctx.bezierCurveTo(6.4, 2.6, 9.2, 7.4, 6.2, 11.2);
      ctx.bezierCurveTo(3.8, 14.2, .8, 7.2, .4, 2.4);
      ctx.closePath();
      wg = ctx.createLinearGradient(1, 2, 7, 11);
      wg.addColorStop(0, rgba(p.glow, lit ? .58 : .26));
      wg.addColorStop(1, rgba(sc.ray, lit ? .40 : .15));
      ctx.fillStyle = wg;
      ctx.fill();
      ctx.strokeStyle = rgba(sc.core, lit ? .72 : .30);
      ctx.lineWidth = lit ? .65 : .5;
      ctx.stroke();
      // 翼脉：两条主脉 + 一点横脉
      ctx.strokeStyle = rgba(sc.core, lit ? .62 : .22);
      ctx.lineWidth = .48;
      ctx.beginPath();
      ctx.moveTo(1.4, -3.2); ctx.quadraticCurveTo(7.4, -8.6, 12.8, -7.2);
      ctx.moveTo(1.4, -.4); ctx.quadraticCurveTo(5.6, 4.4, 6.2, 9.6);
      ctx.moveTo(6.2, -5.2); ctx.quadraticCurveTo(8.2, -2.2, 10.4, -1.2);
      ctx.stroke();
      ctx.restore();
    };
    wing(-1); wing(1);

    // 腿：细而短，让剪影从“光球”变成小角色。
    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = rgba(p.fill, lit ? .95 : .82);
    ctx.lineWidth = 1.25;
    ctx.lineCap = 'round';
    const step = Math.sin(time * .014 + phase) * .55;
    ctx.beginPath();
    ctx.moveTo(-1.35, 3.1); ctx.quadraticCurveTo(-1.7 + step, 6.4, -2.5 + step, 8.4);
    ctx.moveTo(1.35, 3.1); ctx.quadraticCurveTo(1.7 - step, 6.4, 2.5 - step, 8.4);
    ctx.stroke();

    // 裙身：上窄下宽，肩、腰、裙摆都能读出来。
    ctx.beginPath();
    ctx.moveTo(-2.55, -3.35);
    ctx.quadraticCurveTo(-1.55, -1.1, -1.7, 1.1);
    ctx.quadraticCurveTo(-2.9, 2.2, -3.55, 3.7);
    ctx.quadraticCurveTo(0, 4.9, 3.55, 3.7);
    ctx.quadraticCurveTo(2.9, 2.2, 1.7, 1.1);
    ctx.quadraticCurveTo(1.55, -1.1, 2.55, -3.35);
    ctx.quadraticCurveTo(0, -4.55, -2.55, -3.35);
    ctx.closePath();
    const bg = ctx.createLinearGradient(0, -4, 0, 4.6);
    bg.addColorStop(0, rgba(sc.core, lit ? .94 : .68));
    bg.addColorStop(.34, rgba(p.glow, lit ? .95 : .78));
    bg.addColorStop(.78, rgba(p.fill, lit ? .98 : .90));
    bg.addColorStop(1, rgba(p.fill, lit ? .92 : .84));
    ctx.fillStyle = bg;
    ctx.fill();
    ctx.strokeStyle = rgba('#231735', .48);
    ctx.lineWidth = .55;
    ctx.stroke();
    // 腰间的一点亮带
    ctx.strokeStyle = rgba(sc.core, lit ? .9 : .5);
    ctx.lineWidth = .7;
    ctx.beginPath(); ctx.moveTo(-1.9, -.1); ctx.quadraticCurveTo(0, .65, 1.9, -.1); ctx.stroke();

    // 手臂：空载时垂在身侧，载星时在胸前捧住那颗星。
    ctx.strokeStyle = rgba(p.glow, lit ? .98 : .84);
    ctx.lineWidth = 1.1;
    ctx.beginPath();
    if (opts.carrying) {
      ctx.moveTo(-2.2, -2.7); ctx.quadraticCurveTo(-4.1, -.4, -1.7, 1.9);
      ctx.moveTo(2.2, -2.7); ctx.quadraticCurveTo(4.1, -.4, 1.7, 1.9);
    } else {
      ctx.moveTo(-2.2, -2.7); ctx.quadraticCurveTo(-3.5, -.2, -3.2, 2.5);
      ctx.moveTo(2.2, -2.7); ctx.quadraticCurveTo(3.5, -.2, 3.2, 2.5);
    }
    ctx.stroke();

    // 头：圆头 + 深色发际 + 两点眼睛，确保缩到一格内仍能读成“有身体的小精灵”。
    const headY = -6.9, headR = 2.55;
    const hg = ctx.createRadialGradient(-.7, headY - .9, 0, 0, headY, headR);
    hg.addColorStop(0, rgba(sc.core, .99));
    hg.addColorStop(.44, rgba(p.glow, .98));
    hg.addColorStop(.86, rgba(p.fill, .98));
    hg.addColorStop(1, rgba(p.fill, .9));
    ctx.fillStyle = hg;
    ctx.beginPath(); ctx.arc(0, headY, headR, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = rgba('#231735', .42); ctx.lineWidth = .45; ctx.stroke();
    // 头发：上缘一笔，颜色取该组更深的一端
    ctx.fillStyle = rgba(p.fill, .94);
    ctx.beginPath();
    ctx.arc(0, headY, headR, Math.PI * 1.03, Math.PI * 1.97);
    ctx.quadraticCurveTo(1.4, headY - 1.5, 0, headY - 1.1);
    ctx.quadraticCurveTo(-1.4, headY - 1.5, -headR, headY);
    ctx.closePath(); ctx.fill();
    // 眼睛与面部高光
    ctx.fillStyle = 'rgba(38,26,58,.78)';
    ctx.beginPath(); ctx.arc(-.85, headY + .18, .42, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(.85, headY + .18, .42, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = rgba(sc.core, .8);
    ctx.beginPath(); ctx.arc(-1.45, headY - .75, .55, 0, Math.PI * 2); ctx.fill();

    // 载星：胸前一颗小星，颜色与所载星一致。
    if (opts.carrying) {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      const st = 2.7 + Math.sin(time * .008) * .3;
      const sg = ctx.createRadialGradient(0, 1.35, 0, 0, 1.35, st * 2.4);
      sg.addColorStop(0, rgba(sc.core, .9));
      sg.addColorStop(.34, rgba(sc.ray, .55));
      sg.addColorStop(1, rgba(sc.ray, 0));
      ctx.fillStyle = sg;
      ctx.beginPath(); ctx.arc(0, 1.35, st * 2.4, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = rgba(sc.core, .98);
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const a = -Math.PI / 2 + i * Math.PI / 4;
        const r = i % 2 ? st * .22 : st;
        const px = Math.cos(a) * r, py = 1.35 + Math.sin(a) * r;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.closePath(); ctx.fill();
      ctx.restore();
    }

    if (lit) {
      // 全身的最后一层柔光：胸口偏上，避免变回一颗纯光球。
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      const full = ctx.createRadialGradient(0, -1.4, 0, 0, -1.4, 12);
      full.addColorStop(0, rgba(sc.core, .18));
      full.addColorStop(.55, rgba(p.glow, .10));
      full.addColorStop(1, rgba(p.glow, 0));
      ctx.fillStyle = full;
      ctx.beginPath(); ctx.arc(0, -1.4, 12, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }
    ctx.restore();
  }

  function drawBurst(ctx, x, y, color, age, seed) {
    const p = PALETTE[color] || { glow: '#ffe8b2', fill: '#fff' };
    const t = Math.min(1, age / 620);
    const e = 1 - Math.pow(1 - t, 3);
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const ringA = (1 - t) * .6;
    ctx.strokeStyle = rgba(p.glow, ringA); ctx.lineWidth = 1.2;
    ctx.beginPath(); ctx.arc(x, y, 3 + e * 18, 0, Math.PI * 2); ctx.stroke();
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * Math.PI * 2 + seed;
      const dist = 2 + e * (11 + (i % 3) * 6);
      const px = x + Math.cos(a) * dist, py = y + Math.sin(a) * dist;
      ctx.fillStyle = rgba(i % 2 ? p.glow : p.fill, (1 - t) * .95);
      ctx.beginPath(); ctx.arc(px, py, 1.6 - t * .7, 0, Math.PI * 2); ctx.fill();
    }
    // 一点十字星屑
    ctx.strokeStyle = rgba('#fff8e7', (1 - t) * .6);
    ctx.lineWidth = .9;
    const r = 3 + e * 9;
    ctx.beginPath(); ctx.moveTo(x - r, y); ctx.lineTo(x + r, y); ctx.moveTo(x, y - r); ctx.lineTo(x, y + r); ctx.stroke();
    ctx.restore();
  }

  global.SHIGUANG_ART = {
    forestSVG, cottageSVG, fairySVG, drawBoard, paintDataURL, fullArtCanvas, drawFairy, drawBurst, starColor,
    clearSpriteCache, palette: PALETTE, hexToRgb, rgba, mix,
  };
})(typeof window !== 'undefined' ? window : globalThis);
