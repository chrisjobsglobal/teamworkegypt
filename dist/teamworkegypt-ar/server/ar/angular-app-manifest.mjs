
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ar/',
  locale: "ar",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-I6KL475B.js",
      "chunk-LLDXFQGD.js",
      "chunk-SN7RH6QP.js"
    ],
    "route": "/ar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YEABPDRW.js",
      "chunk-LLDXFQGD.js",
      "chunk-SN7RH6QP.js"
    ],
    "route": "/ar/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U26E7XEW.js",
      "chunk-6UFHXMTU.js",
      "chunk-SN7RH6QP.js"
    ],
    "route": "/ar/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TJH2F56U.js",
      "chunk-6UFHXMTU.js",
      "chunk-SN7RH6QP.js"
    ],
    "route": "/ar/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TJH2F56U.js",
      "chunk-6UFHXMTU.js",
      "chunk-SN7RH6QP.js"
    ],
    "route": "/ar/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TJH2F56U.js",
      "chunk-6UFHXMTU.js",
      "chunk-SN7RH6QP.js"
    ],
    "route": "/ar/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TJH2F56U.js",
      "chunk-6UFHXMTU.js",
      "chunk-SN7RH6QP.js"
    ],
    "route": "/ar/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TJH2F56U.js",
      "chunk-6UFHXMTU.js",
      "chunk-SN7RH6QP.js"
    ],
    "route": "/ar/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TJH2F56U.js",
      "chunk-6UFHXMTU.js",
      "chunk-SN7RH6QP.js"
    ],
    "route": "/ar/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TJH2F56U.js",
      "chunk-6UFHXMTU.js",
      "chunk-SN7RH6QP.js"
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
    'index.csr.html': {size: 11017, hash: 'f4122edf23bf149d7fc30060de01aaf0d7a919166d784dcd0bbe097ad7517ad7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1047, hash: '7016de4de9590416fd474d85db8a7a7ea392a9b4e77a00c0f99b5aa0471d4d5a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 43194, hash: '6dd6cf52d2190255c083d5ebcce79b98f7459c5e2f04f6ce9f6d5c9b26f05357', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 77758, hash: '621fb654a7559be430d68cc2dc1dbd5adb260dc6f2678d1dc8e24590733f1f0e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57285, hash: 'a846f96ffb55305b84d973a21ba02fa9fa1c7aff8507b2f8bb3a79b8b731839d', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57385, hash: '53f20810105d9f50e57f32c9b901b186de0e9f87412ae81e585289be15dee27b', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57517, hash: '65342b5cd0e6da5d0354dd4170cb601873125957e9c88eed7c7ab2c094fc01e1', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52089, hash: '2720ba36525f35c3f0312eb6709965d166d4608f78cd663bba169862b71ac5f9', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57477, hash: '5e92ce34498a9a00b9e39587e136d2b1daff16547633b55e35540f7a6e5fa803', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57468, hash: '8fbfcf9acab80106434684ce00304ea7e087116be0acbcdb49b03c7e216b55d9', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57586, hash: '0ea9c503c7900a24480c3ca339c8690cb04f1b6f3c47f9363e2171431033096e', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles.css': {size: 44640, hash: 'mN24GvBkKAA', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
