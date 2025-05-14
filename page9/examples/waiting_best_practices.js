describe('Waiting Best Practices', () => {
  it('demonstrates proper waiting techniques', () => {
    // Good: Using route aliases for API calls
    cy.intercept('GET', '/api/todos').as('getTodos')
    cy.visit('/todos')
    cy.wait('@getTodos')

    // Good: Using assertions to wait for elements
    cy.get('[data-cy="todo-list"]')
      .should('be.visible')
      .and('have.length', 3)

    // Good: Using should callback for complex conditions
    cy.get('[data-cy="todo-item"]').should(($items) => {
      expect($items).to.have.length(3)
      expect($items[0]).to.contain('First todo')
    })

    // Good: Using multiple assertions in a chain
    cy.get('[data-cy="new-todo-input"]')
      .type('New todo item')
      .should('have.value', 'New todo item')
      .type('{enter}')

    // Good: Waiting for network requests to complete
    cy.intercept('POST', '/api/todos').as('createTodo')
    cy.get('[data-cy="submit-todo"]').click()
    cy.wait('@createTodo')
  })
}) 