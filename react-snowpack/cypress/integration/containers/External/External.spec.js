/// <reference types="Cypress" />

const EXCHANGE_RATE_FIXTURE = 'exchange-rate';

describe('External', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/gbp/eur.json', {
      fixture: EXCHANGE_RATE_FIXTURE,
      statusCode: 200,
    }).as('exchangeRateRequest');
    cy.visit('/external')
  })

  it(`Contains info message`, () => {
    cy.get('body').should('contain', 'This page makes an external API request')
  })

  it('Loads the exchange rate', () => {
    cy.wait('@exchangeRateRequest')
      .its('response.statusCode')
      .should('equal', 200);

    cy.fixture(EXCHANGE_RATE_FIXTURE).then(exchangeRate => {
      const { eur: rate } = exchangeRate;
      cy.log(rate)
      cy.get('.rate')
        .should('contain', rate)
    })

    cy.get('spinner')
      .should('not.exist')

    cy.get('error-msg')
      .should('not.exist')
  })
})
