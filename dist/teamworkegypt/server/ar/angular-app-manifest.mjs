
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-YLAL5XPP.js",
      "chunk-KS3VWBNE.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/ar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6ABJMMLD.js",
      "chunk-KS3VWBNE.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/ar/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WS6MOJAY.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/ar/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/ar/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/ar/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/ar/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/ar/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/ar/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/ar/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
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
    'index.csr.html': {size: 11171, hash: 'd33c95ce2457aa37fafedd2f05cdbeb276ab18700634c61dbd647db4e15e7796', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1075, hash: 'a9e692ba29672d498c6780fc0576eb8028f215837b449d0809c00391089adf46', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 82018, hash: '2211596d5d21f3a7e525b97a3d0d4317e92541ab9da29a93c9342e37579d23f0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57599, hash: '2e5c9efc7e8f6e5e96e6a936f4767e99939a26d3e2a6e8e5a79c1a0d352b763b', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45227, hash: '49444b1f1ea9e53d4541749a6885b6177191f8041deef991d99eb65dda97124e', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57499, hash: 'cd692ee2454f80218770fc5f03004d463e07b473948d35ff71d12e3f248fdb64', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57715, hash: '06488727eba6d540e04d8fccf84b3c0d4396a7b6ff5a4df8f2177c6083bf0c52', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52336, hash: '28c91cfca1505e8948fa3fc820654278c784b94af8d466f07970b76fe09e962e', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57800, hash: '19a7b3cee363a1eb3c75442666fbb362cfcb99494f8e52421ffdd9483f08c7cf', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57691, hash: '7220600cc423b551eb2aad7952ad3c69709ebfb5908b12cc6ae9b4b8f69a3a16', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57666, hash: 'e5fae957690a5fafdd822fd1bf357936b2de222b3778249e343e49de54684125', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-OSDT5SZQ.css': {size: 46732, hash: 'HaF+shbhS3U', text: () => import('./assets-chunks/styles-OSDT5SZQ_css.mjs').then(m => m.default)}
  },
};
