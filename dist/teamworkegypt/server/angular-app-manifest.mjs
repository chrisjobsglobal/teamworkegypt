
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "en",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-MFNFKDRE.js",
      "chunk-VYBL7GS6.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WQP62TYD.js",
      "chunk-VYBL7GS6.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3LL34A6.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
    ],
    "route": "/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TLILVNH5.js",
      "chunk-NCH6NDDD.js",
      "chunk-ZWGSEY4O.js"
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
    'index.csr.html': {size: 11168, hash: '31ba898ae086cd890870183abf2b4add6aabd1df4e3b7e22884bbe23093fe505', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: '4b4ae1e43da3a2e223af60eb7b111aaa1a9730dc0192319bfc2476e023294e80', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45037, hash: '14821704ae4b5f205c6251659c5d4d08c7502629bcaaecc182b9d3bddab8637d', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 80193, hash: '213a5937a0f9c5b9a7aca6307f28e41210e35a08a1c825e5ade2a442e61c21d7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59192, hash: '1474f40a54227d440148c922554cff38e7d4f4f776a53ea891f8b54513766512', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59423, hash: '299403137d76c3bdd706ef8f4848084c45d818dc1da9edbe8ff9d0818c76e25b', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54025, hash: '9cb5ffbc59321cef1e9341ae0f0ce92c285e51175607077a0d38521d84f51401', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59384, hash: '0c36c7446b9a881124f6a7f49f86969969d9d1c05a1986ec0a29a2861013bca9', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59359, hash: 'c84664c172b99b84c379782ebf5b210290c61d4e1969d440ac07fea868e96204', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59508, hash: 'b221df7dcba4dca0059037a51118b53cafce42b1ee171d3768b8001d2fb9c8b9', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59292, hash: 'b869c581463e4eed76159f6ec250ed1fd7b88fd5aa3613ccb097c9af85049fb6', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'styles-O2VFNPWD.css': {size: 46781, hash: 'rvk5v6XGqVM', text: () => import('./assets-chunks/styles-O2VFNPWD_css.mjs').then(m => m.default)}
  },
};
