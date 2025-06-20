
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en-US/',
  locale: "en-US",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-WNXTWUIL.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/en-US"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYJXUAAC.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/en-US/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VTYBHCOX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/en-US/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/en-US/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/en-US/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/en-US/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/en-US/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/en-US/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/en-US/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
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
    'index.csr.html': {size: 11318, hash: 'd5cf07a0978937cd9ab55f3fbab636545707286c3e9ca574d8be4656da144d7f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1081, hash: '1d9a82d417c4eb1399b178dfe8ac6a0c1c73a007b1db5a37ca1fa077074ddb77', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 109389, hash: 'd2d1c88ad195cd3e102ed5930ab38bd7eb142a26ecc74c48167cdeba5bbcc061', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59481, hash: '6e32802a66b14a1d61af38f11a9a79ae24c2bd8b113046a101cc5cc05ebbd162', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59597, hash: '28c74db498f49da2ebffb1f1dc2ac3bed8f6428d32b537d38ee83f2e168b2259', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59573, hash: '6b9e81ec0e0a252f2a15aabc51f28ca0d38a06c1ebce96bcfb480c31648866fa', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59381, hash: '86f18ea999551582f7249db7fd567876b8476cda20402b100f839cb2f392f51e', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 43876, hash: '387340f711d2089c5dc43a793b196d2869e6711527c831e2150f9019d46b85db', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59682, hash: '83e5061b47e440a1becfe314a08eba909f106291c7e4764777b28dd5ac7c558c', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59548, hash: '4e27701a49b236b62add452c902bb91b5a32ec9596ec3942ba52393da0817b9e', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54257, hash: '337fe147b52226291402c508dab4d602d12ed153e5ed39a866441bc127c936ea', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'styles-GH3URCE5.css': {size: 53835, hash: 'ITSNXeOZ5k8', text: () => import('./assets-chunks/styles-GH3URCE5_css.mjs').then(m => m.default)}
  },
};
