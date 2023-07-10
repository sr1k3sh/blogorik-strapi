const fs = require('fs');
require('dotenv').config();
module.exports = ({env}) => ({
  upload: {
    config: {
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      providerOptions: {
          bucketName: 'blogofrik_cloudbuild',
          publicFiles: true,
          uniform: false,
          gzip: true,
          serviceAccount: {
            "type": "service_account",
            "project_id": env('PROJECT_ID'),
            "private_key_id": env('PRIVATE_KEY_ID'),
            "private_key": env('PRIVATE_KEY','') ? env('PRIVATE_KEY','').split(String.raw`\n`).join('\n') : '',
            "client_email": env('CLIENT_EMAIL'),
            "client_id": env('CLIENT_ID'),
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/rikeshshrestha%40blogofrik.iam.gserviceaccount.com",
            "universe_domain": "googleapis.com"
          },
      },
    },
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  //...
})