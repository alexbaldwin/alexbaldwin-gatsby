/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe('Home', () => {
  before(() => {
    cy.visit('/')
  })

  it('should render about', () => {
    cy.get('[data-cy="index-page"]').should('be.visible')
  })
})
