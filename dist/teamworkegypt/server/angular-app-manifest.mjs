
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "en",
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-DNRWGL6K.js",
      "chunk-VWRTEFLR.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZYUMHCPH.js",
      "chunk-VWRTEFLR.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X66TJY7Z.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/career-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/career-tips/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/career-tips/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/career-tips/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/career-tips/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/career-tips/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
    ],
    "route": "/career-tips/6"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GZDUOK7Q.js",
      "chunk-6FF5LNJX.js",
      "chunk-3PUFKPOI.js"
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
    'index.csr.html': {size: 11168, hash: 'f7497effaedb534c3b7e6af5b74550d42e0b1d954068d4c4428cc87389e34b9f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: '294e69df4b1c59b6358ba4f097ad6d31e286440995c97ce29b64c2965648c76f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 80193, hash: '6e22af30847d6a5c5f4504b9fe774cc11e307b24092e17c4f29e905adde994c2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career-tips/3/index.html': {size: 59192, hash: '4f0965ab12b59ab2473bd66f835837a230850f148b1e1b555a01e0cf505c1f1e', text: () => import('./assets-chunks/career-tips_3_index_html.mjs').then(m => m.default)},
    'career-tips/4/index.html': {size: 59292, hash: 'c0828b9500d8c96dd6b77a1750e41094c56aab04f17773fb27e74f9902279059', text: () => import('./assets-chunks/career-tips_4_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 45037, hash: 'a9e9a0f3ec61fae90fbc713dbbcab9f107d0b4ada6ee2486a44ea3f3822b4b7f', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'career-tips/5/index.html': {size: 59384, hash: 'f78d57e8d5590bb7ac953543604fbdd0864be8a896c3569f4eb606c997ceb226', text: () => import('./assets-chunks/career-tips_5_index_html.mjs').then(m => m.default)},
    'career-tips/1/index.html': {size: 59408, hash: 'aa062d36cd5025c962d5781b95c78907f875adf3c70229ae17fab00cb0d5e84a', text: () => import('./assets-chunks/career-tips_1_index_html.mjs').then(m => m.default)},
    'career-tips/index.html': {size: 54025, hash: '67801fedac0fe2bd31a264fce4d722f1dcb3badd25d58b5a7982a62b5f7edc5a', text: () => import('./assets-chunks/career-tips_index_html.mjs').then(m => m.default)},
    'career-tips/2/index.html': {size: 59359, hash: 'ab34632b2c73fc92548e7482e6a999df0ea5cc8a88de00f89b527fbc20402efc', text: () => import('./assets-chunks/career-tips_2_index_html.mjs').then(m => m.default)},
    'career-tips/6/index.html': {size: 59508, hash: '4df32fcad846fcd6386a2a4bf44780486914c06a8dfcea68d7119cccf20829a8', text: () => import('./assets-chunks/career-tips_6_index_html.mjs').then(m => m.default)},
    'styles-O2VFNPWD.css': {size: 46781, hash: 'rvk5v6XGqVM', text: () => import('./assets-chunks/styles-O2VFNPWD_css.mjs').then(m => m.default)}
  },
};
