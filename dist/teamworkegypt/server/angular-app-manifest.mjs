
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "en",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-WNWS5P5A.js",
      "chunk-O2XZ7B3Y.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3CZITQ4Q.js",
      "chunk-O2XZ7B3Y.js",
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
    'index.csr.html': {size: 11167, hash: '8b4c734d16aed4cbacbc8c1c96ab85e4de2395248114ef43f719dea5eed38083', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1071, hash: '361a0b77fe13d2b47a4c2535320eb57a9b3fedb905aff62ff73508f44b16d535', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57333, hash: '41930c488313b28e9f75a0a85ac4cd42c603907b7d085481109f099a30136426', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44954, hash: '69124db98395663317eb1cad873a93010cffcbce4710a1625807b4027384edd4', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57449, hash: '18f5f019ebba93b0119108b181dd21d07002eaf1b0e20f4288b1dac56380333b', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57233, hash: '9a563b33d0803e4c9f285208dab765d5258e72f3df243bc6489a781d0b168de8', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'index.html': {size: 79946, hash: '012dc3eea74b57054cc59fdb9beca8ca9b34291635064acdd73a56012913f4f5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57441, hash: 'd3b6d6e28ec8cededaa072bc0dc144939b1f7f8bf355636990444f8836692926', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 51999, hash: 'd15a951ffabd80806d1c39be399c2bde241e8d8bcaf788a8b8e1f4e6f4a8a77a', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57534, hash: 'f86f1791461dc0450c1652ba6af527841827b0bdaa48f28bbb0f308b939dde98', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57400, hash: '0e03beab697e7b0bae7b9b7f3dfdd8c0254f6f96f66e37cf8f3056822f0a8698', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-S7WEZQ7W.css': {size: 46703, hash: 'vTxEDS4btbQ', text: () => import('./assets-chunks/styles-S7WEZQ7W_css.mjs').then(m => m.default)}
  },
};
