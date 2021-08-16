/// <reference types="Cypress" />

const INITIAL_COUNT = 0;

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
    expect(cy.get('input[value="enable interval"]')).not.to.be.null
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

  it('Interval enable increments by 1 every second', () => {
    cy.clock()

    cy.get('input[value="enable interval"')
      .click()

    cy.tick(1000)

    cy.get('.home-count')
      .should('have.text', 1)

    cy.tick(1000)

    cy.get('.home-count')
      .should('have.text', 2)

    cy.clock().then(clock => clock.restore())
  })

  it('Interval disable stops increments', () => {
    cy.clock()

    cy.get('input[value="enable interval"')
      .click()

    cy.tick(100)

    cy.get('input[value="disable interval"')
      .click()

    cy.tick(10000)

    cy.get('.home-count')
      .should('have.text',0)

    cy.clock().then(clock => clock.restore())
  })
})
