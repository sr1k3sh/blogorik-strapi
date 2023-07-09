module.exports = {
  upload: {
    config: {
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      providerOptions: {
          bucketName: 'blogofrik_cloudbuild',
          publicFiles: true,
          uniform: false,
          // basePath: '',
          serviceAccount: {
            "type": "service_account",
            "project_id": "blogofrik",
            "private_key_id": "4644aeb4b2eeddca7854b8dcbb8c9a67b860c3a5",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDZKFU7tlcwpZjH\nAp+DBvhmKB/hOw+8IojwZu7PaL/kwn5Qr8pSWQ0weDJMXJ/VIjV5LmWfNXuiSaFd\njAfohIlf/MoqAHdvYccXIojnTVfwdJrvvR6ZHuVAnFfpxbuyaoy95uKUnd3KV3Tw\nzJCpD3rJzZtZYehrvnctySi4C0FQ7TnptgkUNG2yxqbEgYlvz7OeYi8pxC8bYptR\ncROoBwToROpKXAeH6Fc+RS8l1Qs8CoH08mINLNMnlOa8paSPouWllOXp4e/hFNiw\n8PATFo8EFlUswjF3MudpLY3kP3mFX42re9aU0AiD79oktE2yv1Ujsd/wsxInperq\nsNXuo441AgMBAAECggEAF9pnEF3NUn3iG/wVBui5WMlQBSa+afk2Jwf7c+Nq7qcR\nhm3k0KpQ+VG+nqYu9VOiYYr/5R7UE4W4eKTUyoziZR2InFf8RosMOiWUOaoEfphk\nW3Cf34xl/LSfsIFEhorPJl3p5g64Kc10/i1ON4/IeknAJm+LfuhHQYt+0kaEOG3+\niuVt0a6knVsavDWLVrTp9AJxqINozbailwj4GmUav/Maly3S+EHgNBjyiCWDgkGO\ntQFVFPLB7zBKmHFtAImFjYVr3v1miYzM4wjmYgP4ivTxNsi3S7Jolc8yYC9iMVCF\n1FU0T2Kpf/+Cw+zGo2MgLASEjUQ01KtO80/wAWE5yQKBgQD3R+YOhU6Ieh5qGnzb\nw7LLjuPFMB3e2GKM/GUCuDTSXUjow28r+AvVIKZFa9wDNgraO1fuE+E1Y4McW1fs\nYCtQaekFUl6h0kV5xAk0JzGs/t8gcZAniy+sNBQZHmU7WZbwL3vfOElx5djgbG55\nbAcIprwdv/7NHF15O+HqzWL5SQKBgQDg0IYVLBUMb+K5UIs+BrcYsaQjlQ+Xdfij\ntAWCTbSfacipi9FoWRM68uELWMNfPyuw2CiJbOK2nddsdAatkAsEx6JnaNZeBJeB\nbRhVBIjfrQXpTj7mfyRbG4Cz+qlOLPehrUmHjVpczmZkqkTUy4QML/rZrXRVzE6e\nYTCc76c5jQKBgQDeh2xnyt1GgicWsumD15PyDY+55zgqT644U/YOwXh/iwVOunk0\nJ092p6AZvxvKI/sWMutJS8iShA/8F9OC23R/NCBH8r1IgPKWxqzFqzPQC7j9+FSS\n0XXAUUl45VqSU2g6k3C1C3FEt2Q5ajrsuCOITIvjdeE18f3IWPRQmi4kSQKBgFfH\nc6MOrEVH5nm/Bi84xgMBUXqHOChGasfYgZIoLw9TaYMx0Zjxtr18mfwpM1ecPb32\nGJXYCwmMxdFV2EmqhXLfU/0WhST+m/1wEGEZvSvAzh8TayHqoNJmAbHEfJjGnAXn\nuF8SBSdZe8dwaCHCORPdJBAcVuEtPcE/Z5DPTjb9AoGAF2gc/3T9PEIx6Vrnvr10\nUjB0nmEQ8QbKH9FQ4y1jjAW6UKZOO+oSe04FiA5Wd86xh6xvWosUCJZffJmj0da0\nl8G5sfbvS7Dcb722wJ/XOaIbZBPNb7lLJGuEBy8U86/3d5LuNv6uU1Ymx0c2qt6P\nRL1gkJ/P2t65WeZe5Y0FZqY=\n-----END PRIVATE KEY-----\n",
            "client_email": "rikeshshrestha@blogofrik.iam.gserviceaccount.com",
            "client_id": "101647102856727265094",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/rikeshshrestha%40blogofrik.iam.gserviceaccount.com",
            "universe_domain": "googleapis.com"
          },
          // baseUrl: 'https://storage.googleapis.com/{bucket-name}'
      },
    },
  },
  //...
}