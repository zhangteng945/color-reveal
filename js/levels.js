/* 由 game/tools/design-levels.js 生成。原创像素构图、原创关卡数据。 */
(function (global) {
  'use strict';
  const PALETTE = {
      "ink": {
          "name": "墨蓝",
          "fill": "#211f3d",
          "glow": "#5b4d8e"
      },
      "indigo": {
          "name": "暮蓝",
          "fill": "#34315b",
          "glow": "#7167a8"
      },
      "violet": {
          "name": "鸢尾紫",
          "fill": "#66558f",
          "glow": "#ad8fd6"
      },
      "lilac": {
          "name": "雾紫",
          "fill": "#9b86bb",
          "glow": "#d7c5ef"
      },
      "rose": {
          "name": "晚樱",
          "fill": "#c97c99",
          "glow": "#f4b4ca"
      },
      "coral": {
          "name": "珊瑚",
          "fill": "#d8846f",
          "glow": "#ffbea6"
      },
      "gold": {
          "name": "星金",
          "fill": "#d9a94f",
          "glow": "#ffe08a"
      },
      "cream": {
          "name": "月乳",
          "fill": "#e8d5ae",
          "glow": "#fff1cf"
      },
      "mint": {
          "name": "新芽",
          "fill": "#93c0a8",
          "glow": "#c9f0d9"
      },
      "teal": {
          "name": "湖青",
          "fill": "#4e8b87",
          "glow": "#8ed4cc"
      },
      "moss": {
          "name": "苔绿",
          "fill": "#6f8f5b",
          "glow": "#b5d48f"
      },
      "pine": {
          "name": "松林",
          "fill": "#35594d",
          "glow": "#6f9a83"
      },
      "sky": {
          "name": "晴夜",
          "fill": "#6e9ab3",
          "glow": "#b3d8e8"
      },
      "blue": {
          "name": "海蓝",
          "fill": "#4b6fa4",
          "glow": "#88a9de"
      }
  };
  const LEVELS = [
    {
      id: "glow-path", chapter: "第一幅", name: "萤溪小径", difficulty: "入门", intro: "先摘露在外面的星。",
      palette: ["indigo","violet","cream","gold","pine","teal"],
      cells: [
        ["indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","violet","violet","violet","indigo","indigo"],
        ["indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","violet","cream","cream","violet","indigo","indigo"],
        ["indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","violet","cream","cream","cream","violet","indigo"],
        ["indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","gold","cream","cream","violet","gold","indigo"],
        ["violet","violet","violet","gold","violet","violet","violet","violet","violet","violet","violet","violet","violet","violet","violet","violet"],
        ["violet","violet","violet","violet","violet","violet","violet","violet","violet","pine","pine","gold","violet","violet","violet","violet"],
        ["pine","pine","indigo","indigo","pine","pine","pine","violet","violet","violet","pine","pine","indigo","indigo","indigo","pine"],
        ["pine","pine","indigo","pine","pine","violet","violet","violet","violet","violet","violet","violet","teal","indigo","pine","pine"],
        ["pine","pine","pine","teal","teal","indigo","teal","teal","teal","teal","teal","indigo","pine","teal","pine","pine"],
        ["pine","pine","gold","pine","pine","pine","teal","gold","teal","gold","teal","pine","pine","pine","pine","pine"],
        ["pine","pine","pine","pine","pine","pine","teal","teal","gold","teal","teal","pine","pine","pine","pine","pine"],
        ["pine","pine","pine","pine","pine","pine","teal","teal","gold","teal","teal","pine","pine","pine","pine","pine"],
        ["pine","pine","pine","pine","pine","gold","pine","pine","cream","cream","pine","indigo","pine","gold","pine","pine"],
        ["pine","pine","pine","pine","pine","pine","pine","pine","cream","cream","pine","pine","pine","pine","pine","pine"],
        ["pine","pine","pine","pine","gold","pine","pine","cream","cream","pine","pine","pine","pine","pine","pine","pine"],
        ["pine","pine","pine","pine","pine","pine","pine","cream","pine","pine","pine","pine","pine","pine","pine","pine"],
      ],
      columns: [
        [{"color":"indigo","count":29},{"color":"violet","count":23}],
        [{"color":"pine","count":53},{"color":"teal","count":20}],
        [{"color":"indigo","count":28},{"color":"cream","count":14}],
        [{"color":"pine","count":54},{"color":"violet","count":23},{"color":"gold","count":12}],
      ],
    },
    {
      id: "moon-house", chapter: "第二幅", name: "月下花房", difficulty: "普通", intro: "有的星还埋在画里。",
      palette: ["indigo","lilac","cream","pine","violet","teal","rose","gold"],
      cells: [
        ["indigo","indigo","indigo","indigo","indigo","indigo","indigo","lilac","lilac","lilac","indigo","indigo","indigo","indigo","indigo","indigo"],
        ["indigo","indigo","indigo","indigo","indigo","lilac","cream","cream","cream","cream","lilac","indigo","indigo","indigo","indigo","indigo"],
        ["indigo","indigo","indigo","indigo","indigo","lilac","cream","cream","cream","cream","cream","lilac","indigo","indigo","indigo","indigo"],
        ["indigo","indigo","indigo","indigo","indigo","lilac","cream","cream","lilac","cream","cream","lilac","indigo","indigo","indigo","indigo"],
        ["pine","violet","violet","violet","violet","violet","lilac","lilac","violet","lilac","violet","violet","violet","violet","violet","indigo"],
        ["pine","pine","violet","violet","violet","lilac","violet","violet","violet","violet","lilac","lilac","violet","violet","violet","violet"],
        ["pine","pine","pine","lilac","lilac","violet","violet","violet","violet","violet","violet","violet","lilac","pine","pine","pine"],
        ["pine","pine","lilac","lilac","violet","violet","violet","violet","violet","violet","violet","violet","lilac","lilac","pine","pine"],
        ["pine","pine","lilac","teal","teal","teal","teal","teal","teal","teal","teal","teal","teal","lilac","pine","pine"],
        ["pine","pine","lilac","rose","teal","teal","teal","rose","teal","teal","teal","rose","teal","lilac","pine","pine"],
        ["indigo","indigo","lilac","teal","teal","teal","gold","gold","gold","gold","teal","teal","teal","lilac","indigo","indigo"],
        ["indigo","indigo","lilac","teal","teal","rose","gold","gold","gold","gold","teal","teal","teal","lilac","indigo","indigo"],
        ["indigo","indigo","lilac","teal","teal","teal","gold","gold","gold","gold","teal","teal","teal","lilac","indigo","indigo"],
        ["teal","teal","lilac","lilac","cream","lilac","lilac","lilac","lilac","lilac","lilac","lilac","rose","lilac","teal","teal"],
        ["gold","teal","rose","teal","teal","gold","teal","teal","teal","teal","teal","cream","teal","teal","rose","cream"],
        ["pine","pine","pine","pine","pine","pine","pine","pine","pine","pine","pine","pine","pine","pine","pine","pine"],
      ],
      columns: [
        [{"color":"rose","count":7},{"color":"pine","count":19},{"color":"lilac","count":22},{"color":"teal","count":16},{"color":"cream","count":16}],
        [{"color":"indigo","count":19},{"color":"violet","count":19},{"color":"lilac","count":21},{"color":"gold","count":14}],
        [{"color":"indigo","count":18},{"color":"teal","count":16},{"color":"indigo","count":17}],
        [{"color":"pine","count":18},{"color":"teal","count":16},{"color":"violet","count":18}],
      ],
    },
    {
      id: "paper-harbor", chapter: "第三幅", name: "纸船星港", difficulty: "进阶", intro: "取走队首，后面的罐子会补上来。",
      palette: ["indigo","lilac","cream","gold","violet","blue","teal"],
      cells: [
        ["indigo","indigo","lilac","lilac","lilac","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo"],
        ["indigo","lilac","cream","cream","cream","lilac","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo"],
        ["indigo","cream","cream","cream","cream","lilac","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","gold","indigo"],
        ["indigo","lilac","cream","cream","cream","lilac","indigo","indigo","indigo","indigo","indigo","gold","indigo","indigo","indigo","indigo"],
        ["indigo","indigo","lilac","lilac","lilac","indigo","gold","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo"],
        ["indigo","gold","indigo","indigo","indigo","indigo","indigo","violet","lilac","violet","violet","violet","indigo","gold","indigo","indigo"],
        ["indigo","indigo","indigo","indigo","indigo","violet","violet","violet","lilac","violet","gold","violet","violet","violet","indigo","indigo"],
        ["violet","violet","violet","violet","violet","violet","violet","cream","lilac","cream","violet","gold","violet","violet","violet","violet"],
        ["blue","blue","blue","blue","blue","blue","cream","cream","lilac","cream","cream","blue","blue","blue","blue","blue"],
        ["blue","blue","blue","blue","blue","blue","cream","cream","lilac","cream","cream","blue","blue","blue","blue","blue"],
        ["cream","teal","cream","teal","teal","cream","cream","cream","lilac","cream","cream","cream","teal","cream","blue","cream"],
        ["teal","teal","teal","gold","lilac","lilac","lilac","lilac","lilac","lilac","lilac","lilac","indigo","teal","teal","teal"],
        ["teal","teal","teal","blue","cream","cream","cream","cream","cream","cream","cream","cream","teal","teal","teal","blue"],
        ["blue","cream","blue","blue","blue","gold","cream","cream","cream","cream","indigo","blue","gold","blue","blue","blue"],
        ["blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","gold","blue","blue","blue","blue","blue"],
        ["blue","blue","blue","blue","blue","blue","blue","gold","blue","blue","blue","blue","blue","blue","cream","blue"],
      ],
      columns: [
        [{"color":"blue","count":21},{"color":"lilac","count":25},{"color":"teal","count":16}],
        [{"color":"indigo","count":22},{"color":"cream","count":22},{"color":"indigo","count":18},{"color":"gold","count":12}],
        [{"color":"blue","count":22},{"color":"blue","count":19},{"color":"violet","count":23}],
        [{"color":"indigo","count":18},{"color":"cream","count":22},{"color":"indigo","count":16}],
      ],
    },
    {
      id: "mist-lodge", chapter: "第四幅", name: "雾岭灯屋", difficulty: "困难", intro: "给下一罐留一个位子。",
      palette: ["indigo","gold","lilac","cream","mint","violet","rose","pine"],
      cells: [
        ["indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo"],
        ["indigo","indigo","indigo","gold","indigo","indigo","indigo","indigo","indigo","indigo","indigo","lilac","cream","cream","cream","indigo"],
        ["indigo","indigo","indigo","indigo","indigo","lilac","gold","lilac","lilac","lilac","lilac","cream","cream","cream","cream","indigo"],
        ["indigo","lilac","lilac","lilac","lilac","indigo","indigo","indigo","indigo","indigo","indigo","mint","cream","cream","indigo","indigo"],
        ["violet","gold","violet","violet","violet","mint","mint","mint","mint","mint","gold","violet","violet","violet","violet","violet"],
        ["violet","violet","mint","mint","mint","violet","violet","violet","violet","violet","violet","violet","violet","violet","violet","gold"],
        ["indigo","indigo","indigo","indigo","indigo","indigo","violet","violet","violet","violet","violet","violet","indigo","indigo","indigo","indigo"],
        ["indigo","indigo","indigo","indigo","indigo","violet","violet","violet","rose","violet","violet","violet","violet","violet","indigo","indigo"],
        ["pine","violet","pine","lilac","lilac","lilac","lilac","rose","rose","rose","violet","violet","pine","lilac","pine","lilac"],
        ["pine","lilac","pine","lilac","lilac","rose","rose","rose","rose","rose","rose","rose","pine","lilac","pine","lilac"],
        ["pine","lilac","gold","lilac","lilac","lilac","cream","cream","cream","cream","cream","lilac","pine","lilac","pine","lilac"],
        ["pine","pine","gold","pine","pine","mint","cream","gold","cream","gold","cream","pine","pine","pine","pine","pine"],
        ["pine","pine","pine","pine","gold","lilac","cream","cream","gold","cream","cream","pine","pine","pine","pine","pine"],
        ["pine","pine","pine","pine","gold","pine","cream","cream","gold","cream","cream","gold","pine","pine","pine","pine"],
        ["pine","pine","pine","pine","pine","pine","lilac","lilac","lilac","pine","pine","gold","pine","pine","pine","pine"],
        ["lilac","lilac","pine","pine","pine","pine","lilac","lilac","pine","lilac","pine","pine","pine","lilac","lilac","lilac"],
      ],
      columns: [
        [{"color":"pine","count":19},{"color":"pine","count":19},{"color":"violet","count":18}],
        [{"color":"lilac","count":20},{"color":"cream","count":25},{"color":"indigo","count":18}],
        [{"color":"indigo","count":22},{"color":"indigo","count":19},{"color":"gold","count":15},{"color":"mint","count":10}],
        [{"color":"pine","count":20},{"color":"lilac","count":20},{"color":"violet","count":20},{"color":"rose","count":11}],
      ],
    },
    {
      id: "dawn-lily", chapter: "第五幅", name: "破晓铃兰", difficulty: "终章", intro: "最后一幅画，慢慢来。",
      palette: ["indigo","violet","gold","cream","lilac","rose","pine","mint"],
      cells: [
        ["indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo"],
        ["indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo","indigo"],
        ["violet","violet","violet","violet","violet","violet","gold","gold","gold","gold","violet","violet","violet","violet","violet","violet"],
        ["violet","violet","violet","violet","violet","violet","cream","gold","cream","cream","gold","violet","violet","violet","violet","violet"],
        ["lilac","gold","lilac","lilac","lilac","gold","cream","cream","cream","cream","gold","lilac","lilac","lilac","lilac","lilac"],
        ["lilac","lilac","lilac","lilac","lilac","lilac","gold","cream","cream","gold","lilac","lilac","lilac","lilac","gold","lilac"],
        ["rose","rose","rose","rose","rose","violet","violet","violet","violet","violet","rose","rose","rose","rose","rose","rose"],
        ["rose","rose","rose","gold","violet","pine","violet","violet","violet","violet","violet","pine","rose","rose","rose","rose"],
        ["pine","violet","pine","pine","violet","pine","violet","violet","pine","violet","gold","pine","pine","violet","pine","pine"],
        ["pine","violet","pine","pine","violet","pine","gold","mint","pine","violet","violet","pine","pine","violet","pine","pine"],
        ["pine","violet","pine","pine","pine","pine","mint","mint","pine","pine","violet","pine","pine","pine","pine","pine"],
        ["pine","pine","pine","pine","pine","cream","cream","mint","pine","pine","cream","cream","cream","pine","pine","pine"],
        ["pine","cream","cream","cream","pine","gold","cream","cream","cream","pine","cream","gold","cream","pine","cream","cream"],
        ["pine","cream","cream","cream","pine","pine","cream","cream","gold","pine","cream","pine","pine","cream","gold","cream"],
        ["pine","pine","pine","cream","cream","cream","mint","mint","cream","cream","cream","pine","cream","cream","cream","pine"],
        ["mint","mint","mint","cream","gold","cream","mint","mint","cream","gold","cream","mint","cream","gold","cream","mint"],
      ],
      columns: [
        [{"color":"indigo","count":16},{"color":"cream","count":19},{"color":"violet","count":15},{"color":"cream","count":13}],
        [{"color":"violet","count":16},{"color":"gold","count":22},{"color":"pine","count":16},{"color":"mint","count":13}],
        [{"color":"pine","count":22},{"color":"pine","count":19},{"color":"lilac","count":20}],
        [{"color":"indigo","count":16},{"color":"violet","count":16},{"color":"cream","count":15},{"color":"rose","count":18}],
      ],
    },
  ];
  const SOLUTIONS = {
    "glow-path": [3,0,1,2,3,0,1,2,3],
    "moon-house": [1,3,2,1,1,2,2,3,3,1,0,0,0,0,0],
    "paper-harbor": [1,2,3,0,1,2,3,0,1,2,3,0,1],
    "mist-lodge": [2,3,0,1,2,3,0,1,2,3,0,1,2,3],
    "dawn-lily": [3,0,3,2,1,0,1,2,3,0,1,2,3,0,1],
  };
  global.SHIGUANG_PALETTE = PALETTE;
  global.SHIGUANG_LEVELS = LEVELS;
  global.SHIGUANG_PROOFS = SOLUTIONS;
})(typeof window !== 'undefined' ? window : globalThis);
