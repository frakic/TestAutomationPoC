import { defineConfig } from 'cypress'
import { EnvironmentVariables } from 'models/EnvironmentVariables'

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  env: {
    // The credentials included in this file are for demonstration purposes only.
    // In a production environment or any real project settings, sensitive data like usernames,
    // passwords or other secrets would be kept out of version control to prevent security risks.
    email: 'test@frakic.com',
    password: '45tCm%#n57',
    firstName: 'Test',
    lastName: 'User',
    apiUrl: 'https://jsonplaceholder.typicode.com',
  } as EnvironmentVariables,
  e2e: {
    baseUrl: 'https://www.latlong.net',
    setupNodeEvents(on, config) {
      ;(config.specPattern = 'cypress/tests/**/*.cy.ts'), (config.video = true)
      require('cypress-mochawesome-reporter/plugin')(on)
      return config
    },
  },
})
