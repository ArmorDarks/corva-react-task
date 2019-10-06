const { resolve } = require('path');
const createCustomConfig = require('../webpack.config.js')

module.exports = async ({ config, mode }) => {
  const custom = createCustomConfig()

  return {
    ...config,
    resolve: {
      ...config.resolve,
      extensions: custom.resolve.extensions
    },
    module: {
      ...config.module,
      rules: custom.module.rules
    }
  }
}
