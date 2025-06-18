
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en-US/',
  locale: "en-US",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-KE3CDJH3.js",
      "chunk-HQJU6TH5.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TQ6TACDB.js",
      "chunk-HQJU6TH5.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TP4YNYNO.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
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
    'index.csr.html': {size: 11176, hash: 'e9e57d578d3ab8514ba813ff082da395d62c3a4abbd825e64096d286c4c51b15', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1080, hash: 'f8ca451770705bac752121a174c9e2498af459f57c5bd4653a6c173cbe40b410', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57290, hash: '063d6f1d156dfe326f2a38bea1a8679458f1956f81cf7b5a56de5c24d2ec5bee', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57506, hash: '2e345eff8ee216680043157e32b5b71b713489beef5ccc11b5a02f4d98d29e70', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57390, hash: 'c6d20d763a1274cb760b7dfa81ffa3df79161c3063c37a0d6881275d99845667', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44993, hash: '932cb9debc815a9eb4bea3832a9ffabf28c6d3f7094668d2d43ea41a4e1d8fc6', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57482, hash: 'c58eeaf3b9a94adf9fa6be07e4405acfdc1b4ff8407e60c674350c5de9a3d3fe', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'index.html': {size: 79985, hash: '862788d08a8102cf7f413626a6572f2c704b63763bd99e77b4c3efdc3b530727', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57457, hash: '2838f8a78968875daa4be592c5b5ee915bc311f453f0fe5cc47c0874a8482407', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52062, hash: '0be5664d3105f69bd92bc7fe9b70ae980d38284487fb30a97f5991db0c2a473a', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57607, hash: '42dc092d189e2e7368edb47914175134095becde3eba63721b81f1fe090032cd', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles-BFDER3CE.css': {size: 46538, hash: 'kvkToQ3y654', text: () => import('./assets-chunks/styles-BFDER3CE_css.mjs').then(m => m.default)}
  },
};
