
export default {
  basePath: '/',
  supportedLocales: {
  "ar": "ar"
},
  entryPoints: {
    'ar': () => import('./ar/main.server.mjs')
  },
};
