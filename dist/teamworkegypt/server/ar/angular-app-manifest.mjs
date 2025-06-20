
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-WNXTWUIL.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/ar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYJXUAAC.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/ar/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VTYBHCOX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/ar/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/ar/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/ar/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/ar/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/ar/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/ar/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/ar/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
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
    'index.csr.html': {size: 11312, hash: 'befeaf14a0b5de723da4ef6444f2ca369d984270b1d44e86af814e0786105663', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1075, hash: '1aeadeb65580c5831c30b83ebcee844b9f52ec0f901be0f637d1a9d025276ce3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 61088, hash: 'a3ba80c0abbf743b12674d1ad02b5287d4da40601f56c04adf8846ba05f6aec5', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111365, hash: '840bdb6bd8766c1942c01c689220a0dd6b39dfe5a88b4553f2d74ef2273442e3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 60880, hash: '5f9877e13b08852354f39249495be9ed12952f3949ebf3f042caa3f46923d771', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44502, hash: 'dea9cad0a49c5175ef2b381971479227561f8eb4948f395aa182aecd231238c2', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 61377, hash: 'f3a42fff1531559929f11ee4f9d343fd4f63f8aeb94f3b7904f6f925975a2532', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 61186, hash: 'e2bf955921d4650b45bdfda4777fbc9b0b1242b0484e369e8657aa4c0a244746', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 60832, hash: '9bc3948b5499a0b1787440b48f3ccce471760b6a9fdcce2adf33a104d98ecfaf', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 55000, hash: '3250ad118e2fb1a2519978ad7fb1411bee4a70d595485c99b7a9f52897105926', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 61398, hash: '2383a50aab9faacda88fe1eb85f7d143abe8d988d4cc6442d08eba02767daff1', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles-GH3URCE5.css': {size: 53835, hash: 'ITSNXeOZ5k8', text: () => import('./assets-chunks/styles-GH3URCE5_css.mjs').then(m => m.default)}
  },
};
