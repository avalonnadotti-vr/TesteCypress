// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const login = Cypress.env('user')
const password = Cypress.env('password')

Cypress.Commands.add('Login', ()=>{

    cy.visit('https://demo.vrsoft.com.br/login')
    cy.get('input[placeholder="E-mail"]').type(login)
    cy.get('input[type="password"]').type(password)
    cy.get('button[type="submit"]').click()
    cy.get('div.main-nav-action').should('be.visible')

})

Cypress.Commands.add('visitTipoMovimentacao', ()=>{
    cy.visit('https://demo.vrsoft.com.br/operacao/cadastro/tipo-movimentacao/consulta')
})

Cypress.Commands.add('cadastrarTipoMovimentacao', ()=>{
    
})