/// <reference types="cypress" />

import loginPage from '../support/pages/loginPage'

describe('Login EBAC', () => {

  beforeEach(() => {
    cy.visit('/minha-conta')
  })

  it('deve realizar login com sucesso', () => {
    loginPage.visitar()
    loginPage.preencherUsuario('admin_ebac')
    loginPage.preencherSenha('admin@123')
    loginPage.clicarLogin()
  })


  it('deve exibir erro ao logar com senha inválida', () => {
    cy.get('#username').type('user1_ebac')
    cy.get('#password').type('senhaerrada')
    cy.get('.woocommerce-form > .button').click()
    cy.contains('Erro').should('exist')
  })
})