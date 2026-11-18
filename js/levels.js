/* 由 game/tools/build-levels.js 从卡通原图生成。原创卡通画、原创关卡数据。 */
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
  },
  "sand": {
    "name": "沙金",
    "fill": "#b08a62",
    "glow": "#e5c08f"
  },
  "plum": {
    "name": "梅紫",
    "fill": "#7c4b6b",
    "glow": "#c98bb4"
  }
};
  const LEVELS = [
  {
    "id": "glow-path",
    "file": "01-glow-path.png",
    "name": "萤溪小径",
    "N": 16,
    "jars": 16,
    "difficulty": "入门",
    "season": "长夜季",
    "night": "第 1 晚",
    "theme": "萤溪与玻璃屋",
    "intro": "先摘露在外面的星。",
    "mechanic": "外沿先摘 · 五槽 · 陆续出巢",
    "colors": [
      "indigo",
      "violet",
      "cream",
      "gold",
      "pine",
      "teal"
    ],
    "palette": [
      "indigo",
      "ink",
      "teal",
      "pine",
      "sand",
      "sky"
    ],
    "cells": [
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "sand",
        "sand",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "sand",
        "sky",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "indigo",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "teal",
        "teal",
        "teal",
        "pine",
        "pine",
        "pine",
        "ink",
        "indigo",
        "indigo",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "teal",
        "teal",
        "teal",
        "pine",
        "pine",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "pine",
        "pine",
        "pine",
        "teal",
        "teal",
        "pine"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal"
      ],
      [
        "pine",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "pine"
      ]
    ],
    "source": "assets/art/01-glow-path.png",
    "density": 16,
    "stars": 256,
    "colorCounts": {
      "indigo": 83,
      "sky": 3,
      "sand": 4,
      "ink": 60,
      "pine": 47,
      "teal": 59
    },
    "targetMoves": 16,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 20
        },
        {
          "color": "indigo",
          "count": 20
        },
        {
          "color": "ink",
          "count": 20
        },
        {
          "color": "sky",
          "count": 3
        }
      ],
      [
        {
          "color": "teal",
          "count": 20
        },
        {
          "color": "indigo",
          "count": 20
        },
        {
          "color": "ink",
          "count": 20
        }
      ],
      [
        {
          "color": "ink",
          "count": 20
        },
        {
          "color": "teal",
          "count": 20
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 3
        },
        {
          "color": "sand",
          "count": 4
        }
      ],
      [
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 20
        },
        {
          "color": "teal",
          "count": 19
        },
        {
          "color": "pine",
          "count": 15
        }
      ]
    ],
    "proof": [
      0,
      1,
      2,
      3,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      2,
      2,
      0
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 20
            },
            {
              "color": "indigo",
              "count": 20
            },
            {
              "color": "ink",
              "count": 20
            },
            {
              "color": "sky",
              "count": 3
            }
          ],
          [
            {
              "color": "teal",
              "count": 20
            },
            {
              "color": "indigo",
              "count": 20
            },
            {
              "color": "ink",
              "count": 20
            }
          ],
          [
            {
              "color": "ink",
              "count": 20
            },
            {
              "color": "teal",
              "count": 20
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 3
            },
            {
              "color": "sand",
              "count": 4
            }
          ],
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 20
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "pine",
              "count": 15
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          2,
          0
        ],
        "actualMoves": 16,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 20
            },
            {
              "color": "teal",
              "count": 18
            },
            {
              "color": "pine",
              "count": 15
            }
          ],
          [
            {
              "color": "indigo",
              "count": 20
            },
            {
              "color": "indigo",
              "count": 20
            },
            {
              "color": "ink",
              "count": 20
            },
            {
              "color": "sky",
              "count": 3
            }
          ],
          [
            {
              "color": "teal",
              "count": 20
            },
            {
              "color": "indigo",
              "count": 20
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "sand",
              "count": 4
            }
          ],
          [
            {
              "color": "ink",
              "count": 20
            },
            {
              "color": "teal",
              "count": 20
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 3
            },
            {
              "color": "teal",
              "count": 1
            },
            {
              "color": "ink",
              "count": 1
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          3,
          2,
          3,
          1,
          3
        ],
        "actualMoves": 18,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "teal",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 16
            }
          ],
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 15
            }
          ],
          [
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "ink",
              "count": 20
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "teal",
              "count": 3
            },
            {
              "color": "sky",
              "count": 3
            }
          ],
          [
            {
              "color": "ink",
              "count": 20
            },
            {
              "color": "ink",
              "count": 20
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "sand",
              "count": 4
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
          1,
          0,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          3,
          2,
          2
        ],
        "actualMoves": 17,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 20
            },
            {
              "color": "indigo",
              "count": 20
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "sand",
              "count": 4
            },
            {
              "color": "ink",
              "count": 1
            }
          ],
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 20
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            }
          ],
          [
            {
              "color": "teal",
              "count": 20
            },
            {
              "color": "indigo",
              "count": 20
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 3
            },
            {
              "color": "sky",
              "count": 3
            }
          ],
          [
            {
              "color": "indigo",
              "count": 20
            },
            {
              "color": "ink",
              "count": 20
            },
            {
              "color": "teal",
              "count": 20
            }
          ]
        ],
        "proof": [
          3,
          0,
          1,
          2,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          2,
          0,
          2,
          0
        ],
        "actualMoves": 17,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "ink",
              "count": 20
            },
            {
              "color": "sand",
              "count": 4
            },
            {
              "color": "sky",
              "count": 3
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "teal",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 15
            }
          ],
          [
            {
              "color": "ink",
              "count": 20
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "ink",
              "count": 20
            },
            {
              "color": "teal",
              "count": 3
            }
          ],
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "pine",
              "count": 16
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          3,
          1,
          0,
          2,
          1,
          3,
          0,
          2,
          3,
          1,
          0,
          2,
          0
        ],
        "actualMoves": 17,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 20
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "pine",
              "count": 15
            }
          ],
          [
            {
              "color": "indigo",
              "count": 20
            },
            {
              "color": "indigo",
              "count": 20
            },
            {
              "color": "teal",
              "count": 20
            },
            {
              "color": "sky",
              "count": 3
            }
          ],
          [
            {
              "color": "ink",
              "count": 20
            },
            {
              "color": "indigo",
              "count": 20
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "sand",
              "count": 4
            }
          ],
          [
            {
              "color": "teal",
              "count": 20
            },
            {
              "color": "ink",
              "count": 20
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 3
            },
            {
              "color": "ink",
              "count": 2
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          3,
          2,
          3,
          1
        ],
        "actualMoves": 17,
        "temptation": false
      }
    ],
    "actualMoves": 16
  },
  {
    "id": "moon-house",
    "file": "02-moon-house.png",
    "name": "月下花房",
    "N": 17,
    "jars": 16,
    "difficulty": "普通",
    "season": "长夜季",
    "night": "第 2 晚",
    "theme": "月下的玻璃花房",
    "intro": "有的星还埋在画里。",
    "mechanic": "跳过眼前诱惑 · 接受等待",
    "colors": [
      "indigo",
      "lilac",
      "cream",
      "pine",
      "rose",
      "teal"
    ],
    "palette": [
      "indigo",
      "ink",
      "pine",
      "teal",
      "cream",
      "sky"
    ],
    "cells": [
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "sky",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "cream",
        "cream",
        "cream",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "cream",
        "cream",
        "cream",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "ink",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "sky",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "indigo",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "teal",
        "pine",
        "teal",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "teal",
        "teal",
        "pine",
        "teal",
        "teal",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "pine",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "cream",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "pine",
        "ink"
      ],
      [
        "ink",
        "ink",
        "pine",
        "teal",
        "pine",
        "teal",
        "teal",
        "pine",
        "cream",
        "pine",
        "teal",
        "teal",
        "pine",
        "sky",
        "pine",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ]
    ],
    "source": "assets/art/02-moon-house.png",
    "density": 17,
    "stars": 289,
    "colorCounts": {
      "indigo": 121,
      "sky": 11,
      "cream": 18,
      "ink": 89,
      "pine": 27,
      "teal": 23
    },
    "targetMoves": 16,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "ink",
          "count": 18
        },
        {
          "color": "cream",
          "count": 18
        }
      ],
      [
        {
          "color": "ink",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "ink",
          "count": 18
        },
        {
          "color": "sky",
          "count": 11
        }
      ],
      [
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "ink",
          "count": 17
        },
        {
          "color": "teal",
          "count": 23
        }
      ],
      [
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 13
        },
        {
          "color": "ink",
          "count": 18
        },
        {
          "color": "pine",
          "count": 27
        }
      ]
    ],
    "proof": [
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      3,
      0,
      1,
      2,
      3,
      2,
      0,
      1
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "cream",
              "count": 18
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "sky",
              "count": 11
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "teal",
              "count": 23
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "pine",
              "count": 27
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1
        ],
        "actualMoves": 16,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "cream",
              "count": 18
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "pine",
              "count": 2
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "teal",
              "count": 23
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "pine",
              "count": 25
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          1
        ],
        "actualMoves": 17,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "cream",
              "count": 18
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "teal",
              "count": 23
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "sky",
              "count": 11
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "pine",
              "count": 27
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
          0,
          1,
          2,
          3,
          1,
          0,
          2,
          3,
          3,
          1,
          0,
          2
        ],
        "actualMoves": 16,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "cream",
              "count": 18
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "pine",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "teal",
              "count": 23
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "pine",
              "count": 26
            }
          ]
        ],
        "proof": [
          3,
          0,
          1,
          2,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          1
        ],
        "actualMoves": 17,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "cream",
              "count": 18
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "teal",
              "count": 23
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "ink",
              "count": 3
            },
            {
              "color": "pine",
              "count": 1
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "pine",
              "count": 26
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          0,
          2,
          3,
          3,
          1,
          0,
          2,
          2,
          2
        ],
        "actualMoves": 18,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "sky",
              "count": 11
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "cream",
              "count": 18
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "teal",
              "count": 23
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "pine",
              "count": 27
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1
        ],
        "actualMoves": 16,
        "temptation": false
      }
    ],
    "actualMoves": 16
  },
  {
    "id": "paper-harbor",
    "file": "03-paper-harbor.png",
    "name": "纸船星港",
    "N": 18,
    "jars": 20,
    "difficulty": "进阶",
    "season": "长夜季",
    "night": "第 3 晚",
    "theme": "纸船与星港",
    "intro": "队首够不着时，先看别的列；需要时借一个槽位。",
    "mechanic": "借槽解锁 · 先跳过诱惑",
    "colors": [
      "indigo",
      "cream",
      "gold",
      "violet",
      "blue",
      "teal"
    ],
    "palette": [
      "indigo",
      "blue",
      "sky",
      "ink",
      "cream",
      "sand"
    ],
    "cells": [
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "blue",
        "sky",
        "sand",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "cream",
        "cream",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "cream",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink"
      ],
      [
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo",
        "indigo",
        "sand",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "cream",
        "sand",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "cream",
        "cream",
        "sand",
        "sand",
        "blue",
        "blue",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sand",
        "cream",
        "cream",
        "cream",
        "cream",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "sky",
        "sky",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "sky",
        "blue",
        "blue",
        "sky",
        "sky",
        "blue",
        "blue",
        "sky",
        "blue",
        "blue",
        "sky",
        "sky",
        "blue",
        "sky",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky"
      ]
    ],
    "source": "assets/art/03-paper-harbor.png",
    "density": 18,
    "stars": 324,
    "colorCounts": {
      "indigo": 149,
      "blue": 96,
      "sky": 36,
      "sand": 8,
      "cream": 10,
      "ink": 25
    },
    "targetMoves": 20,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "blue",
          "count": 19
        },
        {
          "color": "indigo",
          "count": 6
        },
        {
          "color": "blue",
          "count": 1
        }
      ],
      [
        {
          "color": "ink",
          "count": 25
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "blue",
          "count": 19
        },
        {
          "color": "sky",
          "count": 18
        }
      ],
      [
        {
          "color": "cream",
          "count": 10
        },
        {
          "color": "blue",
          "count": 19
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "blue",
          "count": 19
        }
      ],
      [
        {
          "color": "sky",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "blue",
          "count": 19
        },
        {
          "color": "sand",
          "count": 8
        }
      ]
    ],
    "proof": [
      0,
      0,
      0,
      3,
      3,
      3,
      0,
      0,
      0,
      3,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      3
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "blue",
              "count": 1
            }
          ],
          [
            {
              "color": "ink",
              "count": 25
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 19
            },
            {
              "color": "sky",
              "count": 18
            }
          ],
          [
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "blue",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "blue",
              "count": 19
            }
          ],
          [
            {
              "color": "sky",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 19
            },
            {
              "color": "sand",
              "count": 8
            }
          ]
        ],
        "proof": [
          0,
          0,
          0,
          3,
          3,
          3,
          0,
          0,
          0,
          3,
          1,
          1,
          1,
          1,
          2,
          2,
          2,
          2,
          2,
          3
        ],
        "actualMoves": 20,
        "temptation": true
      },
      {
        "columns": [
          [
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "blue",
              "count": 20
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "sand",
              "count": 8
            }
          ],
          [
            {
              "color": "ink",
              "count": 25
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 9
            }
          ],
          [
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "sky",
              "count": 6
            }
          ]
        ],
        "proof": [
          1,
          1,
          1,
          3,
          3,
          3,
          1,
          3,
          2,
          2,
          2,
          2,
          2,
          0,
          0,
          0,
          0,
          0,
          1,
          3
        ],
        "actualMoves": 20,
        "temptation": true
      },
      {
        "columns": [
          [
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "ink",
              "count": 24
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            }
          ],
          [
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "ink",
              "count": 1
            }
          ],
          [
            {
              "color": "sky",
              "count": 14
            },
            {
              "color": "sky",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "sky",
              "count": 8
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "sand",
              "count": 8
            }
          ]
        ],
        "proof": [
          1,
          1,
          1,
          3,
          3,
          3,
          2,
          1,
          1,
          3,
          2,
          2,
          2,
          2,
          0,
          0,
          0,
          0,
          0,
          2,
          3
        ],
        "actualMoves": 21,
        "temptation": true
      },
      {
        "columns": [
          [
            {
              "color": "cream",
              "count": 8
            },
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "ink",
              "count": 25
            }
          ],
          [
            {
              "color": "sky",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 7
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "sand",
              "count": 8
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "sky",
              "count": 18
            },
            {
              "color": "cream",
              "count": 2
            }
          ]
        ],
        "proof": [
          1,
          1,
          1,
          2,
          2,
          2,
          1,
          1,
          2,
          3,
          3,
          3,
          3,
          0,
          0,
          0,
          0,
          0,
          2,
          3
        ],
        "actualMoves": 20,
        "temptation": true
      },
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 19
            },
            {
              "color": "blue",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "blue",
              "count": 4
            }
          ],
          [
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "blue",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 15
            }
          ],
          [
            {
              "color": "sky",
              "count": 18
            },
            {
              "color": "blue",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "sand",
              "count": 8
            }
          ],
          [
            {
              "color": "ink",
              "count": 25
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "sky",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 1
            }
          ]
        ],
        "proof": [
          0,
          2,
          0,
          0,
          0,
          0,
          2,
          2,
          2,
          3,
          3,
          3,
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          2
        ],
        "actualMoves": 20,
        "temptation": true
      },
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "ink",
              "count": 1
            }
          ],
          [
            {
              "color": "sand",
              "count": 8
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 20
            }
          ],
          [
            {
              "color": "ink",
              "count": 24
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "sky",
              "count": 18
            }
          ],
          [
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "cream",
              "count": 10
            }
          ]
        ],
        "proof": [
          0,
          0,
          0,
          0,
          0,
          3,
          3,
          3,
          0,
          3,
          2,
          2,
          2,
          2,
          3,
          1,
          1,
          1,
          1,
          1
        ],
        "actualMoves": 20,
        "temptation": true
      }
    ],
    "actualMoves": 20
  },
  {
    "id": "mist-lodge",
    "file": "04-mist-lodge.png",
    "name": "雾岭灯屋",
    "N": 19,
    "jars": 23,
    "difficulty": "困难",
    "season": "长夜季",
    "night": "第 4 晚",
    "theme": "雾岭与灯屋",
    "intro": "后排也能取一罐；给下一罐留一个位子。",
    "mechanic": "选后排解锁 · 留空位",
    "colors": [
      "indigo",
      "gold",
      "lilac",
      "cream",
      "mint",
      "rose",
      "pine"
    ],
    "palette": [
      "indigo",
      "violet",
      "pine",
      "sky",
      "plum",
      "sand",
      "cream"
    ],
    "cells": [
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "violet",
        "violet",
        "violet",
        "violet",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "violet",
        "sand",
        "sand",
        "violet",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "cream",
        "cream",
        "plum",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "violet",
        "plum",
        "plum",
        "violet",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "violet",
        "violet",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "violet",
        "violet",
        "violet",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "indigo"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "pine",
        "pine",
        "pine",
        "sky",
        "sky"
      ],
      [
        "pine",
        "indigo",
        "pine",
        "indigo",
        "pine",
        "sky",
        "pine",
        "sky",
        "plum",
        "plum",
        "sky",
        "sky",
        "sky",
        "sky",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "sky",
        "indigo",
        "pine",
        "pine",
        "pine",
        "sky",
        "sky",
        "plum",
        "sand",
        "plum",
        "plum",
        "indigo",
        "sky",
        "sky",
        "pine",
        "indigo",
        "pine",
        "pine",
        "pine"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ]
    ],
    "source": "assets/art/04-mist-lodge.png",
    "density": 19,
    "stars": 361,
    "colorCounts": {
      "indigo": 258,
      "violet": 43,
      "sand": 3,
      "plum": 9,
      "cream": 2,
      "pine": 24,
      "sky": 22
    },
    "targetMoves": 23,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 19
        },
        {
          "color": "indigo",
          "count": 19
        },
        {
          "color": "indigo",
          "count": 19
        },
        {
          "color": "indigo",
          "count": 19
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 1
        }
      ],
      [
        {
          "color": "violet",
          "count": 22
        },
        {
          "color": "indigo",
          "count": 19
        },
        {
          "color": "indigo",
          "count": 19
        },
        {
          "color": "indigo",
          "count": 19
        },
        {
          "color": "violet",
          "count": 21
        }
      ],
      [
        {
          "color": "pine",
          "count": 22
        },
        {
          "color": "indigo",
          "count": 19
        },
        {
          "color": "indigo",
          "count": 19
        },
        {
          "color": "indigo",
          "count": 19
        },
        {
          "color": "sand",
          "count": 3
        },
        {
          "color": "cream",
          "count": 2
        },
        {
          "color": "pine",
          "count": 2
        }
      ],
      [
        {
          "color": "sky",
          "count": 22
        },
        {
          "color": "indigo",
          "count": 19
        },
        {
          "color": "indigo",
          "count": 19
        },
        {
          "color": "indigo",
          "count": 19
        },
        {
          "color": "plum",
          "count": 9
        }
      ]
    ],
    "proof": [
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      2,
      2,
      0
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "violet",
              "count": 22
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "violet",
              "count": 21
            }
          ],
          [
            {
              "color": "pine",
              "count": 22
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "sand",
              "count": 3
            },
            {
              "color": "cream",
              "count": 2
            },
            {
              "color": "pine",
              "count": 2
            }
          ],
          [
            {
              "color": "sky",
              "count": 22
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "plum",
              "count": 9
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          2,
          0
        ],
        "actualMoves": 23,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 22
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "violet",
              "count": 21
            }
          ],
          [
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "pine",
              "count": 22
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "plum",
              "count": 9
            }
          ],
          [
            {
              "color": "violet",
              "count": 22
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "sand",
              "count": 3
            },
            {
              "color": "cream",
              "count": 2
            },
            {
              "color": "pine",
              "count": 2
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          3,
          3,
          1
        ],
        "actualMoves": 23,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "violet",
              "count": 22
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "violet",
              "count": 21
            }
          ],
          [
            {
              "color": "sky",
              "count": 22
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "plum",
              "count": 9
            }
          ],
          [
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "pine",
              "count": 2
            }
          ],
          [
            {
              "color": "pine",
              "count": 22
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "cream",
              "count": 2
            },
            {
              "color": "sand",
              "count": 3
            },
            {
              "color": "indigo",
              "count": 2
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          3,
          3,
          2
        ],
        "actualMoves": 23,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 21
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "violet",
              "count": 21
            }
          ],
          [
            {
              "color": "violet",
              "count": 22
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "plum",
              "count": 9
            }
          ],
          [
            {
              "color": "pine",
              "count": 24
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "sand",
              "count": 3
            },
            {
              "color": "cream",
              "count": 2
            },
            {
              "color": "indigo",
              "count": 2
            }
          ],
          [
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "sky",
              "count": 1
            }
          ]
        ],
        "proof": [
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          2,
          3,
          2
        ],
        "actualMoves": 23,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 2
            },
            {
              "color": "sky",
              "count": 1
            }
          ],
          [
            {
              "color": "violet",
              "count": 21
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "violet",
              "count": 21
            }
          ],
          [
            {
              "color": "sky",
              "count": 21
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "plum",
              "count": 9
            }
          ],
          [
            {
              "color": "pine",
              "count": 24
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "sand",
              "count": 3
            },
            {
              "color": "cream",
              "count": 2
            },
            {
              "color": "violet",
              "count": 1
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          3,
          0,
          3,
          0
        ],
        "actualMoves": 24,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 22
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "plum",
              "count": 9
            }
          ],
          [
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "violet",
              "count": 1
            }
          ],
          [
            {
              "color": "pine",
              "count": 23
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "cream",
              "count": 2
            },
            {
              "color": "sand",
              "count": 3
            },
            {
              "color": "pine",
              "count": 1
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "violet",
              "count": 21
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "violet",
              "count": 21
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          2,
          2,
          1,
          2
        ],
        "actualMoves": 24,
        "temptation": false
      }
    ],
    "actualMoves": 23
  },
  {
    "id": "dawn-lily",
    "file": "05-dawn-lily.png",
    "name": "破晓铃兰",
    "N": 20,
    "jars": 24,
    "difficulty": "困难",
    "season": "长夜季",
    "night": "第 5 晚",
    "theme": "破晓与铃兰",
    "intro": "最后一幅画，慢慢来。",
    "mechanic": "四列加深 · 等待与绕行",
    "colors": [
      "indigo",
      "violet",
      "gold",
      "cream",
      "lilac",
      "rose",
      "pine",
      "mint"
    ],
    "palette": [
      "violet",
      "mint",
      "pine",
      "lilac",
      "plum",
      "sand",
      "cream",
      "teal"
    ],
    "cells": [
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "lilac",
        "lilac",
        "lilac",
        "lilac",
        "lilac",
        "lilac",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "lilac",
        "lilac",
        "lilac",
        "lilac",
        "lilac",
        "lilac",
        "lilac",
        "lilac",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "lilac",
        "lilac",
        "lilac",
        "sand",
        "sand",
        "sand",
        "sand",
        "lilac",
        "lilac",
        "lilac",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "plum",
        "lilac",
        "lilac",
        "sand",
        "sand",
        "cream",
        "cream",
        "sand",
        "sand",
        "lilac",
        "lilac",
        "plum",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "lilac",
        "lilac",
        "lilac",
        "sand",
        "cream",
        "cream",
        "cream",
        "cream",
        "sand",
        "lilac",
        "lilac",
        "lilac",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "violet",
        "violet",
        "plum",
        "lilac",
        "lilac",
        "sand",
        "sand",
        "cream",
        "cream",
        "cream",
        "cream",
        "sand",
        "sand",
        "lilac",
        "lilac",
        "plum",
        "violet",
        "violet",
        "violet"
      ],
      [
        "plum",
        "plum",
        "plum",
        "plum",
        "lilac",
        "lilac",
        "sand",
        "sand",
        "cream",
        "cream",
        "cream",
        "cream",
        "sand",
        "sand",
        "lilac",
        "lilac",
        "plum",
        "plum",
        "plum",
        "plum"
      ],
      [
        "plum",
        "plum",
        "plum",
        "plum",
        "lilac",
        "lilac",
        "lilac",
        "sand",
        "sand",
        "cream",
        "cream",
        "sand",
        "sand",
        "lilac",
        "lilac",
        "lilac",
        "plum",
        "plum",
        "plum",
        "plum"
      ],
      [
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "lilac",
        "lilac",
        "lilac",
        "sand",
        "sand",
        "sand",
        "sand",
        "lilac",
        "lilac",
        "lilac",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum"
      ],
      [
        "violet",
        "violet",
        "violet",
        "plum",
        "plum",
        "plum",
        "lilac",
        "lilac",
        "sand",
        "plum",
        "plum",
        "plum",
        "violet",
        "violet",
        "plum",
        "violet",
        "plum",
        "plum",
        "plum",
        "plum"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "plum",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "lilac",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "plum",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "plum",
        "pine",
        "violet",
        "pine",
        "plum",
        "violet",
        "violet",
        "plum",
        "violet",
        "violet",
        "pine",
        "violet",
        "pine",
        "violet",
        "pine",
        "violet",
        "pine",
        "violet",
        "violet"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "violet",
        "pine",
        "violet",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "violet",
        "violet"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "pine",
        "teal",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "teal",
        "pine",
        "teal",
        "teal",
        "teal",
        "teal",
        "pine",
        "teal",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint"
      ],
      [
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint"
      ],
      [
        "teal",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "teal"
      ]
    ],
    "source": "assets/art/05-dawn-lily.png",
    "density": 20,
    "stars": 400,
    "colorCounts": {
      "violet": 136,
      "lilac": 53,
      "sand": 27,
      "plum": 46,
      "cream": 16,
      "pine": 55,
      "teal": 9,
      "mint": 58
    },
    "targetMoves": 24,
    "columns": [
      [
        {
          "color": "mint",
          "count": 19
        },
        {
          "color": "mint",
          "count": 19
        },
        {
          "color": "violet",
          "count": 20
        },
        {
          "color": "lilac",
          "count": 18
        },
        {
          "color": "plum",
          "count": 22
        }
      ],
      [
        {
          "color": "violet",
          "count": 20
        },
        {
          "color": "violet",
          "count": 20
        },
        {
          "color": "pine",
          "count": 19
        },
        {
          "color": "lilac",
          "count": 18
        },
        {
          "color": "cream",
          "count": 16
        },
        {
          "color": "teal",
          "count": 9
        }
      ],
      [
        {
          "color": "pine",
          "count": 19
        },
        {
          "color": "violet",
          "count": 20
        },
        {
          "color": "violet",
          "count": 20
        },
        {
          "color": "lilac",
          "count": 17
        },
        {
          "color": "sand",
          "count": 27
        }
      ],
      [
        {
          "color": "mint",
          "count": 19
        },
        {
          "color": "violet",
          "count": 20
        },
        {
          "color": "violet",
          "count": 14
        },
        {
          "color": "pine",
          "count": 17
        },
        {
          "color": "plum",
          "count": 23
        },
        {
          "color": "violet",
          "count": 2
        },
        {
          "color": "mint",
          "count": 1
        },
        {
          "color": "plum",
          "count": 1
        }
      ]
    ],
    "proof": [
      0,
      1,
      2,
      3,
      0,
      2,
      3,
      1,
      0,
      2,
      3,
      1,
      3,
      0,
      1,
      2,
      3,
      0,
      2,
      1,
      1,
      3,
      3,
      3
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "violet",
              "count": 20
            },
            {
              "color": "lilac",
              "count": 18
            },
            {
              "color": "plum",
              "count": 22
            }
          ],
          [
            {
              "color": "violet",
              "count": 20
            },
            {
              "color": "violet",
              "count": 20
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "lilac",
              "count": 18
            },
            {
              "color": "cream",
              "count": 16
            },
            {
              "color": "teal",
              "count": 9
            }
          ],
          [
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "violet",
              "count": 20
            },
            {
              "color": "violet",
              "count": 20
            },
            {
              "color": "lilac",
              "count": 17
            },
            {
              "color": "sand",
              "count": 27
            }
          ],
          [
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "violet",
              "count": 20
            },
            {
              "color": "violet",
              "count": 14
            },
            {
              "color": "pine",
              "count": 17
            },
            {
              "color": "plum",
              "count": 23
            },
            {
              "color": "violet",
              "count": 2
            },
            {
              "color": "mint",
              "count": 1
            },
            {
              "color": "plum",
              "count": 1
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          3,
          0,
          1,
          2,
          3,
          0,
          2,
          1,
          1,
          3,
          3,
          3
        ],
        "actualMoves": 24,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "plum",
              "count": 23
            },
            {
              "color": "violet",
              "count": 20
            },
            {
              "color": "mint",
              "count": 18
            },
            {
              "color": "lilac",
              "count": 18
            },
            {
              "color": "sand",
              "count": 27
            }
          ],
          [
            {
              "color": "violet",
              "count": 20
            },
            {
              "color": "violet",
              "count": 20
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "lilac",
              "count": 18
            },
            {
              "color": "teal",
              "count": 9
            }
          ],
          [
            {
              "color": "mint",
              "count": 20
            },
            {
              "color": "violet",
              "count": 20
            },
            {
              "color": "mint",
              "count": 20
            },
            {
              "color": "plum",
              "count": 22
            },
            {
              "color": "cream",
              "count": 16
            }
          ],
          [
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "violet",
              "count": 20
            },
            {
              "color": "violet",
              "count": 20
            },
            {
              "color": "pine",
              "count": 17
            },
            {
              "color": "lilac",
              "count": 17
            },
            {
              "color": "plum",
              "count": 1
            },
            {
              "color": "violet",
              "count": 1
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          0,
          2,
          1,
          3,
          3
        ],
        "actualMoves": 23,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "violet",
              "count": 19
            },
            {
              "color": "plum",
              "count": 14
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "cream",
              "count": 16
            }
          ],
          [
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "violet",
              "count": 19
            },
            {
              "color": "violet",
              "count": 19
            },
            {
              "color": "lilac",
              "count": 16
            },
            {
              "color": "pine",
              "count": 17
            },
            {
              "color": "teal",
              "count": 9
            }
          ],
          [
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "violet",
              "count": 19
            },
            {
              "color": "violet",
              "count": 17
            },
            {
              "color": "lilac",
              "count": 18
            },
            {
              "color": "sand",
              "count": 27
            }
          ],
          [
            {
              "color": "violet",
              "count": 19
            },
            {
              "color": "violet",
              "count": 19
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "lilac",
              "count": 18
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "violet",
              "count": 5
            },
            {
              "color": "mint",
              "count": 1
            },
            {
              "color": "lilac",
              "count": 1
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          3,
          2,
          1,
          0,
          3,
          1,
          2,
          0,
          1,
          3,
          3,
          3
        ],
        "actualMoves": 25,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "mint",
              "count": 20
            },
            {
              "color": "violet",
              "count": 20
            },
            {
              "color": "lilac",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "plum",
              "count": 14
            },
            {
              "color": "teal",
              "count": 9
            }
          ],
          [
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "violet",
              "count": 20
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "mint",
              "count": 20
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "cream",
              "count": 16
            }
          ],
          [
            {
              "color": "violet",
              "count": 20
            },
            {
              "color": "violet",
              "count": 20
            },
            {
              "color": "lilac",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "sand",
              "count": 27
            }
          ],
          [
            {
              "color": "violet",
              "count": 20
            },
            {
              "color": "violet",
              "count": 20
            },
            {
              "color": "lilac",
              "count": 17
            },
            {
              "color": "mint",
              "count": 18
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "pine",
              "count": 1
            },
            {
              "color": "violet",
              "count": 1
            }
          ]
        ],
        "proof": [
          3,
          0,
          1,
          2,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          0,
          3,
          3
        ],
        "actualMoves": 24,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "plum",
              "count": 18
            },
            {
              "color": "violet",
              "count": 19
            },
            {
              "color": "violet",
              "count": 19
            },
            {
              "color": "mint",
              "count": 20
            },
            {
              "color": "sand",
              "count": 27
            }
          ],
          [
            {
              "color": "violet",
              "count": 19
            },
            {
              "color": "violet",
              "count": 19
            },
            {
              "color": "lilac",
              "count": 18
            },
            {
              "color": "mint",
              "count": 18
            },
            {
              "color": "pine",
              "count": 17
            },
            {
              "color": "plum",
              "count": 11
            }
          ],
          [
            {
              "color": "mint",
              "count": 20
            },
            {
              "color": "violet",
              "count": 19
            },
            {
              "color": "lilac",
              "count": 18
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "cream",
              "count": 16
            },
            {
              "color": "violet",
              "count": 3
            },
            {
              "color": "lilac",
              "count": 1
            }
          ],
          [
            {
              "color": "plum",
              "count": 17
            },
            {
              "color": "violet",
              "count": 19
            },
            {
              "color": "violet",
              "count": 19
            },
            {
              "color": "lilac",
              "count": 16
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "teal",
              "count": 9
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          2,
          2
        ],
        "actualMoves": 24,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "violet",
              "count": 19
            },
            {
              "color": "violet",
              "count": 19
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "lilac",
              "count": 18
            },
            {
              "color": "sand",
              "count": 27
            }
          ],
          [
            {
              "color": "violet",
              "count": 19
            },
            {
              "color": "violet",
              "count": 19
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "lilac",
              "count": 16
            },
            {
              "color": "pine",
              "count": 17
            },
            {
              "color": "teal",
              "count": 9
            }
          ],
          [
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "violet",
              "count": 19
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "lilac",
              "count": 18
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "violet",
              "count": 4
            },
            {
              "color": "lilac",
              "count": 1
            },
            {
              "color": "mint",
              "count": 1
            }
          ],
          [
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "violet",
              "count": 19
            },
            {
              "color": "violet",
              "count": 18
            },
            {
              "color": "plum",
              "count": 14
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "cream",
              "count": 16
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          2,
          1,
          0,
          3,
          1,
          2,
          2,
          2
        ],
        "actualMoves": 25,
        "temptation": false
      }
    ],
    "actualMoves": 24
  },
  {
    "id": "cloud-post",
    "file": "06-cloud-post.png",
    "name": "云上邮局",
    "N": 20,
    "jars": 27,
    "difficulty": "进阶",
    "season": "长夜季",
    "night": "第 6 晚",
    "theme": "云上的邮局",
    "intro": "四列会越排越深。",
    "mechanic": "深队列 · 补位",
    "colors": [
      "sky",
      "cream",
      "coral",
      "indigo",
      "gold",
      "teal"
    ],
    "palette": [
      "sky",
      "indigo",
      "blue",
      "sand",
      "cream",
      "teal"
    ],
    "cells": [
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "teal",
        "teal",
        "sky",
        "sky",
        "sky",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "teal",
        "teal",
        "sand",
        "teal",
        "teal",
        "sky",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "teal",
        "sand",
        "cream",
        "cream",
        "sand",
        "teal",
        "sky",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "teal",
        "sand",
        "cream",
        "cream",
        "sand",
        "teal",
        "sky",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "teal",
        "teal",
        "teal",
        "sky",
        "sand",
        "sand",
        "sand",
        "sand",
        "teal",
        "sky",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "cream",
        "teal",
        "teal",
        "teal",
        "sky",
        "sky",
        "sand",
        "sand",
        "teal",
        "sky",
        "sky",
        "sky"
      ],
      [
        "blue",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "teal",
        "teal",
        "teal",
        "teal",
        "blue",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "sky",
        "sky",
        "blue",
        "teal",
        "teal",
        "teal",
        "teal",
        "blue",
        "blue",
        "sky",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "blue",
        "blue",
        "blue",
        "sand",
        "sand",
        "sand",
        "sand",
        "blue",
        "blue",
        "blue",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "blue",
        "blue",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "indigo",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "sand",
        "sand",
        "cream",
        "sand",
        "sand",
        "sand",
        "sky",
        "blue",
        "sky",
        "sky",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "sand",
        "sky",
        "blue",
        "indigo",
        "sand",
        "sand",
        "indigo",
        "indigo",
        "sand",
        "indigo",
        "blue",
        "cream",
        "cream",
        "cream",
        "cream",
        "blue",
        "blue"
      ],
      [
        "indigo",
        "sand",
        "cream",
        "cream",
        "cream",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "cream",
        "cream",
        "sky",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "sky",
        "cream",
        "cream",
        "cream",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "cream",
        "cream",
        "cream",
        "cream",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ]
    ],
    "source": "assets/art/06-cloud-post.png",
    "density": 20,
    "stars": 400,
    "colorCounts": {
      "sky": 138,
      "teal": 26,
      "sand": 32,
      "cream": 27,
      "blue": 58,
      "indigo": 119
    },
    "targetMoves": 27,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "sky",
          "count": 17
        },
        {
          "color": "sky",
          "count": 17
        },
        {
          "color": "sand",
          "count": 15
        }
      ],
      [
        {
          "color": "sky",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "cream",
          "count": 22
        },
        {
          "color": "sky",
          "count": 17
        },
        {
          "color": "sand",
          "count": 15
        },
        {
          "color": "teal",
          "count": 13
        }
      ],
      [
        {
          "color": "blue",
          "count": 20
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "sky",
          "count": 17
        },
        {
          "color": "sky",
          "count": 17
        },
        {
          "color": "blue",
          "count": 18
        },
        {
          "color": "cream",
          "count": 5
        },
        {
          "color": "sky",
          "count": 2
        },
        {
          "color": "sand",
          "count": 2
        },
        {
          "color": "indigo",
          "count": 1
        }
      ],
      [
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "sky",
          "count": 17
        },
        {
          "color": "sky",
          "count": 17
        },
        {
          "color": "blue",
          "count": 20
        },
        {
          "color": "teal",
          "count": 13
        }
      ]
    ],
    "proof": [
      0,
      1,
      2,
      3,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      3,
      2,
      1,
      0,
      3,
      2,
      1,
      0,
      1,
      3,
      2,
      2,
      2,
      2
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sand",
              "count": 15
            }
          ],
          [
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "cream",
              "count": 22
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sand",
              "count": 15
            },
            {
              "color": "teal",
              "count": 13
            }
          ],
          [
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "cream",
              "count": 5
            },
            {
              "color": "sky",
              "count": 2
            },
            {
              "color": "sand",
              "count": 2
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "teal",
              "count": 13
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          1,
          3,
          2,
          2,
          2,
          2
        ],
        "actualMoves": 27,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "sand",
              "count": 16
            },
            {
              "color": "blue",
              "count": 2
            }
          ],
          [
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "teal",
              "count": 13
            },
            {
              "color": "sky",
              "count": 13
            }
          ],
          [
            {
              "color": "blue",
              "count": 19
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "teal",
              "count": 13
            },
            {
              "color": "sand",
              "count": 16
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "blue",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "cream",
              "count": 22
            },
            {
              "color": "cream",
              "count": 5
            },
            {
              "color": "indigo",
              "count": 1
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          2,
          3,
          1,
          3,
          0
        ],
        "actualMoves": 27,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 13
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "teal",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 2
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "teal",
              "count": 13
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sand",
              "count": 14
            },
            {
              "color": "cream",
              "count": 13
            },
            {
              "color": "sky",
              "count": 6
            }
          ],
          [
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sand",
              "count": 13
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "sand",
              "count": 5
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          0,
          2,
          3,
          3,
          2,
          0,
          1,
          2,
          3,
          0
        ],
        "actualMoves": 27,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "teal",
              "count": 13
            },
            {
              "color": "sand",
              "count": 16
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "teal",
              "count": 13
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "blue",
              "count": 4
            }
          ],
          [
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sand",
              "count": 16
            }
          ],
          [
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "cream",
              "count": 13
            },
            {
              "color": "sky",
              "count": 11
            }
          ]
        ],
        "proof": [
          3,
          0,
          1,
          2,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          1,
          3,
          0,
          2,
          3,
          1
        ],
        "actualMoves": 26,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "sky",
              "count": 18
            },
            {
              "color": "sky",
              "count": 18
            },
            {
              "color": "cream",
              "count": 13
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sky",
              "count": 18
            },
            {
              "color": "sky",
              "count": 12
            },
            {
              "color": "teal",
              "count": 13
            },
            {
              "color": "sand",
              "count": 2
            },
            {
              "color": "blue",
              "count": 2
            }
          ],
          [
            {
              "color": "sky",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sky",
              "count": 18
            },
            {
              "color": "sand",
              "count": 15
            },
            {
              "color": "teal",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "blue",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sky",
              "count": 18
            },
            {
              "color": "sky",
              "count": 18
            },
            {
              "color": "sand",
              "count": 15
            },
            {
              "color": "cream",
              "count": 14
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          2,
          3,
          0,
          1,
          1,
          2
        ],
        "actualMoves": 27,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "sand",
              "count": 16
            }
          ],
          [
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "sand",
              "count": 16
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "cream",
              "count": 23
            },
            {
              "color": "cream",
              "count": 4
            },
            {
              "color": "sky",
              "count": 12
            }
          ],
          [
            {
              "color": "blue",
              "count": 20
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "teal",
              "count": 13
            },
            {
              "color": "teal",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 1
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          3,
          0,
          1,
          2,
          2,
          3
        ],
        "actualMoves": 26,
        "temptation": false
      }
    ],
    "actualMoves": 27
  },
  {
    "id": "star-lighthouse",
    "file": "07-star-lighthouse.png",
    "name": "星砂灯塔",
    "N": 21,
    "jars": 27,
    "difficulty": "进阶",
    "season": "长夜季",
    "night": "第 7 晚",
    "theme": "星砂与灯塔",
    "intro": "先清外沿，再取深处。",
    "mechanic": "绕开未摘星 · 远端后取",
    "colors": [
      "indigo",
      "sand",
      "gold",
      "cream",
      "teal",
      "coral"
    ],
    "palette": [
      "indigo",
      "sand",
      "ink",
      "pine",
      "cream",
      "plum"
    ],
    "cells": [
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "cream",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "cream",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "pine",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "sand",
        "sand",
        "sand"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "pine",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "sand",
        "pine",
        "pine",
        "pine",
        "pine",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "sand",
        "cream",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "pine",
        "pine",
        "sand",
        "pine"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "sand",
        "cream",
        "pine",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "cream",
        "cream",
        "pine",
        "ink",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "cream",
        "cream",
        "sand",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "cream",
        "cream",
        "sand",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "cream",
        "cream",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "sand",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "sand",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "plum",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ]
    ],
    "source": "assets/art/07-star-lighthouse.png",
    "density": 21,
    "stars": 441,
    "colorCounts": {
      "indigo": 250,
      "pine": 17,
      "sand": 85,
      "cream": 12,
      "plum": 6,
      "ink": 71
    },
    "targetMoves": 27,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "sand",
          "count": 17
        },
        {
          "color": "ink",
          "count": 18
        },
        {
          "color": "pine",
          "count": 17
        }
      ],
      [
        {
          "color": "sand",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "sand",
          "count": 17
        },
        {
          "color": "ink",
          "count": 18
        },
        {
          "color": "plum",
          "count": 6
        }
      ],
      [
        {
          "color": "ink",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "sand",
          "count": 17
        },
        {
          "color": "ink",
          "count": 17
        }
      ],
      [
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 13
        },
        {
          "color": "sand",
          "count": 17
        },
        {
          "color": "cream",
          "count": 12
        }
      ]
    ],
    "proof": [
      0,
      1,
      2,
      3,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "pine",
              "count": 17
            }
          ],
          [
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "plum",
              "count": 6
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "ink",
              "count": 17
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "cream",
              "count": 12
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1
        ],
        "actualMoves": 27,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "cream",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 16
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "plum",
              "count": 6
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "pine",
              "count": 17
            }
          ],
          [
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "sand",
              "count": 16
            },
            {
              "color": "ink",
              "count": 1
            },
            {
              "color": "sand",
              "count": 1
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          2,
          0,
          1,
          3,
          2,
          1,
          3,
          0,
          0,
          2,
          1,
          3,
          3
        ],
        "actualMoves": 29,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "plum",
              "count": 6
            }
          ],
          [
            {
              "color": "sand",
              "count": 16
            },
            {
              "color": "sand",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 17
            }
          ],
          [
            {
              "color": "sand",
              "count": 16
            },
            {
              "color": "sand",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "cream",
              "count": 8
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 2
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sand",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "sand",
              "count": 5
            },
            {
              "color": "cream",
              "count": 4
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          2,
          1,
          3,
          0,
          3,
          2
        ],
        "actualMoves": 30,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "pine",
              "count": 17
            }
          ],
          [
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "cream",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 16
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "sand",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "sand",
              "count": 16
            },
            {
              "color": "plum",
              "count": 6
            }
          ]
        ],
        "proof": [
          3,
          0,
          1,
          2,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          2,
          3,
          1,
          1,
          0,
          3,
          2
        ],
        "actualMoves": 28,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 1
            }
          ],
          [
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "plum",
              "count": 6
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "pine",
              "count": 17
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "cream",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 17
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          3,
          2,
          1,
          0
        ],
        "actualMoves": 28,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "ink",
              "count": 18
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "plum",
              "count": 6
            }
          ],
          [
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "cream",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 16
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "pine",
              "count": 17
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          2,
          3,
          1
        ],
        "actualMoves": 27,
        "temptation": false
      }
    ],
    "actualMoves": 27
  },
  {
    "id": "aurora-clock",
    "file": "08-aurora-clock.png",
    "name": "极光钟楼",
    "N": 21,
    "jars": 30,
    "difficulty": "困难",
    "season": "长夜季",
    "night": "第 8 晚",
    "theme": "极光与钟楼",
    "intro": "清除能打开至多十二格缺口。",
    "mechanic": "清除至多 12 块解锁",
    "colors": [
      "pine",
      "violet",
      "gold",
      "sky",
      "rose",
      "cream"
    ],
    "palette": [
      "indigo",
      "violet",
      "pine",
      "sky",
      "sand",
      "blue"
    ],
    "cells": [
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "violet",
        "sky",
        "sand",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "violet",
        "sand",
        "sand",
        "sand",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "violet",
        "violet",
        "sand",
        "sand",
        "sky",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "violet",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "indigo",
        "violet",
        "violet",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "violet",
        "violet",
        "blue",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "violet",
        "violet",
        "violet",
        "violet",
        "indigo",
        "violet",
        "violet",
        "violet",
        "violet",
        "indigo",
        "pine",
        "pine",
        "pine"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "blue",
        "pine",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "blue"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "sky",
        "sand",
        "sand",
        "sky",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "pine",
        "sand",
        "sand",
        "sand",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "sky",
        "sand",
        "sand",
        "sand",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "sky",
        "sky",
        "sky",
        "sky",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "sky",
        "sky",
        "sky",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "sky",
        "sky",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "sand",
        "sky",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "pine",
        "sky",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ]
    ],
    "source": "assets/art/08-aurora-clock.png",
    "density": 21,
    "stars": 441,
    "colorCounts": {
      "indigo": 249,
      "violet": 110,
      "sky": 23,
      "sand": 15,
      "pine": 37,
      "blue": 7
    },
    "targetMoves": 30,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "violet",
          "count": 16
        },
        {
          "color": "sky",
          "count": 23
        }
      ],
      [
        {
          "color": "violet",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 6
        },
        {
          "color": "violet",
          "count": 16
        },
        {
          "color": "pine",
          "count": 18
        },
        {
          "color": "violet",
          "count": 1
        }
      ],
      [
        {
          "color": "pine",
          "count": 19
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "violet",
          "count": 16
        },
        {
          "color": "violet",
          "count": 13
        },
        {
          "color": "sand",
          "count": 15
        }
      ],
      [
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "violet",
          "count": 16
        },
        {
          "color": "violet",
          "count": 16
        },
        {
          "color": "blue",
          "count": 7
        },
        {
          "color": "indigo",
          "count": 3
        }
      ]
    ],
    "proof": [
      0,
      1,
      2,
      3,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      1,
      0,
      3,
      2,
      1,
      0,
      2,
      3,
      3,
      1
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "sky",
              "count": 23
            }
          ],
          [
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "violet",
              "count": 1
            }
          ],
          [
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "sand",
              "count": 15
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "blue",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 3
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          2,
          3,
          3,
          1
        ],
        "actualMoves": 30,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "pine",
              "count": 18
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "sky",
              "count": 23
            }
          ],
          [
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "sand",
              "count": 15
            }
          ],
          [
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "violet",
              "count": 14
            },
            {
              "color": "blue",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 3
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          3
        ],
        "actualMoves": 29,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "violet",
              "count": 14
            },
            {
              "color": "blue",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 3
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "pine",
              "count": 18
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "sky",
              "count": 23
            }
          ],
          [
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "sand",
              "count": 15
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          0
        ],
        "actualMoves": 29,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "pine",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 5
            }
          ],
          [
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "sky",
              "count": 23
            },
            {
              "color": "violet",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "blue",
              "count": 7
            },
            {
              "color": "pine",
              "count": 2
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "sand",
              "count": 15
            }
          ]
        ],
        "proof": [
          3,
          0,
          1,
          2,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          3,
          2,
          0,
          2,
          1
        ],
        "actualMoves": 30,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "violet",
              "count": 17
            },
            {
              "color": "violet",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "sky",
              "count": 23
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "violet",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "sand",
              "count": 15
            }
          ],
          [
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "violet",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "violet",
              "count": 11
            }
          ],
          [
            {
              "color": "violet",
              "count": 17
            },
            {
              "color": "violet",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "blue",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 1
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          1,
          0,
          3,
          2,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          0,
          1,
          2,
          3,
          3
        ],
        "actualMoves": 29,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "pine",
              "count": 18
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "violet",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 2
            },
            {
              "color": "sky",
              "count": 3
            }
          ],
          [
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "sky",
              "count": 20
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "blue",
              "count": 7
            }
          ],
          [
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "sand",
              "count": 15
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          1
        ],
        "actualMoves": 30,
        "temptation": false
      }
    ],
    "actualMoves": 30
  },
  {
    "id": "windmill-field",
    "file": "09-windmill-field.png",
    "name": "风车麦田",
    "N": 22,
    "jars": 31,
    "difficulty": "困难",
    "season": "长夜季",
    "night": "第 9 晚",
    "theme": "风车与麦田",
    "intro": "五槽会更紧，先看能走的列。",
    "mechanic": "五槽压力 · 列序",
    "colors": [
      "indigo",
      "moss",
      "gold",
      "cream",
      "coral",
      "pine"
    ],
    "palette": [
      "indigo",
      "pine",
      "ink",
      "moss",
      "sand",
      "plum"
    ],
    "cells": [
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "plum",
        "pine",
        "sand",
        "sand",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "plum",
        "pine",
        "sand",
        "sand",
        "sand",
        "sand",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "plum",
        "sand",
        "sand",
        "sand",
        "sand",
        "pine",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "plum",
        "pine",
        "sand",
        "sand",
        "sand",
        "sand",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "plum",
        "sand",
        "sand",
        "sand",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "indigo",
        "plum",
        "plum",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "plum",
        "plum",
        "sand",
        "sand",
        "sand",
        "plum",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "sand",
        "sand",
        "sand",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "sand",
        "sand",
        "sand",
        "sand",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "moss",
        "moss",
        "moss",
        "moss",
        "moss",
        "pine",
        "moss",
        "moss",
        "pine",
        "moss",
        "moss",
        "moss",
        "sand",
        "sand",
        "sand",
        "sand",
        "moss",
        "moss",
        "pine",
        "moss",
        "pine",
        "pine"
      ],
      [
        "moss",
        "moss",
        "moss",
        "moss",
        "moss",
        "moss",
        "moss",
        "moss",
        "moss",
        "moss",
        "moss",
        "moss",
        "sand",
        "sand",
        "sand",
        "sand",
        "moss",
        "moss",
        "moss",
        "moss",
        "moss",
        "pine"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "moss",
        "pine",
        "pine",
        "pine",
        "pine",
        "sand",
        "sand",
        "sand",
        "sand",
        "pine",
        "pine",
        "pine",
        "moss",
        "moss",
        "pine"
      ],
      [
        "pine",
        "moss",
        "pine",
        "pine",
        "moss",
        "moss",
        "pine",
        "pine",
        "moss",
        "moss",
        "pine",
        "pine",
        "moss",
        "moss",
        "moss",
        "pine",
        "moss",
        "moss",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "pine",
        "pine",
        "pine",
        "moss",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "moss",
        "pine",
        "pine",
        "moss",
        "pine",
        "moss",
        "pine",
        "pine",
        "moss",
        "pine",
        "moss",
        "pine",
        "pine"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ]
    ],
    "source": "assets/art/09-windmill-field.png",
    "density": 22,
    "stars": 484,
    "colorCounts": {
      "indigo": 197,
      "plum": 26,
      "pine": 101,
      "sand": 39,
      "ink": 72,
      "moss": 49
    },
    "targetMoves": 31,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "moss",
          "count": 17
        },
        {
          "color": "plum",
          "count": 13
        },
        {
          "color": "indigo",
          "count": 3
        }
      ],
      [
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "ink",
          "count": 18
        },
        {
          "color": "plum",
          "count": 13
        },
        {
          "color": "pine",
          "count": 8
        }
      ],
      [
        {
          "color": "ink",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "pine",
          "count": 13
        },
        {
          "color": "ink",
          "count": 18
        },
        {
          "color": "sand",
          "count": 22
        }
      ],
      [
        {
          "color": "moss",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 7
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "ink",
          "count": 18
        },
        {
          "color": "moss",
          "count": 15
        },
        {
          "color": "sand",
          "count": 17
        }
      ]
    ],
    "proof": [
      0,
      1,
      2,
      3,
      1,
      0,
      3,
      2,
      1,
      0,
      3,
      2,
      1,
      0,
      3,
      2,
      3,
      1,
      0,
      2,
      3,
      2,
      1,
      0,
      3,
      2,
      0,
      1,
      3,
      0,
      1
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "moss",
              "count": 17
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 3
            }
          ],
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "pine",
              "count": 8
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 13
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "sand",
              "count": 22
            }
          ],
          [
            {
              "color": "moss",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "moss",
              "count": 15
            },
            {
              "color": "sand",
              "count": 17
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          3,
          1,
          0,
          2,
          3,
          2,
          1,
          0,
          3,
          2,
          0,
          1,
          3,
          0,
          1
        ],
        "actualMoves": 31,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "moss",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "moss",
              "count": 17
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 2
            },
            {
              "color": "ink",
              "count": 2
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "moss",
              "count": 15
            },
            {
              "color": "sand",
              "count": 17
            }
          ],
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "sand",
              "count": 22
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 13
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "pine",
              "count": 8
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          1,
          2,
          0,
          3,
          1,
          3,
          2,
          0,
          1,
          2,
          3,
          0,
          1,
          3,
          0,
          0
        ],
        "actualMoves": 32,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "moss",
              "count": 15
            },
            {
              "color": "sand",
              "count": 17
            }
          ],
          [
            {
              "color": "moss",
              "count": 17
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 2
            }
          ],
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "sand",
              "count": 22
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "moss",
              "count": 17
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "pine",
              "count": 9
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          0,
          2,
          1,
          3,
          0,
          2,
          3,
          1,
          0,
          3,
          1
        ],
        "actualMoves": 31,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "pine",
              "count": 9
            }
          ],
          [
            {
              "color": "moss",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "moss",
              "count": 15
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "sand",
              "count": 18
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 12
            },
            {
              "color": "sand",
              "count": 21
            },
            {
              "color": "ink",
              "count": 18
            }
          ],
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "moss",
              "count": 17
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 3
            }
          ]
        ],
        "proof": [
          3,
          0,
          1,
          2,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          0,
          3
        ],
        "actualMoves": 31,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "moss",
              "count": 17
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "pine",
              "count": 8
            }
          ],
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 2
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 13
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "sand",
              "count": 22
            }
          ],
          [
            {
              "color": "moss",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "moss",
              "count": 15
            },
            {
              "color": "sand",
              "count": 17
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          3,
          1,
          0,
          2,
          3,
          2,
          1,
          0,
          3,
          2,
          0,
          1,
          3,
          0,
          1
        ],
        "actualMoves": 31,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "moss",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "pine",
              "count": 10
            }
          ],
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "sand",
              "count": 17
            }
          ],
          [
            {
              "color": "moss",
              "count": 17
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "moss",
              "count": 15
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "sand",
              "count": 22
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 1
            },
            {
              "color": "ink",
              "count": 1
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          0,
          3,
          3
        ],
        "actualMoves": 32,
        "temptation": false
      }
    ],
    "actualMoves": 31
  },
  {
    "id": "rabbit-tea",
    "file": "10-rabbit-tea.png",
    "name": "月兔茶馆",
    "N": 22,
    "jars": 35,
    "difficulty": "困难",
    "season": "长夜季",
    "night": "第 10 晚",
    "theme": "月兔与茶馆",
    "intro": "吸收同色星，给槽位松绑。",
    "mechanic": "吸收解锁",
    "colors": [
      "violet",
      "rose",
      "gold",
      "cream",
      "mint",
      "indigo"
    ],
    "palette": [
      "indigo",
      "violet",
      "plum",
      "sand",
      "cream",
      "lilac"
    ],
    "cells": [
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "lilac",
        "lilac",
        "lilac",
        "lilac",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "lilac",
        "plum",
        "sand",
        "sand",
        "plum",
        "lilac",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "plum",
        "plum",
        "cream",
        "cream",
        "cream",
        "cream",
        "plum",
        "plum",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "plum",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "plum",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "plum",
        "plum",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "plum",
        "plum",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "plum",
        "plum",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "plum",
        "plum",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "violet",
        "violet",
        "plum",
        "plum",
        "plum",
        "cream",
        "cream",
        "cream",
        "cream",
        "plum",
        "plum",
        "plum",
        "violet",
        "violet",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "violet",
        "violet",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "violet",
        "violet",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "violet",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "violet",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "plum",
        "plum",
        "lilac",
        "plum",
        "plum",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "plum",
        "plum",
        "plum",
        "cream",
        "cream",
        "plum",
        "plum",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "cream",
        "sand",
        "sand",
        "cream",
        "cream",
        "sand",
        "cream",
        "sand",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "sand",
        "sand",
        "sand",
        "cream",
        "cream",
        "sand",
        "sand",
        "sand",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "sand",
        "sand",
        "sand",
        "indigo",
        "indigo",
        "sand",
        "sand",
        "sand",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "sand",
        "sand",
        "sand",
        "indigo",
        "indigo",
        "sand",
        "sand",
        "sand",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ]
    ],
    "source": "assets/art/10-rabbit-tea.png",
    "density": 22,
    "stars": 484,
    "colorCounts": {
      "violet": 118,
      "lilac": 7,
      "plum": 63,
      "sand": 40,
      "cream": 34,
      "indigo": 222
    },
    "targetMoves": 35,
    "columns": [
      [
        {
          "color": "violet",
          "count": 15
        },
        {
          "color": "violet",
          "count": 15
        },
        {
          "color": "violet",
          "count": 12
        },
        {
          "color": "plum",
          "count": 14
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 12
        },
        {
          "color": "plum",
          "count": 4
        },
        {
          "color": "violet",
          "count": 1
        }
      ],
      [
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "violet",
          "count": 15
        },
        {
          "color": "plum",
          "count": 15
        },
        {
          "color": "sand",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "cream",
          "count": 17
        }
      ],
      [
        {
          "color": "violet",
          "count": 15
        },
        {
          "color": "violet",
          "count": 15
        },
        {
          "color": "plum",
          "count": 15
        },
        {
          "color": "sand",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "sand",
          "count": 4
        },
        {
          "color": "lilac",
          "count": 7
        }
      ],
      [
        {
          "color": "violet",
          "count": 15
        },
        {
          "color": "violet",
          "count": 15
        },
        {
          "color": "plum",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "cream",
          "count": 17
        }
      ]
    ],
    "proof": [
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      3,
      1,
      2,
      0,
      3,
      1,
      2,
      0,
      3,
      1,
      2,
      0,
      3,
      1,
      2,
      2,
      0,
      0
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 12
            },
            {
              "color": "plum",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "plum",
              "count": 4
            },
            {
              "color": "violet",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "plum",
              "count": 15
            },
            {
              "color": "sand",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "cream",
              "count": 17
            }
          ],
          [
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "plum",
              "count": 15
            },
            {
              "color": "sand",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "sand",
              "count": 4
            },
            {
              "color": "lilac",
              "count": 7
            }
          ],
          [
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "plum",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "cream",
              "count": 17
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          2,
          0,
          0
        ],
        "actualMoves": 35,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "sand",
              "count": 13
            },
            {
              "color": "sand",
              "count": 2
            },
            {
              "color": "plum",
              "count": 2
            },
            {
              "color": "violet",
              "count": 1
            }
          ],
          [
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "sand",
              "count": 12
            },
            {
              "color": "lilac",
              "count": 7
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "cream",
              "count": 17
            }
          ],
          [
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "sand",
              "count": 13
            },
            {
              "color": "cream",
              "count": 17
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          2,
          1,
          3,
          0,
          1,
          2,
          3,
          1,
          0,
          0,
          0
        ],
        "actualMoves": 36,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "sand",
              "count": 13
            },
            {
              "color": "sand",
              "count": 2
            },
            {
              "color": "plum",
              "count": 2
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "cream",
              "count": 17
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "sand",
              "count": 13
            },
            {
              "color": "cream",
              "count": 17
            }
          ],
          [
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "sand",
              "count": 12
            },
            {
              "color": "lilac",
              "count": 7
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          0,
          2,
          0,
          3,
          1,
          2,
          3,
          0,
          0
        ],
        "actualMoves": 35,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "sand",
              "count": 3
            }
          ],
          [
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "cream",
              "count": 17
            }
          ],
          [
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sand",
              "count": 18
            },
            {
              "color": "cream",
              "count": 17
            }
          ],
          [
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "sand",
              "count": 19
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "lilac",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 1
            },
            {
              "color": "plum",
              "count": 2
            }
          ]
        ],
        "proof": [
          3,
          0,
          1,
          2,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          3,
          3
        ],
        "actualMoves": 35,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "cream",
              "count": 17
            }
          ],
          [
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "sand",
              "count": 12
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "sand",
              "count": 2
            },
            {
              "color": "plum",
              "count": 2
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "sand",
              "count": 13
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "cream",
              "count": 17
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "sand",
              "count": 13
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "lilac",
              "count": 7
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          2,
          0,
          1,
          3,
          2,
          0,
          3,
          1,
          1
        ],
        "actualMoves": 35,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "sand",
              "count": 12
            },
            {
              "color": "lilac",
              "count": 7
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "cream",
              "count": 17
            }
          ],
          [
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "sand",
              "count": 13
            },
            {
              "color": "cream",
              "count": 17
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "sand",
              "count": 13
            },
            {
              "color": "sand",
              "count": 2
            },
            {
              "color": "plum",
              "count": 2
            },
            {
              "color": "indigo",
              "count": 1
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          0,
          2,
          3,
          0,
          1,
          2,
          0,
          3,
          3,
          3
        ],
        "actualMoves": 36,
        "temptation": false
      }
    ],
    "actualMoves": 35
  },
  {
    "id": "whale-sea",
    "file": "11-whale-sea.png",
    "name": "鲸背星海",
    "N": 23,
    "jars": 37,
    "difficulty": "困难",
    "season": "星潮季",
    "night": "第 11 晚",
    "theme": "鲸背与星海",
    "intro": "颜色更多，队列更深。",
    "mechanic": "多色 · 深队列",
    "colors": [
      "blue",
      "sky",
      "indigo",
      "cream",
      "coral",
      "teal"
    ],
    "palette": [
      "blue",
      "indigo",
      "ink",
      "sky",
      "cream",
      "sand"
    ],
    "cells": [
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "sky",
        "sky",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "cream",
        "cream",
        "sky",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "sand",
        "cream",
        "cream",
        "sand",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "sand",
        "sand",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo",
        "indigo",
        "ink",
        "indigo",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo",
        "indigo",
        "blue",
        "ink",
        "sand",
        "ink",
        "indigo",
        "indigo",
        "sky",
        "indigo",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "sky",
        "sky",
        "sky",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "blue",
        "cream",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ]
    ],
    "source": "assets/art/11-whale-sea.png",
    "density": 23,
    "stars": 529,
    "colorCounts": {
      "blue": 243,
      "sky": 13,
      "cream": 5,
      "sand": 5,
      "indigo": 154,
      "ink": 109
    },
    "targetMoves": 37,
    "columns": [
      [
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "blue",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "sand",
          "count": 5
        }
      ],
      [
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 8
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "sky",
          "count": 13
        }
      ],
      [
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "blue",
          "count": 4
        }
      ],
      [
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 13
        },
        {
          "color": "cream",
          "count": 5
        },
        {
          "color": "indigo",
          "count": 2
        }
      ]
    ],
    "proof": [
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      1,
      0,
      2,
      3,
      1,
      3,
      0,
      2,
      3
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "sand",
              "count": 5
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "sky",
              "count": 13
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "blue",
              "count": 4
            }
          ],
          [
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "cream",
              "count": 5
            },
            {
              "color": "indigo",
              "count": 2
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          3,
          0,
          2,
          3
        ],
        "actualMoves": 37,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "sand",
              "count": 5
            }
          ],
          [
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "cream",
              "count": 5
            },
            {
              "color": "blue",
              "count": 4
            }
          ],
          [
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 6
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 13
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          3,
          1,
          2,
          0,
          1
        ],
        "actualMoves": 37,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "sand",
              "count": 5
            }
          ],
          [
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "cream",
              "count": 5
            }
          ],
          [
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 3
            },
            {
              "color": "sky",
              "count": 13
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "ink",
              "count": 4
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          2,
          1,
          0,
          3
        ],
        "actualMoves": 37,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "sand",
              "count": 5
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "sky",
              "count": 13
            }
          ],
          [
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "blue",
              "count": 5
            }
          ],
          [
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "cream",
              "count": 5
            }
          ]
        ],
        "proof": [
          3,
          0,
          1,
          2,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          3,
          0,
          2
        ],
        "actualMoves": 36,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "cream",
              "count": 5
            }
          ],
          [
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 4
            },
            {
              "color": "blue",
              "count": 4
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "sand",
              "count": 5
            }
          ],
          [
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 13
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          3,
          1,
          0,
          2,
          1
        ],
        "actualMoves": 37,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "cream",
              "count": 5
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 3
            },
            {
              "color": "sky",
              "count": 13
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "ink",
              "count": 4
            }
          ],
          [
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "sand",
              "count": 5
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          1,
          0,
          2,
          3,
          0
        ],
        "actualMoves": 38,
        "temptation": false
      }
    ],
    "actualMoves": 37
  },
  {
    "id": "mushroom-post",
    "file": "12-mushroom-post.png",
    "name": "蘑菇邮差",
    "N": 23,
    "jars": 38,
    "difficulty": "困难",
    "season": "星潮季",
    "night": "第 12 晚",
    "theme": "蘑菇与邮差",
    "intro": "深处还有罐子，别急着填满。",
    "mechanic": "隐藏罐 · 腾槽",
    "colors": [
      "pine",
      "moss",
      "mint",
      "rose",
      "cream",
      "violet"
    ],
    "palette": [
      "indigo",
      "pine",
      "ink",
      "plum",
      "sky",
      "sand"
    ],
    "cells": [
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "sky",
        "sky",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "sky",
        "sky",
        "sand",
        "sand",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "sky",
        "sky",
        "sand",
        "sand",
        "sky",
        "pine",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "pine",
        "sky",
        "sand",
        "sand",
        "sky",
        "pine",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "sky",
        "sky",
        "pine",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "plum",
        "plum",
        "plum",
        "plum",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "plum",
        "sand",
        "plum",
        "plum",
        "plum",
        "plum",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "plum",
        "plum",
        "plum",
        "plum",
        "indigo",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "plum",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "sand",
        "sand",
        "pine",
        "pine",
        "pine",
        "pine",
        "plum",
        "indigo",
        "indigo",
        "plum",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "sand",
        "sand",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ]
    ],
    "source": "assets/art/12-mushroom-post.png",
    "density": 23,
    "stars": 529,
    "colorCounts": {
      "indigo": 238,
      "sky": 15,
      "sand": 11,
      "pine": 138,
      "ink": 111,
      "plum": 16
    },
    "targetMoves": 38,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "plum",
          "count": 16
        }
      ],
      [
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "sand",
          "count": 10
        },
        {
          "color": "sand",
          "count": 1
        }
      ],
      [
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 14
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 7
        }
      ],
      [
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 6
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "sky",
          "count": 15
        },
        {
          "color": "ink",
          "count": 1
        }
      ]
    ],
    "proof": [
      0,
      1,
      2,
      3,
      0,
      3,
      1,
      2,
      0,
      3,
      1,
      2,
      0,
      3,
      1,
      2,
      0,
      3,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      2,
      1,
      3,
      0,
      2,
      1,
      3,
      1,
      0,
      2,
      1,
      3
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "plum",
              "count": 16
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "sand",
              "count": 1
            }
          ],
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 7
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "ink",
              "count": 1
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          1,
          0,
          2,
          1,
          3
        ],
        "actualMoves": 38,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "plum",
              "count": 16
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "sand",
              "count": 11
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 5
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sky",
              "count": 15
            }
          ],
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "ink",
              "count": 1
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          2,
          1,
          3
        ],
        "actualMoves": 37,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "sand",
              "count": 11
            }
          ],
          [
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "plum",
              "count": 16
            },
            {
              "color": "ink",
              "count": 1
            }
          ],
          [
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 4
            },
            {
              "color": "indigo",
              "count": 5
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "sky",
              "count": 15
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          0,
          2,
          2,
          1
        ],
        "actualMoves": 38,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "sky",
              "count": 1
            }
          ],
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "plum",
              "count": 16
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 7
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "sky",
              "count": 14
            },
            {
              "color": "sand",
              "count": 1
            },
            {
              "color": "ink",
              "count": 1
            }
          ]
        ],
        "proof": [
          3,
          0,
          1,
          2,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          0,
          1,
          2,
          3,
          0,
          3
        ],
        "actualMoves": 39,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 5
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 8
            }
          ],
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "sand",
              "count": 11
            }
          ],
          [
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "plum",
              "count": 16
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "sky",
              "count": 15
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0
        ],
        "actualMoves": 37,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "plum",
              "count": 16
            }
          ],
          [
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "sky",
              "count": 15
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 3
            }
          ],
          [
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "pine",
              "count": 4
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2
        ],
        "actualMoves": 38,
        "temptation": false
      }
    ],
    "actualMoves": 38
  },
  {
    "id": "forest-piano",
    "file": "13-forest-piano.png",
    "name": "森林琴房",
    "N": 24,
    "jars": 40,
    "difficulty": "困难",
    "season": "星潮季",
    "night": "第 13 晚",
    "theme": "森林与琴房",
    "intro": "让空位留给下一罐。",
    "mechanic": "更深队列 · 等待",
    "colors": [
      "pine",
      "teal",
      "gold",
      "violet",
      "cream",
      "rose"
    ],
    "palette": [
      "indigo",
      "ink",
      "pine",
      "blue",
      "sand",
      "plum"
    ],
    "cells": [
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "blue",
        "blue",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "blue",
        "sand",
        "sand",
        "pine",
        "blue",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "sand",
        "sand",
        "sand",
        "blue",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "sand",
        "sand",
        "pine",
        "blue",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "pine",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "pine",
        "ink",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink"
      ],
      [
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "pine",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "sand",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "indigo",
        "ink",
        "indigo",
        "ink",
        "indigo",
        "ink",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "pine",
        "indigo",
        "pine",
        "ink",
        "indigo",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "pine",
        "ink",
        "pine",
        "pine",
        "ink"
      ],
      [
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink"
      ],
      [
        "ink",
        "ink",
        "pine",
        "ink",
        "pine",
        "ink",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "pine",
        "ink",
        "pine",
        "pine",
        "ink"
      ],
      [
        "ink",
        "pine",
        "pine",
        "ink",
        "pine",
        "pine",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink"
      ],
      [
        "ink",
        "pine",
        "pine",
        "ink",
        "ink",
        "plum",
        "indigo",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "indigo",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "pine",
        "ink",
        "pine",
        "pine",
        "ink"
      ],
      [
        "ink",
        "ink",
        "pine",
        "ink",
        "pine",
        "sand",
        "pine",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "pine",
        "pine",
        "sand",
        "pine",
        "sand",
        "sand",
        "pine",
        "pine",
        "ink",
        "pine",
        "pine",
        "ink"
      ],
      [
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ]
    ],
    "source": "assets/art/13-forest-piano.png",
    "density": 24,
    "stars": 576,
    "colorCounts": {
      "indigo": 224,
      "blue": 55,
      "sand": 28,
      "pine": 108,
      "ink": 148,
      "plum": 13
    },
    "targetMoves": 40,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 13
        },
        {
          "color": "pine",
          "count": 15
        },
        {
          "color": "blue",
          "count": 14
        },
        {
          "color": "ink",
          "count": 12
        },
        {
          "color": "indigo",
          "count": 10
        }
      ],
      [
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "pine",
          "count": 15
        },
        {
          "color": "pine",
          "count": 15
        },
        {
          "color": "blue",
          "count": 14
        },
        {
          "color": "ink",
          "count": 11
        },
        {
          "color": "plum",
          "count": 13
        }
      ],
      [
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 6
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "pine",
          "count": 15
        },
        {
          "color": "pine",
          "count": 12
        },
        {
          "color": "blue",
          "count": 13
        },
        {
          "color": "sand",
          "count": 14
        }
      ],
      [
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "pine",
          "count": 15
        },
        {
          "color": "pine",
          "count": 15
        },
        {
          "color": "blue",
          "count": 14
        },
        {
          "color": "sand",
          "count": 14
        },
        {
          "color": "pine",
          "count": 6
        }
      ]
    ],
    "proof": [
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "ink",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 10
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "plum",
              "count": 13
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 12
            },
            {
              "color": "blue",
              "count": 13
            },
            {
              "color": "sand",
              "count": 14
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "sand",
              "count": 14
            },
            {
              "color": "pine",
              "count": 6
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3
        ],
        "actualMoves": 40,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "sand",
              "count": 14
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "sand",
              "count": 14
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "pine",
              "count": 8
            }
          ],
          [
            {
              "color": "ink",
              "count": 22
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "blue",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 10
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2
        ],
        "actualMoves": 39,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "blue",
              "count": 13
            },
            {
              "color": "sand",
              "count": 14
            }
          ],
          [
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "pine",
              "count": 12
            }
          ],
          [
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "sand",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "plum",
              "count": 13
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2
        ],
        "actualMoves": 40,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "sand",
              "count": 14
            },
            {
              "color": "pine",
              "count": 6
            }
          ],
          [
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 12
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 7
            }
          ],
          [
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "blue",
              "count": 13
            },
            {
              "color": "plum",
              "count": 13
            }
          ],
          [
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "sand",
              "count": 14
            }
          ]
        ],
        "proof": [
          3,
          0,
          1,
          2,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0
        ],
        "actualMoves": 40,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "ink",
              "count": 22
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "sand",
              "count": 14
            },
            {
              "color": "pine",
              "count": 7
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "blue",
              "count": 12
            },
            {
              "color": "sand",
              "count": 14
            },
            {
              "color": "blue",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "plum",
              "count": 13
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          2,
          3,
          3,
          1,
          2
        ],
        "actualMoves": 40,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "sand",
              "count": 22
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "ink",
              "count": 22
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 12
            },
            {
              "color": "blue",
              "count": 13
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "pine",
              "count": 6
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sand",
              "count": 6
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          3,
          2
        ],
        "actualMoves": 39,
        "temptation": false
      }
    ],
    "actualMoves": 40
  },
  {
    "id": "snow-train",
    "file": "14-snow-train.png",
    "name": "雪国列车",
    "N": 24,
    "jars": 41,
    "difficulty": "极难",
    "season": "星潮季",
    "night": "第 14 晚",
    "theme": "雪国与列车",
    "intro": "盘面越空，回程越快。",
    "mechanic": "收尾加速 · 队列清空",
    "colors": [
      "sky",
      "blue",
      "cream",
      "indigo",
      "violet",
      "gold"
    ],
    "palette": [
      "sky",
      "mint",
      "cream",
      "indigo",
      "blue",
      "sand"
    ],
    "cells": [
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "sky",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "blue",
        "blue",
        "cream",
        "cream",
        "sky",
        "blue",
        "sky",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "blue",
        "sky",
        "cream",
        "cream",
        "sand",
        "blue",
        "blue",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "sky",
        "sky",
        "sky",
        "blue",
        "blue",
        "blue",
        "sand",
        "cream",
        "sky",
        "blue",
        "blue",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "sky",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "mint",
        "mint"
      ],
      [
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "sky",
        "sky",
        "sky",
        "sky",
        "mint",
        "mint",
        "mint"
      ],
      [
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint"
      ],
      [
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint"
      ],
      [
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint"
      ],
      [
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "sky",
        "sky",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "sky"
      ],
      [
        "mint",
        "mint",
        "mint",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "sky",
        "sky",
        "blue",
        "blue"
      ],
      [
        "sky",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "blue",
        "indigo",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "blue",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "blue",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "sand",
        "indigo",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "indigo",
        "indigo",
        "blue",
        "blue",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "blue",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "blue",
        "sky",
        "sand",
        "blue",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "blue",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "blue",
        "blue",
        "sky",
        "sky",
        "blue",
        "indigo",
        "blue",
        "indigo",
        "blue",
        "indigo",
        "indigo",
        "blue",
        "blue",
        "blue",
        "indigo",
        "blue",
        "indigo",
        "indigo",
        "blue",
        "blue",
        "sky",
        "blue",
        "sand",
        "blue"
      ],
      [
        "sky",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "sky",
        "sand",
        "mint",
        "sand",
        "sky",
        "mint",
        "sand",
        "sky",
        "sand",
        "mint",
        "sky",
        "sand",
        "mint",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream"
      ],
      [
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream"
      ],
      [
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream"
      ],
      [
        "sand",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "sand"
      ]
    ],
    "source": "assets/art/14-snow-train.png",
    "density": 24,
    "stars": 576,
    "colorCounts": {
      "sky": 151,
      "blue": 77,
      "cream": 85,
      "sand": 35,
      "mint": 147,
      "indigo": 81
    },
    "targetMoves": 41,
    "columns": [
      [
        {
          "color": "sky",
          "count": 16
        },
        {
          "color": "sky",
          "count": 16
        },
        {
          "color": "cream",
          "count": 14
        },
        {
          "color": "cream",
          "count": 14
        },
        {
          "color": "mint",
          "count": 15
        },
        {
          "color": "mint",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "sand",
          "count": 18
        },
        {
          "color": "mint",
          "count": 1
        }
      ],
      [
        {
          "color": "cream",
          "count": 14
        },
        {
          "color": "sky",
          "count": 16
        },
        {
          "color": "sky",
          "count": 16
        },
        {
          "color": "cream",
          "count": 14
        },
        {
          "color": "mint",
          "count": 15
        },
        {
          "color": "mint",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "sand",
          "count": 17
        },
        {
          "color": "indigo",
          "count": 7
        }
      ],
      [
        {
          "color": "mint",
          "count": 15
        },
        {
          "color": "sky",
          "count": 16
        },
        {
          "color": "sky",
          "count": 16
        },
        {
          "color": "cream",
          "count": 10
        },
        {
          "color": "mint",
          "count": 15
        },
        {
          "color": "mint",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "blue",
          "count": 13
        },
        {
          "color": "sky",
          "count": 15
        }
      ],
      [
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "sky",
          "count": 16
        },
        {
          "color": "sky",
          "count": 9
        },
        {
          "color": "cream",
          "count": 14
        },
        {
          "color": "mint",
          "count": 15
        },
        {
          "color": "mint",
          "count": 15
        },
        {
          "color": "mint",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 14
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "cream",
          "count": 5
        },
        {
          "color": "sky",
          "count": 15
        }
      ]
    ],
    "proof": [
      0,
      1,
      2,
      3,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      3,
      0,
      1,
      2,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      3,
      2,
      1,
      0
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "sand",
              "count": 18
            },
            {
              "color": "mint",
              "count": 1
            }
          ],
          [
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 7
            }
          ],
          [
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 13
            },
            {
              "color": "sky",
              "count": 15
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 9
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "cream",
              "count": 5
            },
            {
              "color": "sky",
              "count": 15
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          3,
          2,
          1,
          0
        ],
        "actualMoves": 41,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "cream",
              "count": 16
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "cream",
              "count": 6
            }
          ],
          [
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "cream",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 16
            }
          ],
          [
            {
              "color": "cream",
              "count": 16
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "cream",
              "count": 16
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 12
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "sky",
              "count": 16
            }
          ],
          [
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 14
            },
            {
              "color": "cream",
              "count": 16
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "sand",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 1
            },
            {
              "color": "blue",
              "count": 2
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          3,
          0,
          1,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          1,
          2,
          0,
          3,
          3
        ],
        "actualMoves": 41,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 14
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "sand",
              "count": 1
            }
          ],
          [
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 12
            },
            {
              "color": "sky",
              "count": 16
            }
          ],
          [
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "cream",
              "count": 12
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "sky",
              "count": 16
            }
          ],
          [
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "blue",
              "count": 21
            },
            {
              "color": "cream",
              "count": 3
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          0
        ],
        "actualMoves": 41,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "sand",
              "count": 16
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "sand",
              "count": 3
            }
          ],
          [
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "blue",
              "count": 13
            }
          ],
          [
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "cream",
              "count": 5
            },
            {
              "color": "indigo",
              "count": 3
            }
          ],
          [
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "sand",
              "count": 16
            },
            {
              "color": "sky",
              "count": 16
            }
          ]
        ],
        "proof": [
          3,
          0,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          1,
          3,
          2,
          2,
          0
        ],
        "actualMoves": 42,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "cream",
              "count": 5
            },
            {
              "color": "sand",
              "count": 1
            },
            {
              "color": "sky",
              "count": 1
            }
          ],
          [
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 7
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "sky",
              "count": 14
            },
            {
              "color": "mint",
              "count": 5
            }
          ],
          [
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 6
            }
          ],
          [
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sky",
              "count": 9
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          0,
          1,
          2,
          0,
          0
        ],
        "actualMoves": 43,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "cream",
              "count": 5
            },
            {
              "color": "sky",
              "count": 11
            }
          ],
          [
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 7
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "sky",
              "count": 12
            }
          ],
          [
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "blue",
              "count": 13
            }
          ],
          [
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "mint",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "mint",
              "count": 1
            },
            {
              "color": "sky",
              "count": 1
            },
            {
              "color": "sand",
              "count": 1
            },
            {
              "color": "indigo",
              "count": 1
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          1,
          3,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          0,
          1,
          0,
          2,
          3,
          3,
          3,
          3
        ],
        "actualMoves": 45,
        "temptation": false
      }
    ],
    "actualMoves": 41
  },
  {
    "id": "coral-dream",
    "file": "15-coral-dream.png",
    "name": "珊瑚梦屿",
    "N": 25,
    "jars": 42,
    "difficulty": "极难",
    "season": "星潮季",
    "night": "第 15 晚",
    "theme": "珊瑚与梦屿",
    "intro": "颜色更接近，先对罐色。",
    "mechanic": "高密度起势 · 多色",
    "colors": [
      "coral",
      "rose",
      "teal",
      "cream",
      "gold",
      "blue"
    ],
    "palette": [
      "teal",
      "pine",
      "sand",
      "cream",
      "plum",
      "moss"
    ],
    "cells": [
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "sand",
        "sand",
        "sand",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "pine",
        "cream",
        "cream",
        "cream",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "pine",
        "cream",
        "cream",
        "cream",
        "pine",
        "teal",
        "teal",
        "teal",
        "teal"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "sand",
        "sand",
        "sand",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "pine",
        "teal",
        "teal"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "teal",
        "teal",
        "teal",
        "teal",
        "pine",
        "pine",
        "pine",
        "pine",
        "teal",
        "teal",
        "teal",
        "pine",
        "pine",
        "teal",
        "teal",
        "teal",
        "pine",
        "pine",
        "teal",
        "pine",
        "pine"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "plum",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "plum",
        "sand",
        "plum",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "plum",
        "plum",
        "plum",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "pine",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "moss",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "cream",
        "cream",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "cream",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "sand",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "sand",
        "cream",
        "cream",
        "cream",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "moss",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "moss",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "moss",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "moss",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal"
      ]
    ],
    "source": "assets/art/15-coral-dream.png",
    "density": 25,
    "stars": 625,
    "colorCounts": {
      "teal": 409,
      "sand": 36,
      "pine": 151,
      "cream": 18,
      "plum": 6,
      "moss": 5
    },
    "targetMoves": 42,
    "columns": [
      [
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "cream",
          "count": 18
        }
      ],
      [
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "plum",
          "count": 6
        },
        {
          "color": "moss",
          "count": 5
        }
      ],
      [
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 8
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "sand",
          "count": 18
        }
      ],
      [
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "pine",
          "count": 7
        },
        {
          "color": "sand",
          "count": 18
        },
        {
          "color": "teal",
          "count": 1
        }
      ]
    ],
    "proof": [
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      3,
      2,
      0,
      1,
      1,
      3
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "cream",
              "count": 18
            }
          ],
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "plum",
              "count": 6
            },
            {
              "color": "moss",
              "count": 5
            }
          ],
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 8
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "sand",
              "count": 18
            }
          ],
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 7
            },
            {
              "color": "sand",
              "count": 18
            },
            {
              "color": "teal",
              "count": 1
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          3,
          2,
          0,
          1,
          1,
          3
        ],
        "actualMoves": 42,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "cream",
              "count": 18
            }
          ],
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "plum",
              "count": 6
            },
            {
              "color": "moss",
              "count": 5
            }
          ],
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 8
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "sand",
              "count": 18
            }
          ],
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 7
            },
            {
              "color": "sand",
              "count": 18
            },
            {
              "color": "teal",
              "count": 1
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          3,
          2,
          0,
          1,
          1,
          3
        ],
        "actualMoves": 42,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "cream",
              "count": 18
            }
          ],
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "plum",
              "count": 6
            },
            {
              "color": "moss",
              "count": 5
            }
          ],
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 8
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "sand",
              "count": 18
            }
          ],
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 7
            },
            {
              "color": "sand",
              "count": 18
            },
            {
              "color": "teal",
              "count": 1
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          3,
          2,
          0,
          1,
          1,
          3
        ],
        "actualMoves": 42,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "sand",
              "count": 18
            }
          ],
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "cream",
              "count": 18
            }
          ],
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 8
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "sand",
              "count": 18
            },
            {
              "color": "teal",
              "count": 1
            }
          ],
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "plum",
              "count": 6
            },
            {
              "color": "moss",
              "count": 5
            },
            {
              "color": "pine",
              "count": 1
            }
          ]
        ],
        "proof": [
          3,
          0,
          1,
          2,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          3,
          2,
          3
        ],
        "actualMoves": 43,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "plum",
              "count": 6
            },
            {
              "color": "moss",
              "count": 5
            }
          ],
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "cream",
              "count": 18
            }
          ],
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 8
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "teal",
              "count": 1
            }
          ],
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 7
            },
            {
              "color": "sand",
              "count": 18
            },
            {
              "color": "sand",
              "count": 1
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          3,
          2,
          0,
          1,
          0,
          2,
          3
        ],
        "actualMoves": 43,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 7
            },
            {
              "color": "moss",
              "count": 5
            }
          ],
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "cream",
              "count": 18
            }
          ],
          [
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 8
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "teal",
              "count": 1
            }
          ],
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "sand",
              "count": 18
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "plum",
              "count": 6
            },
            {
              "color": "sand",
              "count": 1
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          0,
          3,
          2
        ],
        "actualMoves": 43,
        "temptation": false
      }
    ],
    "actualMoves": 42
  },
  {
    "id": "cloud-whale",
    "file": "16-cloud-whale.png",
    "name": "云鲸灯塔",
    "N": 26,
    "jars": 46,
    "difficulty": "极难",
    "season": "星潮季",
    "night": "第 16 晚",
    "theme": "云鲸与灯塔",
    "intro": "格距更小，精灵也缩小。",
    "mechanic": "高密度 · 精灵按格缩放",
    "colors": [
      "sky",
      "violet",
      "cream",
      "gold",
      "teal",
      "rose"
    ],
    "palette": [
      "sky",
      "indigo",
      "blue",
      "violet",
      "sand",
      "cream"
    ],
    "cells": [
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sand",
        "sand",
        "sand",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sand",
        "cream",
        "cream",
        "sand",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sand",
        "cream",
        "cream",
        "sand",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sand",
        "sand",
        "sand",
        "sand",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sand",
        "sand",
        "blue",
        "sky",
        "sky",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand"
      ],
      [
        "blue",
        "blue",
        "blue",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "cream",
        "blue",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sand",
        "sand",
        "sky"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sand",
        "cream",
        "blue",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sand",
        "cream",
        "sky",
        "blue",
        "blue",
        "sky",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo",
        "violet",
        "violet",
        "violet",
        "violet",
        "sky",
        "sand",
        "violet",
        "violet",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo",
        "indigo",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "cream",
        "sky",
        "violet",
        "violet",
        "violet",
        "indigo",
        "indigo",
        "indigo",
        "blue"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "blue",
        "blue",
        "indigo",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "indigo",
        "blue"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "sky",
        "sand",
        "cream",
        "cream",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "sky",
        "sand",
        "cream",
        "sky",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "cream",
        "cream",
        "sand",
        "cream",
        "cream",
        "sky",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "blue",
        "cream",
        "cream",
        "sand",
        "sand",
        "cream",
        "cream",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "sand",
        "sand",
        "sky",
        "sky",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "sky",
        "sand",
        "cream",
        "cream",
        "cream",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "cream",
        "cream",
        "cream",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "sand",
        "cream",
        "cream",
        "sand",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ]
    ],
    "source": "assets/art/16-cloud-whale.png",
    "density": 26,
    "stars": 676,
    "colorCounts": {
      "sky": 225,
      "sand": 51,
      "cream": 46,
      "blue": 102,
      "indigo": 167,
      "violet": 85
    },
    "targetMoves": 46,
    "columns": [
      [
        {
          "color": "sky",
          "count": 15
        },
        {
          "color": "sky",
          "count": 15
        },
        {
          "color": "sky",
          "count": 15
        },
        {
          "color": "sky",
          "count": 15
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "sand",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 6
        },
        {
          "color": "violet",
          "count": 15
        },
        {
          "color": "violet",
          "count": 15
        },
        {
          "color": "cream",
          "count": 16
        },
        {
          "color": "blue",
          "count": 7
        }
      ],
      [
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "sky",
          "count": 15
        },
        {
          "color": "sky",
          "count": 15
        },
        {
          "color": "sky",
          "count": 15
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "violet",
          "count": 15
        },
        {
          "color": "sky",
          "count": 18
        },
        {
          "color": "sand",
          "count": 15
        }
      ],
      [
        {
          "color": "sand",
          "count": 18
        },
        {
          "color": "sky",
          "count": 15
        },
        {
          "color": "sky",
          "count": 15
        },
        {
          "color": "sky",
          "count": 10
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "blue",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "violet",
          "count": 15
        },
        {
          "color": "violet",
          "count": 10
        },
        {
          "color": "cream",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 1
        }
      ],
      [
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "sky",
          "count": 15
        },
        {
          "color": "sky",
          "count": 15
        },
        {
          "color": "sky",
          "count": 15
        },
        {
          "color": "blue",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "violet",
          "count": 15
        },
        {
          "color": "sky",
          "count": 17
        },
        {
          "color": "cream",
          "count": 14
        }
      ]
    ],
    "proof": [
      0,
      1,
      2,
      3,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      1,
      3,
      0,
      2,
      1,
      3,
      0,
      0,
      2,
      1,
      3,
      0,
      2,
      1,
      3,
      0,
      2,
      3,
      1,
      0,
      2
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "sand",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "cream",
              "count": 16
            },
            {
              "color": "blue",
              "count": 7
            }
          ],
          [
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "sky",
              "count": 18
            },
            {
              "color": "sand",
              "count": 15
            }
          ],
          [
            {
              "color": "sand",
              "count": 18
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "cream",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "cream",
              "count": 14
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          3,
          1,
          0,
          2
        ],
        "actualMoves": 46,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "blue",
              "count": 12
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "sand",
              "count": 16
            },
            {
              "color": "cream",
              "count": 16
            },
            {
              "color": "sand",
              "count": 3
            },
            {
              "color": "indigo",
              "count": 4
            }
          ],
          [
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "cream",
              "count": 16
            },
            {
              "color": "sky",
              "count": 18
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "sand",
              "count": 16
            },
            {
              "color": "sky",
              "count": 18
            }
          ],
          [
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "sand",
              "count": 16
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "blue",
              "count": 6
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          3,
          0,
          0
        ],
        "actualMoves": 48,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "cream",
              "count": 15
            },
            {
              "color": "sand",
              "count": 2
            },
            {
              "color": "indigo",
              "count": 4
            }
          ],
          [
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "sky",
              "count": 18
            },
            {
              "color": "cream",
              "count": 1
            }
          ],
          [
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "cream",
              "count": 15
            },
            {
              "color": "sky",
              "count": 17
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "sand",
              "count": 15
            },
            {
              "color": "cream",
              "count": 15
            },
            {
              "color": "blue",
              "count": 4
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          0,
          1
        ],
        "actualMoves": 49,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "blue",
              "count": 13
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "sand",
              "count": 16
            },
            {
              "color": "sky",
              "count": 16
            },
            {
              "color": "sand",
              "count": 3
            },
            {
              "color": "sky",
              "count": 1
            }
          ],
          [
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "sand",
              "count": 16
            },
            {
              "color": "cream",
              "count": 16
            },
            {
              "color": "blue",
              "count": 5
            }
          ],
          [
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "cream",
              "count": 14
            }
          ],
          [
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "sand",
              "count": 16
            },
            {
              "color": "cream",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 4
            }
          ]
        ],
        "proof": [
          3,
          0,
          1,
          2,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          0
        ],
        "actualMoves": 49,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "cream",
              "count": 13
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "cream",
              "count": 8
            }
          ],
          [
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "sand",
              "count": 17
            },
            {
              "color": "blue",
              "count": 3
            },
            {
              "color": "indigo",
              "count": 5
            }
          ],
          [
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "cream",
              "count": 13
            },
            {
              "color": "sand",
              "count": 17
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "blue",
              "count": 9
            },
            {
              "color": "cream",
              "count": 12
            },
            {
              "color": "sky",
              "count": 20
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          1
        ],
        "actualMoves": 48,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "cream",
              "count": 16
            },
            {
              "color": "sand",
              "count": 4
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 9
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "sand",
              "count": 16
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "blue",
              "count": 12
            },
            {
              "color": "cream",
              "count": 14
            }
          ],
          [
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "cream",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 4
            }
          ],
          [
            {
              "color": "sand",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "sky",
              "count": 15
            },
            {
              "color": "violet",
              "count": 15
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "sand",
              "count": 15
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "sky",
              "count": 21
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          0,
          2
        ],
        "actualMoves": 47,
        "temptation": false
      }
    ],
    "actualMoves": 46
  },
  {
    "id": "star-garden",
    "file": "17-star-garden.png",
    "name": "星轨花园",
    "N": 27,
    "jars": 51,
    "difficulty": "极难",
    "season": "星潮季",
    "night": "第 17 晚",
    "theme": "星轨与花园",
    "intro": "先摘近的，远的会绕开。",
    "mechanic": "高密度 · 近取远绕",
    "colors": [
      "indigo",
      "violet",
      "rose",
      "gold",
      "mint",
      "teal"
    ],
    "palette": [
      "indigo",
      "ink",
      "pine",
      "sand",
      "plum",
      "cream"
    ],
    "cells": [
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "cream",
        "cream",
        "cream",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "cream",
        "cream",
        "cream",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "cream",
        "cream",
        "cream",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "sand",
        "cream",
        "sand",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "plum",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "sand",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "sand",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "sand",
        "pine",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "sand",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "sand",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "sand",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "sand",
        "sand",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "sand",
        "sand",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "plum",
        "sand",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "plum",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "sand",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "plum",
        "sand",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "plum",
        "plum",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ]
    ],
    "source": "assets/art/17-star-garden.png",
    "density": 27,
    "stars": 729,
    "colorCounts": {
      "indigo": 290,
      "plum": 17,
      "cream": 15,
      "sand": 27,
      "ink": 229,
      "pine": 151
    },
    "targetMoves": 51,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "pine",
          "count": 15
        },
        {
          "color": "pine",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 14
        },
        {
          "color": "pine",
          "count": 3
        },
        {
          "color": "sand",
          "count": 1
        },
        {
          "color": "ink",
          "count": 2
        }
      ],
      [
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 5
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 3
        },
        {
          "color": "pine",
          "count": 15
        },
        {
          "color": "pine",
          "count": 15
        },
        {
          "color": "pine",
          "count": 15
        },
        {
          "color": "sand",
          "count": 13
        }
      ],
      [
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "pine",
          "count": 15
        },
        {
          "color": "pine",
          "count": 15
        },
        {
          "color": "pine",
          "count": 13
        },
        {
          "color": "cream",
          "count": 15
        }
      ],
      [
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "indigo",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "pine",
          "count": 15
        },
        {
          "color": "pine",
          "count": 15
        },
        {
          "color": "sand",
          "count": 13
        },
        {
          "color": "plum",
          "count": 17
        }
      ]
    ],
    "proof": [
      0,
      1,
      2,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      1,
      2,
      0,
      3,
      1,
      2,
      0,
      3,
      1,
      2,
      0,
      3,
      1,
      1,
      2,
      0,
      3,
      1,
      2,
      0,
      3,
      1,
      2,
      0,
      3,
      1,
      2,
      3,
      0,
      0,
      0
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "pine",
              "count": 3
            },
            {
              "color": "sand",
              "count": 1
            },
            {
              "color": "ink",
              "count": 2
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 5
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 3
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "sand",
              "count": 13
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 13
            },
            {
              "color": "cream",
              "count": 15
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "sand",
              "count": 13
            },
            {
              "color": "plum",
              "count": 17
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          3,
          0,
          0,
          0
        ],
        "actualMoves": 51,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "plum",
              "count": 17
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 5
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 5
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "sand",
              "count": 13
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "sand",
              "count": 14
            },
            {
              "color": "pine",
              "count": 4
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 12
            },
            {
              "color": "cream",
              "count": 15
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2
        ],
        "actualMoves": 49,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 3
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 7
            },
            {
              "color": "cream",
              "count": 15
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "sand",
              "count": 14
            },
            {
              "color": "plum",
              "count": 17
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 5
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "sand",
              "count": 13
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          2,
          0
        ],
        "actualMoves": 48,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "plum",
              "count": 17
            }
          ],
          [
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 14
            },
            {
              "color": "sand",
              "count": 14
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 4
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "cream",
              "count": 15
            },
            {
              "color": "ink",
              "count": 4
            },
            {
              "color": "indigo",
              "count": 1
            },
            {
              "color": "pine",
              "count": 2
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "sand",
              "count": 13
            }
          ]
        ],
        "proof": [
          3,
          0,
          1,
          2,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          1,
          3,
          0,
          2,
          2,
          2
        ],
        "actualMoves": 51,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 1
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "sand",
              "count": 14
            },
            {
              "color": "plum",
              "count": 17
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 7
            },
            {
              "color": "cream",
              "count": 15
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 3
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "sand",
              "count": 13
            },
            {
              "color": "ink",
              "count": 2
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          2,
          0,
          1,
          3
        ],
        "actualMoves": 50,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 2
            },
            {
              "color": "ink",
              "count": 1
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 7
            },
            {
              "color": "sand",
              "count": 13
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "cream",
              "count": 15
            },
            {
              "color": "plum",
              "count": 17
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 4
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "sand",
              "count": 14
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          2,
          0,
          0
        ],
        "actualMoves": 49,
        "temptation": false
      }
    ],
    "actualMoves": 51
  },
  {
    "id": "polar-market",
    "file": "18-polar-market.png",
    "name": "极夜集市",
    "N": 28,
    "jars": 50,
    "difficulty": "极难",
    "season": "星潮季",
    "night": "第 18 晚",
    "theme": "极夜与集市",
    "intro": "五槽和深队列同时收紧。",
    "mechanic": "高密度 · 紧槽",
    "colors": [
      "ink",
      "coral",
      "gold",
      "cream",
      "teal",
      "rose",
      "pine"
    ],
    "palette": [
      "ink",
      "pine",
      "sand",
      "cream",
      "plum",
      "indigo"
    ],
    "cells": [
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "cream",
        "cream",
        "cream",
        "pine",
        "pine",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "cream",
        "cream",
        "cream",
        "pine",
        "pine",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "sand",
        "cream",
        "sand",
        "pine",
        "pine",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "ink",
        "ink",
        "ink",
        "pine",
        "ink",
        "ink",
        "ink",
        "pine",
        "ink",
        "ink",
        "ink",
        "sand",
        "ink",
        "ink",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "plum",
        "plum",
        "ink",
        "plum",
        "plum",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "plum",
        "indigo",
        "plum",
        "plum",
        "indigo",
        "plum",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "ink",
        "ink",
        "pine",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "ink",
        "ink",
        "sand",
        "cream",
        "cream",
        "cream",
        "cream",
        "pine",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "ink",
        "ink",
        "ink",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "ink",
        "ink",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "pine",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "ink",
        "ink",
        "pine",
        "cream",
        "cream",
        "cream",
        "cream",
        "sand",
        "ink",
        "ink",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "pine",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "cream",
        "plum",
        "plum",
        "plum",
        "cream",
        "ink",
        "ink",
        "pine",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "cream",
        "ink",
        "ink",
        "cream",
        "sand",
        "plum",
        "plum",
        "sand",
        "sand",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "cream",
        "indigo",
        "indigo",
        "indigo",
        "cream",
        "ink",
        "ink",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "ink",
        "ink",
        "cream",
        "plum",
        "indigo",
        "indigo",
        "plum",
        "sand",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "indigo",
        "ink",
        "ink",
        "ink",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ]
    ],
    "source": "assets/art/18-polar-market.png",
    "density": 28,
    "stars": 784,
    "colorCounts": {
      "ink": 636,
      "pine": 47,
      "cream": 27,
      "sand": 41,
      "plum": 17,
      "indigo": 16
    },
    "targetMoves": 50,
    "columns": [
      [
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "cream",
          "count": 13
        }
      ],
      [
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "pine",
          "count": 15
        },
        {
          "color": "cream",
          "count": 14
        }
      ],
      [
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "sand",
          "count": 14
        },
        {
          "color": "sand",
          "count": 13
        },
        {
          "color": "plum",
          "count": 17
        }
      ],
      [
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 16
        },
        {
          "color": "ink",
          "count": 12
        },
        {
          "color": "pine",
          "count": 16
        },
        {
          "color": "sand",
          "count": 14
        },
        {
          "color": "indigo",
          "count": 16
        }
      ]
    ],
    "proof": [
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      3,
      0,
      1,
      2,
      3,
      2,
      1,
      0,
      3,
      2
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "cream",
              "count": 13
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "cream",
              "count": 14
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "sand",
              "count": 14
            },
            {
              "color": "sand",
              "count": 13
            },
            {
              "color": "plum",
              "count": 17
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 12
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "sand",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 16
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          2,
          1,
          0,
          3,
          2
        ],
        "actualMoves": 50,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "sand",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 16
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "sand",
              "count": 3
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "cream",
              "count": 13
            },
            {
              "color": "plum",
              "count": 17
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 12
            },
            {
              "color": "sand",
              "count": 19
            },
            {
              "color": "pine",
              "count": 15
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          1,
          2,
          0,
          2,
          1
        ],
        "actualMoves": 50,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "sand",
              "count": 13
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "sand",
              "count": 14
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "sand",
              "count": 14
            },
            {
              "color": "plum",
              "count": 17
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 12
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "cream",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 16
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          2,
          1,
          0,
          3,
          2
        ],
        "actualMoves": 50,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "sand",
              "count": 13
            },
            {
              "color": "plum",
              "count": 17
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "sand",
              "count": 14
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "cream",
              "count": 14
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 12
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "sand",
              "count": 14
            },
            {
              "color": "cream",
              "count": 13
            }
          ]
        ],
        "proof": [
          3,
          0,
          1,
          2,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          1,
          0,
          2,
          3,
          0
        ],
        "actualMoves": 50,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "sand",
              "count": 19
            },
            {
              "color": "cream",
              "count": 13
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "plum",
              "count": 17
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 12
            },
            {
              "color": "sand",
              "count": 19
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "sand",
              "count": 3
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          1,
          2,
          0,
          2,
          3
        ],
        "actualMoves": 50,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "sand",
              "count": 19
            },
            {
              "color": "cream",
              "count": 13
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "sand",
              "count": 3
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "cream",
              "count": 14
            },
            {
              "color": "plum",
              "count": 17
            }
          ],
          [
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 16
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "sand",
              "count": 19
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "ink",
              "count": 1
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          1,
          2,
          0,
          2,
          3,
          1
        ],
        "actualMoves": 51,
        "temptation": false
      }
    ],
    "actualMoves": 50
  },
  {
    "id": "glass-dome",
    "file": "19-glass-dome.png",
    "name": "玻璃星穹",
    "N": 30,
    "jars": 54,
    "difficulty": "终章",
    "season": "星潮季",
    "night": "第 19 晚",
    "theme": "玻璃与星穹",
    "intro": "只走空位，不压未摘的星。",
    "mechanic": "高密度 · 绕行",
    "colors": [
      "blue",
      "violet",
      "rose",
      "cream",
      "gold",
      "mint"
    ],
    "palette": [
      "blue",
      "indigo",
      "sky",
      "ink",
      "cream",
      "gold"
    ],
    "cells": [
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "cream",
        "cream",
        "cream",
        "cream",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "cream",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "cream",
        "cream",
        "cream",
        "cream",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "sky",
        "sky",
        "cream",
        "cream",
        "sky",
        "sky",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "blue",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "blue",
        "blue",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "blue",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sky",
        "sky",
        "sky",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "cream",
        "cream",
        "cream",
        "cream",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo",
        "blue",
        "blue",
        "indigo",
        "cream",
        "gold",
        "gold",
        "cream",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo",
        "gold",
        "gold",
        "gold",
        "gold",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo",
        "gold",
        "gold",
        "gold",
        "gold",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo",
        "gold",
        "gold",
        "gold",
        "gold",
        "indigo",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ]
    ],
    "source": "assets/art/19-glass-dome.png",
    "density": 30,
    "stars": 900,
    "colorCounts": {
      "blue": 393,
      "sky": 165,
      "cream": 34,
      "indigo": 174,
      "ink": 120,
      "gold": 14
    },
    "targetMoves": 54,
    "columns": [
      [
        {
          "color": "blue",
          "count": 18
        },
        {
          "color": "blue",
          "count": 18
        },
        {
          "color": "blue",
          "count": 18
        },
        {
          "color": "blue",
          "count": 18
        },
        {
          "color": "blue",
          "count": 18
        },
        {
          "color": "ink",
          "count": 18
        },
        {
          "color": "ink",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "blue",
          "count": 17
        },
        {
          "color": "sky",
          "count": 17
        },
        {
          "color": "sky",
          "count": 17
        },
        {
          "color": "cream",
          "count": 17
        }
      ],
      [
        {
          "color": "ink",
          "count": 18
        },
        {
          "color": "blue",
          "count": 18
        },
        {
          "color": "blue",
          "count": 18
        },
        {
          "color": "blue",
          "count": 18
        },
        {
          "color": "blue",
          "count": 18
        },
        {
          "color": "ink",
          "count": 18
        },
        {
          "color": "ink",
          "count": 12
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "blue",
          "count": 17
        },
        {
          "color": "sky",
          "count": 17
        },
        {
          "color": "sky",
          "count": 17
        },
        {
          "color": "cream",
          "count": 17
        }
      ],
      [
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "blue",
          "count": 18
        },
        {
          "color": "blue",
          "count": 18
        },
        {
          "color": "blue",
          "count": 18
        },
        {
          "color": "blue",
          "count": 18
        },
        {
          "color": "ink",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "blue",
          "count": 17
        },
        {
          "color": "sky",
          "count": 17
        },
        {
          "color": "sky",
          "count": 17
        },
        {
          "color": "sky",
          "count": 12
        },
        {
          "color": "indigo",
          "count": 1
        }
      ],
      [
        {
          "color": "blue",
          "count": 17
        },
        {
          "color": "blue",
          "count": 18
        },
        {
          "color": "blue",
          "count": 18
        },
        {
          "color": "blue",
          "count": 18
        },
        {
          "color": "blue",
          "count": 18
        },
        {
          "color": "blue",
          "count": 2
        },
        {
          "color": "ink",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "blue",
          "count": 17
        },
        {
          "color": "sky",
          "count": 17
        },
        {
          "color": "sky",
          "count": 17
        },
        {
          "color": "sky",
          "count": 17
        },
        {
          "color": "gold",
          "count": 14
        }
      ]
    ],
    "proof": [
      0,
      1,
      2,
      3,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      1,
      0,
      2,
      3,
      1,
      0,
      2,
      3,
      2,
      1,
      0,
      3,
      2,
      1,
      0,
      3,
      2,
      1,
      0,
      3,
      2,
      1,
      0,
      3,
      2
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "cream",
              "count": 17
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "cream",
              "count": 17
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 2
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "gold",
              "count": 14
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2
        ],
        "actualMoves": 54,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "cream",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "blue",
              "count": 1
            }
          ],
          [
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 2
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "cream",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "gold",
              "count": 14
            },
            {
              "color": "ink",
              "count": 1
            }
          ],
          [
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 14
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          3,
          2,
          0
        ],
        "actualMoves": 56,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 7
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 12
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "cream",
              "count": 17
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 15
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 12
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "gold",
              "count": 14
            }
          ],
          [
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "blue",
              "count": 16
            },
            {
              "color": "cream",
              "count": 17
            },
            {
              "color": "blue",
              "count": 1
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          1,
          2,
          0,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3
        ],
        "actualMoves": 56,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 12
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "cream",
              "count": 17
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 12
            },
            {
              "color": "blue",
              "count": 22
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "gold",
              "count": 14
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "cream",
              "count": 17
            }
          ]
        ],
        "proof": [
          3,
          0,
          1,
          2,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          2,
          0
        ],
        "actualMoves": 54,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "cream",
              "count": 16
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "gold",
              "count": 12
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 14
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 12
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 12
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            }
          ],
          [
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "cream",
              "count": 15
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "blue",
              "count": 18
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "cream",
              "count": 3
            },
            {
              "color": "gold",
              "count": 2
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          3
        ],
        "actualMoves": 56,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 12
            },
            {
              "color": "cream",
              "count": 17
            }
          ],
          [
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 2
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "ink",
              "count": 1
            },
            {
              "color": "gold",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "cream",
              "count": 17
            }
          ],
          [
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "blue",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "sky",
              "count": 17
            },
            {
              "color": "gold",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 1
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          2,
          0,
          1,
          3,
          1
        ],
        "actualMoves": 57,
        "temptation": false
      }
    ],
    "actualMoves": 54
  },
  {
    "id": "light-tree",
    "file": "20-light-tree.png",
    "name": "拾光之树",
    "N": 34,
    "jars": 68,
    "difficulty": "终章",
    "season": "星潮季",
    "night": "第 20 晚",
    "theme": "拾光与归树",
    "intro": "把最后一夜摘成一幅画。",
    "mechanic": "终章 · 最高密度",
    "colors": [
      "indigo",
      "gold",
      "cream",
      "rose",
      "teal",
      "violet",
      "mint"
    ],
    "palette": [
      "pine",
      "indigo",
      "ink",
      "teal",
      "mint",
      "plum",
      "gold"
    ],
    "cells": [
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "plum",
        "plum",
        "plum",
        "mint",
        "mint",
        "teal",
        "plum",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "pine",
        "pine",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "plum",
        "plum",
        "mint",
        "mint",
        "mint",
        "mint",
        "teal",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "pine",
        "pine",
        "teal",
        "teal",
        "teal",
        "teal",
        "indigo",
        "plum",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "pine",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "pine",
        "mint",
        "mint",
        "mint",
        "mint",
        "plum",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "pine",
        "teal",
        "teal",
        "mint",
        "mint",
        "teal",
        "teal",
        "teal",
        "teal",
        "plum",
        "teal",
        "mint",
        "plum",
        "plum",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "mint",
        "mint",
        "mint",
        "mint",
        "teal",
        "teal",
        "teal",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "teal",
        "teal",
        "teal",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "pine",
        "pine",
        "ink",
        "ink",
        "pine",
        "teal",
        "teal",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "teal",
        "teal",
        "teal",
        "ink",
        "plum",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "teal",
        "teal",
        "teal",
        "pine",
        "teal",
        "mint",
        "mint",
        "mint",
        "mint",
        "teal",
        "pine",
        "pine",
        "pine",
        "teal",
        "teal",
        "teal",
        "pine",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "mint",
        "mint",
        "mint",
        "mint",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "pine",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "mint",
        "mint",
        "mint",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "teal",
        "teal",
        "teal",
        "teal",
        "mint",
        "mint",
        "mint",
        "teal",
        "teal",
        "teal",
        "teal",
        "pine",
        "teal",
        "teal",
        "mint",
        "mint",
        "mint",
        "mint",
        "teal",
        "teal",
        "teal",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "teal",
        "teal",
        "teal",
        "mint",
        "mint",
        "mint",
        "mint",
        "teal",
        "teal",
        "pine",
        "teal",
        "pine",
        "teal",
        "teal",
        "mint",
        "mint",
        "mint",
        "mint",
        "teal",
        "teal",
        "teal",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "teal",
        "teal",
        "teal",
        "mint",
        "mint",
        "mint",
        "teal",
        "teal",
        "pine",
        "mint",
        "pine",
        "teal",
        "teal",
        "mint",
        "mint",
        "mint",
        "mint",
        "teal",
        "teal",
        "teal",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "teal",
        "teal",
        "teal",
        "teal",
        "mint",
        "teal",
        "teal",
        "ink",
        "pine",
        "gold",
        "gold",
        "pine",
        "teal",
        "teal",
        "mint",
        "mint",
        "teal",
        "teal",
        "teal",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "mint",
        "teal",
        "teal",
        "pine",
        "ink",
        "ink",
        "pine",
        "gold",
        "gold",
        "ink",
        "ink",
        "teal",
        "teal",
        "teal",
        "mint",
        "teal",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "gold",
        "gold",
        "gold",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "ink",
        "ink",
        "gold",
        "gold",
        "gold",
        "ink",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "ink",
        "ink",
        "ink",
        "gold",
        "gold",
        "gold",
        "plum",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "gold",
        "gold",
        "gold",
        "pine",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "gold",
        "gold",
        "gold",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "gold",
        "gold",
        "gold",
        "gold",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "gold",
        "gold",
        "gold",
        "gold",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "gold",
        "gold",
        "gold",
        "gold",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "gold",
        "plum",
        "gold",
        "gold",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "plum",
        "plum",
        "plum",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "indigo",
        "plum",
        "plum",
        "plum",
        "indigo",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink"
      ]
    ],
    "source": "assets/art/20-light-tree.png",
    "density": 34,
    "stars": 1156,
    "colorCounts": {
      "indigo": 255,
      "plum": 62,
      "mint": 73,
      "teal": 150,
      "pine": 345,
      "ink": 237,
      "gold": 34
    },
    "targetMoves": 68,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "pine",
          "count": 18
        },
        {
          "color": "pine",
          "count": 18
        },
        {
          "color": "pine",
          "count": 18
        },
        {
          "color": "pine",
          "count": 18
        },
        {
          "color": "pine",
          "count": 11
        },
        {
          "color": "ink",
          "count": 19
        },
        {
          "color": "ink",
          "count": 19
        },
        {
          "color": "ink",
          "count": 19
        },
        {
          "color": "plum",
          "count": 20
        },
        {
          "color": "teal",
          "count": 19
        },
        {
          "color": "teal",
          "count": 15
        },
        {
          "color": "mint",
          "count": 16
        },
        {
          "color": "ink",
          "count": 1
        },
        {
          "color": "plum",
          "count": 2
        },
        {
          "color": "teal",
          "count": 2
        }
      ],
      [
        {
          "color": "pine",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "pine",
          "count": 18
        },
        {
          "color": "pine",
          "count": 18
        },
        {
          "color": "pine",
          "count": 18
        },
        {
          "color": "pine",
          "count": 18
        },
        {
          "color": "gold",
          "count": 17
        },
        {
          "color": "ink",
          "count": 19
        },
        {
          "color": "ink",
          "count": 19
        },
        {
          "color": "ink",
          "count": 19
        },
        {
          "color": "teal",
          "count": 19
        },
        {
          "color": "teal",
          "count": 19
        },
        {
          "color": "mint",
          "count": 19
        },
        {
          "color": "pine",
          "count": 14
        }
      ],
      [
        {
          "color": "ink",
          "count": 19
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 17
        },
        {
          "color": "pine",
          "count": 18
        },
        {
          "color": "pine",
          "count": 18
        },
        {
          "color": "pine",
          "count": 18
        },
        {
          "color": "pine",
          "count": 18
        },
        {
          "color": "gold",
          "count": 17
        },
        {
          "color": "ink",
          "count": 19
        },
        {
          "color": "ink",
          "count": 19
        },
        {
          "color": "ink",
          "count": 8
        },
        {
          "color": "plum",
          "count": 20
        },
        {
          "color": "teal",
          "count": 19
        },
        {
          "color": "teal",
          "count": 19
        },
        {
          "color": "mint",
          "count": 19
        },
        {
          "color": "indigo",
          "count": 4
        }
      ],
      [
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "indigo",
          "count": 18
        },
        {
          "color": "pine",
          "count": 18
        },
        {
          "color": "pine",
          "count": 18
        },
        {
          "color": "pine",
          "count": 18
        },
        {
          "color": "pine",
          "count": 18
        },
        {
          "color": "ink",
          "count": 19
        },
        {
          "color": "ink",
          "count": 19
        },
        {
          "color": "ink",
          "count": 19
        },
        {
          "color": "plum",
          "count": 20
        },
        {
          "color": "teal",
          "count": 19
        },
        {
          "color": "teal",
          "count": 19
        },
        {
          "color": "mint",
          "count": 19
        },
        {
          "color": "pine",
          "count": 14
        }
      ]
    ],
    "proof": [
      0,
      1,
      2,
      3,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      2,
      0,
      1,
      3,
      0,
      0,
      2,
      0
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "plum",
              "count": 20
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 15
            },
            {
              "color": "mint",
              "count": 16
            },
            {
              "color": "ink",
              "count": 1
            },
            {
              "color": "plum",
              "count": 2
            },
            {
              "color": "teal",
              "count": 2
            }
          ],
          [
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "gold",
              "count": 17
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "pine",
              "count": 14
            }
          ],
          [
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "gold",
              "count": 17
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 8
            },
            {
              "color": "plum",
              "count": 20
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 4
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "plum",
              "count": 20
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "pine",
              "count": 14
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          0,
          0,
          2,
          0
        ],
        "actualMoves": 68,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 12
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "plum",
              "count": 21
            },
            {
              "color": "pine",
              "count": 27
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "gold",
              "count": 17
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 12
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "mint",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 4
            }
          ],
          [
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "gold",
              "count": 17
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 8
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "plum",
              "count": 20
            },
            {
              "color": "ink",
              "count": 1
            }
          ],
          [
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "plum",
              "count": 21
            },
            {
              "color": "teal",
              "count": 5
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          1,
          2
        ],
        "actualMoves": 66,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "plum",
              "count": 21
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 3
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "gold",
              "count": 17
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 13
            },
            {
              "color": "plum",
              "count": 21
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "teal",
              "count": 4
            }
          ],
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "plum",
              "count": 20
            },
            {
              "color": "mint",
              "count": 16
            },
            {
              "color": "gold",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "gold",
              "count": 16
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "ink",
              "count": 6
            },
            {
              "color": "pine",
              "count": 10
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2
        ],
        "actualMoves": 68,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 17
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "plum",
              "count": 21
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 17
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "ink",
              "count": 4
            },
            {
              "color": "gold",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "pine",
              "count": 12
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "plum",
              "count": 21
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "pine",
              "count": 16
            }
          ],
          [
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "gold",
              "count": 16
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "pine",
              "count": 19
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "ink",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "gold",
              "count": 17
            },
            {
              "color": "plum",
              "count": 20
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "mint",
              "count": 16
            },
            {
              "color": "pine",
              "count": 16
            }
          ]
        ],
        "proof": [
          3,
          0,
          1,
          2,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          0,
          2,
          1,
          0,
          3,
          2,
          1,
          3,
          0,
          2,
          0
        ],
        "actualMoves": 66,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 12
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "plum",
              "count": 20
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 17
            },
            {
              "color": "mint",
              "count": 16
            }
          ],
          [
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "gold",
              "count": 17
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "pine",
              "count": 27
            }
          ],
          [
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 17
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "gold",
              "count": 17
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 7
            },
            {
              "color": "plum",
              "count": 21
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "mint",
              "count": 19
            }
          ],
          [
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "plum",
              "count": 21
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "ink",
              "count": 2
            },
            {
              "color": "indigo",
              "count": 4
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          3
        ],
        "actualMoves": 65,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "plum",
              "count": 21
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "ink",
              "count": 1
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 8
            },
            {
              "color": "gold",
              "count": 16
            },
            {
              "color": "plum",
              "count": 20
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 17
            },
            {
              "color": "mint",
              "count": 16
            },
            {
              "color": "pine",
              "count": 14
            }
          ],
          [
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "plum",
              "count": 21
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "pine",
              "count": 16
            }
          ],
          [
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "pine",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 19
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "ink",
              "count": 19
            },
            {
              "color": "gold",
              "count": 16
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "teal",
              "count": 19
            },
            {
              "color": "mint",
              "count": 19
            },
            {
              "color": "pine",
              "count": 16
            },
            {
              "color": "gold",
              "count": 2
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          2,
          1,
          0,
          0,
          3
        ],
        "actualMoves": 67,
        "temptation": false
      }
    ],
    "actualMoves": 68
  }
];
  const SOLUTIONS = {
  "glow-path": [
    0,
    1,
    2,
    3,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    2,
    2,
    0
  ],
  "moon-house": [
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    3,
    0,
    1,
    2,
    3,
    2,
    0,
    1
  ],
  "paper-harbor": [
    0,
    0,
    0,
    3,
    3,
    3,
    0,
    0,
    0,
    3,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    3
  ],
  "mist-lodge": [
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    2,
    2,
    0
  ],
  "dawn-lily": [
    0,
    1,
    2,
    3,
    0,
    2,
    3,
    1,
    0,
    2,
    3,
    1,
    3,
    0,
    1,
    2,
    3,
    0,
    2,
    1,
    1,
    3,
    3,
    3
  ],
  "cloud-post": [
    0,
    1,
    2,
    3,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    3,
    2,
    1,
    0,
    3,
    2,
    1,
    0,
    1,
    3,
    2,
    2,
    2,
    2
  ],
  "star-lighthouse": [
    0,
    1,
    2,
    3,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1
  ],
  "aurora-clock": [
    0,
    1,
    2,
    3,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    1,
    0,
    3,
    2,
    1,
    0,
    2,
    3,
    3,
    1
  ],
  "windmill-field": [
    0,
    1,
    2,
    3,
    1,
    0,
    3,
    2,
    1,
    0,
    3,
    2,
    1,
    0,
    3,
    2,
    3,
    1,
    0,
    2,
    3,
    2,
    1,
    0,
    3,
    2,
    0,
    1,
    3,
    0,
    1
  ],
  "rabbit-tea": [
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    3,
    1,
    2,
    0,
    3,
    1,
    2,
    0,
    3,
    1,
    2,
    0,
    3,
    1,
    2,
    2,
    0,
    0
  ],
  "whale-sea": [
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    1,
    0,
    2,
    3,
    1,
    3,
    0,
    2,
    3
  ],
  "mushroom-post": [
    0,
    1,
    2,
    3,
    0,
    3,
    1,
    2,
    0,
    3,
    1,
    2,
    0,
    3,
    1,
    2,
    0,
    3,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    2,
    1,
    3,
    0,
    2,
    1,
    3,
    1,
    0,
    2,
    1,
    3
  ],
  "forest-piano": [
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3
  ],
  "snow-train": [
    0,
    1,
    2,
    3,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    3,
    0,
    1,
    2,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    3,
    2,
    1,
    0
  ],
  "coral-dream": [
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    3,
    2,
    0,
    1,
    1,
    3
  ],
  "cloud-whale": [
    0,
    1,
    2,
    3,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    1,
    3,
    0,
    2,
    1,
    3,
    0,
    0,
    2,
    1,
    3,
    0,
    2,
    1,
    3,
    0,
    2,
    3,
    1,
    0,
    2
  ],
  "star-garden": [
    0,
    1,
    2,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    1,
    2,
    0,
    3,
    1,
    2,
    0,
    3,
    1,
    2,
    0,
    3,
    1,
    1,
    2,
    0,
    3,
    1,
    2,
    0,
    3,
    1,
    2,
    0,
    3,
    1,
    2,
    3,
    0,
    0,
    0
  ],
  "polar-market": [
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    3,
    0,
    1,
    2,
    3,
    2,
    1,
    0,
    3,
    2
  ],
  "glass-dome": [
    0,
    1,
    2,
    3,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    1,
    0,
    2,
    3,
    1,
    0,
    2,
    3,
    2,
    1,
    0,
    3,
    2,
    1,
    0,
    3,
    2,
    1,
    0,
    3,
    2,
    1,
    0,
    3,
    2
  ],
  "light-tree": [
    0,
    1,
    2,
    3,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    0,
    0,
    2,
    0
  ]
};
  global.SHIGUANG_PALETTE = PALETTE;
  global.SHIGUANG_LEVELS = LEVELS;
  global.SHIGUANG_PROOFS = SOLUTIONS;
})(typeof window !== 'undefined' ? window : globalThis);
