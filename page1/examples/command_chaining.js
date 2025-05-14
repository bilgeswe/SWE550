cy.get('.button')
  .should('be.visible')
  .click()
  .should('have.class', 'active') 