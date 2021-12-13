module.exports = {
  'e2e': {
    specPattern: 'cypress/e2e/**/*',
    setupNodeEvents (on, config) {
      const plugin = require('./plugins')

      return plugin(on, config)
    },
  },
}
