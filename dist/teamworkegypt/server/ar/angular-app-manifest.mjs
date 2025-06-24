
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-S3SV45G4.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/ar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RAE3ZD5K.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/ar/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VFQ4L6PF.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/ar/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/ar/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/ar/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/ar/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/ar/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/ar/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/ar/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
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
    'index.csr.html': {size: 11312, hash: 'ba1d2ecef1cbbabb78d74bf5218719687554fbaa7bd49115296b058275c30279', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1075, hash: '545798d419c2d54f907f1728e159b0207a16379c46900fa915a75ce8e1654003', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 111365, hash: 'f8f4f936ff99c8e8b430c0c56e7f00a184ecbb530e3b72f7321d8837f50b8246', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 43874, hash: 'd7fb84f9aacdd5181364ee12e5cbf6509813d6ab78e68bbd7a66177d82970dca', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 61088, hash: '5f8236a06298691b6379fddcfd52d1954be33b6c5b4c25b4447f3b9ecabca4d6', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 60880, hash: 'b13d93edb00a4d87d5d9cfdbc27219e7b0d3d21587be70e49fd967426c492507', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 61377, hash: '49f391c4254f95e47eda6f268e0a4f1b0abe1b764b9a45a37e75a011c61e54c0', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 61186, hash: 'e2110ffa2645dda8c028fa5b0163f724cdbd74c26cc81a2e299e5f4f8480fb5e', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 55000, hash: '8b03d02ca494d2ef82103355642d2bfafc06a731d93d48309ff99723e536c973', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 60832, hash: '505cc33c08f1ef99080f7c272580412868422d356d39b960a199a5d39680e7c8', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 61398, hash: '3f4598330f787fb8a5beca3e8d46fa59218c157e0ea3708e67ab8a0cd3434578', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles-GH3URCE5.css': {size: 53835, hash: 'ITSNXeOZ5k8', text: () => import('./assets-chunks/styles-GH3URCE5_css.mjs').then(m => m.default)}
  },
};
