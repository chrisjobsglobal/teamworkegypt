
export default {
  basePath: '/',
  supportedLocales: {
  "en-US": "en-US",
  "ar": "ar",
  "en": ""
},
  entryPoints: {
    'en-US': () => import('./en-US/main.server.mjs'),
    'ar': () => import('./ar/main.server.mjs'),
    '': () => import('./main.server.mjs')
  },
};
