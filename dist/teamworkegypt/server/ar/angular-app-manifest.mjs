
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-WNWS5P5A.js",
      "chunk-O2XZ7B3Y.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/ar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3CZITQ4Q.js",
      "chunk-O2XZ7B3Y.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/ar/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TP4YNYNO.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/ar/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/ar/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/ar/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/ar/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/ar/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/ar/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/ar/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
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
    'index.csr.html': {size: 11170, hash: '00e0debf45bdefda907394f162aa17db8948c001dbca84949dc78be3b5330a39', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: 'ac05143506795369790c64d860d65d399e2998ac08fb0935c6f7ead4ad06bc5e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45212, hash: 'd311e1772afec98aa2da68dbfddbc93b000c1efaab803a1b3399f9e9c4f8971c', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57696, hash: '21d22c5d84fbd1e272e0dbd0cdadec7e4f82faa25118a4a651104fbfd5853834', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57464, hash: '3bfc6bfe351b763ba111579cfe6f2b2b4c7e433d80a19e96ef08c5ced12d62f2', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57672, hash: '685b919f61f4d35421f64102fe7d78cd42aa48bc7646ad0ce5a8d08b17dd8531', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'index.html': {size: 81903, hash: 'cfbe53121fb8dbd256f1a138a59372a8456e8fd3e1f70427bc31f50f8db739ac', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57564, hash: '686661ec811edf960c79a07f6b4e4dbecc8f66e64a00e625d20f36e8612de932', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57781, hash: 'f12ad694dc5845a02c51e1ad16313ff01244b083dd6d42955b6e4846a4e00a11', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52301, hash: 'c599595818d6d01e45cf8211c4905901a38bfe2af09fee0ff9bba2ec8bc36cb4', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57631, hash: '8f7bf29eaa1225053293f967a28077f0a5dc3c50008b420059b920bb4ddfaf06', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-S7WEZQ7W.css': {size: 46703, hash: 'vTxEDS4btbQ', text: () => import('./assets-chunks/styles-S7WEZQ7W_css.mjs').then(m => m.default)}
  },
};
