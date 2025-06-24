
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en-US/',
  locale: "en-US",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-S3SV45G4.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/en-US"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RAE3ZD5K.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/en-US/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VFQ4L6PF.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/en-US/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/en-US/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/en-US/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/en-US/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/en-US/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/en-US/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/en-US/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
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
    'index.csr.html': {size: 11318, hash: 'ec6955961e3e2139ebaee34b0b49e24f674d1c3f2b9696cc65fcf4f51e9f6da5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1081, hash: 'c937422fe42222d772eec4010408c3aa0e544fe3bd594693d16096c14a4c69bf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 43362, hash: '97d0daed0204df322f9f038fb117e3c38bdf453f6a64af70be49d4b9f5d07e92', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59381, hash: '4947a122138eb2297b234289c0a734defa554431e0977e42d8d2acda4f5fbb49', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59597, hash: '260c117b46a1ef313c74d886d8bd9daf248a9cf30c1910a9195266a794c5486e', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59481, hash: 'ad6d4f783ad5c4f464ccfd323de5870090742aa73845f83d8da677de3425c8e1', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'index.html': {size: 109389, hash: 'ffce5afa4f8545448af34908fb9ba1a9e5e515fde7b486f0c2f9fa15e66dd64f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59573, hash: '947e9c379357324c4c7f890ff748e8f6b1255764609e60df8981679c59b34b33', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59682, hash: 'a6a06ecf4bdc9afb34b38bba6ff39c0467e132e8e02babb1ec9206087fc3f46b', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54257, hash: '05355cd3f078ee16cfa27868503fe7867ee3947307abe7ed33d9802d02e414ff', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59548, hash: '10be39c4c0bdc5d4684c73ffd250447e8ba0f865933b0ace2dd1ed4565ef2766', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-GH3URCE5.css': {size: 53835, hash: 'ITSNXeOZ5k8', text: () => import('./assets-chunks/styles-GH3URCE5_css.mjs').then(m => m.default)}
  },
};
