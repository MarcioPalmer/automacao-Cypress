import SeuBarrigaElements from '../support/elements/seubarriga-elements'
const seubarriga_elements = new SeuBarrigaElements

import dayjs from 'dayjs';
const dataAtual = dayjs().locale('pt-br').format('YYYY-MM-DD')


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

    it('deve criar uma operacao de debito', () => {
      cy.get(seubarriga_elements.botaoMovimentacao()).click()

      cy.get(seubarriga_elements.inputDescricao())
        .should('have.attr', 'placeholder', 'Descrição...')
        .type('Movimentação Teste')

      cy.get(seubarriga_elements.inputValor())
        .should('have.attr', 'placeholder', 'Valor')
        .type('1000')
        
      cy.get(seubarriga_elements.inputInteressado())
        .should('have.attr', 'placeholder', 'Interessado...')
        .type('Marcio') 

      cy.get(seubarriga_elements.botaoDespesa()).click()
        .should('have.css', 'background-color', 'rgb(200, 35, 51)')

      cy.get('select').select('Itaú')
        .should('have.value', '812333')

      cy.get(seubarriga_elements.inputDtPagamento())
        .should('have.value', dataAtual)
        .type('2021-09-30')
        
      cy.get(seubarriga_elements.botaoSalvar()).click()
      
      cy.get(seubarriga_elements.alerta())
        .should('have.text', 'Movimentação inserida com sucesso!')



    })

    it('deve criar uma movimentacao de credito', () => {
    cy.get(seubarriga_elements.botaoMovimentacao()).click()

      cy.get(seubarriga_elements.inputDescricao())
        .should('have.attr', 'placeholder', 'Descrição...')
        .type('Movimentação Teste Receita')

      cy.get(seubarriga_elements.inputValor())
        .should('have.attr', 'placeholder', 'Valor')
        .type('3000')
        
      cy.get(seubarriga_elements.inputInteressado())
        .should('have.attr', 'placeholder', 'Interessado...')
        .type('Marcio Teste') 

      cy.get(seubarriga_elements.botaoReceita()).click()
        .should('have.css', 'border-color', 'rgb(40, 167, 69)')

      cy.get('select').select('Santander')
        .should('have.value', '812389')

      cy.get(seubarriga_elements.inputDtPagamento())
        .should('have.value', dataAtual)
        .type('2021-10-01')
        
      cy.get(seubarriga_elements.botaoSalvar()).click()
      
      cy.get(seubarriga_elements.alerta())
        .should('have.text', 'Movimentação inserida com sucesso!')

    })