
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-5NI75VSH.js",
      "chunk-2ABHVBZE.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/ar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OF2EMKT5.js",
      "chunk-2ABHVBZE.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/ar/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UTRKXFO7.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/ar/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/ar/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/ar/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/ar/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/ar/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/ar/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/ar/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
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
    'index.csr.html': {size: 11312, hash: '69ea329d6284a30df82ab69a274a68c5c721e1820ce2f74e673296330f1ba029', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1075, hash: 'f4c1862155defd1b37e486db6cf0751aece1b07db79e00e2b9ff4d72e85d1fdc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59699, hash: 'bbaf9cb6d904667afd3d90143952557608eac1ac6e2e4f16e3cabf1714880210', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45435, hash: '663fdcbb23d7ce81c62237cb0b22e515c00fee03108cc3b5d6bde9ded34b7552', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59815, hash: 'b06978410df628b41b1897a683b61d03243809a699fbd8783a386d88db3a6c17', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'index.html': {size: 109570, hash: '7196ebe1dd277437ceb5dd42184fb43b37467a742b9e0e73fd4fd4947d7f99e4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59806, hash: '7a43d467783a358519a7b0c5a3bed65797e93e15dbbed4ce513bf10d225aa903', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54853, hash: 'af5fc7695bb78e4362eb3e57ea049aab2a268a9c4f7466fa948a9096d94f051c', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59599, hash: 'e7e2393d00bab3deda1fcf48fe142b2f5a7d4684fdcfb0c02df414973032e037', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59781, hash: '61dc223fce8b5fe9bb4e309c3d76867c4d11df09fc606f59b20a0d3f1c8fbee3', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59900, hash: 'd5b7040b26a9d370dd45d777839343843c1a8f8e26ea667843532bec01502034', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles-NKMG3EZ4.css': {size: 53561, hash: 'jpJrBL5fkfY', text: () => import('./assets-chunks/styles-NKMG3EZ4_css.mjs').then(m => m.default)}
  },
};
