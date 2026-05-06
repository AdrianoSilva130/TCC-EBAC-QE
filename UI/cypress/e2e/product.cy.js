describe('Carrinho', () => {

  beforeEach(() => {
    cy.visit('/produtos')
  })

  it('deve adicionar produto ao carrinho dinamicamente', () => {
    cy.get('.product-block').first().click()

    cy.get('.button-variable-item')
      .should('exist')
      .first()
      .click()

    cy.get('.button-variable-item')
      .eq(1)
      .click()

    cy.get('.single_add_to_cart_button').click()
  })
})