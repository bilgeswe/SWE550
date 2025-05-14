// Alias DOM elements
cy.get('table').find('tr').as('rows')

// Reference the aliased elements later
cy.get('@rows').first().click()

// Example with stale elements
cy.get('[data-testid="todos"] li').first().as('firstTodo')

cy.get('@firstTodo').find('.edit').click()

cy.get('@firstTodo')
  .should('have.class', 'editing')
  .find('input')
  .type('Clean the kitchen') 