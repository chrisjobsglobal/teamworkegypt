
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "en",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJ4JEELI.js",
      "chunk-W7UQDVEH.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FT4BKOZK.js",
      "chunk-W7UQDVEH.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2T3RAJF3.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
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
    'index.csr.html': {size: 11168, hash: 'a673b9cc423ff95b1c9f43a04d5840b3cedfabb445dd6c5372c0e6b3562b486f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: '1bd6f363476c9f3411a4d389464ed7af720d09e78c1af6de4ef5dddb3eb866f1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44975, hash: '7b70e4f6a1561d333b398a6d40ede3d169ef49eaa1c2b7c05f898a6798aee0b0', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57492, hash: '20d95599bc3e41f765563c2164960817764e1507633de9a57adeeb291d0ba3a3', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57468, hash: 'd0769268ebd2c8a94cdb06da2deb218d2738597915e0b07e5a6bc4d4f8efaaaf', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57360, hash: 'd10698563ebeff2e4d8d88a50584d8b44746df369931c2c401f27124c26a7e2d', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'index.html': {size: 80101, hash: '515881777831c4173d26cad7984d14355463543be707007d431c5e3d8b988a2e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57260, hash: 'c64ebe7dd2d65c513c0eaf0ea2ccd0736c080174fe0c06a9125abecc9e55309b', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57427, hash: '51ccc7ef81dda680f8583ffba8981c8d85a7224c4368fdc543f178ea62f2b404', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52026, hash: 'b485f3a634273b76e4defa9ea20df06463ff6b4b919ca6ea1f92011e0379d6a2', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57561, hash: 'b12b8d69fd4dde711d26c36ca8ef385406a60e35ac74a7a25835f4108172854c', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles-YURPY4RI.css': {size: 46683, hash: 'FkVl+c19r5E', text: () => import('./assets-chunks/styles-YURPY4RI_css.mjs').then(m => m.default)}
  },
};
