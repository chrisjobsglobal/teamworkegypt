
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en-US/',
  locale: "en-US",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-6W7WRMMP.js",
      "chunk-E3EVOTLW.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4YNAU5AW.js",
      "chunk-E3EVOTLW.js",
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
    'index.csr.html': {size: 11176, hash: 'b846ace4576115ad78654e7913f260b886e82d34d44609effb1cce902d0fe58d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1080, hash: '17f62a7742d35d35f478bc1cd94a76930fa0d8abecbc05cb3ab1b17e955e6db4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 80083, hash: '9bdfdeebf33cab77e4395789eb5130903aca86d37e21e84411e28b3a55feef09', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57506, hash: 'e4229a2aa3a993f5e087adf37909e1794f7b33855f79544136323056ebcc82a2', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57390, hash: 'bc0283c1bc664227a84460ca383b71c54846e4bb4cc4ae3ca319e06d8d8fe3f8', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57290, hash: 'a20d3b2c1c5476fdab3873f96b240c4b33a2f9a144154c484a0dc3bad465aaa8', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44952, hash: 'f6b8dd557e7828ab65e43f2d138de89f57f088bf2849153bb3aaafb9b0768ec6', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57482, hash: '35d15b0fb1685daf8ccb40b694820dd2c02d277a1c45beb85eafd710eb463587', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52062, hash: '936170997b22b4adf719ca6589d23a6d2c019a8090647b37ce61b73f5e46f1d3', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57591, hash: '9c5cc1c01866910de6713ca627449dbb43a0f6c9cff4ab19cfa6eff9d5c1fb8b', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57473, hash: 'a72168c4525e30176c7174100761978d3f0be0d09b7628a2b9f0ddc955a8e1f9', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-BFDER3CE.css': {size: 46538, hash: 'kvkToQ3y654', text: () => import('./assets-chunks/styles-BFDER3CE_css.mjs').then(m => m.default)}
  },
};
