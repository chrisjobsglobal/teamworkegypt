
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "en",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-I4CS6UZT.js",
      "chunk-C7NZUQGM.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P4XG7O4L.js",
      "chunk-C7NZUQGM.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KDEBYRBV.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
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
    'index.csr.html': {size: 11070, hash: 'f05cb3d49dc08f40d0e95dbd221e5b73c7f329a1eef92492da7ccfa119ed95bb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1071, hash: 'd7b07a5f97f6abf5861c767a304c890ded42cd5a6c9f1ae37f7522bf39d950bf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57382, hash: '69cfa2e039af6130f028b5534fa0899b3f204954ce21aafe53c061f539e2d298', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'index.html': {size: 79399, hash: 'd09cdcff398ec6a626138ed837362c14b20212f5c4c9573956ae586308ad8615', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44412, hash: '26637a0079b0bcb9a66cd434fbb4fb0a89f75b64c15295735537eb4f683dab88', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57282, hash: '501aa907676b583f59c07460de066321b45b591f9c831e2e2685597aea1606c2', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57498, hash: 'be7a092429a31ac5dcd989a170078afdcec0f08c2ecfcdf7a310b751f680a96b', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57474, hash: 'a10a23d5c6f767597f6bdc1a8205953855ce6066fdc127746b8eb725fb1b8b46', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57449, hash: '4582d8e565b74f20baca56f7e9687dadf8eece49719d140ea972cc78cfef8bd5', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52048, hash: '8ed7e3106f5df9fe6fb81dababa3fae86997378d90eaaeb675d8ee70da860e9a', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57583, hash: '807c1f12e4c613aa0893b735c550143648055ce042720c47d836833c454aec05', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles-OVVLUA7M.css': {size: 45630, hash: 'DPqlgCYdIsY', text: () => import('./assets-chunks/styles-OVVLUA7M_css.mjs').then(m => m.default)}
  },
};
