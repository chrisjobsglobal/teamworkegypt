
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en-US/',
  locale: "en-US",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-I4CS6UZT.js",
      "chunk-C7NZUQGM.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/en-US"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P4XG7O4L.js",
      "chunk-C7NZUQGM.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/en-US/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KDEBYRBV.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/en-US/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/en-US/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/en-US/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/en-US/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/en-US/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/en-US/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/en-US/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
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
    'index.csr.html': {size: 11079, hash: '2bd62473e213bf71c0d36f7a2178ae580091973c8a1ed597852f008d21da1c43', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1080, hash: '624ced794eb13e4d8ecb7be6d74e9920582ccc6a33fa7c60e2f77bdfa39ea26e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57439, hash: '452f229f5c4b545287303efbef52ecaa8dd9f757ba3c24c80e3d31e2d47a3a9a', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44451, hash: 'b482b85ffe310638d4cf915e8f6c925905735171d14ac990a96a5ca552e139a5', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 79438, hash: 'e2d4fb7da028001ec40b7004dc1ba0317aa14ffab41dbd0a4edd8b448b58988d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57339, hash: '8272255c355641145f7b7b7c980757cfbaa8bb2afbe22ac7a56268d25968cb76', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57555, hash: 'a81dec70839bd8f05646ff194fe3dc122c445de27d75e8e6a521dc3359638c6d', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52111, hash: 'fdfbba761890f55217a3e6e3bf6dd2547bfa35730145a190b8ec76775f311705', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57547, hash: '5661812ec894b34cea84d5d79c78ad47f9a51aca7ba009ea034f809f081381a4', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57640, hash: '69526e054e806242c3d57e568b9e288ba66ff76a4a73be3ec8bfc4249151d431', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57506, hash: '2641a86fb35b7d77c954adeb6526486e5eef60f1b0ebcd1146b388292c3011dc', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-OVVLUA7M.css': {size: 45630, hash: 'DPqlgCYdIsY', text: () => import('./assets-chunks/styles-OVVLUA7M_css.mjs').then(m => m.default)}
  },
};
