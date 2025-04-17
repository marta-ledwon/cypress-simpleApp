const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor')
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild')
const path = require('path')

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
          specPattern: '**/*.feature',
          supportFile: path.resolve(__dirname, 'cypress/support/e2e.ts'), // dostosuj jeśli inny plik
        },
      })    