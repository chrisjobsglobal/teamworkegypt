
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en-US/',
  locale: "en-US",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-WNWS5P5A.js",
      "chunk-O2XZ7B3Y.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3CZITQ4Q.js",
      "chunk-O2XZ7B3Y.js",
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
    'index.csr.html': {size: 11176, hash: '08eea068a7bcb8d093ddca5a84a8a0e4cd8dd554526a4d705742a3ea95f4a306', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1080, hash: '9c401fb1c35f6e8e0761f245ffbbf1cf483edb96f06793b815510b4b69db47ef', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44986, hash: '3f376f31df42e0549e6c432e191aa7e5ec496df5e52282b075ee589719564a0e', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 79978, hash: '9aefd116f684ec7c5f9167e25c50b1cab058da144dc7396c762df00c97c46a54', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57290, hash: '2de6cd84a7edb4d8949f9f924113d4d1f57a1b1452801db8b4a8d119f423f82f', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57390, hash: '91b08bf49b1a5acb1325a9a3d67f1677d8bcdaa7a4c148c03771165308c8ef98', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57522, hash: '72bec4b452e1455f05d108ec1c5fc0eb43e95a8800e940432ede4e90f6a09238', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57591, hash: '2d8de4b26d95623c54a5eefcebfa9afb6088b52ebe5bdf168d472055dafe99a8', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52062, hash: 'e0982b47ede6be652e99df3d6ddcf703423bfde190b7f876265b60994a43fc48', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57473, hash: '9bf4bf49b4d0b9acb4d595eae8fd9e309f10f20352277d5e2887ac71dfa512ea', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57482, hash: '934f15fe276294accc53b97bd6ba3c16e336a8de02d19c892fd41351d72ee2d7', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'styles-S7WEZQ7W.css': {size: 46703, hash: 'vTxEDS4btbQ', text: () => import('./assets-chunks/styles-S7WEZQ7W_css.mjs').then(m => m.default)}
  },
};
