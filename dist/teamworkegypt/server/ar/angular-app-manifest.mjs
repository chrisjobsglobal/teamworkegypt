
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-73LUSQTH.js",
      "chunk-JDE6PCFH.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/ar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TTLOCQP5.js",
      "chunk-JDE6PCFH.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/ar/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SHKIOR3D.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/ar/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/ar/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/ar/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/ar/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/ar/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/ar/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/ar/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/ar/career-tips/*"
  },
  {
    "renderMode": 2,
    "redirectTo": "/ar",
    "route": "/ar/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11171, hash: '9315e55eef003f2bf85f6e7403d0541f786fa805b3421a9c494b89163f176552', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1075, hash: '71ffc66dc5312b8dc93d5bc1c4cced4b358129bb2ece9489fc1bc38899566f21', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57499, hash: 'a364378a8c64a2353b930714d4e140f0e2c2d3a70bfd6b1dc35779567bba8c1a', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57599, hash: 'd7d59d031da8b4d74de6822e536bbd1882b05234a6e6d961b48b6674ae1795f8', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45227, hash: 'dbf38d355b30cbce2f216964ba465d473e27121ab634d4fed3d3056e87f26fb9', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57715, hash: 'f86b46e5b9f8b5d65b0be077109c3f6dbd3f7d7916bea55bfb3bfdb3e656d532', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52336, hash: '1ccaf28624e2b000a8a2e45486b04129e688732c4894a368ff90d6d1ed546a49', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'index.html': {size: 81956, hash: '8e33d003e8028dac01d547cd41bb7fd976e964476a99945462556c548ba90a64', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57800, hash: 'd930da37ea296dc641a16044862b670e57eeca72702b203a72eacd2d33a5fcfd', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57691, hash: '4923abc4ce3f6893400b4d749806b213c72d5fb5f3e50dfb46ea1d1b511b78cf', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57682, hash: '743f11f3a7e3fa4770753317b08af965c53a72453b0ccd1290817306a3a09678', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-YURPY4RI.css': {size: 46683, hash: 'FkVl+c19r5E', text: () => import('./assets-chunks/styles-YURPY4RI_css.mjs').then(m => m.default)}
  },
};
