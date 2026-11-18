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
    "N": 12,
    "jars": 13,
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
      "teal",
      "pine",
      "ink",
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
        "plum",
        "cream",
        "plum",
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
        "plum",
        "cream",
        "plum",
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
        "ink"
      ],
      [
        "pine",
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "pine",
        "pine",
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
        "pine"
      ],
      [
        "pine",
        "teal",
        "pine",
        "pine",
        "pine",
        "indigo",
        "indigo",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "teal",
        "teal",
        "pine",
        "pine",
        "teal",
        "teal",
        "teal",
        "pine",
        "pine",
        "pine",
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
        "teal"
      ]
    ],
    "source": "assets/art/01-glow-path.png",
    "density": 12,
    "stars": 144,
    "colorCounts": {
      "indigo": 47,
      "plum": 4,
      "cream": 2,
      "ink": 29,
      "pine": 30,
      "teal": 32
    },
    "targetMoves": 13,
    "columns": [
      [
        {
          "color": "ink",
          "count": 14
        },
        {
          "color": "ink",
          "count": 13
        },
        {
          "color": "teal",
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
          "color": "plum",
          "count": 4
        }
      ],
      [
        {
          "color": "pine",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 15
        },
        {
          "color": "cream",
          "count": 2
        },
        {
          "color": "ink",
          "count": 2
        }
      ],
      [
        {
          "color": "teal",
          "count": 16
        },
        {
          "color": "pine",
          "count": 15
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
      2
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "teal",
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
              "color": "plum",
              "count": 4
            }
          ],
          [
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 15
            },
            {
              "color": "cream",
              "count": 2
            },
            {
              "color": "ink",
              "count": 2
            }
          ],
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
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
          2
        ],
        "actualMoves": 13,
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
              "count": 14
            },
            {
              "color": "indigo",
              "count": 15
            }
          ],
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "teal",
              "count": 1
            }
          ],
          [
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "teal",
              "count": 15
            },
            {
              "color": "cream",
              "count": 2
            }
          ],
          [
            {
              "color": "ink",
              "count": 15
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "plum",
              "count": 4
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          2,
          3,
          0,
          1,
          0,
          2,
          3,
          1
        ],
        "actualMoves": 12,
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
              "color": "plum",
              "count": 4
            }
          ],
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
              "count": 1
            }
          ],
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "ink",
              "count": 14
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "cream",
              "count": 2
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
          2,
          0,
          1,
          3
        ],
        "actualMoves": 12,
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
              "count": 15
            },
            {
              "color": "cream",
              "count": 2
            }
          ],
          [
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            }
          ],
          [
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 1
            }
          ],
          [
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "plum",
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
          2,
          0,
          3,
          1,
          3,
          0,
          2
        ],
        "actualMoves": 12,
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
              "color": "indigo",
              "count": 14
            },
            {
              "color": "ink",
              "count": 14
            }
          ],
          [
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "pine",
              "count": 15
            },
            {
              "color": "plum",
              "count": 4
            }
          ],
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
              "color": "cream",
              "count": 2
            }
          ],
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
              "count": 1
            }
          ]
        ],
        "proof": [
          0,
          1,
          2,
          3,
          2,
          3,
          0,
          1,
          0,
          1,
          2,
          3
        ],
        "actualMoves": 12,
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
              "color": "pine",
              "count": 14
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
              "color": "teal",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 16
            },
            {
              "color": "ink",
              "count": 2
            }
          ],
          [
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "teal",
              "count": 16
            },
            {
              "color": "plum",
              "count": 4
            }
          ],
          [
            {
              "color": "pine",
              "count": 14
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 15
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
          2,
          3,
          0,
          1,
          3,
          0,
          2,
          0,
          1
        ],
        "actualMoves": 13,
        "temptation": false
      }
    ],
    "actualMoves": 13
  },
  {
    "id": "moon-house",
    "file": "02-moon-house.png",
    "name": "月下花房",
    "N": 12,
    "jars": 12,
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
      "teal",
      "cream",
      "sand",
      "pine"
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
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "cream",
        "cream",
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
        "sand",
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
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "teal",
        "teal",
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
        "pine",
        "teal",
        "teal",
        "teal",
        "pine",
        "pine",
        "indigo",
        "ink",
        "ink"
      ],
      [
        "ink",
        "teal",
        "teal",
        "teal",
        "teal",
        "sand",
        "sand",
        "teal",
        "teal",
        "teal",
        "teal",
        "ink"
      ],
      [
        "ink",
        "ink",
        "pine",
        "pine",
        "teal",
        "teal",
        "teal",
        "teal",
        "pine",
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
        "ink"
      ]
    ],
    "source": "assets/art/02-moon-house.png",
    "density": 12,
    "stars": 144,
    "colorCounts": {
      "indigo": 67,
      "cream": 6,
      "sand": 6,
      "ink": 42,
      "teal": 17,
      "pine": 6
    },
    "targetMoves": 12,
    "columns": [
      [
        {
          "color": "ink",
          "count": 14
        },
        {
          "color": "indigo",
          "count": 14
        },
        {
          "color": "teal",
          "count": 17
        }
      ],
      [
        {
          "color": "indigo",
          "count": 14
        },
        {
          "color": "indigo",
          "count": 14
        },
        {
          "color": "sand",
          "count": 6
        }
      ],
      [
        {
          "color": "ink",
          "count": 14
        },
        {
          "color": "indigo",
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
          "color": "indigo",
          "count": 11
        },
        {
          "color": "cream",
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
      3,
      0,
      1,
      2
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "teal",
              "count": 17
            }
          ],
          [
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "sand",
              "count": 6
            }
          ],
          [
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "indigo",
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
              "color": "indigo",
              "count": 11
            },
            {
              "color": "cream",
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
          3,
          0,
          1,
          2
        ],
        "actualMoves": 12,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "teal",
              "count": 17
            }
          ],
          [
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "cream",
              "count": 6
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
              "color": "ink",
              "count": 14
            },
            {
              "color": "sand",
              "count": 6
            }
          ],
          [
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "pine",
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
          3,
          2,
          1,
          0,
          3,
          2,
          1
        ],
        "actualMoves": 13,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "teal",
              "count": 17
            }
          ],
          [
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "cream",
              "count": 6
            },
            {
              "color": "indigo",
              "count": 2
            }
          ],
          [
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "ink",
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
              "count": 14
            },
            {
              "color": "sand",
              "count": 6
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
          1
        ],
        "actualMoves": 13,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "cream",
              "count": 6
            }
          ],
          [
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "indigo",
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
              "color": "indigo",
              "count": 14
            },
            {
              "color": "sand",
              "count": 6
            }
          ],
          [
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "teal",
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
          3,
          0,
          1,
          2
        ],
        "actualMoves": 12,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "cream",
              "count": 6
            }
          ],
          [
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 14
            },
            {
              "color": "sand",
              "count": 6
            }
          ],
          [
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "indigo",
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
              "color": "indigo",
              "count": 11
            },
            {
              "color": "teal",
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
          3,
          0,
          1,
          2
        ],
        "actualMoves": 12,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "teal",
              "count": 17
            }
          ],
          [
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "cream",
              "count": 6
            },
            {
              "color": "indigo",
              "count": 2
            }
          ],
          [
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
              "count": 6
            }
          ],
          [
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "ink",
              "count": 14
            },
            {
              "color": "pine",
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
          3,
          2,
          0,
          1,
          3,
          2,
          1
        ],
        "actualMoves": 13,
        "temptation": false
      }
    ],
    "actualMoves": 12
  },
  {
    "id": "paper-harbor",
    "file": "03-paper-harbor.png",
    "name": "纸船星港",
    "N": 13,
    "jars": 14,
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
        "blue",
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
        "blue",
        "cream",
        "cream",
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
        "indigo",
        "indigo"
      ],
      [
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
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
        "ink",
        "ink",
        "indigo",
        "ink",
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
        "indigo",
        "indigo",
        "sand",
        "blue",
        "blue",
        "blue",
        "indigo",
        "blue",
        "indigo"
      ],
      [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "sand",
        "sand",
        "sand",
        "blue",
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
        "cream",
        "sand",
        "sand",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue"
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
        "blue",
        "blue",
        "blue"
      ]
    ],
    "source": "assets/art/03-paper-harbor.png",
    "density": 13,
    "stars": 169,
    "colorCounts": {
      "indigo": 75,
      "blue": 54,
      "cream": 3,
      "sky": 18,
      "ink": 13,
      "sand": 6
    },
    "targetMoves": 14,
    "columns": [
      [
        {
          "color": "cream",
          "count": 3
        },
        {
          "color": "blue",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 13
        },
        {
          "color": "indigo",
          "count": 10
        }
      ],
      [
        {
          "color": "indigo",
          "count": 13
        },
        {
          "color": "blue",
          "count": 15
        },
        {
          "color": "sky",
          "count": 18
        }
      ],
      [
        {
          "color": "ink",
          "count": 13
        },
        {
          "color": "indigo",
          "count": 13
        },
        {
          "color": "indigo",
          "count": 13
        }
      ],
      [
        {
          "color": "blue",
          "count": 9
        },
        {
          "color": "blue",
          "count": 15
        },
        {
          "color": "indigo",
          "count": 13
        },
        {
          "color": "sand",
          "count": 6
        }
      ]
    ],
    "proof": [
      1,
      1,
      3,
      3,
      3,
      1,
      2,
      2,
      2,
      3,
      0,
      0,
      0,
      0
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "cream",
              "count": 3
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 10
            }
          ],
          [
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "sky",
              "count": 18
            }
          ],
          [
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 13
            }
          ],
          [
            {
              "color": "blue",
              "count": 9
            },
            {
              "color": "blue",
              "count": 15
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "sand",
              "count": 6
            }
          ]
        ],
        "proof": [
          1,
          1,
          3,
          3,
          3,
          1,
          2,
          2,
          2,
          3,
          0,
          0,
          0,
          0
        ],
        "actualMoves": 14,
        "temptation": true
      },
      {
        "columns": [
          [
            {
              "color": "sand",
              "count": 6
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 13
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
              "color": "sky",
              "count": 4
            }
          ],
          [
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "blue",
              "count": 14
            }
          ],
          [
            {
              "color": "sky",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "blue",
              "count": 12
            },
            {
              "color": "cream",
              "count": 3
            }
          ]
        ],
        "proof": [
          1,
          1,
          1,
          2,
          2,
          1,
          2,
          3,
          3,
          3,
          0,
          0,
          0,
          0,
          3,
          0
        ],
        "actualMoves": 16,
        "temptation": true
      },
      {
        "columns": [
          [
            {
              "color": "sand",
              "count": 6
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "sky",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "blue",
              "count": 12
            }
          ],
          [
            {
              "color": "indigo",
              "count": 13
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
              "color": "cream",
              "count": 3
            }
          ],
          [
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "blue",
              "count": 14
            }
          ]
        ],
        "proof": [
          1,
          3,
          1,
          1,
          2,
          2,
          3,
          2,
          3,
          0,
          0,
          0,
          0,
          2,
          0
        ],
        "actualMoves": 15,
        "temptation": true
      },
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 14
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
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "sky",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "blue",
              "count": 12
            }
          ],
          [
            {
              "color": "sand",
              "count": 6
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 9
            }
          ],
          [
            {
              "color": "indigo",
              "count": 13
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
              "color": "cream",
              "count": 3
            }
          ]
        ],
        "proof": [
          0,
          0,
          3,
          3,
          0,
          0,
          1,
          1,
          1,
          3,
          2,
          2,
          2,
          2,
          3
        ],
        "actualMoves": 15,
        "temptation": true
      },
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 12
            },
            {
              "color": "blue",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "blue",
              "count": 7
            }
          ],
          [
            {
              "color": "cream",
              "count": 3
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "blue",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 13
            }
          ],
          [
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "sand",
              "count": 6
            }
          ],
          [
            {
              "color": "sky",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 10
            }
          ]
        ],
        "proof": [
          0,
          0,
          0,
          0,
          3,
          3,
          3,
          2,
          2,
          2,
          2,
          1,
          1,
          1,
          1
        ],
        "actualMoves": 15,
        "temptation": true
      },
      {
        "columns": [
          [
            {
              "color": "sand",
              "count": 6
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "cream",
              "count": 3
            }
          ],
          [
            {
              "color": "indigo",
              "count": 13
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
              "color": "indigo",
              "count": 2
            }
          ],
          [
            {
              "color": "blue",
              "count": 14
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
              "color": "blue",
              "count": 1
            }
          ],
          [
            {
              "color": "sky",
              "count": 18
            },
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "blue",
              "count": 11
            }
          ]
        ],
        "proof": [
          1,
          1,
          1,
          1,
          2,
          2,
          2,
          3,
          3,
          2,
          3,
          0,
          0,
          0,
          0,
          0
        ],
        "actualMoves": 16,
        "temptation": true
      }
    ],
    "actualMoves": 14
  },
  {
    "id": "mist-lodge",
    "file": "04-mist-lodge.png",
    "name": "雾岭灯屋",
    "N": 13,
    "jars": 15,
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
      "sky",
      "pine",
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
        "violet",
        "sky",
        "violet",
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
        "sky",
        "violet",
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
        "indigo",
        "indigo"
      ],
      [
        "sky",
        "pine",
        "pine",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "pine",
        "pine",
        "sky"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "plum",
        "plum",
        "plum",
        "sky",
        "pine",
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
        "indigo"
      ]
    ],
    "source": "assets/art/04-mist-lodge.png",
    "density": 13,
    "stars": 169,
    "colorCounts": {
      "indigo": 123,
      "violet": 16,
      "sky": 13,
      "pine": 13,
      "plum": 4
    },
    "targetMoves": 15,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 12
        },
        {
          "color": "indigo",
          "count": 12
        },
        {
          "color": "indigo",
          "count": 12
        },
        {
          "color": "indigo",
          "count": 12
        }
      ],
      [
        {
          "color": "pine",
          "count": 13
        },
        {
          "color": "indigo",
          "count": 12
        },
        {
          "color": "indigo",
          "count": 12
        },
        {
          "color": "indigo",
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
          "count": 12
        },
        {
          "color": "indigo",
          "count": 12
        }
      ],
      [
        {
          "color": "sky",
          "count": 13
        },
        {
          "color": "indigo",
          "count": 12
        },
        {
          "color": "indigo",
          "count": 12
        },
        {
          "color": "plum",
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
      3
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            }
          ],
          [
            {
              "color": "pine",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
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
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            }
          ],
          [
            {
              "color": "sky",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "plum",
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
          3
        ],
        "actualMoves": 15,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 3
            }
          ],
          [
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            }
          ],
          [
            {
              "color": "pine",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "plum",
              "count": 4
            }
          ],
          [
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
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
          2
        ],
        "actualMoves": 15,
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
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            }
          ],
          [
            {
              "color": "sky",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 3
            }
          ],
          [
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            }
          ],
          [
            {
              "color": "pine",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "plum",
              "count": 4
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
          3
        ],
        "actualMoves": 15,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "pine",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
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
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            }
          ],
          [
            {
              "color": "sky",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "plum",
              "count": 4
            }
          ],
          [
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
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
        "actualMoves": 15,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            }
          ],
          [
            {
              "color": "pine",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 2
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "sky",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "plum",
              "count": 4
            }
          ],
          [
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
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
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 3
            }
          ],
          [
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "plum",
              "count": 4
            }
          ],
          [
            {
              "color": "pine",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "sky",
              "count": 13
            }
          ],
          [
            {
              "color": "violet",
              "count": 16
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
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
          2
        ],
        "actualMoves": 15,
        "temptation": false
      }
    ],
    "actualMoves": 15
  },
  {
    "id": "dawn-lily",
    "file": "05-dawn-lily.png",
    "name": "破晓铃兰",
    "N": 14,
    "jars": 17,
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
      "pine",
      "lilac",
      "mint",
      "plum",
      "sand",
      "indigo",
      "cream"
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
        "lilac",
        "lilac",
        "lilac",
        "sand",
        "sand",
        "lilac",
        "lilac",
        "lilac",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "violet",
        "violet",
        "lilac",
        "lilac",
        "sand",
        "cream",
        "cream",
        "sand",
        "lilac",
        "lilac",
        "violet",
        "violet",
        "violet"
      ],
      [
        "violet",
        "violet",
        "plum",
        "lilac",
        "sand",
        "cream",
        "cream",
        "cream",
        "cream",
        "sand",
        "lilac",
        "plum",
        "violet",
        "violet"
      ],
      [
        "plum",
        "plum",
        "plum",
        "lilac",
        "lilac",
        "sand",
        "cream",
        "cream",
        "sand",
        "lilac",
        "lilac",
        "plum",
        "plum",
        "plum"
      ],
      [
        "plum",
        "plum",
        "plum",
        "lilac",
        "lilac",
        "sand",
        "sand",
        "sand",
        "sand",
        "lilac",
        "lilac",
        "plum",
        "plum",
        "plum"
      ],
      [
        "violet",
        "violet",
        "plum",
        "plum",
        "lilac",
        "lilac",
        "plum",
        "plum",
        "violet",
        "violet",
        "violet",
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
        "violet",
        "violet",
        "indigo",
        "pine",
        "indigo",
        "indigo",
        "indigo",
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
        "indigo"
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
        "mint"
      ],
      [
        "pine",
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
        "pine"
      ]
    ],
    "source": "assets/art/05-dawn-lily.png",
    "density": 14,
    "stars": 196,
    "colorCounts": {
      "violet": 62,
      "lilac": 28,
      "sand": 12,
      "cream": 8,
      "plum": 21,
      "indigo": 9,
      "pine": 30,
      "mint": 26
    },
    "targetMoves": 17,
    "columns": [
      [
        {
          "color": "violet",
          "count": 13
        },
        {
          "color": "violet",
          "count": 13
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "plum",
          "count": 10
        }
      ],
      [
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "violet",
          "count": 13
        },
        {
          "color": "lilac",
          "count": 14
        },
        {
          "color": "indigo",
          "count": 9
        }
      ],
      [
        {
          "color": "mint",
          "count": 13
        },
        {
          "color": "violet",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "plum",
          "count": 11
        },
        {
          "color": "cream",
          "count": 8
        }
      ],
      [
        {
          "color": "violet",
          "count": 13
        },
        {
          "color": "lilac",
          "count": 14
        },
        {
          "color": "mint",
          "count": 13
        },
        {
          "color": "sand",
          "count": 12
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
      2,
      0,
      3,
      2,
      0,
      1,
      3,
      2
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "plum",
              "count": 10
            }
          ],
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "lilac",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 9
            }
          ],
          [
            {
              "color": "mint",
              "count": 13
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "cream",
              "count": 8
            }
          ],
          [
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "lilac",
              "count": 14
            },
            {
              "color": "mint",
              "count": 13
            },
            {
              "color": "sand",
              "count": 12
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
          2,
          0,
          3,
          2,
          0,
          1,
          3,
          2
        ],
        "actualMoves": 17,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "cream",
              "count": 8
            }
          ],
          [
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "violet",
              "count": 9
            },
            {
              "color": "lilac",
              "count": 14
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "violet",
              "count": 1
            }
          ],
          [
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "mint",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 9
            }
          ],
          [
            {
              "color": "mint",
              "count": 13
            },
            {
              "color": "plum",
              "count": 10
            },
            {
              "color": "lilac",
              "count": 14
            },
            {
              "color": "sand",
              "count": 12
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
          1,
          3,
          2,
          0,
          0,
          1,
          2,
          3,
          0,
          1
        ],
        "actualMoves": 18,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "mint",
              "count": 12
            },
            {
              "color": "sand",
              "count": 12
            },
            {
              "color": "mint",
              "count": 1
            }
          ],
          [
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "lilac",
              "count": 14
            }
          ],
          [
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "plum",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "cream",
              "count": 8
            }
          ],
          [
            {
              "color": "mint",
              "count": 13
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "lilac",
              "count": 14
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
          3,
          1,
          2,
          3,
          1,
          0,
          2,
          2,
          0
        ],
        "actualMoves": 18,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "mint",
              "count": 13
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "plum",
              "count": 10
            },
            {
              "color": "lilac",
              "count": 14
            }
          ],
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "mint",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "sand",
              "count": 6
            }
          ],
          [
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "lilac",
              "count": 14
            }
          ],
          [
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sand",
              "count": 6
            },
            {
              "color": "cream",
              "count": 8
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
          0,
          3,
          1,
          3,
          2,
          0,
          3,
          2,
          0,
          1,
          3,
          1
        ],
        "actualMoves": 18,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "mint",
              "count": 13
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "lilac",
              "count": 14
            },
            {
              "color": "indigo",
              "count": 9
            }
          ],
          [
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "lilac",
              "count": 14
            },
            {
              "color": "sand",
              "count": 12
            }
          ],
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "plum",
              "count": 11
            }
          ],
          [
            {
              "color": "mint",
              "count": 13
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "plum",
              "count": 10
            },
            {
              "color": "cream",
              "count": 8
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
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          3
        ],
        "actualMoves": 17,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "mint",
              "count": 13
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "mint",
              "count": 13
            },
            {
              "color": "sand",
              "count": 12
            }
          ],
          [
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "plum",
              "count": 10
            },
            {
              "color": "lilac",
              "count": 14
            }
          ],
          [
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "cream",
              "count": 8
            }
          ],
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "violet",
              "count": 13
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "lilac",
              "count": 14
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
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
          2
        ],
        "actualMoves": 17,
        "temptation": false
      }
    ],
    "actualMoves": 17
  },
  {
    "id": "cloud-post",
    "file": "06-cloud-post.png",
    "name": "云上邮局",
    "N": 14,
    "jars": 20,
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
      "teal",
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
        "sand",
        "cream",
        "sand",
        "teal",
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
        "sand",
        "cream",
        "sand",
        "teal",
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "cream",
        "teal",
        "teal",
        "sky",
        "sand",
        "teal",
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
        "teal",
        "teal",
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
        "sky",
        "blue",
        "blue",
        "sand",
        "sand",
        "sky",
        "blue",
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
        "sand",
        "sand",
        "sand",
        "sand",
        "sky",
        "blue",
        "blue",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "sky",
        "blue",
        "blue",
        "sand",
        "sand",
        "sand",
        "sand",
        "blue",
        "sand",
        "cream",
        "sky",
        "blue"
      ],
      [
        "indigo",
        "cream",
        "cream",
        "cream",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "sky",
        "sand",
        "sky",
        "indigo"
      ],
      [
        "indigo",
        "sky",
        "sky",
        "sky",
        "indigo",
        "sand",
        "sand",
        "sky",
        "blue",
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
        "sand",
        "cream",
        "cream",
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
        "indigo"
      ]
    ],
    "source": "assets/art/06-cloud-post.png",
    "density": 14,
    "stars": 196,
    "colorCounts": {
      "sky": 77,
      "teal": 10,
      "sand": 20,
      "cream": 9,
      "blue": 27,
      "indigo": 53
    },
    "targetMoves": 20,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "blue",
          "count": 13
        },
        {
          "color": "sky",
          "count": 3
        }
      ],
      [
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "sand",
          "count": 9
        },
        {
          "color": "teal",
          "count": 10
        }
      ],
      [
        {
          "color": "blue",
          "count": 14
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "sand",
          "count": 9
        },
        {
          "color": "sand",
          "count": 2
        }
      ],
      [
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "sky",
          "count": 8
        },
        {
          "color": "cream",
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
      3,
      2,
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
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "blue",
              "count": 13
            },
            {
              "color": "sky",
              "count": 3
            }
          ],
          [
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "teal",
              "count": 10
            }
          ],
          [
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "sand",
              "count": 2
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 8
            },
            {
              "color": "cream",
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
          3,
          2,
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
        "actualMoves": 20,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "blue",
              "count": 13
            }
          ],
          [
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "sky",
              "count": 11
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "cream",
              "count": 9
            }
          ],
          [
            {
              "color": "blue",
              "count": 14
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "sand",
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
          1,
          2,
          3
        ],
        "actualMoves": 19,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "cream",
              "count": 9
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sand",
              "count": 5
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "sand",
              "count": 15
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "blue",
              "count": 1
            }
          ],
          [
            {
              "color": "blue",
              "count": 13
            },
            {
              "color": "blue",
              "count": 13
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "teal",
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
          2,
          0,
          1,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2
        ],
        "actualMoves": 19,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "blue",
              "count": 12
            },
            {
              "color": "sky",
              "count": 3
            }
          ],
          [
            {
              "color": "blue",
              "count": 12
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "sand",
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
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "teal",
              "count": 10
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 8
            },
            {
              "color": "cream",
              "count": 9
            },
            {
              "color": "blue",
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
          2,
          1,
          0,
          1,
          3
        ],
        "actualMoves": 22,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sand",
              "count": 2
            },
            {
              "color": "blue",
              "count": 1
            }
          ],
          [
            {
              "color": "blue",
              "count": 13
            },
            {
              "color": "blue",
              "count": 13
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sand",
              "count": 9
            }
          ],
          [
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "teal",
              "count": 10
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "cream",
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
          2,
          3,
          0,
          0
        ],
        "actualMoves": 20,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 12
            },
            {
              "color": "sky",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "sand",
              "count": 3
            }
          ],
          [
            {
              "color": "sky",
              "count": 12
            },
            {
              "color": "sky",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "cream",
              "count": 9
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sky",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "blue",
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
              "count": 14
            },
            {
              "color": "sky",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sand",
              "count": 8
            },
            {
              "color": "sky",
              "count": 10
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
          3,
          2,
          0,
          1,
          1,
          3,
          2,
          0,
          3,
          1,
          0,
          2
        ],
        "actualMoves": 20,
        "temptation": false
      }
    ],
    "actualMoves": 20
  },
  {
    "id": "star-lighthouse",
    "file": "07-star-lighthouse.png",
    "name": "星砂灯塔",
    "N": 15,
    "jars": 22,
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
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "sand",
        "cream",
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
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "pine",
        "sand",
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
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "plum",
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
        "sand"
      ],
      [
        "indigo",
        "indigo",
        "ink",
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
        "sand"
      ],
      [
        "ink",
        "ink",
        "ink",
        "sand",
        "pine",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "pine",
        "pine",
        "sand",
        "sand",
        "sand",
        "sand"
      ],
      [
        "ink",
        "ink",
        "ink",
        "cream",
        "sand",
        "indigo",
        "indigo",
        "indigo",
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
        "cream",
        "sand",
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
        "ink"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
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
        "indigo"
      ],
      [
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
        "indigo",
        "indigo"
      ],
      [
        "plum",
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
        "indigo"
      ],
      [
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
        "pine",
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
    "density": 15,
    "stars": 225,
    "colorCounts": {
      "indigo": 122,
      "sand": 44,
      "cream": 6,
      "pine": 10,
      "plum": 4,
      "ink": 39
    },
    "targetMoves": 22,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 12
        },
        {
          "color": "indigo",
          "count": 12
        },
        {
          "color": "indigo",
          "count": 12
        },
        {
          "color": "sand",
          "count": 9
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "sand",
          "count": 2
        }
      ],
      [
        {
          "color": "sand",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 12
        },
        {
          "color": "indigo",
          "count": 12
        },
        {
          "color": "sand",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 8
        },
        {
          "color": "plum",
          "count": 4
        }
      ],
      [
        {
          "color": "ink",
          "count": 13
        },
        {
          "color": "indigo",
          "count": 12
        },
        {
          "color": "indigo",
          "count": 6
        },
        {
          "color": "sand",
          "count": 11
        },
        {
          "color": "ink",
          "count": 13
        }
      ],
      [
        {
          "color": "indigo",
          "count": 12
        },
        {
          "color": "indigo",
          "count": 12
        },
        {
          "color": "indigo",
          "count": 12
        },
        {
          "color": "ink",
          "count": 13
        },
        {
          "color": "cream",
          "count": 6
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
      2,
      1,
      0,
      3,
      2,
      0,
      1,
      3,
      1,
      0
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sand",
              "count": 2
            }
          ],
          [
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "plum",
              "count": 4
            }
          ],
          [
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "ink",
              "count": 13
            }
          ],
          [
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "cream",
              "count": 6
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
          2,
          1,
          0,
          3,
          2,
          0,
          1,
          3,
          1,
          0
        ],
        "actualMoves": 22,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "ink",
              "count": 13
            }
          ],
          [
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "cream",
              "count": 6
            },
            {
              "color": "plum",
              "count": 4
            }
          ],
          [
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "pine",
              "count": 10
            }
          ],
          [
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "sand",
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
          0,
          2,
          1,
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
              "color": "sand",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "sand",
              "count": 10
            }
          ],
          [
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "pine",
              "count": 10
            }
          ],
          [
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "plum",
              "count": 4
            },
            {
              "color": "sand",
              "count": 1
            }
          ],
          [
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "cream",
              "count": 6
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
          1,
          2,
          2
        ],
        "actualMoves": 22,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "sand",
              "count": 10
            }
          ],
          [
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "pine",
              "count": 10
            }
          ],
          [
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 2
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "plum",
              "count": 4
            },
            {
              "color": "sand",
              "count": 1
            }
          ],
          [
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "cream",
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
          2,
          0,
          1,
          3,
          2,
          2
        ],
        "actualMoves": 22,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "pine",
              "count": 10
            }
          ],
          [
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "ink",
              "count": 13
            }
          ],
          [
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "cream",
              "count": 6
            },
            {
              "color": "sand",
              "count": 2
            }
          ],
          [
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "plum",
              "count": 4
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
          2,
          0,
          3,
          2
        ],
        "actualMoves": 22,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "pine",
              "count": 10
            }
          ],
          [
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "plum",
              "count": 4
            },
            {
              "color": "sand",
              "count": 1
            }
          ],
          [
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "sand",
              "count": 10
            }
          ],
          [
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "ink",
              "count": 13
            },
            {
              "color": "cream",
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
          2,
          3,
          0,
          1,
          1
        ],
        "actualMoves": 22,
        "temptation": false
      }
    ],
    "actualMoves": 22
  },
  {
    "id": "aurora-clock",
    "file": "08-aurora-clock.png",
    "name": "极光钟楼",
    "N": 15,
    "jars": 25,
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
        "violet",
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
        "violet",
        "sand",
        "sand",
        "plum",
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
        "indigo",
        "indigo"
      ],
      [
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "indigo",
        "violet",
        "indigo",
        "indigo",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine"
      ],
      [
        "violet",
        "violet",
        "pine",
        "pine",
        "pine",
        "indigo",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "pine",
        "pine"
      ],
      [
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "sky",
        "sky",
        "sky",
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
        "sand",
        "sand",
        "sky",
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
        "sand",
        "sand",
        "sky",
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
        "sky",
        "sky",
        "sky",
        "indigo",
        "indigo",
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
        "indigo",
        "indigo",
        "sand",
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
        "indigo",
        "indigo",
        "pine",
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
        "indigo"
      ]
    ],
    "source": "assets/art/08-aurora-clock.png",
    "density": 15,
    "stars": 225,
    "colorCounts": {
      "indigo": 125,
      "violet": 58,
      "plum": 4,
      "sand": 8,
      "pine": 17,
      "sky": 13
    },
    "targetMoves": 25,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "violet",
          "count": 10
        },
        {
          "color": "violet",
          "count": 7
        },
        {
          "color": "sand",
          "count": 8
        }
      ],
      [
        {
          "color": "violet",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 3
        },
        {
          "color": "violet",
          "count": 10
        },
        {
          "color": "sky",
          "count": 13
        }
      ],
      [
        {
          "color": "pine",
          "count": 9
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "violet",
          "count": 10
        },
        {
          "color": "plum",
          "count": 4
        }
      ],
      [
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "violet",
          "count": 10
        },
        {
          "color": "pine",
          "count": 8
        },
        {
          "color": "violet",
          "count": 1
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
      1,
      2,
      0,
      3,
      1,
      0,
      3,
      2,
      3
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "violet",
              "count": 7
            },
            {
              "color": "sand",
              "count": 8
            }
          ],
          [
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 3
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "sky",
              "count": 13
            }
          ],
          [
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "plum",
              "count": 4
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "pine",
              "count": 8
            },
            {
              "color": "violet",
              "count": 1
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
          1,
          2,
          0,
          3,
          1,
          0,
          3,
          2,
          3
        ],
        "actualMoves": 25,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "violet",
              "count": 8
            },
            {
              "color": "sand",
              "count": 8
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "pine",
              "count": 8
            },
            {
              "color": "plum",
              "count": 4
            }
          ],
          [
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 2
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "sky",
              "count": 13
            }
          ],
          [
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 2
            }
          ]
        ],
        "proof": [
          1,
          2,
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
          3,
          2,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          0,
          1,
          3
        ],
        "actualMoves": 24,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "plum",
              "count": 4
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "violet",
              "count": 8
            },
            {
              "color": "sand",
              "count": 8
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "sky",
              "count": 13
            }
          ],
          [
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 3
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "pine",
              "count": 8
            },
            {
              "color": "indigo",
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
          1,
          0,
          3
        ],
        "actualMoves": 24,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "violet",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "pine",
              "count": 8
            },
            {
              "color": "plum",
              "count": 4
            }
          ],
          [
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "violet",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 4
            },
            {
              "color": "sand",
              "count": 8
            }
          ],
          [
            {
              "color": "violet",
              "count": 12
            },
            {
              "color": "violet",
              "count": 8
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "violet",
              "count": 2
            }
          ],
          [
            {
              "color": "violet",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sky",
              "count": 13
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
          1,
          0,
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
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "pine",
              "count": 8
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "plum",
              "count": 4
            }
          ],
          [
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "violet",
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
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 3
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "sky",
              "count": 13
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "violet",
              "count": 7
            },
            {
              "color": "sand",
              "count": 8
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
          1,
          2,
          0,
          3,
          2,
          0,
          1,
          3,
          2,
          3,
          0,
          1,
          1
        ],
        "actualMoves": 25,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "violet",
              "count": 8
            },
            {
              "color": "sand",
              "count": 8
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "pine",
              "count": 8
            },
            {
              "color": "plum",
              "count": 4
            }
          ],
          [
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 3
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "sky",
              "count": 13
            }
          ],
          [
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "violet",
              "count": 10
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
          0,
          1,
          3
        ],
        "actualMoves": 24,
        "temptation": false
      }
    ],
    "actualMoves": 25
  },
  {
    "id": "windmill-field",
    "file": "09-windmill-field.png",
    "name": "风车麦田",
    "N": 16,
    "jars": 26,
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
        "indigo"
      ],
      [
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
        "indigo"
      ],
      [
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
        "indigo"
      ],
      [
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
        "indigo"
      ],
      [
        "indigo",
        "plum",
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
        "indigo"
      ],
      [
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
        "plum",
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
        "plum",
        "plum",
        "plum",
        "plum",
        "indigo",
        "indigo",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "indigo",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "ink",
        "sand",
        "sand",
        "pine",
        "indigo",
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
        "pine",
        "sand",
        "sand",
        "sand",
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
        "moss",
        "moss",
        "moss",
        "moss",
        "sand",
        "sand",
        "sand",
        "moss",
        "moss",
        "moss",
        "pine"
      ],
      [
        "pine",
        "pine",
        "pine",
        "moss",
        "moss",
        "moss",
        "pine",
        "pine",
        "moss",
        "sand",
        "sand",
        "sand",
        "pine",
        "pine",
        "moss",
        "pine"
      ],
      [
        "pine",
        "moss",
        "pine",
        "moss",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "moss",
        "pine"
      ],
      [
        "pine",
        "moss",
        "moss",
        "moss",
        "moss",
        "moss",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
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
    "density": 16,
    "stars": 256,
    "colorCounts": {
      "indigo": 100,
      "plum": 17,
      "sand": 19,
      "pine": 53,
      "ink": 41,
      "moss": 26
    },
    "targetMoves": 26,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "ink",
          "count": 11
        },
        {
          "color": "pine",
          "count": 11
        },
        {
          "color": "plum",
          "count": 8
        }
      ],
      [
        {
          "color": "ink",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "ink",
          "count": 11
        },
        {
          "color": "pine",
          "count": 7
        },
        {
          "color": "sand",
          "count": 11
        },
        {
          "color": "pine",
          "count": 2
        }
      ],
      [
        {
          "color": "pine",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "ink",
          "count": 8
        },
        {
          "color": "pine",
          "count": 11
        },
        {
          "color": "plum",
          "count": 9
        },
        {
          "color": "indigo",
          "count": 1
        }
      ],
      [
        {
          "color": "moss",
          "count": 13
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "pine",
          "count": 11
        },
        {
          "color": "moss",
          "count": 13
        },
        {
          "color": "sand",
          "count": 8
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
      1,
      2,
      0,
      3,
      2,
      1
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "plum",
              "count": 8
            }
          ],
          [
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "pine",
              "count": 7
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "pine",
              "count": 2
            }
          ],
          [
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "ink",
              "count": 8
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "plum",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "moss",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "moss",
              "count": 13
            },
            {
              "color": "sand",
              "count": 8
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
          1,
          2,
          0,
          3,
          2,
          1
        ],
        "actualMoves": 26,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "moss",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "moss",
              "count": 13
            },
            {
              "color": "ink",
              "count": 2
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "plum",
              "count": 8
            }
          ],
          [
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "pine",
              "count": 8
            },
            {
              "color": "plum",
              "count": 8
            },
            {
              "color": "pine",
              "count": 1
            },
            {
              "color": "plum",
              "count": 1
            }
          ],
          [
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 12
            },
            {
              "color": "indigo",
              "count": 4
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "sand",
              "count": 8
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
          3,
          1,
          2,
          0,
          3,
          2,
          1,
          3,
          0,
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
              "color": "indigo",
              "count": 11
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "plum",
              "count": 8
            },
            {
              "color": "moss",
              "count": 4
            }
          ],
          [
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "sand",
              "count": 8
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "moss",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "plum",
              "count": 9
            },
            {
              "color": "pine",
              "count": 3
            }
          ],
          [
            {
              "color": "moss",
              "count": 11
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "ink",
              "count": 8
            },
            {
              "color": "sand",
              "count": 11
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
          2,
          0,
          1,
          0,
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
              "color": "indigo",
              "count": 11
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "plum",
              "count": 9
            }
          ],
          [
            {
              "color": "moss",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "moss",
              "count": 13
            },
            {
              "color": "pine",
              "count": 8
            },
            {
              "color": "sand",
              "count": 8
            }
          ],
          [
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "plum",
              "count": 8
            },
            {
              "color": "pine",
              "count": 1
            }
          ],
          [
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "ink",
              "count": 8
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "indigo",
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
          3,
          0,
          2,
          1,
          2,
          3
        ],
        "actualMoves": 26,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "plum",
              "count": 8
            }
          ],
          [
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "pine",
              "count": 7
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "pine",
              "count": 2
            }
          ],
          [
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "ink",
              "count": 8
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "plum",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 1
            },
            {
              "color": "moss",
              "count": 1
            }
          ],
          [
            {
              "color": "moss",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "moss",
              "count": 12
            },
            {
              "color": "sand",
              "count": 8
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
          1,
          2,
          0,
          3,
          2,
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
              "color": "moss",
              "count": 13
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "plum",
              "count": 8
            },
            {
              "color": "indigo",
              "count": 3
            }
          ],
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "sand",
              "count": 11
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "moss",
              "count": 13
            },
            {
              "color": "sand",
              "count": 8
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "plum",
              "count": 9
            },
            {
              "color": "ink",
              "count": 1
            },
            {
              "color": "pine",
              "count": 3
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
          1,
          3,
          0,
          2,
          0,
          3,
          3
        ],
        "actualMoves": 27,
        "temptation": false
      }
    ],
    "actualMoves": 26
  },
  {
    "id": "rabbit-tea",
    "file": "10-rabbit-tea.png",
    "name": "月兔茶馆",
    "N": 16,
    "jars": 28,
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
        "plum",
        "plum",
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
        "plum",
        "sand",
        "cream",
        "cream",
        "sand",
        "plum",
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
        "plum",
        "cream",
        "cream",
        "cream",
        "cream",
        "plum",
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
        "plum",
        "cream",
        "cream",
        "cream",
        "cream",
        "plum",
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
        "violet",
        "violet",
        "plum",
        "sand",
        "cream",
        "cream",
        "sand",
        "plum",
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
        "violet",
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
        "indigo"
      ],
      [
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
        "sand",
        "cream",
        "sand",
        "sand",
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
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "sand",
        "sand",
        "indigo",
        "indigo",
        "sand",
        "sand",
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
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
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
    "density": 16,
    "stars": 256,
    "colorCounts": {
      "violet": 64,
      "lilac": 2,
      "plum": 32,
      "sand": 31,
      "cream": 13,
      "indigo": 114
    },
    "targetMoves": 28,
    "columns": [
      [
        {
          "color": "violet",
          "count": 11
        },
        {
          "color": "violet",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "sand",
          "count": 9
        },
        {
          "color": "plum",
          "count": 10
        },
        {
          "color": "violet",
          "count": 1
        }
      ],
      [
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "violet",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 4
        },
        {
          "color": "sand",
          "count": 9
        },
        {
          "color": "cream",
          "count": 13
        }
      ],
      [
        {
          "color": "violet",
          "count": 11
        },
        {
          "color": "violet",
          "count": 8
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "plum",
          "count": 11
        },
        {
          "color": "sand",
          "count": 4
        }
      ],
      [
        {
          "color": "violet",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "sand",
          "count": 9
        },
        {
          "color": "plum",
          "count": 11
        },
        {
          "color": "lilac",
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
      2,
      1,
      3,
      0,
      1,
      2,
      3,
      0,
      1,
      2,
      0,
      3
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "violet",
              "count": 11
            },
            {
              "color": "violet",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "plum",
              "count": 10
            },
            {
              "color": "violet",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "violet",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 4
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "cream",
              "count": 13
            }
          ],
          [
            {
              "color": "violet",
              "count": 11
            },
            {
              "color": "violet",
              "count": 8
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "sand",
              "count": 4
            }
          ],
          [
            {
              "color": "violet",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "lilac",
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
          2,
          1,
          3,
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          0,
          3
        ],
        "actualMoves": 28,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 3
            },
            {
              "color": "sand",
              "count": 8
            },
            {
              "color": "cream",
              "count": 13
            }
          ],
          [
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "lilac",
              "count": 2
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "violet",
              "count": 4
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "sand",
              "count": 5
            }
          ],
          [
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "plum",
              "count": 10
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
          1,
          3,
          0,
          2,
          3,
          1
        ],
        "actualMoves": 28,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 4
            },
            {
              "color": "plum",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "violet",
              "count": 4
            },
            {
              "color": "cream",
              "count": 13
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "plum",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "plum",
              "count": 2
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "lilac",
              "count": 2
            }
          ],
          [
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sand",
              "count": 8
            },
            {
              "color": "plum",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
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
          0,
          1,
          2,
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
          0,
          3,
          1,
          2
        ],
        "actualMoves": 29,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "violet",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "violet",
              "count": 11
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "sand",
              "count": 9
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 4
            },
            {
              "color": "violet",
              "count": 11
            },
            {
              "color": "plum",
              "count": 10
            },
            {
              "color": "cream",
              "count": 13
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "violet",
              "count": 11
            },
            {
              "color": "violet",
              "count": 8
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "violet",
              "count": 1
            },
            {
              "color": "lilac",
              "count": 2
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "violet",
              "count": 11
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "sand",
              "count": 11
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
          1,
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
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 4
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "cream",
              "count": 13
            }
          ],
          [
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "plum",
              "count": 1
            },
            {
              "color": "lilac",
              "count": 2
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "violet",
              "count": 4
            },
            {
              "color": "plum",
              "count": 9
            },
            {
              "color": "sand",
              "count": 9
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "sand",
              "count": 11
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
          2,
          1,
          3,
          2,
          0,
          1,
          1
        ],
        "actualMoves": 28,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "violet",
              "count": 11
            },
            {
              "color": "violet",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "plum",
              "count": 11
            }
          ],
          [
            {
              "color": "violet",
              "count": 11
            },
            {
              "color": "violet",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "plum",
              "count": 10
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "violet",
              "count": 8
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 3
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "cream",
              "count": 13
            }
          ],
          [
            {
              "color": "violet",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "sand",
              "count": 4
            },
            {
              "color": "indigo",
              "count": 1
            },
            {
              "color": "lilac",
              "count": 2
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
          2,
          3,
          0,
          1,
          2,
          3,
          3,
          3,
          3
        ],
        "actualMoves": 28,
        "temptation": false
      }
    ],
    "actualMoves": 28
  },
  {
    "id": "whale-sea",
    "file": "11-whale-sea.png",
    "name": "鲸背星海",
    "N": 17,
    "jars": 30,
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
      "pine"
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
        "sky",
        "cream",
        "cream",
        "sky",
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
        "cream",
        "cream",
        "sky",
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
        "blue"
      ],
      [
        "indigo",
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
        "blue",
        "blue",
        "indigo",
        "indigo",
        "blue",
        "indigo"
      ],
      [
        "indigo",
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
        "blue",
        "blue",
        "blue",
        "blue",
        "indigo",
        "blue",
        "pine",
        "pine",
        "pine",
        "blue",
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
        "indigo"
      ],
      [
        "ink",
        "ink",
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
    "source": "assets/art/11-whale-sea.png",
    "density": 17,
    "stars": 289,
    "colorCounts": {
      "blue": 131,
      "sky": 7,
      "cream": 4,
      "indigo": 87,
      "pine": 3,
      "ink": 57
    },
    "targetMoves": 30,
    "columns": [
      [
        {
          "color": "blue",
          "count": 11
        },
        {
          "color": "blue",
          "count": 11
        },
        {
          "color": "blue",
          "count": 11
        },
        {
          "color": "blue",
          "count": 7
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 11
        }
      ],
      [
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "blue",
          "count": 11
        },
        {
          "color": "blue",
          "count": 11
        },
        {
          "color": "blue",
          "count": 11
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "pine",
          "count": 3
        },
        {
          "color": "sky",
          "count": 7
        }
      ],
      [
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "blue",
          "count": 11
        },
        {
          "color": "blue",
          "count": 11
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 7
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 10
        }
      ],
      [
        {
          "color": "blue",
          "count": 11
        },
        {
          "color": "blue",
          "count": 11
        },
        {
          "color": "blue",
          "count": 11
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 11
        },
        {
          "color": "cream",
          "count": 4
        },
        {
          "color": "blue",
          "count": 3
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
      3
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 7
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "pine",
              "count": 3
            },
            {
              "color": "sky",
              "count": 7
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            }
          ],
          [
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "cream",
              "count": 4
            },
            {
              "color": "blue",
              "count": 3
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
          3
        ],
        "actualMoves": 30,
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
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 5
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 3
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "cream",
              "count": 4
            },
            {
              "color": "blue",
              "count": 5
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "sky",
              "count": 7
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 7
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
          0
        ],
        "actualMoves": 31,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 7
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 3
            },
            {
              "color": "sky",
              "count": 7
            }
          ],
          [
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
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
          0,
          1,
          2,
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
          2
        ],
        "actualMoves": 29,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "cream",
              "count": 4
            },
            {
              "color": "sky",
              "count": 7
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 7
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            }
          ],
          [
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            }
          ],
          [
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "pine",
              "count": 3
            },
            {
              "color": "blue",
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
          0,
          3
        ],
        "actualMoves": 30,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            }
          ],
          [
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "cream",
              "count": 4
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 7
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 3
            },
            {
              "color": "sky",
              "count": 7
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
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 3
            },
            {
              "color": "sky",
              "count": 7
            }
          ],
          [
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "cream",
              "count": 4
            },
            {
              "color": "blue",
              "count": 3
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 11
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 7
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
          1,
          2,
          0
        ],
        "actualMoves": 31,
        "temptation": false
      }
    ],
    "actualMoves": 30
  },
  {
    "id": "mushroom-post",
    "file": "12-mushroom-post.png",
    "name": "蘑菇邮差",
    "N": 17,
    "jars": 33,
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
      "sand",
      "blue",
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
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "sky",
        "sand",
        "sky",
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
        "indigo"
      ],
      [
        "indigo",
        "blue",
        "sky",
        "sand",
        "sand",
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
        "indigo"
      ],
      [
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
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
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
        "indigo",
        "indigo",
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
        "sand",
        "sand",
        "sand",
        "sand",
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
        "ink",
        "sky",
        "sky",
        "pine",
        "pine",
        "indigo",
        "blue",
        "blue",
        "indigo",
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
        "sand",
        "sand",
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
        "pine"
      ]
    ],
    "source": "assets/art/12-mushroom-post.png",
    "density": 17,
    "stars": 289,
    "colorCounts": {
      "indigo": 128,
      "blue": 8,
      "sky": 8,
      "sand": 9,
      "ink": 62,
      "pine": 74
    },
    "targetMoves": 33,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "ink",
          "count": 11
        },
        {
          "color": "pine",
          "count": 10
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
          "color": "ink",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "ink",
          "count": 11
        },
        {
          "color": "ink",
          "count": 6
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "blue",
          "count": 8
        }
      ],
      [
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "ink",
          "count": 11
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "sky",
          "count": 7
        },
        {
          "color": "sky",
          "count": 1
        },
        {
          "color": "ink",
          "count": 1
        }
      ],
      [
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 3
        },
        {
          "color": "ink",
          "count": 11
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "sand",
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
      3,
      0,
      2,
      1,
      3,
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
      2,
      2
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "pine",
              "count": 10
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
              "color": "ink",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "ink",
              "count": 6
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "blue",
              "count": 8
            }
          ],
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sky",
              "count": 7
            },
            {
              "color": "sky",
              "count": 1
            },
            {
              "color": "ink",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 3
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sand",
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
          3,
          0,
          2,
          1,
          3,
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
          2,
          2
        ],
        "actualMoves": 33,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 4
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "blue",
              "count": 8
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "ink",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 5
            }
          ],
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 3
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "sand",
              "count": 9
            }
          ],
          [
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "sky",
              "count": 7
            },
            {
              "color": "sky",
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
        "actualMoves": 32,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 4
            },
            {
              "color": "sky",
              "count": 7
            }
          ],
          [
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sky",
              "count": 1
            }
          ],
          [
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "ink",
              "count": 6
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "blue",
              "count": 8
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sand",
              "count": 6
            },
            {
              "color": "sand",
              "count": 3
            },
            {
              "color": "ink",
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
          3,
          1,
          2,
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
          1,
          0,
          3,
          2,
          1,
          0,
          3,
          0,
          2,
          3,
          1,
          3
        ],
        "actualMoves": 33,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 4
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 6
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "sand",
              "count": 9
            }
          ],
          [
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "blue",
              "count": 8
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "ink",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 4
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "sky",
              "count": 7
            },
            {
              "color": "sky",
              "count": 1
            },
            {
              "color": "pine",
              "count": 2
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
          0,
          2,
          3,
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
          2,
          3,
          3
        ],
        "actualMoves": 32,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            }
          ],
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "sky",
              "count": 8
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 4
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sand",
              "count": 9
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "blue",
              "count": 8
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
              "count": 4
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "sand",
              "count": 6
            },
            {
              "color": "sky",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 4
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "sky",
              "count": 7
            }
          ],
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "ink",
              "count": 7
            },
            {
              "color": "sand",
              "count": 3
            }
          ],
          [
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 4
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "blue",
              "count": 8
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
          0
        ],
        "actualMoves": 33,
        "temptation": false
      }
    ],
    "actualMoves": 33
  },
  {
    "id": "forest-piano",
    "file": "13-forest-piano.png",
    "name": "森林琴房",
    "N": 18,
    "jars": 35,
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
        "pine",
        "sand",
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
        "pine",
        "sand",
        "sand",
        "blue",
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
        "blue",
        "pine",
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
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "pine",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "ink",
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
        "ink"
      ],
      [
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
        "pine",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "indigo",
        "ink",
        "indigo",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "plum",
        "ink",
        "ink",
        "ink",
        "ink"
      ],
      [
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
        "pine",
        "pine",
        "pine",
        "ink"
      ],
      [
        "ink",
        "pine",
        "pine",
        "pine",
        "ink",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
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
        "ink",
        "pine",
        "pine",
        "ink"
      ],
      [
        "ink",
        "pine",
        "ink",
        "pine",
        "sand",
        "sand",
        "plum",
        "plum",
        "sand",
        "plum",
        "sand",
        "sand",
        "sand",
        "sand",
        "pine",
        "ink",
        "pine",
        "ink"
      ],
      [
        "ink",
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
        "pine",
        "pine",
        "pine",
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
        "ink"
      ]
    ],
    "source": "assets/art/13-forest-piano.png",
    "density": 18,
    "stars": 324,
    "colorCounts": {
      "indigo": 122,
      "blue": 29,
      "pine": 60,
      "sand": 18,
      "ink": 91,
      "plum": 4
    },
    "targetMoves": 35,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "blue",
          "count": 9
        },
        {
          "color": "sand",
          "count": 1
        }
      ],
      [
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "sand",
          "count": 9
        },
        {
          "color": "ink",
          "count": 14
        }
      ],
      [
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "sand",
          "count": 8
        },
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 3
        }
      ],
      [
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 7
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "plum",
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
      2,
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
      2,
      0,
      1,
      3,
      0,
      2
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "blue",
              "count": 9
            },
            {
              "color": "sand",
              "count": 1
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "ink",
              "count": 14
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sand",
              "count": 8
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 3
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 7
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "plum",
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
          2,
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
          2,
          0,
          1,
          3,
          0,
          2
        ],
        "actualMoves": 35,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 14
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "blue",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 2
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sand",
              "count": 8
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sand",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 7
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "plum",
              "count": 4
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
          1,
          0,
          3,
          1,
          2
        ],
        "actualMoves": 35,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "ink",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "plum",
              "count": 4
            }
          ],
          [
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sand",
              "count": 9
            }
          ],
          [
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sand",
              "count": 9
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "blue",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 3
            }
          ]
        ],
        "proof": [
          2,
          3,
          0,
          1,
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
          3
        ],
        "actualMoves": 34,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "blue",
              "count": 9
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
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sand",
              "count": 9
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 7
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "plum",
              "count": 4
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sand",
              "count": 9
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
          0
        ],
        "actualMoves": 34,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sand",
              "count": 9
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "ink",
              "count": 6
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "plum",
              "count": 4
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sand",
              "count": 9
            }
          ],
          [
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "blue",
              "count": 9
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
          3
        ],
        "actualMoves": 34,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sand",
              "count": 9
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "blue",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 2
            }
          ],
          [
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "ink",
              "count": 6
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "plum",
              "count": 4
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "ink",
              "count": 11
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sand",
              "count": 9
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
          1
        ],
        "actualMoves": 34,
        "temptation": false
      }
    ],
    "actualMoves": 35
  },
  {
    "id": "snow-train",
    "file": "14-snow-train.png",
    "name": "雪国列车",
    "N": 18,
    "jars": 33,
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
        "blue",
        "sky",
        "cream",
        "sky",
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
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "blue",
        "sand",
        "cream",
        "sand",
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
        "sky",
        "sky",
        "blue",
        "sky",
        "sky",
        "blue",
        "sky",
        "sky"
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
        "sky",
        "sky",
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
        "mint"
      ],
      [
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
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
        "mint"
      ],
      [
        "mint",
        "mint",
        "sky",
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
        "sky",
        "blue",
        "blue"
      ],
      [
        "blue",
        "blue",
        "blue",
        "indigo",
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
        "indigo",
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
        "indigo",
        "indigo",
        "indigo",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "indigo",
        "indigo",
        "indigo",
        "blue",
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
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "sand",
        "indigo",
        "blue",
        "sand",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "blue",
        "blue",
        "sky",
        "blue",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "blue",
        "indigo",
        "indigo",
        "blue",
        "indigo",
        "indigo",
        "blue",
        "sky",
        "sky",
        "indigo"
      ],
      [
        "mint",
        "cream",
        "cream",
        "cream",
        "sand",
        "cream",
        "cream",
        "sand",
        "cream",
        "cream",
        "sand",
        "cream",
        "sand",
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
        "sand"
      ]
    ],
    "source": "assets/art/14-snow-train.png",
    "density": 18,
    "stars": 324,
    "colorCounts": {
      "sky": 84,
      "blue": 42,
      "cream": 49,
      "sand": 21,
      "mint": 83,
      "indigo": 45
    },
    "targetMoves": 33,
    "columns": [
      [
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "cream",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "sand",
          "count": 10
        },
        {
          "color": "mint",
          "count": 10
        },
        {
          "color": "mint",
          "count": 10
        },
        {
          "color": "blue",
          "count": 9
        }
      ],
      [
        {
          "color": "cream",
          "count": 10
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "sky",
          "count": 5
        },
        {
          "color": "cream",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "mint",
          "count": 10
        },
        {
          "color": "mint",
          "count": 10
        },
        {
          "color": "blue",
          "count": 11
        }
      ],
      [
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "cream",
          "count": 9
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "mint",
          "count": 10
        },
        {
          "color": "mint",
          "count": 10
        },
        {
          "color": "blue",
          "count": 11
        }
      ],
      [
        {
          "color": "sand",
          "count": 11
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "cream",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "mint",
          "count": 10
        },
        {
          "color": "mint",
          "count": 10
        },
        {
          "color": "mint",
          "count": 3
        },
        {
          "color": "blue",
          "count": 11
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
      2,
      1,
      0,
      3,
      2,
      1,
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
      3,
      1,
      2,
      0,
      3
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "blue",
              "count": 9
            }
          ],
          [
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 5
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "blue",
              "count": 11
            }
          ],
          [
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "cream",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "blue",
              "count": 11
            }
          ],
          [
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 3
            },
            {
              "color": "blue",
              "count": 11
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
          2,
          1,
          0,
          3,
          2,
          1,
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
          3,
          1,
          2,
          0,
          3
        ],
        "actualMoves": 33,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 2
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "sky",
              "count": 14
            }
          ],
          [
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "cream",
              "count": 9
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "blue",
              "count": 2
            },
            {
              "color": "mint",
              "count": 1
            }
          ],
          [
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "sand",
              "count": 11
            }
          ],
          [
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "sand",
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
        "actualMoves": 35,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "sky",
              "count": 7
            },
            {
              "color": "blue",
              "count": 11
            }
          ],
          [
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 3
            },
            {
              "color": "blue",
              "count": 11
            }
          ],
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "cream",
              "count": 7
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "cream",
              "count": 2
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
          3,
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          2,
          3,
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
          2,
          3,
          0,
          1,
          2,
          1,
          3,
          0
        ],
        "actualMoves": 36,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "blue",
              "count": 2
            }
          ],
          [
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 4
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "sand",
              "count": 10
            }
          ],
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "cream",
              "count": 7
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "cream",
              "count": 2
            }
          ],
          [
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 3
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "sand",
              "count": 11
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
        "actualMoves": 36,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "sand",
              "count": 10
            }
          ],
          [
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 3
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "cream",
              "count": 8
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "sky",
              "count": 14
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "blue",
              "count": 1
            },
            {
              "color": "cream",
              "count": 1
            }
          ],
          [
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "blue",
              "count": 8
            },
            {
              "color": "sand",
              "count": 11
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
          1,
          0,
          2,
          3,
          1,
          0,
          1,
          2,
          3,
          3,
          0,
          1,
          2,
          2,
          2
        ],
        "actualMoves": 35,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 9
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 2
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "blue",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "sky",
              "count": 9
            },
            {
              "color": "blue",
              "count": 6
            }
          ],
          [
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 6
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "cream",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "sky",
              "count": 9
            }
          ],
          [
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "blue",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "mint",
              "count": 1
            }
          ],
          [
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "blue",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "sand",
              "count": 10
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
          0,
          1,
          2,
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
          3,
          2
        ],
        "actualMoves": 37,
        "temptation": false
      }
    ],
    "actualMoves": 33
  },
  {
    "id": "coral-dream",
    "file": "15-coral-dream.png",
    "name": "珊瑚梦屿",
    "N": 19,
    "jars": 39,
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
      "mint",
      "plum"
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
        "sand",
        "sand",
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
        "cream",
        "cream",
        "sand",
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
        "cream",
        "cream",
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
        "teal"
      ],
      [
        "pine",
        "pine",
        "pine",
        "teal",
        "teal",
        "teal",
        "pine",
        "pine",
        "pine",
        "teal",
        "teal",
        "teal",
        "pine",
        "teal",
        "teal",
        "pine",
        "pine",
        "teal",
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
        "pine"
      ],
      [
        "pine",
        "pine",
        "pine",
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
        "plum",
        "plum",
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
        "pine",
        "teal",
        "teal",
        "pine",
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
        "teal"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "cream",
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
        "mint",
        "mint",
        "sand",
        "sand",
        "mint",
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
        "teal"
      ],
      [
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "mint",
        "teal",
        "teal",
        "teal",
        "teal",
        "teal",
        "mint",
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
        "teal"
      ]
    ],
    "source": "assets/art/15-coral-dream.png",
    "density": 19,
    "stars": 361,
    "colorCounts": {
      "teal": 241,
      "sand": 21,
      "cream": 6,
      "pine": 84,
      "plum": 4,
      "mint": 5
    },
    "targetMoves": 39,
    "columns": [
      [
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 9
        },
        {
          "color": "pine",
          "count": 11
        },
        {
          "color": "sand",
          "count": 10
        }
      ],
      [
        {
          "color": "pine",
          "count": 11
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "pine",
          "count": 11
        },
        {
          "color": "pine",
          "count": 6
        },
        {
          "color": "sand",
          "count": 11
        }
      ],
      [
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "pine",
          "count": 11
        },
        {
          "color": "pine",
          "count": 11
        },
        {
          "color": "cream",
          "count": 6
        },
        {
          "color": "mint",
          "count": 5
        }
      ],
      [
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "pine",
          "count": 11
        },
        {
          "color": "pine",
          "count": 11
        },
        {
          "color": "plum",
          "count": 4
        },
        {
          "color": "teal",
          "count": 2
        },
        {
          "color": "pine",
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
      1,
      0,
      2,
      3,
      3,
      2,
      3
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 9
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "sand",
              "count": 10
            }
          ],
          [
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 6
            },
            {
              "color": "sand",
              "count": 11
            }
          ],
          [
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "cream",
              "count": 6
            },
            {
              "color": "mint",
              "count": 5
            }
          ],
          [
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "plum",
              "count": 4
            },
            {
              "color": "teal",
              "count": 2
            },
            {
              "color": "pine",
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
          1,
          0,
          2,
          3,
          3,
          2,
          3
        ],
        "actualMoves": 39,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 9
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "sand",
              "count": 10
            }
          ],
          [
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "cream",
              "count": 6
            },
            {
              "color": "mint",
              "count": 5
            }
          ],
          [
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 7
            },
            {
              "color": "sand",
              "count": 11
            }
          ],
          [
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "teal",
              "count": 2
            },
            {
              "color": "plum",
              "count": 4
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
          3,
          1
        ],
        "actualMoves": 38,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 9
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            }
          ],
          [
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "cream",
              "count": 6
            },
            {
              "color": "mint",
              "count": 5
            }
          ],
          [
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 7
            }
          ],
          [
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "plum",
              "count": 4
            },
            {
              "color": "teal",
              "count": 2
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
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          3,
          1
        ],
        "actualMoves": 38,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 7
            },
            {
              "color": "sand",
              "count": 11
            }
          ],
          [
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 8
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "sand",
              "count": 10
            }
          ],
          [
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "cream",
              "count": 6
            },
            {
              "color": "teal",
              "count": 3
            }
          ],
          [
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "plum",
              "count": 4
            },
            {
              "color": "mint",
              "count": 5
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
          3,
          2
        ],
        "actualMoves": 38,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 7
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "cream",
              "count": 6
            }
          ],
          [
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "plum",
              "count": 4
            }
          ],
          [
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "sand",
              "count": 11
            }
          ],
          [
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "mint",
              "count": 5
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
          3
        ],
        "actualMoves": 35,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 9
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            }
          ],
          [
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "sand",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "cream",
              "count": 6
            },
            {
              "color": "teal",
              "count": 2
            }
          ],
          [
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "plum",
              "count": 4
            },
            {
              "color": "mint",
              "count": 5
            }
          ],
          [
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "pine",
              "count": 7
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
          1,
          2,
          2,
          1
        ],
        "actualMoves": 38,
        "temptation": false
      }
    ],
    "actualMoves": 39
  },
  {
    "id": "cloud-whale",
    "file": "16-cloud-whale.png",
    "name": "云鲸灯塔",
    "N": 20,
    "jars": 41,
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
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sky",
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
        "sky"
      ],
      [
        "sky",
        "sky",
        "sky",
        "sand",
        "cream",
        "cream",
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
        "sand",
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
        "sand",
        "sky",
        "sky",
        "sky",
        "sky",
        "sand",
        "sand",
        "sand",
        "sand"
      ],
      [
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
        "blue",
        "blue",
        "cream",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
        "sky",
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
        "cream",
        "sky",
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
        "indigo",
        "violet",
        "violet",
        "violet",
        "sand",
        "violet",
        "violet",
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
        "indigo",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "violet",
        "sky",
        "violet",
        "violet",
        "blue",
        "blue",
        "indigo",
        "blue"
      ],
      [
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
        "sky",
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
        "sky",
        "sky",
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
        "indigo",
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
        "violet",
        "sky",
        "sand",
        "sand",
        "cream",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "sand",
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
        "sky",
        "sand",
        "cream",
        "sand",
        "sky",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "blue",
        "sand",
        "cream",
        "cream",
        "sand",
        "indigo",
        "indigo",
        "blue",
        "sand",
        "cream",
        "sky",
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
        "sand",
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
    "source": "assets/art/16-cloud-whale.png",
    "density": 20,
    "stars": 400,
    "colorCounts": {
      "sky": 136,
      "sand": 30,
      "cream": 26,
      "blue": 61,
      "indigo": 99,
      "violet": 48
    },
    "targetMoves": 41,
    "columns": [
      [
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "violet",
          "count": 10
        },
        {
          "color": "blue",
          "count": 11
        },
        {
          "color": "blue",
          "count": 6
        },
        {
          "color": "sand",
          "count": 10
        }
      ],
      [
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "cream",
          "count": 11
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "sky",
          "count": 2
        },
        {
          "color": "violet",
          "count": 10
        },
        {
          "color": "violet",
          "count": 8
        },
        {
          "color": "blue",
          "count": 11
        },
        {
          "color": "sand",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 2
        }
      ],
      [
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "violet",
          "count": 10
        },
        {
          "color": "blue",
          "count": 11
        },
        {
          "color": "sand",
          "count": 10
        },
        {
          "color": "cream",
          "count": 5
        }
      ],
      [
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 7
        },
        {
          "color": "cream",
          "count": 10
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "sky",
          "count": 11
        },
        {
          "color": "violet",
          "count": 10
        },
        {
          "color": "blue",
          "count": 11
        },
        {
          "color": "blue",
          "count": 11
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
      0,
      3,
      2,
      1
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 6
            },
            {
              "color": "sand",
              "count": 10
            }
          ],
          [
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "cream",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 2
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "violet",
              "count": 8
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 2
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "cream",
              "count": 5
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "cream",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "blue",
              "count": 11
            },
            {
              "color": "blue",
              "count": 11
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
          0,
          3,
          2,
          1
        ],
        "actualMoves": 41,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "violet",
              "count": 8
            },
            {
              "color": "blue",
              "count": 1
            }
          ],
          [
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "cream",
              "count": 9
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 4
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "cream",
              "count": 7
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "sand",
              "count": 1
            },
            {
              "color": "indigo",
              "count": 2
            },
            {
              "color": "cream",
              "count": 1
            }
          ],
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "cream",
              "count": 9
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            }
          ]
        ],
        "proof": [
          1,
          2,
          3,
          0,
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
          2,
          2,
          0
        ],
        "actualMoves": 44,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "cream",
              "count": 9
            }
          ],
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 3
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "violet",
              "count": 8
            },
            {
              "color": "cream",
              "count": 9
            },
            {
              "color": "cream",
              "count": 8
            }
          ],
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "sky",
              "count": 12
            }
          ],
          [
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "blue",
              "count": 8
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "blue",
              "count": 3
            },
            {
              "color": "indigo",
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
          1,
          0,
          2,
          3,
          1,
          0,
          1,
          2,
          3,
          3
        ],
        "actualMoves": 42,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "cream",
              "count": 9
            },
            {
              "color": "blue",
              "count": 1
            }
          ],
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 3
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "violet",
              "count": 8
            },
            {
              "color": "sky",
              "count": 3
            },
            {
              "color": "sand",
              "count": 2
            },
            {
              "color": "indigo",
              "count": 2
            }
          ],
          [
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "cream",
              "count": 8
            }
          ],
          [
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sand",
              "count": 8
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "cream",
              "count": 9
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
          3,
          2,
          1,
          0,
          3,
          2,
          1,
          1,
          1,
          0
        ],
        "actualMoves": 44,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            }
          ],
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 4
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "cream",
              "count": 9
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "sand",
              "count": 1
            },
            {
              "color": "blue",
              "count": 3
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 8
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "cream",
              "count": 9
            },
            {
              "color": "sky",
              "count": 11
            }
          ],
          [
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "violet",
              "count": 8
            },
            {
              "color": "cream",
              "count": 7
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "cream",
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
          3,
          0,
          1,
          3,
          2,
          0,
          1,
          1,
          3
        ],
        "actualMoves": 43,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "violet",
              "count": 8
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "cream",
              "count": 8
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "cream",
              "count": 9
            },
            {
              "color": "sky",
              "count": 12
            }
          ],
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 3
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "cream",
              "count": 9
            },
            {
              "color": "blue",
              "count": 3
            },
            {
              "color": "sand",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "sky",
              "count": 11
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 8
            },
            {
              "color": "violet",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "sky",
              "count": 11
            }
          ]
        ],
        "proof": [
          1,
          2,
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
          0,
          1,
          2,
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
          1,
          3,
          2,
          2,
          0
        ],
        "actualMoves": 43,
        "temptation": false
      }
    ],
    "actualMoves": 41
  },
  {
    "id": "star-garden",
    "file": "17-star-garden.png",
    "name": "星轨花园",
    "N": 20,
    "jars": 46,
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
        "plum",
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
        "sand",
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
        "plum",
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
        "sand",
        "plum",
        "plum",
        "sand",
        "sand",
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
        "indigo",
        "sand",
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
        "ink",
        "indigo",
        "sand",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "ink",
        "sand",
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
        "plum",
        "sand",
        "ink",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "ink",
        "ink",
        "ink",
        "sand",
        "plum",
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
        "pine",
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
        "plum",
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
        "pine",
        "pine",
        "pine",
        "pine",
        "pine",
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
        "pine",
        "pine",
        "pine",
        "pine",
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
        "ink"
      ]
    ],
    "source": "assets/art/17-star-garden.png",
    "density": 20,
    "stars": 400,
    "colorCounts": {
      "indigo": 160,
      "plum": 14,
      "cream": 8,
      "sand": 14,
      "ink": 125,
      "pine": 79
    },
    "targetMoves": 46,
    "columns": [
      [
        {
          "color": "ink",
          "count": 9
        },
        {
          "color": "ink",
          "count": 9
        },
        {
          "color": "ink",
          "count": 9
        },
        {
          "color": "ink",
          "count": 9
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "pine",
          "count": 9
        },
        {
          "color": "pine",
          "count": 9
        },
        {
          "color": "pine",
          "count": 7
        },
        {
          "color": "sand",
          "count": 7
        }
      ],
      [
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "ink",
          "count": 9
        },
        {
          "color": "ink",
          "count": 9
        },
        {
          "color": "ink",
          "count": 9
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "pine",
          "count": 9
        },
        {
          "color": "pine",
          "count": 9
        },
        {
          "color": "cream",
          "count": 8
        },
        {
          "color": "plum",
          "count": 1
        }
      ],
      [
        {
          "color": "ink",
          "count": 9
        },
        {
          "color": "ink",
          "count": 9
        },
        {
          "color": "ink",
          "count": 9
        },
        {
          "color": "ink",
          "count": 8
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "pine",
          "count": 9
        },
        {
          "color": "pine",
          "count": 9
        },
        {
          "color": "pine",
          "count": 9
        }
      ],
      [
        {
          "color": "ink",
          "count": 9
        },
        {
          "color": "ink",
          "count": 9
        },
        {
          "color": "ink",
          "count": 9
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "indigo",
          "count": 9
        },
        {
          "color": "indigo",
          "count": 7
        },
        {
          "color": "plum",
          "count": 13
        },
        {
          "color": "pine",
          "count": 9
        },
        {
          "color": "sand",
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
      0,
      1
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 7
            },
            {
              "color": "sand",
              "count": 7
            }
          ],
          [
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "cream",
              "count": 8
            },
            {
              "color": "plum",
              "count": 1
            }
          ],
          [
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 8
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            }
          ],
          [
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "plum",
              "count": 13
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "sand",
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
          0,
          1
        ],
        "actualMoves": 46,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 8
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "sand",
              "count": 7
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 7
            },
            {
              "color": "cream",
              "count": 8
            }
          ],
          [
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "plum",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 13
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "plum",
              "count": 7
            },
            {
              "color": "sand",
              "count": 7
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
          3,
          2
        ],
        "actualMoves": 45,
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
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "plum",
              "count": 7
            },
            {
              "color": "sand",
              "count": 7
            }
          ],
          [
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "cream",
              "count": 8
            }
          ],
          [
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 8
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "plum",
              "count": 7
            },
            {
              "color": "sand",
              "count": 7
            }
          ],
          [
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 8
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
          2,
          1,
          3,
          0,
          2,
          1,
          3,
          3,
          0,
          2,
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
              "color": "ink",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 8
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "plum",
              "count": 7
            }
          ],
          [
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "cream",
              "count": 8
            },
            {
              "color": "sand",
              "count": 7
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 6
            },
            {
              "color": "plum",
              "count": 7
            },
            {
              "color": "pine",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "sand",
              "count": 7
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
          2,
          0,
          3,
          1,
          2
        ],
        "actualMoves": 46,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "plum",
              "count": 7
            },
            {
              "color": "sand",
              "count": 7
            }
          ],
          [
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "plum",
              "count": 7
            }
          ],
          [
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 8
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "cream",
              "count": 8
            }
          ],
          [
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 7
            },
            {
              "color": "sand",
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
        "actualMoves": 46,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "plum",
              "count": 12
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "plum",
              "count": 2
            },
            {
              "color": "sand",
              "count": 7
            }
          ],
          [
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 7
            },
            {
              "color": "cream",
              "count": 8
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "ink",
              "count": 8
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "sand",
              "count": 7
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
          1,
          3
        ],
        "actualMoves": 45,
        "temptation": false
      }
    ],
    "actualMoves": 46
  },
  {
    "id": "polar-market",
    "file": "18-polar-market.png",
    "name": "极夜集市",
    "N": 21,
    "jars": 46,
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
      "plum",
      "indigo",
      "cream",
      "sky"
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
        "pine",
        "pine",
        "cream",
        "cream",
        "pine",
        "pine",
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
        "plum",
        "plum",
        "plum",
        "sand",
        "ink",
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "ink",
        "plum",
        "plum",
        "plum",
        "plum",
        "plum",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "sand",
        "sand",
        "sand",
        "sand",
        "ink",
        "pine",
        "sand",
        "sand",
        "sand",
        "pine",
        "ink",
        "pine",
        "sand",
        "sand",
        "sand",
        "pine",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "sand",
        "sand",
        "sand",
        "sand",
        "ink",
        "pine",
        "sand",
        "sand",
        "sand",
        "sand",
        "ink",
        "sand",
        "sand",
        "sand",
        "sand",
        "pine",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "sand",
        "sky",
        "plum",
        "sand",
        "ink",
        "pine",
        "sky",
        "indigo",
        "plum",
        "sand",
        "ink",
        "sand",
        "sky",
        "plum",
        "sand",
        "pine",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "sky",
        "indigo",
        "indigo",
        "sand",
        "ink",
        "ink",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "ink",
        "sand",
        "indigo",
        "indigo",
        "plum",
        "plum",
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
        "ink"
      ]
    ],
    "source": "assets/art/18-polar-market.png",
    "density": 21,
    "stars": 441,
    "colorCounts": {
      "ink": 349,
      "pine": 32,
      "cream": 4,
      "plum": 14,
      "sand": 30,
      "sky": 4,
      "indigo": 8
    },
    "targetMoves": 46,
    "columns": [
      [
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "sand",
          "count": 10
        }
      ],
      [
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 8
        },
        {
          "color": "sand",
          "count": 10
        },
        {
          "color": "sky",
          "count": 4
        }
      ],
      [
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 9
        },
        {
          "color": "pine",
          "count": 11
        },
        {
          "color": "cream",
          "count": 4
        },
        {
          "color": "plum",
          "count": 7
        }
      ],
      [
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "pine",
          "count": 11
        },
        {
          "color": "sand",
          "count": 10
        },
        {
          "color": "plum",
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
      0,
      1,
      2,
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
      1,
      0,
      2,
      3,
      2,
      1
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "sky",
              "count": 4
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "cream",
              "count": 4
            },
            {
              "color": "plum",
              "count": 7
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "plum",
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
          0,
          1,
          2,
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
          1,
          0,
          2,
          3,
          2,
          1
        ],
        "actualMoves": 46,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "cream",
              "count": 4
            },
            {
              "color": "plum",
              "count": 7
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "pine",
              "count": 11
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 8
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sky",
              "count": 4
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "plum",
              "count": 7
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
          2,
          0,
          1,
          3,
          1,
          2,
          0,
          3,
          0,
          2,
          3
        ],
        "actualMoves": 47,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "cream",
              "count": 4
            },
            {
              "color": "plum",
              "count": 7
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "sky",
              "count": 4
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "plum",
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
          0,
          1,
          2,
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
          1,
          2,
          3,
          1,
          2
        ],
        "actualMoves": 46,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "cream",
              "count": 4
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "plum",
              "count": 7
            },
            {
              "color": "pine",
              "count": 1
            },
            {
              "color": "sky",
              "count": 4
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 7
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "ink",
              "count": 2
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "plum",
              "count": 7
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
          1,
          2
        ],
        "actualMoves": 48,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "cream",
              "count": 4
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "plum",
              "count": 7
            },
            {
              "color": "sky",
              "count": 4
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "plum",
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
          0,
          1,
          2,
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
          0,
          1
        ],
        "actualMoves": 46,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "sand",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "sand",
              "count": 1
            },
            {
              "color": "sky",
              "count": 4
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "cream",
              "count": 4
            },
            {
              "color": "plum",
              "count": 7
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 8
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 1
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "sand",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            },
            {
              "color": "plum",
              "count": 7
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
          2,
          0,
          1,
          3,
          2,
          0,
          1,
          3,
          1,
          0,
          0,
          2
        ],
        "actualMoves": 48,
        "temptation": false
      }
    ],
    "actualMoves": 46
  },
  {
    "id": "glass-dome",
    "file": "19-glass-dome.png",
    "name": "玻璃星穹",
    "N": 22,
    "jars": 52,
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
      "sand",
      "cream"
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
        "sand",
        "sand",
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
        "sky",
        "sky",
        "cream",
        "cream",
        "sky",
        "sky",
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
        "indigo",
        "indigo",
        "indigo",
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
        "blue",
        "blue",
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
        "blue",
        "indigo",
        "indigo",
        "indigo"
      ],
      [
        "indigo",
        "indigo",
        "indigo",
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
        "blue",
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
        "indigo",
        "indigo",
        "indigo",
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
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "indigo",
        "blue",
        "blue",
        "blue",
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
        "blue",
        "blue",
        "blue",
        "indigo",
        "ink",
        "ink"
      ],
      [
        "ink",
        "ink",
        "ink",
        "blue",
        "blue",
        "blue",
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
        "blue",
        "blue",
        "blue",
        "ink",
        "ink",
        "ink"
      ],
      [
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
        "sand",
        "sand",
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
      ]
    ],
    "source": "assets/art/19-glass-dome.png",
    "density": 22,
    "stars": 484,
    "colorCounts": {
      "blue": 191,
      "sand": 15,
      "cream": 15,
      "sky": 88,
      "indigo": 129,
      "ink": 46
    },
    "targetMoves": 52,
    "columns": [
      [
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 1
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "sky",
          "count": 10
        },
        {
          "color": "sky",
          "count": 10
        },
        {
          "color": "blue",
          "count": 9
        },
        {
          "color": "cream",
          "count": 7
        },
        {
          "color": "sand",
          "count": 7
        }
      ],
      [
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "sky",
          "count": 10
        },
        {
          "color": "sky",
          "count": 10
        },
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 9
        }
      ],
      [
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "blue",
          "count": 2
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "ink",
          "count": 6
        },
        {
          "color": "sky",
          "count": 10
        },
        {
          "color": "sky",
          "count": 10
        },
        {
          "color": "sky",
          "count": 8
        },
        {
          "color": "cream",
          "count": 8
        },
        {
          "color": "sand",
          "count": 8
        }
      ],
      [
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "sky",
          "count": 10
        },
        {
          "color": "sky",
          "count": 10
        },
        {
          "color": "blue",
          "count": 10
        },
        {
          "color": "indigo",
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
      0,
      1,
      3,
      2,
      0
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 1
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "blue",
              "count": 9
            },
            {
              "color": "cream",
              "count": 7
            },
            {
              "color": "sand",
              "count": 7
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 2
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 6
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 8
            },
            {
              "color": "cream",
              "count": 8
            },
            {
              "color": "sand",
              "count": 8
            }
          ],
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
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
          0,
          1,
          3,
          2,
          0
        ],
        "actualMoves": 52,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "blue",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 1
            },
            {
              "color": "blue",
              "count": 1
            }
          ],
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "ink",
              "count": 6
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "blue",
              "count": 9
            },
            {
              "color": "sand",
              "count": 8
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 3
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "blue",
              "count": 9
            },
            {
              "color": "cream",
              "count": 7
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 8
            },
            {
              "color": "cream",
              "count": 8
            },
            {
              "color": "sand",
              "count": 7
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
          0
        ],
        "actualMoves": 53,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 8
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "blue",
              "count": 8
            },
            {
              "color": "sand",
              "count": 8
            }
          ],
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "ink",
              "count": 6
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sand",
              "count": 7
            }
          ],
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 3
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "cream",
              "count": 7
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 8
            },
            {
              "color": "cream",
              "count": 8
            },
            {
              "color": "indigo",
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
          0,
          3,
          2,
          0,
          1,
          3
        ],
        "actualMoves": 52,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 1
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "cream",
              "count": 7
            },
            {
              "color": "sand",
              "count": 7
            }
          ],
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 3
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "blue",
              "count": 8
            },
            {
              "color": "indigo",
              "count": 9
            }
          ],
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 8
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 6
            },
            {
              "color": "cream",
              "count": 8
            },
            {
              "color": "sand",
              "count": 8
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
          1,
          0,
          2,
          3,
          1,
          0,
          2,
          3,
          1
        ],
        "actualMoves": 52,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 1
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 1
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 8
            },
            {
              "color": "cream",
              "count": 7
            },
            {
              "color": "sand",
              "count": 8
            }
          ],
          [
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "cream",
              "count": 8
            },
            {
              "color": "sand",
              "count": 7
            }
          ],
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "ink",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 9
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
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
          0,
          1,
          2,
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
          0,
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
          0,
          1,
          2
        ],
        "actualMoves": 53,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 8
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "cream",
              "count": 8
            },
            {
              "color": "sand",
              "count": 7
            }
          ],
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 3
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 6
            },
            {
              "color": "indigo",
              "count": 10
            }
          ],
          [
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "blue",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "sky",
              "count": 10
            },
            {
              "color": "blue",
              "count": 8
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "cream",
              "count": 7
            },
            {
              "color": "sand",
              "count": 8
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
          2,
          1,
          3,
          0
        ],
        "actualMoves": 51,
        "temptation": false
      }
    ],
    "actualMoves": 52
  },
  {
    "id": "light-tree",
    "file": "20-light-tree.png",
    "name": "拾光之树",
    "N": 24,
    "jars": 60,
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
        "plum",
        "plum",
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
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "indigo",
        "plum",
        "plum",
        "mint",
        "mint",
        "mint",
        "plum",
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
        "pine",
        "teal",
        "teal",
        "teal",
        "pine",
        "pine",
        "teal",
        "teal",
        "pine",
        "plum",
        "mint",
        "mint",
        "mint",
        "plum",
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
        "mint",
        "mint",
        "mint",
        "plum",
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
        "plum",
        "plum",
        "plum",
        "plum",
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
        "ink",
        "indigo",
        "teal",
        "teal",
        "teal",
        "mint",
        "mint",
        "mint",
        "mint",
        "mint",
        "teal",
        "pine",
        "plum",
        "plum",
        "plum",
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
        "ink",
        "pine",
        "pine",
        "pine",
        "pine",
        "teal",
        "mint",
        "mint",
        "mint",
        "teal",
        "teal",
        "teal",
        "pine",
        "pine",
        "plum",
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
        "teal",
        "teal",
        "teal",
        "mint",
        "mint",
        "teal",
        "teal",
        "mint",
        "teal",
        "teal",
        "teal",
        "mint",
        "teal",
        "teal",
        "teal",
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
        "teal",
        "teal",
        "teal",
        "mint",
        "mint",
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
        "pine",
        "teal",
        "teal",
        "mint",
        "mint",
        "teal",
        "pine",
        "mint",
        "pine",
        "teal",
        "mint",
        "mint",
        "mint",
        "teal",
        "teal",
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
        "teal",
        "teal",
        "teal",
        "pine",
        "ink",
        "gold",
        "gold",
        "indigo",
        "teal",
        "teal",
        "teal",
        "teal",
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
        "pine",
        "ink",
        "ink",
        "ink",
        "ink",
        "gold",
        "gold",
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
        "ink",
        "ink",
        "gold",
        "gold",
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
        "ink",
        "ink",
        "pine",
        "gold",
        "gold",
        "ink",
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
        "ink",
        "ink",
        "ink",
        "pine",
        "gold",
        "gold",
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
        "pine",
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
        "pine",
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
        "ink",
        "indigo",
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
        "pine"
      ]
    ],
    "source": "assets/art/20-light-tree.png",
    "density": 24,
    "stars": 576,
    "colorCounts": {
      "indigo": 130,
      "plum": 31,
      "mint": 38,
      "pine": 169,
      "teal": 74,
      "ink": 118,
      "gold": 16
    },
    "targetMoves": 60,
    "columns": [
      [
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "pine",
          "count": 6
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 6
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "plum",
          "count": 11
        },
        {
          "color": "gold",
          "count": 8
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "mint",
          "count": 9
        }
      ],
      [
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "plum",
          "count": 9
        },
        {
          "color": "gold",
          "count": 8
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 4
        },
        {
          "color": "pine",
          "count": 12
        }
      ],
      [
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "mint",
          "count": 9
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "mint",
          "count": 10
        },
        {
          "color": "pine",
          "count": 11
        }
      ],
      [
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "pine",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "indigo",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 10
        },
        {
          "color": "ink",
          "count": 8
        },
        {
          "color": "plum",
          "count": 11
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "teal",
          "count": 10
        },
        {
          "color": "mint",
          "count": 10
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
      2,
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
      3,
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
      3
    ],
    "variants": [
      {
        "columns": [
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 6
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 6
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "gold",
              "count": 8
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "mint",
              "count": 9
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "plum",
              "count": 9
            },
            {
              "color": "gold",
              "count": 8
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 4
            },
            {
              "color": "pine",
              "count": 12
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "mint",
              "count": 9
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "pine",
              "count": 11
            }
          ],
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 8
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
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
          2,
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
          3,
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
          3
        ],
        "actualMoves": 60,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 3
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 7
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "gold",
              "count": 8
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "teal",
              "count": 3
            },
            {
              "color": "ink",
              "count": 1
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 5
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "pine",
              "count": 8
            }
          ],
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 4
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "plum",
              "count": 9
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "pine",
              "count": 8
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "teal",
              "count": 11
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "gold",
              "count": 8
            },
            {
              "color": "mint",
              "count": 8
            },
            {
              "color": "indigo",
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
        "actualMoves": 62,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 5
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "plum",
              "count": 10
            },
            {
              "color": "gold",
              "count": 7
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 4
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "pine",
              "count": 8
            }
          ],
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "gold",
              "count": 8
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "mint",
              "count": 8
            },
            {
              "color": "pine",
              "count": 8
            }
          ],
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "plum",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 3
            },
            {
              "color": "ink",
              "count": 2
            },
            {
              "color": "plum",
              "count": 1
            },
            {
              "color": "gold",
              "count": 1
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 6
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "plum",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "pine",
              "count": 8
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
        "actualMoves": 64,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 5
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "gold",
              "count": 14
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "gold",
              "count": 2
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "mint",
              "count": 9
            },
            {
              "color": "plum",
              "count": 9
            },
            {
              "color": "pine",
              "count": 8
            }
          ],
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 9
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 9
            },
            {
              "color": "pine",
              "count": 8
            }
          ],
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 7
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 4
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "pine",
              "count": 8
            },
            {
              "color": "ink",
              "count": 1
            },
            {
              "color": "indigo",
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
          3,
          1,
          2,
          0,
          3,
          3
        ],
        "actualMoves": 62,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 3
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 8
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "mint",
              "count": 9
            },
            {
              "color": "indigo",
              "count": 5
            }
          ],
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "gold",
              "count": 7
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 4
            },
            {
              "color": "mint",
              "count": 9
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "gold",
              "count": 1
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 5
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "gold",
              "count": 8
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "pine",
              "count": 8
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "plum",
              "count": 9
            },
            {
              "color": "pine",
              "count": 8
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
          3,
          0,
          2,
          1,
          3,
          0,
          1,
          2,
          1,
          3,
          0,
          2,
          3,
          0,
          1
        ],
        "actualMoves": 62,
        "temptation": false
      },
      {
        "columns": [
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 5
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 7
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "gold",
              "count": 8
            },
            {
              "color": "indigo",
              "count": 3
            }
          ],
          [
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "gold",
              "count": 8
            },
            {
              "color": "pine",
              "count": 8
            }
          ],
          [
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 4
            },
            {
              "color": "plum",
              "count": 11
            },
            {
              "color": "mint",
              "count": 10
            },
            {
              "color": "pine",
              "count": 8
            }
          ],
          [
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "pine",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "indigo",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 10
            },
            {
              "color": "ink",
              "count": 8
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "teal",
              "count": 10
            },
            {
              "color": "plum",
              "count": 9
            },
            {
              "color": "mint",
              "count": 8
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
          0,
          1,
          2,
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
          3,
          1,
          2,
          0,
          3,
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
          0
        ],
        "actualMoves": 61,
        "temptation": false
      }
    ],
    "actualMoves": 60
  }
];
  const SOLUTIONS = {
  "glow-path": [
    0,
    1,
    2,
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
    2
  ],
  "paper-harbor": [
    1,
    1,
    3,
    3,
    3,
    1,
    2,
    2,
    2,
    3,
    0,
    0,
    0,
    0
  ],
  "mist-lodge": [
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
    3
  ],
  "dawn-lily": [
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
    2,
    0,
    1,
    3,
    2
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
  "star-lighthouse": [
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
    2,
    1,
    0,
    3,
    2,
    0,
    1,
    3,
    1,
    0
  ],
  "aurora-clock": [
    0,
    1,
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
    1,
    2,
    0,
    3,
    1,
    0,
    3,
    2,
    3
  ],
  "windmill-field": [
    0,
    1,
    2,
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
    1,
    2,
    0,
    3,
    2,
    1
  ],
  "rabbit-tea": [
    0,
    1,
    2,
    3,
    1,
    0,
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
    2,
    1,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    0,
    3
  ],
  "whale-sea": [
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
    3
  ],
  "mushroom-post": [
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
    0,
    2,
    3,
    1,
    3,
    0,
    2,
    1,
    3,
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
    2,
    2
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
    0,
    1,
    3,
    0,
    2
  ],
  "snow-train": [
    0,
    1,
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
    3,
    1,
    2,
    0,
    3
  ],
  "coral-dream": [
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
    1,
    0,
    2,
    3,
    3,
    2,
    3
  ],
  "cloud-whale": [
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
    0,
    3,
    2,
    1
  ],
  "star-garden": [
    0,
    1,
    2,
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
    3,
    2,
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
    0,
    1
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
    2,
    0,
    1,
    3,
    1,
    0,
    2,
    3,
    2,
    1
  ],
  "glass-dome": [
    0,
    1,
    2,
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
    2,
    0,
    1,
    3,
    2,
    0
  ],
  "light-tree": [
    0,
    1,
    2,
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
    3,
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
    3
  ]
};
  global.SHIGUANG_PALETTE = PALETTE;
  global.SHIGUANG_LEVELS = LEVELS;
  global.SHIGUANG_PROOFS = SOLUTIONS;
})(typeof window !== 'undefined' ? window : globalThis);
