describe('Selector Best Practices', () => {
  it('demonstrates good selector practices', () => {
    cy.visit('https://example.cypress.io')
    
    // Good: Using data-testid attribute
    cy.get('[data-testid="action-email"]')
      .type('test@example.com')
    
    // Good: Using contains with specific text
    cy.contains('Submit')
      .click()
    
    // Good: Using multiple attributes for specificity
    cy.get('button[type="submit"][data-testid="submit-button"]')
      .should('be.visible')
    
    // Good: Using parent-child relationships
    cy.get('form')
      .find('input[type="email"]')
      .should('exist')
  })
}) 