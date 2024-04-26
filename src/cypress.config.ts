import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.latlong.net',
    setupNodeEvents(_on, config) {
      config.env = {
        // The credentials included in this file are for demonstration purposes only.
        // In a production environment or any real project settings, sensitive data like usernames,
        // passwords or other secrets would be kept out of version control to prevent security risks.
        email: 'test@frakic.com',
        password: '45tCm%#n57',
        firstName: 'Test',
        lastName: 'User',
      }
      return config
    },
  },
})
