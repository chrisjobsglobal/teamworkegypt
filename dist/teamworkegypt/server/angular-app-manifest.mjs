
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "en",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-KE3CDJH3.js",
      "chunk-HQJU6TH5.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TQ6TACDB.js",
      "chunk-HQJU6TH5.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TP4YNYNO.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
    ],
    "route": "/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MORS7RKQ.js",
      "chunk-URTNIHPU.js",
      "chunk-WOEPEQZI.js"
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
    'index.csr.html': {size: 11167, hash: 'b7a697fd8f38b7b5685c3a35ea83ae6ed58be457eb6c9e1bc33b77679efb2e59', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1071, hash: 'cad8376466567925f7b564bb79a358f025085306e0f6bf0e73070ec865b91350', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57233, hash: 'cf91c09aa132cca84a86325fcd3c349e7f71111e0eb3ec79dc985092136c25cc', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44961, hash: '0cba3c7da6ba71462ce8494bc66e30419133795e387adc41e3370369dfe88e46', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57333, hash: '6d1346a5bd46e1957d48b656dab0f00dee0bd96aeb4b70f8b8732212f8722dbb', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'index.html': {size: 79953, hash: 'acc3f8e56eb14d6c14bcd8bab9abf343a4096c58bc6a7edf3d51e334b0b99d7a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57449, hash: '43fed3c8ae6e4ae2b3f0d9d28e7f1f72128478eaa1425e3e2007775ee869148c', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57441, hash: 'f2b6cb7a85f84b03c49dd8aea69e7913fed1d3b3b2a2288558547e25b0dc4e45', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 51999, hash: '52f55171672c7eee6577ead8c85972ec8597207fb8bfbaa173aaed8b916b920d', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57534, hash: 'ea5ab693dcbcc2c14985464c671015c68939ab0069e19c321f31abf5abb8ab4a', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57400, hash: 'd7e6407552b5b5f40bd7fc8bbf221e0e37b7f004d14ac2e3f89a46b92dd6904e', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-BFDER3CE.css': {size: 46538, hash: 'kvkToQ3y654', text: () => import('./assets-chunks/styles-BFDER3CE_css.mjs').then(m => m.default)}
  },
};
