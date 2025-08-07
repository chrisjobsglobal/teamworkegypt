
export default {
  basePath: '/',
  supportedLocales: {
  "en": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
