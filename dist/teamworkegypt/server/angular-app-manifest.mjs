
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "en",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-6W7WRMMP.js",
      "chunk-E3EVOTLW.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4YNAU5AW.js",
      "chunk-E3EVOTLW.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TP4YNYNO.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
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
    'index.csr.html': {size: 11167, hash: '1099e941d6b117e81b385a5d15c6f0eac8f23854747b629f05d406afbdae164d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1071, hash: '2463a0f8e9340bd89a5e4391b88828d368e9773df731580a851d8c389877d805', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57233, hash: 'c33804e74d34b8cbc569f943796debf5c164787342fb37d54782606aec1b10ea', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57333, hash: '9d710b9db35c21f9fc35f2e40b24e3d07aeabaae9ce5d95405b7354d278813d5', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44920, hash: 'c5c2442c2182539129c19b70ce2c57ab623243fdad42419b77626a1438c252e0', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 79950, hash: '95842283ebefa02eeb0f94e0a16225deccc7004ec5194222ccb48492210d4891', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57425, hash: 'bd200c40ca9e5dc49c5d84f41c38ad26239166e12c632502cdd846533c8250b4', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 51999, hash: 'a5d66bc5dd9f403dc998fd21bbc178229f16720479ba9c61d4c66a6ae147ce71', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57449, hash: '0314c859c2a9f32bd082ebe720b19b6f85ca20ed0797f82c86d06fffe72ac922', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57400, hash: '34a0dbd85c604bcb55c71209b5f752b140121445446f1daeaad997ae17072de1', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57534, hash: '9f11a1e6e06bd7a7c3de9c102cac7c44d5a90f404f9a314f5a92eb9426ed152f', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles-BFDER3CE.css': {size: 46538, hash: 'kvkToQ3y654', text: () => import('./assets-chunks/styles-BFDER3CE_css.mjs').then(m => m.default)}
  },
};
