
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-XK5TVWVI.js",
      "chunk-MZGDYHY2.js",
      "chunk-LBMC5L5E.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5B7OKSSW.js",
      "chunk-MZGDYHY2.js",
      "chunk-LBMC5L5E.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3VPUVC3U.js",
      "chunk-LBMC5L5E.js"
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
    'index.csr.html': {size: 10946, hash: '5b08dacd391304fdaa6b2da47b6cee4b175c531a0293a0ef3ad139a3ef0ec68b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1002, hash: '9cbf7ab9c0b837ae5902a6aae3403649b7464c477f0a21bdf68182c4b5cea0f5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 42748, hash: '831b78d72c3a031ccad406d62f16132680b6fe1240cf35b672a246c8133dfe38', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52818, hash: '4e7c51c3ce5dd65cbc25fd96e97da0bc7a38fa9f59306bfaa1357550d927b434', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'index.html': {size: 78292, hash: 'a0dede4fad622b6936746dc48eea831e133a388b357967ee0f5a04e88affbda0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-S5NBDWZS.css': {size: 43382, hash: 'EF3SpSt5fXE', text: () => import('./assets-chunks/styles-S5NBDWZS_css.mjs').then(m => m.default)}
  },
};
