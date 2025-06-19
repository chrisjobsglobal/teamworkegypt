
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en-US/',
  locale: "en-US",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-DNRWGL6K.js",
      "chunk-VWRTEFLR.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/en-US"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZYUMHCPH.js",
      "chunk-VWRTEFLR.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/en-US/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X66TJY7Z.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/en-US/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/en-US/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/en-US/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/en-US/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/en-US/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/en-US/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/en-US/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
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
    'index.csr.html': {size: 11177, hash: '6faa2ac1c595c13a582c6651a2ef66eadf12cf64375ca60fcfafa95fdfdde966', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1081, hash: '13084e58aba7fe5dddce16e414d7559bcca6a07bf913ddca4c4d80f4db41935c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59235, hash: 'a4c9be48f752fdb25458df4a748030e514588f060758efb1c058d82356f1bb33', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'index.html': {size: 80218, hash: '31746be88a7e3458046142009116d30315bd654e1f5983d6ea59595f6fbb0873', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59335, hash: 'bf9f2c5f73c33d2b8f8d7669ccb37197711e15663553990ce5206513a8f93062', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59451, hash: 'cdd1a0206dfb4f239d0a3efb4b4eea812547a256bd48cc412951004b350799f0', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59427, hash: 'a452482171d1545f080e857514fa5fc5f22e71cd4d7e5ae55f2cfb7e274bcb5c', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59536, hash: 'b9d3a7ee250dfa736d5a5052fcd0449d8e7144010f3eba99a4f7d8472696b2b1', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54074, hash: 'ae00c8ca5125a7892ddc9ffde00df06b174bd8b8a46608d4aba5d2cacf96cfd5', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45062, hash: '66695a52070e036ebb660c9bb55972a3c4c236a24dad6e5020b78846f130c626', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59402, hash: 'cbd656d9fac50da63054d34a2b80e1b3c996767ee3290882df502ad2e3967a74', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'styles-O2VFNPWD.css': {size: 46781, hash: 'rvk5v6XGqVM', text: () => import('./assets-chunks/styles-O2VFNPWD_css.mjs').then(m => m.default)}
  },
};
