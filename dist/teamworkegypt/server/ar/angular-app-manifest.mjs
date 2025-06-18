
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-RWTMUEN6.js",
      "chunk-IUI35GFA.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/ar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-36CUITQZ.js",
      "chunk-IUI35GFA.js",
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
    'index.csr.html': {size: 11170, hash: 'bc6b734de97a238952881545558a92828c0a467b90cffbc549b5c655afa4ad88', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: '6d4c4878b161480b1d44e5ca99bba72a597dbb1c38bfcfc6f64b46b624eef691', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45171, hash: 'cd87619163c608e2374f85855dd46996162f8a32b092d2cafc4884c8586c91ed', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57696, hash: '8edf06296370ba9870166df77e6b516994982635b93f072628b0edbdec5373e9', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'index.html': {size: 81900, hash: '3e5672d3ac150cf4736aaec8ee5dafe3e9a1603acb265c3ac71840088b607af2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57464, hash: '72109d2d05901d558cb6d8b7f0885331e91384eae7a0c92c03c6fd1a9d6c7b7f', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57672, hash: '1cc7cf6cd3b5397312da120532af055cbd01a1993e8109c733c282e2644e97f4', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57564, hash: 'd48677bb9419c4b1313dbf67eba084a38939ef55398be1f740803d451585dbb8', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57647, hash: '045bb80aed5aee0d59685b91e4173a93bad0314d0df7e469ad1fc25c276b95b3', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52301, hash: '5a126a3bf4afed6e4082d78a5490a3d7ed185ee807d6cfd818cecf4fe9825961', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57765, hash: '1d0f6e5547f6bbdbc0133945a63aedd70258b0ca17d030cbb235b8329c378bbb', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles-BFDER3CE.css': {size: 46538, hash: 'kvkToQ3y654', text: () => import('./assets-chunks/styles-BFDER3CE_css.mjs').then(m => m.default)}
  },
};
