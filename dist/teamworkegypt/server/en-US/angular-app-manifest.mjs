
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en-US/',
  locale: "en-US",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-RWTMUEN6.js",
      "chunk-IUI35GFA.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-36CUITQZ.js",
      "chunk-IUI35GFA.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TP4YNYNO.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/en-US/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
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
    'index.csr.html': {size: 11176, hash: 'b6e054c7d0370654b94055c333600ee06152c1f4e94f97d125162bb3bbb6af33', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1080, hash: '1b960321b33c51df4937917f6f0ee026c0bd4782ef1293da2ee836892e8f4287', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57390, hash: '02a437a401b3385d5711253982f494e2a3f7cea4f5ae9ee45810b72d9980a878', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57290, hash: '2e52378bb953ffce8de81408f355d8ebc66e95f0c6495d29c35d2ca9d54be842', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44952, hash: '7eba8e7a08d5b21d2ff1f965a7f08a324d6a55cef2764c7a76ebb94423ce1e78', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52062, hash: 'df0866ef15b39a96db0649c37ea21e855051a792e67afe8fcd5cbfc121576d4f', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57506, hash: 'ccf7885296481c7206640b7869757fb7e3fcdbac19eb9f5d99404599cdb18648', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57482, hash: '45f121385abc9e98ddd300751d1c013b0ca30ae38cfec1fa549cc24fb5a8f7dd', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'index.html': {size: 80083, hash: '4ff8627d217848d24e65249076cbc55b1e8d99b24c3eb795f59185f28005fbba', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57607, hash: 'd37426c90dda04ea5554dd8d7d6b50b35695bc00a83472b22e507660ed3a5c6c', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57457, hash: 'ab527d2cd91d7d6f4e837990b54bbc682e8569d261fdf2f3f3cb38ea3fc91f90', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-BFDER3CE.css': {size: 46538, hash: 'kvkToQ3y654', text: () => import('./assets-chunks/styles-BFDER3CE_css.mjs').then(m => m.default)}
  },
};
