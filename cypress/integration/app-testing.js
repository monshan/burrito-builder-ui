describe('App View', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept({
      url: '/api/v1/orders',
      method: 'GET'
    }, {
      fixture: "orders.json"
    })
  })

  it('Should display all orders from initial GET request on load', () => {
    cy.get('[data-cy=orders-container]')
      .should('exist')
      .and('be.visible')
  })

  it('Should display orders accurately', () => {
    cy.get('[data-cy=orders-container] .order')
      .first()
      .should('contain', 'Pat')
      .and('contain', 'beans')
      .and('contain', 'lettuce')
      .and('contain', 'carnitas')
      .and('contain', 'queso fresco')
      .and('contain', 'jalapeno')
  })

  it('Should display the order form', () => {
    cy.get('[data-cy=form]')
      .should('exist')
      .and('be.visible')
  })
})