const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  publicRuntimeConfig: {
    WP_API_URL: process.env.WP_API_URL,
    BASE_URL: process.env.BASE_URL
  },
  reactStrictMode: true,
  poweredByHeader: false
}
