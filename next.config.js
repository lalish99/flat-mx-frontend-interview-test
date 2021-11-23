const WebpackBar = require('webpackbar')

module.exports = {
  distDir: 'dist/frontend',
  env: {
    VERSION: process.env.npm_package_version,
    STAGE: process.env.STAGE ?? 'dev',
  },
  webpack: config => {
    config.plugins.push(
      new WebpackBar({
        fancy: true,
        profile: true,
        basic: false
      })
    )
    config.node = {
      ...config.node,
      fs: 'empty',
      child_process: 'empty',
      net: 'empty',
      tls: 'empty'
    }
    return config
  }
}
