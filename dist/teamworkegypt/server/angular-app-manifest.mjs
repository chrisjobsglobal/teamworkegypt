
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "en",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-YLAL5XPP.js",
      "chunk-KS3VWBNE.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6ABJMMLD.js",
      "chunk-KS3VWBNE.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WS6MOJAY.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
    ],
    "route": "/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RVEMZIPM.js",
      "chunk-Z4UZE6UH.js",
      "chunk-ZRDRI3F6.js"
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
    'index.csr.html': {size: 11168, hash: '4b4133b1c6b526f5d33aa2f1715c37d425ad13d50f843460ea08021afdd6a450', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: 'e19343b02790b41cc43955521f63a123f6621e1fd2e37d74c7fd1f927be83ade', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 80170, hash: '9fc9e06fe7cc91f7a92ac5c4ab5af4f8569a8ce90c0c2ad62a3cc11efbc8f027', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57260, hash: 'b1780a233a9f7f85a3cca13525789c61591b48feb0388f55e45b3aaa7eedc01c', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57452, hash: 'da408192102b250de771b61c5b1656f3aed105c09818be44e4f40bb0bf77102a', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57360, hash: 'b8865dbbadcbc9c73ff70fe67e33513fc7360f9f15efb2b90f9f385a7284c1db', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57476, hash: 'ba8722b0a1e78df736b38b00b14f95e9d5ec9a8627a1cbc35abcdc0aec9cc2e6', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44975, hash: 'e1dfe88e6aa480e0bd9e13776c4c14b8493c21c55645b43bbd825c4bf02064ef', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57427, hash: '47e4bfed2d27b1997795a22b33273d6f6dd3b0618bb09fb96647a682f853cfde', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57561, hash: '0cefeb1d8f4259a968c87e40138fd3560c680e4dbdd0d9101dd8c45e92e81980', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52026, hash: '5540bb920365d3d003f5974136f29ded834d7aa515dff10cbd879f1652efebff', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'styles-OSDT5SZQ.css': {size: 46732, hash: 'HaF+shbhS3U', text: () => import('./assets-chunks/styles-OSDT5SZQ_css.mjs').then(m => m.default)}
  },
};
