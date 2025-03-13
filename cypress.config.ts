import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // tu możesz dodać np. pluginy
      return config
    },
  },
})
