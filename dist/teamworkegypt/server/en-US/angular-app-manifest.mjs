
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en-US/',
  locale: "en-US",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-SGODRIDV.js",
      "chunk-IHWA26I7.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/en-US"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OPGHZ44X.js",
      "chunk-IHWA26I7.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/en-US/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2YEVGFXN.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/en-US/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/en-US/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/en-US/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/en-US/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/en-US/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/en-US/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
    ],
    "route": "/en-US/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LR2LBWI4.js",
      "chunk-C2AAYNWH.js",
      "chunk-7QRJLIKY.js"
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
    'index.csr.html': {size: 11079, hash: 'a9dfa03723c660c535c3f35e8f9b4b0ab04c4e56aa3d32ccde8088b642d0c7be', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1080, hash: '490905623d3dfb0f25602ae78fec4effb1b9b083628958ba01caa4cc1060d860', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44473, hash: 'a3e0a0f7494311211263131c175109d5ffa200c90a1accf555c80253fb20ffbb', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57461, hash: '3a072b8a6d5f2fa173ec974fd9b604877ea0384a0fb9d9da6df9e359d4bc3033', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'index.html': {size: 79460, hash: '1b3196e72b5192fa32b9c72556008110a772039eb511278fbec33eed90e29cca', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57361, hash: 'd8cf76809abb65733370daab1bfd38300eeece2c6a172367d0db1567b620aae5', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57593, hash: '1db873c0b7fe5516c9c770f86aaea5e4e7be25e5cdf4711a94461198c7e7da06', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57553, hash: '09a07ce6bca7a5c5f0bd739b686e7dcc11a0173f86e851e458496b283dd45e1f', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52133, hash: 'cb6be7ee591cbac4669f5ece909047d257207223a04bd8074ca6536cb152e8a7', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57662, hash: 'daf3814c1c58510ef9a490ff031eb701feba9bc38e79e4a2d74525e7a69376b0', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57544, hash: '1eca16931e79cb39dc87a3124630b9f8b6b46d603e2edf303761f0d253734d1e', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-OVVLUA7M.css': {size: 45630, hash: 'DPqlgCYdIsY', text: () => import('./assets-chunks/styles-OVVLUA7M_css.mjs').then(m => m.default)}
  },
};
