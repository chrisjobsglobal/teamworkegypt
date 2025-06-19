
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en-US/',
  locale: "en-US",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-X4FI57NV.js",
      "chunk-5GNXB7AN.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/en-US"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VSFEOMUE.js",
      "chunk-5GNXB7AN.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/en-US/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2T3RAJF3.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/en-US/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/en-US/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/en-US/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/en-US/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/en-US/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/en-US/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/en-US/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-PQBN3IBM.js",
      "chunk-7WYR76XM.js",
      "chunk-QIERMDQT.js"
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
    'index.csr.html': {size: 11177, hash: '30a0791dddbfbe28c99b5e043cc7862726e4a93281619e28ac6e9b6ebd576eda', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1081, hash: '88270313fad6244fdd51b357f35bfc99d3e8c29520cb34b361dcf33285c366fe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57317, hash: '234669bcf873ff35875a92ab3696b22bf751907d315bbbf3d14ca58651bb794f', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45000, hash: '0559c15a4066fee3c307b1aedc02f70a0edb0ba8f6b71f426d2346d9f2e601c4', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 80126, hash: 'c4c651d2a9f16cc81b9c732e3ef09450d9c1b2bdea501fda29ee1003e22795dc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57533, hash: 'b373c097d3d510e043877af124f56713e7189226ffe443594061c1e2dd51dc6f', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57417, hash: '4a55ea7d9e3d7be811b5b1ce37869cad8d59e1d7bbc4255a6b682d5f9bd68370', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52089, hash: '7b5b8212351a0bbaeda5335170dae5a4246d562e70cc4f854e233030c0cbc862', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57618, hash: 'f39d989c6517c290f53393a8e4e3aa428e0819a5b14c20976e27c4fa44534853', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57525, hash: 'c43db87e803235519b22975c01ca4ab3ed596d7be84a3f028308913a9affb929', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57484, hash: '2c1192c0cb531b00f88a9fed5ec2456e7a36e94b780cbc73f3b784d011d6d37a', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-YURPY4RI.css': {size: 46683, hash: 'FkVl+c19r5E', text: () => import('./assets-chunks/styles-YURPY4RI_css.mjs').then(m => m.default)}
  },
};
