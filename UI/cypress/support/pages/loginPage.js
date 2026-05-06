class LoginPage {
  visitar() {
    cy.visit('/minha-conta')
  }

  preencherUsuario(usuario) {
    cy.get('#username').type(usuario)
  }

  preencherSenha(senha) {
    cy.get('#password').type(senha)
  }

  clicarLogin() {
    cy.get('.woocommerce-form > .button').click()
  }
}

export default new LoginPage()