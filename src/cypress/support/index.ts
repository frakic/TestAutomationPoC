/// <reference types="cypress" />
import './commands.ts'

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Cypress.Chainable<void>
    }
  }
}
