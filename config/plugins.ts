const fs = require('fs');
require('dotenv').config();
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 10,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  'strapi-cloudinary': {
    enabled: true,
    resolve: './src/plugins/strapi-cloudinary'
  },
  "video-field":{
    enabled:true
  },
  'users-permissions': {
    provider: 'google',
    providerOptions: {
      clientId: process.env.G_CLIENT_ID,
      clientSecret: process.env.G_CLIENT_SECRET,
      redirectUri: 'http://localhost:1337/connect/google/callback', // e.g., http://localhost:1337/connect/google/callback
    },
  },
  //...
})