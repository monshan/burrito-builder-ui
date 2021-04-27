describe('App View', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept({
      url: '/',
      method: 'GET'
    }, {
      fixture: "order.json"
    })
  })

  it('Should view all orders from initial GET request on load', () => {
    cy.get('[data-cy=orders-container]').should('exist')
  })
})