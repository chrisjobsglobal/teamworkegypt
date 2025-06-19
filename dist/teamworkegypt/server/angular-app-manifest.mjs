
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "en",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-73LUSQTH.js",
      "chunk-JDE6PCFH.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TTLOCQP5.js",
      "chunk-JDE6PCFH.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SHKIOR3D.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/career-tips/*"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11168, hash: '7d8696c7c1881d8690b59e63a3f3c70c64d05bf0827781f399efb60c0693b3d3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: '31ca3f1030ae3b910f9555367465741540eab484edacbb1251b368fab1230133', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 80101, hash: '4defe8f0772654f5c92c48c7339dcf430d6c0688f2c7e19b1831f2b83d6db076', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57476, hash: '852904f14d91ae46ed6c13f48867e4ad923eb6cc025d792bba91007942dbd960', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57360, hash: '2dafc627029eb9b5e3c6bd326dee0c41ef7ace6db70519ddaf609b3981c77070', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44975, hash: '811007fe344e5e7553ea0dd022a705492f3612e805d25023393ca2c851639f0e', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57452, hash: '061a340dffadfa1c97c1543cfa87c59ee080376591951a5e2cc7163f03b8a30b', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57260, hash: '5bdb9a9d6bdd49eb57cbb36796d699a6a515ee506c6c9f8e6693fc5e0933e426', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57427, hash: 'fe15e62b7662bc76a1f4f9459e4d09d4a87edd271cf6f4f7c319737ccf3371c4', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52026, hash: '33bb5498c67e23c838f1ce826ba63c31372278b05a03e86ca8c6c25cbe73766c', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57577, hash: 'd4cfad3c587d7a62b2c12ffeb1bfea56fa1be4000c842def9dc4192bc69e02b9', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles-YURPY4RI.css': {size: 46683, hash: 'FkVl+c19r5E', text: () => import('./assets-chunks/styles-YURPY4RI_css.mjs').then(m => m.default)}
  },
};
