
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en-US/',
  locale: "en-US",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-I6KL475B.js",
      "chunk-LLDXFQGD.js",
      "chunk-SN7RH6QP.js"
    ],
    "route": "/en-US"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YEABPDRW.js",
      "chunk-LLDXFQGD.js",
      "chunk-SN7RH6QP.js"
    ],
    "route": "/en-US/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U26E7XEW.js",
      "chunk-6UFHXMTU.js",
      "chunk-SN7RH6QP.js"
    ],
    "route": "/en-US/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TJH2F56U.js",
      "chunk-6UFHXMTU.js",
      "chunk-SN7RH6QP.js"
    ],
    "route": "/en-US/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TJH2F56U.js",
      "chunk-6UFHXMTU.js",
      "chunk-SN7RH6QP.js"
    ],
    "route": "/en-US/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TJH2F56U.js",
      "chunk-6UFHXMTU.js",
      "chunk-SN7RH6QP.js"
    ],
    "route": "/en-US/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TJH2F56U.js",
      "chunk-6UFHXMTU.js",
      "chunk-SN7RH6QP.js"
    ],
    "route": "/en-US/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TJH2F56U.js",
      "chunk-6UFHXMTU.js",
      "chunk-SN7RH6QP.js"
    ],
    "route": "/en-US/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TJH2F56U.js",
      "chunk-6UFHXMTU.js",
      "chunk-SN7RH6QP.js"
    ],
    "route": "/en-US/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TJH2F56U.js",
      "chunk-6UFHXMTU.js",
      "chunk-SN7RH6QP.js"
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
    'index.csr.html': {size: 11059, hash: '48e1095abff3b7e1a77b1bad423fa1849c6cc7f7cfedbeae6b13869516d7b720', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1080, hash: '742b26b5e273916f9f9e3cca2ae01a879e57dc130f3e3200a5db4b5096ae177e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 77735, hash: '873e341fa8117888560f1e446af423367b4f795a27b9910393bfd98bac24624f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57351, hash: 'e7c9fdaa33f9ad82953416bf373580a170ffe0ca80e35d395d73effdc70d24c6', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 43251, hash: '53da92d916c9fe65bc12bb552a14a2679b59581498af1d1704f8bce0371fbb3a', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57451, hash: '195c4aeb429cd354811a74f82e21941e150c3c9a24a2418b839df64b45b80e44', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57543, hash: 'eaf59181a5cca5cfb0e4e082b73a8e12857c723c836649c1761456b50c9f27ef', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57567, hash: '4b8da69fd454ba82bf6fb2fb1cc6d8ee22487ac89002a84ccb69e1de19fac489', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52090, hash: '4f15956c7c09d227ac2ea8417b4289f41267e2c27b8203be6e9f71c4ca0d3f7f', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57652, hash: 'a46eb9336b7f92452bb6f7213f029d7d29f52aef60a113e6cae028023f717353', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57518, hash: 'fdaac7a146043547357b94e72b3101aaf94c29871b83a044a0bbf6406949d595', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-UPLKS576.css': {size: 44640, hash: 'mN24GvBkKAA', text: () => import('./assets-chunks/styles-UPLKS576_css.mjs').then(m => m.default)}
  },
};
