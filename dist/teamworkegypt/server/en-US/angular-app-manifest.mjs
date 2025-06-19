
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en-US/',
  locale: "en-US",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-YLAL5XPP.js",
      "chunk-KS3VWBNE.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/en-US"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6ABJMMLD.js",
      "chunk-KS3VWBNE.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/en-US/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WS6MOJAY.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/en-US/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/en-US/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/en-US/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/en-US/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/en-US/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/en-US/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/en-US/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/en-US/career-tips/*"
  },
  {
    "renderMode": 2,
    "redirectTo": "/en-US",
    "route": "/en-US/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11177, hash: '226734a09ee064074299587ba650a92136bda0342111b77d2c8272c9275c4005', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1081, hash: 'e2a54e8b516ef8478baba08d2d9c3fc207f4e52cee1a1df56b65688b10ce5856', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57317, hash: '31beebb271ff56779b253fde5670ef356c61d8000f7d4df4819cbc698d0e9d58', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'index.html': {size: 80195, hash: '20336fc7167f818e8521e0317ed56c19e0101e80ccd00bfab5f6487e42816996', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57533, hash: '00885b1d7527c5ea2a54b87dd00cfd523c13399ff94eb44781c78aa265ec8f76', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52089, hash: 'b5d4bc70ce165e89ae264f407dbd64aab04a523d508ed44636bafa5c61023f8c', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45000, hash: 'cc7ca2cfafc9b36d23d163269e2a63c6fa9474417feec2091fdd3c9f30e3fe72', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57509, hash: '3292a8444a204540107bf0b2cbf1201780ef142a657e63e8766d538f2c176df3', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57417, hash: '0cad3e797be88fc1388d733fbef57864bd68a80b2ae13b45aa206fdf55e20877', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57618, hash: '63843d254bd4d15d5d0edce43c17d6813fa74e7319fc377a197db629096fa896', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57500, hash: 'ed5f1f31fdd1d25affdf499a7408fbc49871f1af0331798d4b33f7006a8918af', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-OSDT5SZQ.css': {size: 46732, hash: 'HaF+shbhS3U', text: () => import('./assets-chunks/styles-OSDT5SZQ_css.mjs').then(m => m.default)}
  },
};
