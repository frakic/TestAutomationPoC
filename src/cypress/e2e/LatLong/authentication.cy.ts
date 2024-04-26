import { UserLoginPage } from '../../pages'

describe('Authentication', () => {
  const userLoginPage = new UserLoginPage()

  const email = Cypress.env('email')
  const password = Cypress.env('password')

  beforeEach(() => {
    userLoginPage.visit()
  })

  it('redirects to the user homepage after successful login', () => {
    userLoginPage.fillEmail(email)
    userLoginPage.fillPassword(password)
    userLoginPage.clickSubmit()
  })

  it('displays an error when the password is incorrect', () => {
    const password = 'wrong123!'

    userLoginPage.fillEmail(email)
    userLoginPage.fillPassword(password)
    userLoginPage.clickSubmit({ incorrectPassword: true })
  })

  it('displays an error when the password is too short', () => {
    const password = 'short'

    userLoginPage.fillEmail(email)
    userLoginPage.fillPassword(password)
    userLoginPage.clickSubmit({ shortPassword: true })
  })
})
