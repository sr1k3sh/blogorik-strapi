export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          // "img-src": ["'self'", "https: data:"],
          'img-src': ["'self'", 'data:', 'blob:', 'storage.googleapis.com', 'storage.cloud.google.com', 'market-assets.strapi.io'],
          'media-src': ["'self'", 'data:', 'blob:', 'storage.googleapis.com', 'storage.googleapis.com', 'market-assets.strapi.io'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // 'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
