
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-X4FI57NV.js",
      "chunk-5GNXB7AN.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/ar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VSFEOMUE.js",
      "chunk-5GNXB7AN.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/ar/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2T3RAJF3.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/ar/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/ar/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/ar/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/ar/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/ar/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/ar/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/ar/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
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
    'index.csr.html': {size: 11171, hash: '67a6ddac382eeca4efd406fdd30503c5bd0113442f4baa1a695d3b3b6f47f9a6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1075, hash: '0979ca4f20eba4712b64e3207e289daee5c46f8b2273cc359fdf15da4bd48f0b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 81956, hash: '1e527f0728d9c11409c99a1693d1db91d71e5c248808d82759174b04e3b91e57', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57499, hash: '5594584b7ec103a01df6c8e974fe49f9bda32cbcebd24a47d6cb0f7076f1e75b', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45227, hash: '32bc8bf02ef556b23156951891373271d8a996bc75fc2e3cc3aa35c84f26fbd5', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57691, hash: 'edd47ded060297b518e1aa407f3e6d2a4eac9117b96bc32350dce953551d025d', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57599, hash: 'a3eaddb41350323ac53f189499dada0965cf1d95b06844bc011eef8dce968497', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52336, hash: '2da73cf3aa42e182f53111bb9c45688e03efafab790fe6883e6aa122173248fc', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57715, hash: 'ed3f5d2febdc43d32cce5e48bf08e8e83614ace710712abf56e2ed64314bae43', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57800, hash: '14ad591de3c65a2a4f4845e3b811fe655163b2a0a22de7411a3c794cbfc0a5a8', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57666, hash: '4c74a653d4765655cab70547533bbb6da53bee717a54589d547d71f1307bf7d6', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-YURPY4RI.css': {size: 46683, hash: 'FkVl+c19r5E', text: () => import('./assets-chunks/styles-YURPY4RI_css.mjs').then(m => m.default)}
  },
};
