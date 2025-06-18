
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-SSIRMDMX.js",
      "chunk-D5UGEVOM.js",
      "chunk-FA2SR727.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XN4IV7JP.js",
      "chunk-D5UGEVOM.js",
      "chunk-FA2SR727.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6JCFGBAL.js",
      "chunk-ID45DK24.js",
      "chunk-FA2SR727.js"
    ],
    "route": "/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D7KCZYM6.js",
      "chunk-ID45DK24.js",
      "chunk-FA2SR727.js"
    ],
    "route": "/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D7KCZYM6.js",
      "chunk-ID45DK24.js",
      "chunk-FA2SR727.js"
    ],
    "route": "/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D7KCZYM6.js",
      "chunk-ID45DK24.js",
      "chunk-FA2SR727.js"
    ],
    "route": "/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D7KCZYM6.js",
      "chunk-ID45DK24.js",
      "chunk-FA2SR727.js"
    ],
    "route": "/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D7KCZYM6.js",
      "chunk-ID45DK24.js",
      "chunk-FA2SR727.js"
    ],
    "route": "/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D7KCZYM6.js",
      "chunk-ID45DK24.js",
      "chunk-FA2SR727.js"
    ],
    "route": "/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D7KCZYM6.js",
      "chunk-ID45DK24.js",
      "chunk-FA2SR727.js"
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
    'index.csr.html': {size: 10981, hash: '43c03b00e40a427eb42cc1badd8bca482349edf214eba855d1ab254f4ba9d7a1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1002, hash: 'f158dd270ad12d48c786ee63aa52861398ff78fb8a74ebd02ac4a5fc4c5f8428', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57325, hash: '9887cb718e9453306e0d8c7e55fee14c4c6de3add3dd690db0bed175a902b1b1', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'index.html': {size: 78687, hash: '193ce8340921040dbdeb28f899cb9b16ed05d8a198dbcec86a3663dd68e5bf86', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57225, hash: 'f8868f4474f3c0822accbd898d9eb68b1082a8afe55326c1493b8de350374c23', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57441, hash: '447e8fcb86d3b23006a2e295615cbae081581fcf29ac81d8af77ae3c3929831b', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57424, hash: '9b883a50491eac00ed565b7abdaeeffd2b8b6a329468e13dee558e8bdb15519a', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 43143, hash: 'c9c23f5a2583abe00aeb8178fa5209322c787bf06a13c887f6c0c4ac0b182c47', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57526, hash: '68f7ab84a2a4f6f7694b34d2f98d41eef109f047f4fdc6faa0377cd2f289ed36', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57399, hash: 'e1b4f4c959995bc54d474d1902e4eb57bbdd3fef99e18bd41aaefee5b30aeb75', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 53143, hash: 'abce6de81e710dff08d0f7b6753f9ba6233cf2e512c5d7e937b9262e4c35d78a', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'styles-UPLKS576.css': {size: 44640, hash: 'mN24GvBkKAA', text: () => import('./assets-chunks/styles-UPLKS576_css.mjs').then(m => m.default)}
  },
};
