'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-cloudinary')
      .service('myService')
      .getWelcomeMessage();
  },
});
