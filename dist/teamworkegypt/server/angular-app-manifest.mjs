
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-4W4FBBX5.js",
      "chunk-HKUSCNLN.js",
      "chunk-G4SDOEYA.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SKXSMDIL.js",
      "chunk-HKUSCNLN.js",
      "chunk-G4SDOEYA.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Y5BWSECJ.js",
      "chunk-G4SDOEYA.js"
    ],
    "route": "/career-tips"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10946, hash: 'c386b94c45b26c550c744984c153b14ea14899efea1b5420b5b6b5d573d8fc31', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1002, hash: '4fad50fa8a1c1966fa67535e98eac3b2c1f3f8e2abc25fe099ea57268ace6c17', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 78653, hash: '0f781a586c0a5fc0b1eaa28d78190b5d1fbbf7ba55f973b5f2a86ee9a29f4dad', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 43109, hash: 'ce689ef78ff7355dbe0a8177c13f90fd32eed52bb59a825ab0920b568b7447a3', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52731, hash: '7a777d0756d5ee5e61edf43d20b8ae4be7f11fbea1fcd042d75bf112999c0402', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'styles-7TGMIE6M.css': {size: 43423, hash: 'jqiNQiKk0rk', text: () => import('./assets-chunks/styles-7TGMIE6M_css.mjs').then(m => m.default)}
  },
};
