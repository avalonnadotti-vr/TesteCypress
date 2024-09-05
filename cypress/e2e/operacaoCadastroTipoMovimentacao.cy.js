/// <reference types="Cypress" />

describe('Testes de Operação - Cadastro - Tipo de Movimentação', () => {
  it('Cadastro, consulta e Exclusão de oooooooooooo', () => {
    cy.Login()
    cy.visitTipoMovimentacao()
    cy.get('vr-nav-button-add > .main-nav-action__btn--container > vrc-icon > .vr').click()
    cy.get('input[placeholder="Descrição"]').type('Teste QA [AVALON NADOTTI]')

    cy.get('div.col-sm-2 div.form-group div.select2 span.select2-selection__arrow').click()
    cy.get('div.col-sm-2 div.form-group div.select2 li.select2-results__option div.select2-label-content')
    .first().click()
    
    cy.get('div.col-sm-1 div.form-group div.select2 span.select2-selection__arrow').click()
    cy.get('div.col-sm-1 div.form-group div.select2 span.select2-selection__arrow li.select2-results__option div.select2-label-content')
    .first().click()

    cy.get('button[type="submit"]').click()

    cy.visitTipoMovimentacao()
    cy.get('input[placeholder="Descrição"]').type('Teste QA [Avalon Nadotti]')
    cy.get('span[title="Teste QA [Avalon Nadotti]"').should('be.visible')
    cy.get('a[title="Inativar"]').click()
  })
})