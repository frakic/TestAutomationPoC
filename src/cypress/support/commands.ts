/// <reference types="cypress" />
import { UserLoginPage } from 'pages'

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.session(
    'userSession',
    () => {
      const userLoginPage = new UserLoginPage()

      userLoginPage.visit()

      userLoginPage.fillEmail(email)
      userLoginPage.fillPassword(password)
      userLoginPage.clickSubmit()
    },
    {
      validate() {
        cy.request('/user').its('status').should('eq', 200)
      },
    }
  )
})
