
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-OXQ3OI66.js",
      "chunk-CUNONCDA.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/ar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QGQL673V.js",
      "chunk-CUNONCDA.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/ar/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VTYBHCOX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/ar/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/ar/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/ar/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/ar/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/ar/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/ar/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
    ],
    "route": "/ar/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QJYGIPFX.js",
      "chunk-CTRA4XGH.js",
      "chunk-KRTR3SBI.js"
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
    'index.csr.html': {size: 11312, hash: 'e266622a5ac2489bf4ddc84e60b5c006442a69209c465bc4db4de4099a45130b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1075, hash: 'c56bb2d1e18babf8b31b883c7ea4201aefe845f49ad6ee2ed3a6e242a419f9b0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 61088, hash: '39b415aa91c3c34ca6ad2f9df19c63a02fddb0fb06e82787e1fb4a50f903b577', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 60880, hash: 'b42e160f918a3d58310d7713e7782cf68f557ee8a4e678a6c8562f633e45353a', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'index.html': {size: 109583, hash: '48ebbd1b48f67d2c66d5838bb9a9ded40e1263d723d62cfe978801466d32671f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44331, hash: '643e767a9f7f2b463dd997cb9ef803163c8e72e9783f666f216c8e143366aacd', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 55000, hash: 'b3e01751409564293cf2e3dc5f3564b14f876453a4db568d560c99bddbf5e95b', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 61186, hash: 'ba5db5ab4c5d53a1f1435fc6db1e1e077273f9268b69f84a3f30975e8e50d0a2', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 61377, hash: '28e4de282f374d1d9ca5edd11c6b5f908c7fd2f18982f29626f0072d973dd56d', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 61398, hash: '0d033e8ec3bb356e2f02eabe3fddd555ad550039cb8845b45d21b60bcef3a0b0', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 60832, hash: '1d23dd7c8305a3c8e52af1bd728efd32351161abd4485668606ae2acd526c6f9', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-GH3URCE5.css': {size: 53835, hash: 'ITSNXeOZ5k8', text: () => import('./assets-chunks/styles-GH3URCE5_css.mjs').then(m => m.default)}
  },
};
