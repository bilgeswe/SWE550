/// <reference types="cypress" />

describe('TodoMVC', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('hides footer initially', () => {
    cy.get('[data-testid="filters"]').should('not.exist')
  })

  it('adds 2 todos', () => {
    cy.get('[data-testid="new-todo"]').as('new').type('learn testing{enter}')
    cy.get('@new').type('be cool{enter}')
    cy.get('[data-testid="todo-list"] li').should('have.length', 2)
  })
})

// If the beforeEach fails:
beforeEach(() => {
  cy.visit('/does-not-exist')
}) 