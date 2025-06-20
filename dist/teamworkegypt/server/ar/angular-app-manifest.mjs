
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-7SWLU4WY.js",
      "chunk-6DMTPTS5.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/ar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R7ZI6RQD.js",
      "chunk-6DMTPTS5.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/ar/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UZACX2DL.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/ar/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/ar/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/ar/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/ar/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/ar/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/ar/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
    ],
    "route": "/ar/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A62HOGBZ.js",
      "chunk-NTZDD6JC.js",
      "chunk-EEZ2VRJH.js"
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
    'index.csr.html': {size: 11312, hash: '9d88f5d13073e7fce3febd0dbb3906d92c6c97957916af990b80c3c13496a42c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1075, hash: '4a7687b7b845717b7ad7b09dc9b73430ee8a7418f57dd6fad8b66330b6e17815', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 60880, hash: '0c158e816715e7504996f056550af963843047cd82c91c6f106a9bff52382297', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'index.html': {size: 109583, hash: '0bb1c2a4b1ebc6a49213b866a735089cfdd56548e96e743da716e7f5b10e4a6a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 61377, hash: 'a34a893b371a0fb772e4e1531eb2d29eb97ec57f2c4d637b7a9bc19d9b8dbca2', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 61088, hash: 'b919067235f290b1293998893528bd713dec70671bf6cc035501675d43d508f2', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 55000, hash: '9094a2fafb29ad8188ccc1afaff7b6a4a7d5ee9eda06ad24e26677f2b21e104e', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44331, hash: 'f82ae453c0d96a736c3aa1a6481a51edc9258932a8983ca2c0dbc7fe5b21f0a4', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 60832, hash: 'd54696d714d9ea2861069c8245821c05df2c34a586f38fa7ccd8d73501574926', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 61186, hash: 'f3c841329549cc4fae8ad9c5ded02da6e2b69945b6409a7f273075ef6cbd811b', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 61398, hash: '8e1e4fadc374baaec767312018e34fba984433d775b981b50fa318dae2b969cd', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles-GH3URCE5.css': {size: 53835, hash: 'ITSNXeOZ5k8', text: () => import('./assets-chunks/styles-GH3URCE5_css.mjs').then(m => m.default)}
  },
};
