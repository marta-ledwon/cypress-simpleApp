const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor')
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild')
const path = require('path')

// Determine which test suite to run based on TEST_SUITE env var (api, bdd, e2e)
const suite = process.env.TEST_SUITE || 'bdd'
const specPatterns = {
  api: 'cypress/e2e/API-tests/**/*.ts',
  bdd: 'cypress/e2e/BDD-tests/**/*.feature',
  e2e: 'cypress/e2e/E2E-tests/**/*.ts',
  all: 'cypress/e2e',
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config)

      on(
          'file:preprocessor',
          createBundler({
          plugins: [createEsbuildPlugin(config)],
          })
        )
      
            return config
          },
          // Dynamically choose specPattern and supportFile by suite
          specPattern: specPatterns[suite] || specPatterns.bdd,
          supportFile: suite === 'bdd'
            ? path.resolve(__dirname, 'cypress/support/e2e.ts')
            : false,
        },
      })    