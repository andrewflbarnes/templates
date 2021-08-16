/// <reference types="Cypress" />

const EXCHANGE_RATE_FIXTURE = 'exchange-rate';

describe ('External', () => {
  const setup = (responseCode) => {
    cy.intercept('GET', '**/currencies/gbp/eur.json', {
      fixture: responseCode >= 400 ? undefined : EXCHANGE_RATE_FIXTURE,
      statusCode: responseCode,
      // forceNetworkError: responseCode >= 400,
    }).as('exchangeRateRequest');
    cy.visit('/external')
    cy.wait('@exchangeRateRequest')
      .its('response.statusCode')
      .should('equal', responseCode);
  }

  describe('Response checks', () => {
    let rate;

    before(() => {
      cy.fixture(EXCHANGE_RATE_FIXTURE).then(exchangeRate => {
        rate = exchangeRate.eur;
        cy.log(rate)
      })
    })

    it('200 - exchange rate loaded', () => {
      setup(200);

      cy.get('.rate')
        .should('contain', rate)
        .contains(/Exchange rate: \d+\.\d+/)

      cy.get('.spinner')
        .should('not.exist')

      cy.get('.error-msg')
        .should('not.exist')
    })

    it('403 - missing rate message', () => {
      setup(403);

      cy.get('.rate')
        .should('not.exist')

      cy.get('.spinner')
        .should('not.exist')

      cy.get('.error-msg')
        .should('contain', 'No exchange rate')
    })

    it('500 - interpretted error message', () => {
      setup(500);

      cy.get('.rate')
        .should('not.exist')

      cy.get('.spinner')
        .should('not.exist')

      cy.get('.error-msg')
        .should('contain', '500')
    })
  })

  describe('Content checks', () => {
    before(() => {
      setup(200);
    })

    it(`Contains info message`, () => {
      cy.get('body')
        .should('contain', 'This page makes an external API request')
    })

    it('Contains exchange rate', () => {
      cy.get('.rate')
        .contains(/Exchange rate: \d+\.\d+/)

      cy.get('.spinner')
        .should('not.exist')

      cy.get('.error-msg')
        .should('not.exist')
    })
  })
})
