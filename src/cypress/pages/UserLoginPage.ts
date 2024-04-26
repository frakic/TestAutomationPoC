import { LoginOptions } from 'cypress/models/LoginOptions'

export class UserLoginPage {
  visit() {
    cy.visit('/user/login')
  }

  fillEmail(email: string) {
    const emailField = cy.get('#email')

    emailField.clear()
    emailField.type(email)

    return this
  }

  fillPassword(password: string) {
    const passwordField = cy.get('#password1')

    passwordField.clear()
    passwordField.type(password)

    return this
  }

  clickSubmit(options?: LoginOptions) {
    const firstName = Cypress.env('firstName')
    const lastName = Cypress.env('lastName')

    cy.get('button[title="Login"]').click()

    if (options?.incorrectPassword) {
      cy.title().should('eq', 'User Login')
      cy.contains('.message.error', 'Incorrect password!').should('be.visible')
      return
    }

    if (options?.shortPassword) {
      cy.title().should('eq', 'User Login')
      cy.contains(
        '.message.error',
        'Your password must be at least 6 characters.'
      ).should('be.visible')
      return
    }

    cy.title().should('eq', 'User Homepage')
    cy.contains('h5', `Welcome ${firstName} ${lastName}`).should('be.visible')
  }
}
