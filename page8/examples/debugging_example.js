describe('Debugging Example', () => {
  it('demonstrates debugging features', () => {
    cy.visit('https://example.cypress.io')
    
    // Using cy.pause() to step through commands
    cy.pause()
    
    cy.contains('type').click()
    
    // Using cy.debug() to break on a specific element
    cy.get('[data-testid="action-email"]')
      .debug()
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
}) 