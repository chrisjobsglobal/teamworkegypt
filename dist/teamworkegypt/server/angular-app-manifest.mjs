
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "en",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-SGODRIDV.js",
      "chunk-IHWA26I7.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OPGHZ44X.js",
      "chunk-IHWA26I7.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2YEVGFXN.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
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
    'index.csr.html': {size: 11070, hash: '6240a588359e20b1b4c465a4459dfc2fb8ac717cab3337a1d703f36ad7a2fc0b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1071, hash: '3b901e4225f74f10317268e2e7c1db52c50c72e23c80649b5b3b061c552c3267', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 79421, hash: '2384d096170c1177c18703cb32ef456d89f804161f148f11e07defe97b1fea0b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57304, hash: 'eeddf02634f8e908af4907d3ab0040946499701be5c5254d741a1a451baf3e8a', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44434, hash: 'e0ba0405ce91aadf8443b246615912de8c8a2bb42cc23c1f156928d2f65bd02d', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57404, hash: 'b820235360aa08106c2670acf1069e350ddd24f90ffae208f6cac3896b31fdb8', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57520, hash: '68f839b28468101c7bd51ac4f7295360230960d67d3682d705cdbcae4a6bb401', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57496, hash: '3ce091a2cf85296aa3fe464fe3e5e6afa84c00352b464f4f461b5122c894b6c1', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57605, hash: 'dda7e82a8adb0d6d137282ac72b33cbc2795d4c1145357752c93816658927859', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52070, hash: '0864d158e632bd64012a4384bcaffd73684a75809cb4001383bd2f5d1254b211', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57471, hash: '17b14e944dfb7b3a6f617783612b0df7b4e20342be682b1effae32033bae64ac', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-OVVLUA7M.css': {size: 45630, hash: 'DPqlgCYdIsY', text: () => import('./assets-chunks/styles-OVVLUA7M_css.mjs').then(m => m.default)}
  },
};
