
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "en",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-X4FI57NV.js",
      "chunk-5GNXB7AN.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VSFEOMUE.js",
      "chunk-5GNXB7AN.js",
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
    'index.csr.html': {size: 11168, hash: '8a56ccd345a834953503429e9062a331976a1defb429ae5f0e8bb4827f954926', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: 'ce84610a6190eb2c3d7ad4983f805938c9293eeaea9d9993c91e805edf1736fc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57360, hash: 'fd45218f0a08ffa78e3e0dff3c135e5fed43b8d9ff7c1036df2e2e460b824637', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'index.html': {size: 80101, hash: '7448c8886a1b15499502d453841d95b8b9cad4385609264b03e6495cab747196', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57260, hash: 'e76082829a2557e55a3965043c9a02e023ae03972652982e48cd6911840a96dc', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57476, hash: '98ac0eadbddc4d0049c3056bf914b49d88612c6df23f555e419c5473f8ca8eba', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57561, hash: '28657bd1f4ac8b7b81265b5c69e982e5b089e438b412bb68e30f6b6a84db5436', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57452, hash: '11bfdeb0a9498be3db8007ad1631e02e1e53d5025bb5927b6f163f57c3ee19e6', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52026, hash: '10771b37296e9f894b8a953bab7b5273ac42563077ded9f8349ad8c1c542efe9', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44975, hash: '4bd241eef9e698663b9b96200b44a36c414678d440fe69565c216aaebec02c2c', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57427, hash: '02ce8cc62d519a5908a75e3ba08feee214e272d934b7b4cec1ada4d8cab2aebd', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-YURPY4RI.css': {size: 46683, hash: 'FkVl+c19r5E', text: () => import('./assets-chunks/styles-YURPY4RI_css.mjs').then(m => m.default)}
  },
};
