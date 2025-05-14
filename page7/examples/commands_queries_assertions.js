it('creates an item', () => {
  // Non-query commands only execute once
  cy.visit('/')

  // The .focused() query and .should() assertion link together
  cy.focused().should('have.class', 'new-todo')

  // The queries .get() and .find() link together
  cy.get('.header').find('.new-todo').type('todo A{enter}')

  // Two queries and an assertion chained together
  cy.get('.todoapp').find('.todo-list li').should('have.length', 1)
}) 