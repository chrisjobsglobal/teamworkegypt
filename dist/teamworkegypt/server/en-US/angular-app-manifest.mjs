
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en-US/',
  locale: "en-US",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-SMECOG6E.js",
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
    'index.csr.html': {size: 11318, hash: 'abcf49eedcf9b865f09d121f861acc35172c68d1ddab0e3ee598667a64da12b6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1081, hash: '68d0ae5d84614b3aaa54ff4acff9d758d8fcf35df650956d63a2f819bd2cbbdb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 107607, hash: '49154bb8be1b7c5faf82171f5a175c053cfdce738bbd4696d25914bea33b7469', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59481, hash: '768d43382e8776cad41b66d713a1db24d0dfd5b39652f587e351fbae14b4544e', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45208, hash: '1a7a9c55b4fb517e60560713b039e14ed1bd77afb57501c2509c691bf1c0960e', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59381, hash: 'c05ca8e57cde1c31ad63ff6939cb2856e0d481b4e1938c6b9936f45db0a318e0', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59573, hash: 'd92cfd263d9c131772235cf35ab3f1fb1232c894851c7c92002fbebece8b751d', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59548, hash: 'a999f389f094c9ec5bec694a657edefa2d291655437cc9069952743d198d81b8', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59597, hash: '84d7a223a1fd287fa03373274d9fa0348b062a72d7c8fdc25b34004fe789950f', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54220, hash: 'a79145123497cbd0792a27ba97cdd54722a80205db53d575719d19b07a70f739', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59682, hash: '540da07e29f32f3ead8151872b457c91803b75b925ace64bbefa823229481d93', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles-QMAT7RK4.css': {size: 53885, hash: 'T3EHmMtdfNA', text: () => import('./assets-chunks/styles-QMAT7RK4_css.mjs').then(m => m.default)}
  },
};
