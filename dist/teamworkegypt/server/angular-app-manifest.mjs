
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "en",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-SMECOG6E.js",
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
    'index.csr.html': {size: 11309, hash: '4377b735cf397351073b9013d1fe39020a9787385f9ab79528e89189c69239a7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: '6d3a7656fc43722ad3fbb7c69369941d1d0b37ed9a0dd90eecfd5d198b162356', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59338, hash: '32e242e79f4d47858f085dab0583ad16f4c6cbfe110f8894a6448314af45f495', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45183, hash: 'f86241427394daa972c373d06e6cb83372a2e2df30d6a4d4164695dff0f4e498', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107580, hash: 'def0fb4377086149d887248732b6e02c9e1f4e915de5082d361d4a6fca6c7b36', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59438, hash: 'dffe5259f1bc43084c2c0c2f1cf3900521948983ce24059742e4f381eba6e556', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59554, hash: 'a7c3f7754b23e33b027b8b593f717efa1308fa3b7b5af55ff0d331a23a037057', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59505, hash: 'ee96cf2df407de9b0df094faf65dfe3a3bf8793ea7a938635c70110c379d5e7b', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54171, hash: '36d159d4a27483f800d11b703db3ed6648c44e0f0dbbfd590bf61cb28ed37f5c', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59545, hash: '23125b7bf11303257d57968d70caa5728d0ea1e2bc750497519196df6dfc8402', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59639, hash: '9eed8902420699a555abf80382a7c9f9ae197a4f10c67f8d1b02ceda306afb16', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles-QMAT7RK4.css': {size: 53885, hash: 'T3EHmMtdfNA', text: () => import('./assets-chunks/styles-QMAT7RK4_css.mjs').then(m => m.default)}
  },
};
