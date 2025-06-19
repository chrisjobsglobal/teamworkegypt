
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en-US/',
  locale: "en-US",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-5NI75VSH.js",
      "chunk-2ABHVBZE.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/en-US"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OF2EMKT5.js",
      "chunk-2ABHVBZE.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/en-US/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UTRKXFO7.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/en-US/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/en-US/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/en-US/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/en-US/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/en-US/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/en-US/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/en-US/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
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
    'index.csr.html': {size: 11318, hash: '9100e8a897b0c0ceaa14d3d1c928dc0b03dcd71c50636c3c177c74061c758093', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1081, hash: '7b7fa199480e719df940035a00e5a840c01d46571bf185a85da3f64c8a8769aa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59481, hash: 'ecebd45aec11005e8c79a715fc6307098767d5ef5673d359aba1cae881b202fb', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45208, hash: 'd0a51daa7b38d7e9be522a9c12cb4de28a4e000013a754ce5c28b53d27505dfc', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107594, hash: '5842083b73b7f59da98074a5ebee404da506fb0e2f39a21af388a1678c5a2f65', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59381, hash: '2ecdf2d95e9eab30dec52c5a9bc510fa3d72b14d7e9406a414a9365c07d906d2', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59597, hash: 'fed71d251c06c42ed733568263dd95528fb07de81082189a7df3e3e84afe32f8', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59548, hash: '921292e381d39a32bc93e3eab72e5f9d8d69b8f80613f6536a7463681d2878ed', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54220, hash: '694cdc6e6c9458829bca1095fc6a2bdd35c53902c9c6a3006747e35f2fe17a69', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59588, hash: 'f8f49584ab64e423ef2a7fa1a40b7d6aedee1abf4a6c645e0595efc75e04eebd', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59682, hash: 'f21c85b35b212c735239dd307603fb5edab8df70fe9d5af7dcb8583d2bebf3e5', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles-NKMG3EZ4.css': {size: 53561, hash: 'jpJrBL5fkfY', text: () => import('./assets-chunks/styles-NKMG3EZ4_css.mjs').then(m => m.default)}
  },
};
