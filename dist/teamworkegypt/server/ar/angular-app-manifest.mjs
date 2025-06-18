
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-6W7WRMMP.js",
      "chunk-E3EVOTLW.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/ar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4YNAU5AW.js",
      "chunk-E3EVOTLW.js",
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
    'index.csr.html': {size: 11170, hash: 'a1aa39665e69bc9c5d2267cfa0152c0828a4dbbdbff976d67f057de2a9e4ff9a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: '1825ddd8f6f1b408c22f55e0f705e5e1fc50ee5a1f897482519d20a77f7bfe41', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45178, hash: '8e78a6cd090e3603ef3d5b0ae301972689eefed93e56aaab7f3c2cfbcb8f6f2f', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 81907, hash: '130a7a390330f192ee131fd93da0e31405e0f437f035379b217df379f65a2efb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57696, hash: 'd057b3cf41d12119ca569fc9cc97ad813d1de0806aadd910cb35b9e690de4e4c', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57656, hash: '99e5977f7a0a5efe346f9c6f77552ff85c2f343f113053ff25281ac643d1a3f9', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57464, hash: 'fe8e462b5eabf6ca5c3cdb7cd796b9bf537502312b1310984a44e60e46fe63e8', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57765, hash: 'bfe7b1a0a01ac8340c951f3dde71b4e743c290927f075dec6c1d6b484cdb34c6', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52301, hash: '45b52e305ca0c10692722592099b9c3ee2f95c6163067609635449ed3751f3d0', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57564, hash: '4697bbadfb40937c7dcd39db921304e783eb13ad69c98bee2ae4dd092c214eda', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57631, hash: '7efb04c0348b0507ea50fb9600978823537a64edfeb304b90765cbbb1ea5c8eb', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-BFDER3CE.css': {size: 46538, hash: 'kvkToQ3y654', text: () => import('./assets-chunks/styles-BFDER3CE_css.mjs').then(m => m.default)}
  },
};
