// .eq() query will be retried even without any attached assertions
cy.get('.todo-list li') // query
  .should('have.length', 2) // assertion
  .eq(3) // query with implicit assertion 