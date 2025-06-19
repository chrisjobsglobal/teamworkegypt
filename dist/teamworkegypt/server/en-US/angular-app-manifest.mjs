
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en-US/',
  locale: "en-US",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJ4JEELI.js",
      "chunk-W7UQDVEH.js",
      "chunk-QIERMDQT.js"
    ],
    "route": "/en-US"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FT4BKOZK.js",
      "chunk-W7UQDVEH.js",
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
    'index.csr.html': {size: 11177, hash: '65165b2935e996f25c42baa907e6a908e7144918ae326029ca93040704414f8b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1081, hash: '10745a62e4a2467278b6f8749f9a5d88daad458056f668e7ad51f0e0094e13ab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 80126, hash: '9fddcca225789f9724c35dd959c9b3617c4cea4746ad50f3ef65f1cd074040ac', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52089, hash: '9f30d7941bc3b756c179e43738e8b8a84737ca16b07edbe51c94c993982666b2', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45000, hash: 'a85a44d6a8e8bcdfbcb4b532d7dfdc9724c75cf65507ea979f45b48e99ce7142', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57509, hash: 'ba84d012cdb88225d664fa3159d012342b86349a9a39adb9925b41aae280740c', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57618, hash: 'df89326e6ec1691e3f5d9d20c82899c6a9bec618a9d285c9a558a576f9735c8f', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57317, hash: 'bff2c35b36ec7a151ea1dc6743f75103b875cf0ac06940caa7b6262359a12187', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57549, hash: '3e1ab7354a8c32a88fc74e4d141f8eeba55f5931080ce83a63466c8eb09d8449', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57484, hash: '61311ef648aa7584704b847020a6874cfb32e0b67dba2d7ca02893423ba11a2b', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57417, hash: '5775f93963d2bcb85da146d44586e28dc395676c940a65e8606159a9b82cdb0f', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'styles-YURPY4RI.css': {size: 46683, hash: 'FkVl+c19r5E', text: () => import('./assets-chunks/styles-YURPY4RI_css.mjs').then(m => m.default)}
  },
};
