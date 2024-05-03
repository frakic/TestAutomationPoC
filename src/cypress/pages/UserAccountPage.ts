export class UserAccountPage {
  visit() {
    cy.visit('/user').title().should('eq', 'User Homepage')
  }

  clickLogoutLink() {
    cy.get('li>a').contains('Logout').click()
    cy.url().should('contain', 'user/login')
  }
}
