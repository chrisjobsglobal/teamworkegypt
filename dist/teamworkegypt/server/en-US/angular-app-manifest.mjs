
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en-US/',
  locale: "en-US",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-73LUSQTH.js",
      "chunk-JDE6PCFH.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/en-US"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TTLOCQP5.js",
      "chunk-JDE6PCFH.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/en-US/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SHKIOR3D.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/en-US/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/en-US/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/en-US/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/en-US/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/en-US/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/en-US/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
    ],
    "route": "/en-US/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EUQNHVSY.js",
      "chunk-6WVIMOZG.js",
      "chunk-SY5DZ3M3.js"
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
    'index.csr.html': {size: 11177, hash: '6326bef979a36986c56975414057faa251dc6177fa6b572cf77365035295fefb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1081, hash: 'd452ccd1b83f40d7ac4fb30c155e6edc6542cf9bf96b3b91d84e45033caf0e6e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57417, hash: 'e0346600127a5d0ec0ce91769d285f850063245552019ff22a0f8036e413677c', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57317, hash: '9aaafed84504b2b843d6c7f182cc56cf14a893d5885818ded9c33bc70ffd36ae', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'index.html': {size: 80126, hash: 'e2d88ff36a75c6815cc284e6785cab92540ec484e73c20b7378e633a6ef4037f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57533, hash: '64e05c8164e6e2b50258b6f292db00b4f0744422201c138196722648715b3db0', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57509, hash: '95c448e7db66774acb8d79d6fe3add325bc21fbb29c9beab9725166096caec9b', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52089, hash: 'c1d7e7d03e12a19bcc2243d411bde5e1d9828797e89178dbe68174626d5e1a38', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57484, hash: 'b5633f54c4f7a03f1e7e334e3cdbf0612765e0a270e1833e4e94b9048450983a', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57618, hash: 'd59e27d15bd567288ebc3f72daaffef6d1fa5b4823b663ec033b8f36c42464ae', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45000, hash: '76e5173f441e5c72e1adb70cd66be39622b5f939129d0b315d58925a6ebe06ab', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-YURPY4RI.css': {size: 46683, hash: 'FkVl+c19r5E', text: () => import('./assets-chunks/styles-YURPY4RI_css.mjs').then(m => m.default)}
  },
};
