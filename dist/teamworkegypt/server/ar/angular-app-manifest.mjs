
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-KE3CDJH3.js",
      "chunk-HQJU6TH5.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/ar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TQ6TACDB.js",
      "chunk-HQJU6TH5.js",
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
    'index.csr.html': {size: 11170, hash: 'd3ec1948999f7367987b13c099a96e5e2663a71a7c8dce4853d2339d2ef55090', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: '52b6550e5694ff934f94171cedadadf1f747298d1acf59e45bdd37e306f2513b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57464, hash: '98d6a756a46bd35db447a956e9b45c99b3820f89f4b2a3c42e31498f76962d02', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'index.html': {size: 81910, hash: '1cae9d81a31f32a4d3b3e9fce075253eeca3228c4ab98bf713cbdb1c66c36314', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57564, hash: '857500bddc1e6614e72bd06a5dbddee4b96180226df0f9df6bb665788b7ea9ff', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52301, hash: 'ee321d46b58674c6cc51e70272d8ff049394a3d970efef1f6a365d6c9daf2734', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45219, hash: '4a9d652e23449514cff013085765c749d68117ff5f30ac27dc84b65a320c3777', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57765, hash: '81588e0d2af75c2349de3a8ed284384bc1fa6fb70d9fade82f7d34337a66aa3a', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57680, hash: '4f84d4c703f777d764ff6cf9c8e9ffdabec7932d71224c578cd5ced8c9018b4b', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57656, hash: '689c2e94d9deccac64b60b6e806f56ec932bfb516e4fecefe94ecf6df3c6f0d4', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57647, hash: '3c69898409bee1291d50597341fbebcfe21cbc58e1b736c85968ccfb4615da71', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-BFDER3CE.css': {size: 46538, hash: 'kvkToQ3y654', text: () => import('./assets-chunks/styles-BFDER3CE_css.mjs').then(m => m.default)}
  },
};
