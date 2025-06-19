
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-SMECOG6E.js",
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
    'index.csr.html': {size: 11312, hash: '7bc0bcc5e3d26e436f8f2662c65259130bd115e051fa71defe075acce4de82f2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1075, hash: '3c8196fb1d64f136dbac76c5179379957a5f8479632992349064903b3264fb43', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59599, hash: 'b6e3a53944ea037bb19c425726a2d4ba13bbbb736b61ba612b4d823778ce001d', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59815, hash: '425358e746ed786a1e7255c1f122a106e73037cc8d67b84440c5901d79a61d77', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45435, hash: '0d71155a7d8eb417088ad65b8ce7c14a6f9b277256449373c8f17d722f54f9b2', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59699, hash: '483716d7972667f0f6823e4a4d9a767c1b4b09bb5e7c1e5686afe0423e79d2e3', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59791, hash: '7933c1d7075523981a19df89c9988305b8827ab20e5a4734401cd8e1cdc4ecb7', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54853, hash: '11fc158a98504503e3d7ee67cd296e0553fbc0b43e4af0c4a74b36c6e95cfbec', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59766, hash: 'd31957c3378a90232d63f9f449a73ef188c195c9edf01ed8412ce2331130fd21', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59900, hash: 'e9e2d0f883cb45433cedd31199cbcc462fa3ed8981be9c1a24a961a3dfff2fcf', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'index.html': {size: 109583, hash: '3e8e126ef17a0aae65d39d3188eb42f6ec53373d9eebf812df97edad85390cc2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QMAT7RK4.css': {size: 53885, hash: 'T3EHmMtdfNA', text: () => import('./assets-chunks/styles-QMAT7RK4_css.mjs').then(m => m.default)}
  },
};
