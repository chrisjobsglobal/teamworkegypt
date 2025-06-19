
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en-US/',
  locale: "en-US",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-MFNFKDRE.js",
      "chunk-VYBL7GS6.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/en-US"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WQP62TYD.js",
      "chunk-VYBL7GS6.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/en-US/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3LL34A6.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/en-US/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/en-US/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/en-US/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/en-US/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/en-US/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/en-US/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/en-US/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
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
    'index.csr.html': {size: 11177, hash: '7bdd59d81a57968fc012176b19cb2a9b40e42eaabf33008285be12e6b406b6a0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1081, hash: '14ed1ca8acdfa99778d7d031a9187a769231237f9a2751c5806278e6b33ef656', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59335, hash: 'a212e8eb824604e101c85f4f03ca2b2cba8fe9ecd8ce40647c6a33ddacfc67aa', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45062, hash: '19804e35677b2a9d31ec548604267a8c4ab5d1dd6ee6187ec276ac9ffe0f2613', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 80218, hash: '434751dae777cc5f876d9aa0ffd66aa5b472817e540846bc00cafc1fb008acfb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59442, hash: 'decf3e6f786582fc7bba4035aa0365a3c6d4591c84db53445dcdf787fa26c5af', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59235, hash: '5310982dc10f8fe05e860a0b93d36fd9a74fd6e2d1711d8a4d41914e13bd9103', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59451, hash: 'c3d9a9649890a19f89af1a3cd23c31bbc795f287c011296cc17b5805295ea00a', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59551, hash: '550378fd9daddc21a2f2e0652e1e74a6e9427d1530bd82f4c0b8cd1baffb36af', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59402, hash: '91c757c98bc77b4d94b43180a3eed50aef24b0f30dd99d3e36d84ad8fa2edbd1', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54074, hash: '0f317716f9f0c29fc69fa0217e74ebe3d41550ad147f9a0956207999c6a364b7', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'styles-O2VFNPWD.css': {size: 46781, hash: 'rvk5v6XGqVM', text: () => import('./assets-chunks/styles-O2VFNPWD_css.mjs').then(m => m.default)}
  },
};
