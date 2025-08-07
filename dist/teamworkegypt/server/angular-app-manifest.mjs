
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "en",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-53NGVO3D.js",
      "chunk-6DG6MKMU.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2KA5CBPO.js",
      "chunk-7R2OEZE6.js",
      "chunk-6DG6MKMU.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A7MXOJ7D.js",
      "chunk-7R2OEZE6.js",
      "chunk-6DG6MKMU.js"
    ],
    "route": "/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SOLCBD2B.js",
      "chunk-7R2OEZE6.js",
      "chunk-6DG6MKMU.js"
    ],
    "route": "/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SOLCBD2B.js",
      "chunk-7R2OEZE6.js",
      "chunk-6DG6MKMU.js"
    ],
    "route": "/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SOLCBD2B.js",
      "chunk-7R2OEZE6.js",
      "chunk-6DG6MKMU.js"
    ],
    "route": "/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SOLCBD2B.js",
      "chunk-7R2OEZE6.js",
      "chunk-6DG6MKMU.js"
    ],
    "route": "/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SOLCBD2B.js",
      "chunk-7R2OEZE6.js",
      "chunk-6DG6MKMU.js"
    ],
    "route": "/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SOLCBD2B.js",
      "chunk-7R2OEZE6.js",
      "chunk-6DG6MKMU.js"
    ],
    "route": "/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-SOLCBD2B.js",
      "chunk-7R2OEZE6.js",
      "chunk-6DG6MKMU.js"
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
    'index.csr.html': {size: 11309, hash: 'af74a608e102ce990d84494dbc2cc8939dfcf8108b7e98c120f5915947d59e1c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: '9362f5b08c4fd82d371ea1148f318a23d492cabfe43d4d5f1acb7a055e272358', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 43291, hash: '8b24940318bb9edb50e5f220c4c2f7c65d5c4efbe953959ab798849b1b031d57', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 109390, hash: '86647c5eb785b4d2d38e886bdcb7efd0d9f7036caf23c26cba4165d5ce2c3f96', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59464, hash: '1aaa27f94c750b35a4dbc557ecc5210ffadd5c39afb984675a19b560008b008c', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59580, hash: 'e40889b53da8198d391c49432ebfd3639a72c3ea2089f0debd9c67fcbbbd9d57', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59364, hash: '511cc3e8ea67ff94a02701761d47f7d45adecc35d811d8f2fbe27e47bfe7abc9', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59665, hash: 'e2c7718f10c98506b8f7b66448ed61a9530aa0c6c6740010cb60ad85d6d14aa8', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59556, hash: '104677fa5fde0deafad81a6fe390f55bb4b1d78cf300dea7c82cdd3c404f1f32', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54234, hash: 'a266866f14073749ab0887560034c3d068c82024dac7697d266059ca597715a3', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59531, hash: 'daaf0e4ecaa2106324e2540eb410ce1f8c76a6ee1d800e0d100fdccf5becedb4', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-GH3URCE5.css': {size: 53835, hash: 'ITSNXeOZ5k8', text: () => import('./assets-chunks/styles-GH3URCE5_css.mjs').then(m => m.default)}
  },
};
