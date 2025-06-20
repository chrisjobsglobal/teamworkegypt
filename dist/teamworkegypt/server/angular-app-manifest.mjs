
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "en",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-WNXTWUIL.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYJXUAAC.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VTYBHCOX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
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
    'index.csr.html': {size: 11309, hash: 'a09ec7ff5ac54a2a50e4daa7f020b22a00cf7da2d646450808894e0c1a185d0e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: '8c01fd5e23c18ae5146868d331fdd48454384d24f808161ed39e048933640d56', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 43872, hash: 'f0c93c621a0a25f87e3d980dfc7faf39d885ab25ba79e9875a2f5cd486720dbd', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59338, hash: '9d2c8b90344f537c0329665be35deb53d4cae3cf766b5d25c1c0aa7c61226c2f', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59438, hash: '10192d99a1b7cc05603d80b286404a55313fb30b5e36b5e71fbf4ad90f049e04', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59530, hash: 'b98f7854e2d75acb663007a208ad299345debb6bd0b5b7ccbd76e563eb4f7453', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'index.html': {size: 109364, hash: 'a722992cbb786d362690b577238602152f46cc43be77836feff8c7bfd0381c82', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59554, hash: 'f1df53298d4f84f893317e134393dd628ed136cc41091c435df10ea9f34f94e2', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54208, hash: '45db2e5af4830e76e5bd49785131c4782852e4af3db9318af6a0e59fa23eaeeb', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59639, hash: '9573e072caba61b91ca02a8994e77416f8b68f98319db6e4fe2726bdc0750a34', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59505, hash: '3d6e093902e81fa0c84857563ebbaefad9df06dc17706b0e914e41044d3fd620', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-GH3URCE5.css': {size: 53835, hash: 'ITSNXeOZ5k8', text: () => import('./assets-chunks/styles-GH3URCE5_css.mjs').then(m => m.default)}
  },
};
