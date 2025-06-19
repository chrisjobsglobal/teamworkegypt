
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "en",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-5NI75VSH.js",
      "chunk-2ABHVBZE.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OF2EMKT5.js",
      "chunk-2ABHVBZE.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UTRKXFO7.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
    ],
    "route": "/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4WCXDMMR.js",
      "chunk-4DXKW2YP.js",
      "chunk-73J6OSMF.js"
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
    'index.csr.html': {size: 11309, hash: '9d5bcc596387762b280b5d36e2677ccaf1a2799840d5d5330e3a52624808e5e2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: 'c620f16202ec6101c5f329f805958874e3e8a0e20bb8d0cffeba4b36975935b8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 107567, hash: '0187e3c230ac6efe6f035a5df5aa8c2699c1be902e5f00ea4cca2272f8adf591', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45183, hash: 'c981218f95f044f92ceb10dbda34da9994f02de04435bf256b777c3156112272', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59438, hash: 'b07f2f17615a9d4874d516d7d1d1265650c9ef918302c745337131edad94064b', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59338, hash: 'd8b448d5061b6667bb9ac1c82e86b970da613fea7ef2d623717a4a5e6ea20d1e', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59554, hash: '0652ec98a7508241d53128b34fd78e9ea0263c3e44499229e52e10280af50b80', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59545, hash: '9f8109ec4ce4f47e877f7cb0181677121138fcc56149bacd442125bf8fc8c682', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54171, hash: 'e748d4ddd04cc42188118986695b766dd08ff1ca483f75fc77baed77903a48aa', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59505, hash: '2cda8df429d72d9515f85b69b7f839e7e5fec255471fdbe88e5c57e89d4004e7', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59639, hash: '95266c35bb0a0237337d74647ccdd67018550d900b89da2b86865d9bf92933d3', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles-NKMG3EZ4.css': {size: 53561, hash: 'jpJrBL5fkfY', text: () => import('./assets-chunks/styles-NKMG3EZ4_css.mjs').then(m => m.default)}
  },
};
