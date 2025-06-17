
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-CTLQ5CHN.js",
      "chunk-6HVOJW4O.js",
      "chunk-3FQUYWBK.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-G63F7D4V.js",
      "chunk-6HVOJW4O.js",
      "chunk-3FQUYWBK.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C7UVRVS7.js",
      "chunk-3FQUYWBK.js"
    ],
    "route": "/career-tips"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10123, hash: '1c869db01594ef3ffd0b3d3b7784e7a7f4922da0e291711efa48a1841e8c220e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1002, hash: 'ddc6d7d5d30958227ac006ebfd565fd63fd4d54fb822009c89aabf37e50df854', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 62807, hash: 'd308a9b4fce66724111625c61cb0c0adc3ca7b1264947f53041f8e09c92d1b39', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 51156, hash: '7c6a6b6f66240b425b81d34b674ec766ddb2b3e037bffd7553508133f59b2f73', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 41534, hash: 'c2f5bb198f95efa456ce757c58b61df268975aa08ad9315e3c67f39ddbec08f6', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-MATHYN7H.css': {size: 37516, hash: 'oNhXRaU6G2o', text: () => import('./assets-chunks/styles-MATHYN7H_css.mjs').then(m => m.default)}
  },
};
