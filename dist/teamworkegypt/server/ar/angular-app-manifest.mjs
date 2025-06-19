
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-MFNFKDRE.js",
      "chunk-VYBL7GS6.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/ar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WQP62TYD.js",
      "chunk-VYBL7GS6.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/ar/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3LL34A6.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/ar/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/ar/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/ar/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/ar/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/ar/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/ar/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/ar/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
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
    'index.csr.html': {size: 11171, hash: 'b39a13782a62d83f63a5226c2eff5c79077a7b911edab9deb24d909b28e42d57', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1075, hash: '3ac705b63661ba5ffbad3068fa41523baeece861316773f077c802dcf13c7514', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59453, hash: '2be0aa8b74b4caac222c5830eb18bba4eed785f95babda76de83155424e3c6c6', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'index.html': {size: 82035, hash: '2b176ab329652116a7f2ca72f451c62007a7050c9e21e935c0183686d2419e1d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45289, hash: 'f848312c3556a1087a965497b527d664ace0bac1b32b06355d55ddb87f4ebf64', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59669, hash: '1046fa774ce37a1328b96b12f67d77853eeee5a7901be74626d9d39a865e473a', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59553, hash: 'c878d00766b37e9009fb77caf5def581ed9859fcae359d22c297461bb1b8afe7', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59754, hash: '3b9b909a9cb1e13b7bcb74ecb2e73ba365ae595423bc651cd782bc99d79c7580', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54699, hash: 'f1d6a024d5dc0cbabcc45382b995535c3e1839222204f8679e3bb5088d4dcf7d', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59645, hash: 'e1a6a72da981226a2a39b4e1c102b08d51d80654ae72142655f53ee9080ecf7e', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59620, hash: 'ea1b63705d603826234b8f15a56609886a19bd6f6865662e10024008ce4d2a57', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-O2VFNPWD.css': {size: 46781, hash: 'rvk5v6XGqVM', text: () => import('./assets-chunks/styles-O2VFNPWD_css.mjs').then(m => m.default)}
  },
};
