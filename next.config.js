const WebpackBar = require('webpackbar')

module.exports = {
  distDir: 'dist/frontend',
  env: {
    VERSION: process.env.npm_package_version,
    STAGE: process.env.STAGE ?? 'dev',
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new WebpackBar({
        fancy: true,
        profile: true,
        basic: false
      })
    )
    return config
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/branches',
        permanent: true,
      },
    ]
  },
}
