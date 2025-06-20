
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "en",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-OXQ3OI66.js",
      "chunk-CUNONCDA.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QGQL673V.js",
      "chunk-CUNONCDA.js",
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
    'index.csr.html': {size: 11309, hash: 'd8fcff214bd44d80afd797962a6d21eb025593dbbe7ab172ed89b25d3bebb722', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: 'e6e04235f3a9ed368704d370d2a1e33f06a32556f5e11db0c6ea35cb8cbdf033', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59438, hash: '490547afd4bf5eaa8947a4dc2f42d6eb3be2cba37a59ce54c1a996ab6e3cf9b4', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59338, hash: 'ea6006a6f629919d36a94123776381623bc9c2d085d946e8df9c4d8ec5328b4b', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 43710, hash: '155635360ee11c04ea592baa50580a424495ecf5b5603e922c15dcf3b84a9103', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107582, hash: 'b68350683d9961dd54650402ae53f3784883d2cc64a0268f72d0063fdc32efc9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59530, hash: 'c9a630902ce692d44a0e4604a489cd08ce8f523465824e7375ad0d13725cf1d7', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59554, hash: 'a11c9b44c9af4cb13072d0afe51ceb06db994c6265c077c1a0b9856a74526169', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54208, hash: 'b14454f1288fadd7ab38976b483e6201c87560b2e17ca676833b65dc75f1423c', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59505, hash: '557b0a80931e1e50922d33a8da8441680ade27239821149f20a07b86f65ab31d', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59639, hash: '740a12891e2f02b90de8aa3379d67b5d23b97a5e8f261a8220cc5bcd68b9b2a1', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles-GH3URCE5.css': {size: 53835, hash: 'ITSNXeOZ5k8', text: () => import('./assets-chunks/styles-GH3URCE5_css.mjs').then(m => m.default)}
  },
};
