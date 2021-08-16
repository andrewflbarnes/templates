/// <reference types="Cypress" />

describe('Message', () => {
  before(() => {
    cy.visit('/message')
  })

  it('has a friendly message', () => {
    cy.get('body')
      .should('contain', 'Hello :)')
  })
})