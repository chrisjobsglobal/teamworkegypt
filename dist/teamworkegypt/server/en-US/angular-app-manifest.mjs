
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en-US/',
  locale: "en-US",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-7SWLU4WY.js",
      "chunk-6DMTPTS5.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/en-US"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R7ZI6RQD.js",
      "chunk-6DMTPTS5.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/en-US/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UZACX2DL.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/en-US/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/en-US/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/en-US/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/en-US/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/en-US/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/en-US/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/en-US/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
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
    'index.csr.html': {size: 11318, hash: '53fa1d30c7ded85d2207ae2a1cd930b90723f98cadeea80f67ca99e0e252fd61', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1081, hash: '4c0ea79053c7b8530e95cbf6e04ca9b609803ed184d16b830af5a59d9b0fe49c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59481, hash: '7801dd635f20fbf29b0a862189862fa01875d8c5db08c70baca6162b94282fec', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 43696, hash: 'cbf21a8ac7efb5499301ac3b97b44dac0022e76db666514295b8a9dc951a7c6c', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59573, hash: '37fba90118e945d49df11b778b819238a3586426ff4c34c4be56255a657421ce', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59597, hash: 'a185c55e17fb286effc45a460abe8b53c6bc2894557369da179cd7ccb69c7f22', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59682, hash: 'f55134cce2f0a6233b11e75b47b70e962633672ca7a2e0df808770bffdd21b72', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59381, hash: 'dc8185f49db134c69384c47774eb1445354fed6634ef3078335c1c3febea0629', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54257, hash: '4a52960e96a3cb34368a81da61eed01656638f15a47318d9282b55091e55d2cf', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107607, hash: '0087bdc52d24b725213ab389c030cc7ae67e956ee7df7d6e32e1a40e5447f20d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59548, hash: '867eb8d9aad99727b2a3d5e167f405cf0d163f40e687d6cb7637bf539cf9aae6', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-GH3URCE5.css': {size: 53835, hash: 'ITSNXeOZ5k8', text: () => import('./assets-chunks/styles-GH3URCE5_css.mjs').then(m => m.default)}
  },
};
