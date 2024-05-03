import { Place } from 'models/Places'
import { HomePage } from 'pages'

describe('Homepage', () => {
  const homePage = new HomePage()

  const email = Cypress.env('email')
  const password = Cypress.env('password')

  beforeEach(() => {
    cy.login(email, password)
    homePage.visit()
  })

  it('finds coordinates for existing locations', () => {
    cy.fixture('places')
      .as('places.json')
      .then((places) => {
        places.forEach((place: Place) => {
          homePage.fillPlaceName(place.name)
          homePage.clickFindButton()
          homePage
            .getLatLngSpanText()
            .should('eq', `(${place.latitude}, ${place.longitude})`)
        })
      })
  })

  it('displays an error message when no place is found', () => {
    homePage.fillPlaceName('ThisPlaceDoesNotExist')
    homePage.clickFindButton()
    homePage.getNoPlaceFoundMessage().should('be.visible')
  })
})
