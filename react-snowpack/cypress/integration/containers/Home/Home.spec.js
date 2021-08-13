/// <reference types="Cypress" />

const INITIAL_COUNT = 0;

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it(`Count starts on ${INITIAL_COUNT}`, () => {
    cy.get('.home-count')
      .should('have.text', INITIAL_COUNT)
  })

  it('Increment adds 1 to count', () => {
    cy.get('input[value=increment]')
      .click()

    cy.get('.home-count')
      .should('have.text', INITIAL_COUNT + 1)
  })

  it('Decrement subtracts 1 from count', () => {
    cy.get('input[value=decrement]')
      .click()

    cy.get('.home-count')
      .should('have.text', INITIAL_COUNT - 1)
  })

  it('Reset sets count to 0', () => {
    cy.get('input[value=decrement]')
      .click()

    cy.get('.home-count')
      .should('not.have.text', 0)

    cy.get('input[value=reset]')
      .click()

    cy.get('.home-count')
      .should('have.text', 0)
  })
})
