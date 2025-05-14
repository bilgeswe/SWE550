// ❌ Incorrectly chaining commands
cy.get('.new-todo')
  .type('todo A{enter}') // action
  .type('todo B{enter}') // action after another action - bad
  .should('have.class', 'active') // assertion after an action - bad

// ✅ Correctly ending chains after an action
cy.get('.new-todo').type('todo A{enter}')
cy.get('.new-todo').type('todo B{enter}')
cy.get('.new-todo').should('have.class', 'active')

// ✅ Using aliases to make the pattern less intrusive
cy.get('.new-todo').as('new')

cy.get('@new').type('todo A{enter}')
cy.get('@new').type('todo B{enter}')
cy.get('@new').should('have.class', 'active') 