
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-I4CS6UZT.js",
      "chunk-C7NZUQGM.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/ar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P4XG7O4L.js",
      "chunk-C7NZUQGM.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/ar/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KDEBYRBV.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/ar/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/ar/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/ar/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/ar/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/ar/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/ar/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
    ],
    "route": "/ar/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6KUZM3L5.js",
      "chunk-JUX77PNU.js",
      "chunk-67QTOMVK.js"
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
    'index.csr.html': {size: 11073, hash: '43bc967f7845fb041bdf995e4108761de34932ed64edca8f42da276c8a4fedc3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: '12b285ee4561c34163bccdd1faa66da3f09e5ef03cd7b0054a2dc9ac41e68c4b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57505, hash: '37a4252d8553a987f5f488d2e10cab7d18f350a22c0788130d8b69a6cf3c65fa', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57405, hash: 'd5b1a45e955e847ec489d1d3b1e9ab42f86c9789f636844f2ffa84f7eb3ecdee', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44577, hash: 'ed11007ea091c0a92d3003c7d5f14b070fae204f5c9d24ac432e3462c99800ea', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52242, hash: '6b07fdaa47724a5bd029f14133195c8c12c673fab6f81448db775587d9f06df9', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57621, hash: 'bd8cdefd32cea4bf64ece2163cc85ce6b9ffa0a596f001e01190f96d3d068ab2', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57597, hash: '15327c15ff659862f66c69acdf88ecfc938d42be4ac41bfe986c387bf9d1849e', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57722, hash: 'df9c29ba7c68ed7cf40f8253588c2bc82eda84c9effd5cca6d9384661565755f', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57572, hash: '29eaaf15b2f40d94b327522aced7b3453207c80794dc08da157dcda48df00dc1', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'index.html': {size: 80075, hash: '04832e8b68f441cc954ba26b3a21861ff1136d2465e844ee9e968bb3216075a0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OVVLUA7M.css': {size: 45630, hash: 'DPqlgCYdIsY', text: () => import('./assets-chunks/styles-OVVLUA7M_css.mjs').then(m => m.default)}
  },
};
