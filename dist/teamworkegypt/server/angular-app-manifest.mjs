
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "en",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-7SWLU4WY.js",
      "chunk-6DMTPTS5.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R7ZI6RQD.js",
      "chunk-6DMTPTS5.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UZACX2DL.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
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
    'index.csr.html': {size: 11309, hash: '69b57e6f56c486bdc1c1bfc71480eb24b7f37518ecfce11ebcad89afd9e1ce5f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: '2c671734db163e1b717e8bfb27eff433130c5e5e9839ae8c027a2bfa58f5181e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 107582, hash: '6112c9bbad4e6c296ffa02ca146d4388b7642da3635e1f32a4cf8739aa128dfa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59438, hash: '13db42c77aca46d25edad9e20a72d94a371f848055927c22e4680c332a21458d', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 43710, hash: '8351802a762654937a80b190837796b278a6bdb30bc1d31a15a0100aac935a92', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59338, hash: '7e2095ebc9329914a46050f3126703f50c939e0177454d2b740804cc3e08c239', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59554, hash: '68481c01b7b46b550efa53227f58e15ba4fdb1fc70f7f02ca878353d35ff91d7', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59530, hash: '5389a7308e041778579b20e8e9f56aa00227256ea79ef350e6f8f4336cdbdcf7', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59505, hash: '9b73e3f564d41c6341f62ee57dae5872bcfb58cb81a32f21f7e9d15ebfe05a93', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59639, hash: '4e90d3448e2bf74479077a91de1ad44cb803cdb5b372f4625f6a3fa78d1fbfe4', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54208, hash: '1f73fd487c6a97331ddb19886954625e22d8baea6f84909608f0629d19eece33', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'styles-GH3URCE5.css': {size: 53835, hash: 'ITSNXeOZ5k8', text: () => import('./assets-chunks/styles-GH3URCE5_css.mjs').then(m => m.default)}
  },
};
