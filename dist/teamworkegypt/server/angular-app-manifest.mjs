
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "en",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-S3SV45G4.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RAE3ZD5K.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VFQ4L6PF.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
    ],
    "route": "/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MZSSW2ZU.js",
      "chunk-D672JD2S.js",
      "chunk-UW4FTWCI.js"
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
    'index.csr.html': {size: 11309, hash: '7afbef7323a68bbf0bd872ba4ed975b87d74e61e1207e0264660e4cc6a3daac1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: '3f4d055eedba5ea40a6b56204aa441487eb648a862a8d7992603013757c346d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59338, hash: '493aeda3705d938c45374be403d948cf7b155ea95b8387b499c51aa02bfd171f', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'index.html': {size: 109364, hash: '9143c45c788d5c8eb2e666bb16e26f6cdab0a19351d325f3a15f69e375dee14e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59438, hash: 'f865a93d3b81d4c0703d601fd9ff1280dda3449bf8258a144f6441d663b89fb0', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 43265, hash: '038ac80ed14adacb1eb6bdbf4f30d2ecaf92edfef9438b65da925fed3d39ec2f', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54208, hash: '2799df577316b33f8d67cab430dfe9b209cd1617615a70d1d2cf01367f9c91fb', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59554, hash: 'd53b53ace6978807f3f33aca335e4b45e3cd601cd6ebb51b51d12372c520a312', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59505, hash: '24c73dfea12c3a0b9189db4608cfdbd79f3c46cb5b57a8809845f10f6390f618', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59530, hash: 'f86ddb82265f063f89fd3d079f2175fee93addcc4e24eb280ec1aff559da3223', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59639, hash: '86c37f40bc7cb07628394f8d2ed0ea95467d99726f72720b19b223ad341e7307', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles-GH3URCE5.css': {size: 53835, hash: 'ITSNXeOZ5k8', text: () => import('./assets-chunks/styles-GH3URCE5_css.mjs').then(m => m.default)}
  },
};
