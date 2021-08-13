describe('App', () => {
  before(() => {
      cy.visit('/')
  })

  it('Has Home link', () => {
    cy.get('a[href="/"]')
      .should('have.text', 'Home')
      .click()

    cy.url()
      .should('equal', `${Cypress.config().baseUrl}/`)
  })

  it('Has Message link', () => {
    cy.get('a[href="/message"]')
      .should('have.text', 'Message')
      .click()

    cy.url()
      .should('equal', `${Cypress.config().baseUrl}/message`)
  })
})