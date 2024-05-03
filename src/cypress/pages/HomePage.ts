export class HomePage {
  visit() {
    cy.visit('/')
      .title()
      .should('eq', 'Latitude and Longitude Finder on Map Get Coordinates')
  }

  fillPlaceName(placeName: string) {
    const placeNameField = cy.get('#place')

    placeNameField.clear()
    placeNameField.type(placeName)
    placeNameField.should('have.value', placeName)

    return this
  }

  clickFindButton() {
    return cy.get('#btnfind').click()
  }

  getLatLngSpanText() {
    return cy.get('#latlngspan').invoke('text')
  }

  getNoPlaceFoundMessage() {
    return cy.get('p').contains('No place found.')
  }
}
