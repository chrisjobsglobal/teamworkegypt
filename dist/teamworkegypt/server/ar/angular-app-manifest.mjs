
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-DNRWGL6K.js",
      "chunk-VWRTEFLR.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/ar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZYUMHCPH.js",
      "chunk-VWRTEFLR.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/ar/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X66TJY7Z.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/ar/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/ar/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/ar/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/ar/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/ar/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/ar/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/ar/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
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
    'index.csr.html': {size: 11171, hash: 'ef84c3bdabe6765fa3a5f4c2919fb694d3043da3a621cccf5dcab9f650304197', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1075, hash: '5a3afbcefb420a4aac59c9fde0cb24aaf20016308fe2a156410b577fd40e6e99', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59553, hash: '7d4b82a140ed2e40f98b71979c95a0ce96e032b930febf97d5ae969167aa492d', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45289, hash: 'a09bbdcb9a8a2e46e2c7b611b1bf327c1e2e1fb394fb8f197d422496b3d322db', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 82035, hash: 'bed9122908e0baa1a6ff85c2118f8d1e3843add809184079418b9461be27205c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59453, hash: '445fb3b4a49b63dc1867ea2d48c8cda0f9a6a8979b6eacf542719614b0d5a8b2', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59669, hash: 'ce02bb51c09754b266c9d75bf779a3a5504ca805eb56c8f03330b248b3b02f8c', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59660, hash: 'b9db180b31a86f41b5134cc425217155038eae3236a4ee2d7fb84c488cf3875c', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59620, hash: '712947a3e3abd5f098d990e8833207343370f51064955bf69c1f3ce63352076d', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54707, hash: 'cfdd70791c6bd3e088cf9ca41ca8cd09e8f49f8190da60af254f126ea865a59f', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59754, hash: 'd5a57f90b7b85749eed459e9e77485b8108791b12719194c80f0186336e25fd7', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles-O2VFNPWD.css': {size: 46781, hash: 'rvk5v6XGqVM', text: () => import('./assets-chunks/styles-O2VFNPWD_css.mjs').then(m => m.default)}
  },
};
