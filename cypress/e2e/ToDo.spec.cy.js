/// <reference types="cypress"/>

describe('Lista de Afazeres', () => {
  beforeEach( ()=> {
    cy.visit('/')
  })
  it('Adicionar uma tarefa', () => {
    
    cy.get('#todo_title').type('Aprender cypress')
    cy.get('.bg-white > .col-auto > .btn').click()
    cy.get('[x-text="todo.task"]').contains('Aprender cypress')

  })

  it ('Concluir uma tarefa', () => {

    cy.get('#todo_title').type('Aprender cypress')
    cy.get('.bg-white > .col-auto > .btn').click()
    cy.get('[x-text="todo.task"]').contains('Aprender cypress')
    cy.get('.form-check-input').click()
    cy.get('.completed').should('have.class', 'completed')

  })

  it ('Excluir uma tarefa', () => {
    cy.get('#todo_title').type('Aprender cypress')
    cy.get('.bg-white > .col-auto > .btn').click()
    cy.get('[x-text="todo.task"]').contains('Aprender cypress')
    cy.get('.text-end > .btn').click()
    cy.get('.table-responsive').should('not.have.value')
  })

  it('Não deve ser aceito caracteres invalidos ', () => {
    cy.get('.bg-white > .col-auto > .btn').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Digite um título para a tarefa!')
    })
  })
})