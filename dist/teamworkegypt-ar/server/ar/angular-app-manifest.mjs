
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-TQ6NLXQP.js",
      "chunk-FMLBC4QJ.js",
      "chunk-2CO3LZRZ.js"
    ],
    "route": "/ar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TKMKXMTP.js",
      "chunk-FMLBC4QJ.js",
      "chunk-2CO3LZRZ.js"
    ],
    "route": "/ar/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TIEH24FL.js",
      "chunk-ZY44S3UN.js",
      "chunk-2CO3LZRZ.js"
    ],
    "route": "/ar/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OGHW3YQV.js",
      "chunk-ZY44S3UN.js",
      "chunk-2CO3LZRZ.js"
    ],
    "route": "/ar/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OGHW3YQV.js",
      "chunk-ZY44S3UN.js",
      "chunk-2CO3LZRZ.js"
    ],
    "route": "/ar/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OGHW3YQV.js",
      "chunk-ZY44S3UN.js",
      "chunk-2CO3LZRZ.js"
    ],
    "route": "/ar/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OGHW3YQV.js",
      "chunk-ZY44S3UN.js",
      "chunk-2CO3LZRZ.js"
    ],
    "route": "/ar/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OGHW3YQV.js",
      "chunk-ZY44S3UN.js",
      "chunk-2CO3LZRZ.js"
    ],
    "route": "/ar/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OGHW3YQV.js",
      "chunk-ZY44S3UN.js",
      "chunk-2CO3LZRZ.js"
    ],
    "route": "/ar/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OGHW3YQV.js",
      "chunk-ZY44S3UN.js",
      "chunk-2CO3LZRZ.js"
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
    'index.csr.html': {size: 11276, hash: 'cca61d73f998c9a595d0dadcd6cac3636d12825b604fce79baf47cdfd93c1b9f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1048, hash: '8bb8ed7871ea278d93ae7c10972fa6111661904e8e526b816adf76c2ca9a73c3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 61052, hash: '3e8150dda12c7122e885689f423a50737f03986cfb573d0a37f001817827be3b', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44295, hash: 'b1cc3d52ec736e57b2e83f8149cb8d270f8829b306acbf423251d5e7db5d8a84', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 109547, hash: 'b701f408ffea5fde302b54a60f53a93d6c1ad3c03ce89e31bec746ee1020ac6a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 61341, hash: '2637aecd86928bc3132c079a5d70a46bc1dedb03811183328eb0a04f9a3188f5', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 60844, hash: '8bdbf66cc69c807cfdbe78876458b27ac54f121952072334bb751df0b105b8e5', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 61362, hash: 'b1dd7d64bbb55b5a4f28ccc6c66e4f0eef043827f6e460f5ff31c03c443161a2', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 60796, hash: 'cf4d87400dcd3ad06831301da40aa93e01db3e70f06678fd7ea53c1159ce9f16', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 61150, hash: 'fc9dedbf5f6f290f9fa3f5490690ffd6633f6ea898722e63ec187469e863e022', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54964, hash: '2c1f91abc895590d910916dc7e6f28a1d6fc08506395e4304cda469d09df3793', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'styles.css': {size: 53835, hash: 'ITSNXeOZ5k8', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
