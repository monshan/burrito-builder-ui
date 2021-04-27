describe('Order Form Functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept({
      url: '/api/v1/orders',
      method: 'POST'
    }, {
      statusCode: 201,
      body: {id: 11, name: "Finn", ingredients: ["cilantro", "carnitas", "guacamole"]}
    })
  })

  it('Should have a name input', () => {
    cy.get('[data-cy=name-input]')
      .should('exist')
      .and('be.visible')
  })

  it('Should have a specified list of checkbox inputs', () => {
    cy.get('[data-cy=ingredient-btns]')
      .children()
      .should('have.length', 24)
      .and('contain', 'beans')
      .and('contain', 'steak')
      .and('contain', 'hot sauce')
  })

  it('Should be able to add an order to the UI', () => {
    cy.get('[data-cy=name-input]')
      .type('Finn')
    cy.get('[data-cy=carnitas]').check()
    cy.get('[data-cy=guacamole]').check()
    cy.get('[data-cy=cilantro]').check()
    cy.get('[data-cy=submit]').click()
    cy.reload()
    cy.get('[data-cy=orders-container]')
      .children()
      .should('contain', 'Finn')
  })

  it('Should not be able to add an order if user does not enter name or ingredients', () => {
    cy.get('[data-cy=submit]').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal("Please enter both a Name and at least 1 ingredient to place an order!")
    })
  })
})