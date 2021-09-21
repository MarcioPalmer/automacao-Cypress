import SeuBarrigaElements from '../support/elements/seubarriga-elements'
const seubarriga_elements = new SeuBarrigaElements

beforeEach(() => {
    cy.visit('https://barrigareact.wcaquino.me')  
    cy.get(seubarriga_elements.campoEmail())
      .should('have.attr', 'placeholder', 'seu@email.com') 
      .type('marcioap.alterdata@alterdata.com.br')

    cy.get(seubarriga_elements.camposenha())
      .should('have.attr', 'placeholder', 'Senha') 
      .type('123456')

    cy.get(seubarriga_elements.botao())
      .should('have.text', 'Entrar')  
      .click()

      cy.get(seubarriga_elements.alerta())
      .should('have.text', 'Bem vindo, Marcio!')
      cy.get('.toast-info > .toast-close-button').click()
    })


it.skip('deve fazer login no seu barriga', () => {
})

it('criar uma conta no seu barriga', () => {
    cy.get(seubarriga_elements.botaoConfiguracao()).click()
    cy.get(seubarriga_elements.contas())
        .should('have.text', 'Contas')
        .click()

    cy.get(seubarriga_elements.inputConta())
        .should('have.attr', 'placeholder', 'Conta...')
        .type('Bradesco')

    cy.get('.btn').click()
    cy.get(seubarriga_elements.alerta())
        .should('have.text', 'Conta inserida com sucesso!')    
})

it('deve retornar erro ao inserir conta já existente', () => {
    cy.get(seubarriga_elements.botaoConfiguracao()).click()
    cy.get(seubarriga_elements.contas())
        .should('have.text', 'Contas')
        .click()

    cy.get(seubarriga_elements.inputConta())
        .should('have.attr', 'placeholder', 'Conta...')
        .type('Bradesco')

    cy.get(seubarriga_elements.botao()).click()
    cy.get(seubarriga_elements.alerta())
        .should('have.text', 'Erro: Error: Request failed with status code 400')
           

})

it('excluir conta existente', () => {
    cy.get(seubarriga_elements.botaoConfiguracao()).click()

    cy.get(seubarriga_elements.contas())
        .should('have.text', 'Contas')
        .click()

    cy.get(seubarriga_elements.botaoExcluir()).click()
    
    cy.get(seubarriga_elements.alerta())
        .should('have.text', 'Conta excluída com sucesso!')


})

it('deverá editar conta existente', () => {
    cy.get(seubarriga_elements.botaoConfiguracao()).click()
    cy.get(seubarriga_elements.contas())
        .should('have.text', 'Contas')
        .click()

    cy.get(seubarriga_elements.botaoEditar()).click()

    cy.get(seubarriga_elements.inputConta())
    .should('have.value', 'Itaú Unibanco')
    .clear()
    .type('Itaú')

    cy.get(seubarriga_elements.botao()).click()
    cy.get(seubarriga_elements.alerta())
        .should('have.text', 'Conta atualizada com sucesso!'); 

})


