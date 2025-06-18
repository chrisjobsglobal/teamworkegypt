
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
    'index.csr.html': {size: 11053, hash: '5277dc168d5c4017a24298b14d703adf142989d10fe1f4b5ab1b893493cd87ff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: '94fdd5e7fd70a71a1341293dfdfb578c6711a051b2c5646daa0c2400687b539e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 57421, hash: 'c3605bd68899b3e8a4d5e0bcf194e3c188a2d1e276e5f87055deac9a8b02a42c', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'index.html': {size: 77794, hash: 'c1d47a11af589202c1d34820cd81afc8a0c5b9204ad4eb9f76ff816a0cfe861a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 57321, hash: '2f4eb223881cc2211ce022dd17789cfc8907339e90bf603b100ccc4aab46582c', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 57537, hash: '8a5259c1d7e133dc83138b8dd92d4b07672d48f3280274a79377605e95d7cd63', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 43230, hash: 'd880c75c28e660794b6e59905cab132281a27ce31f14c5f44ad35a056cca8468', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 52125, hash: '9cdd6412d49480c1aeb879371ab41f4d359aa3b652081bd0f4162af0d8a2c25d', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 57513, hash: 'b21d0c0fc371fbee2536e18fc4265f69fff7ea6f7548ba96bc2bfd3693f29588', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 57622, hash: '36ca563a28110fd98fb6bf6e0d738db8f33db644b35f5b5288682abc4ca2c3e9', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 57504, hash: '018912b5d0c3711bbf347eabf75354e663c50bd1886cafd3987a5ce068fc9cd6', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-UPLKS576.css': {size: 44640, hash: 'mN24GvBkKAA', text: () => import('./assets-chunks/styles-UPLKS576_css.mjs').then(m => m.default)}
  },
};
