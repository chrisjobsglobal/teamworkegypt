
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-SGODRIDV.js",
      "chunk-IHWA26I7.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/ar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OPGHZ44X.js",
      "chunk-IHWA26I7.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/ar/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2YEVGFXN.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/ar/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/ar/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/ar/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/ar/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/ar/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/ar/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/ar/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
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
    'index.csr.html': {size: 11073, hash: 'b19079569c6b21563177612fc76c99158f21f8d69a2ff3f0efa4edac6b58775c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: '758b6ee9e53356dabdb8f4dd9b296e4306b67b9e64cb88853642c135612887a2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57535, hash: 'dd7561bdebfaff75ae893d45f29d60daf39a054ff6b6d8aa51e8dce3e1d5f3f3', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44707, hash: '311b58296d6005bbe75cf513480e0682ebdd7b8a25404e8f866a5eddd772e087', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57635, hash: 'b5ccd1a6d8ce90e376075978a7b03f73ce1fc4c839343541fbb1f4374ada1284', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'index.html': {size: 80205, hash: '38809240c913f2134331c5deb31d3632f294526add25fb9535a1193fe97dac0f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57751, hash: 'f2a29b5ca71245c16f1201a917dc0e2eb96f4d447c020408db9722922784d603', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57743, hash: '41b715228bb76305fca76efd99df32ea946f27f696d23eff6f5b2c12a82ac8ad', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57702, hash: '35b4bffbe2643a2b7747a21e505584d4572bb561af2d22419598ee128c42e75b', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52372, hash: 'dc29ce42fa4f842ee1661ae4b996ae49d153cbb203231d86b82f86562ef9e8f9', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57836, hash: '1972ceca9a23d23cbe0109fc93d712ef988ee8f9bbf0ca70461af2c9aefb1d1a', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles-OVVLUA7M.css': {size: 45630, hash: 'DPqlgCYdIsY', text: () => import('./assets-chunks/styles-OVVLUA7M_css.mjs').then(m => m.default)}
  },
};
