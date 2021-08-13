describe('App', () => {
  before(() => {
      cy.visit('/')
  })

  it('Has Home link', () => {
    cy.get('a[href="/"]')
      .should('have.text', 'Home')
  })

  it('Has Message link', () => {
    cy.get('a[href="/message"]')
      .should('have.text', 'Message')
  })
})