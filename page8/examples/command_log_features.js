describe('Command Log Features', () => {
  it('demonstrates command log features', () => {
    // Page load event
    cy.visit('https://example.cypress.io')
    
    // XHR request event
    cy.intercept('GET', '/api/todos').as('getTodos')
    cy.get('[data-testid="load-todos"]').click()
    cy.wait('@getTodos')
    
    // Form submission event
    cy.get('form').submit()
    
    // URL hash change event
    cy.get('[data-testid="hash-link"]').click()
    
    // Command chaining with assertions
    cy.get('[data-testid="action-email"]')
      .should('be.visible')
      .and('be.enabled')
      .type('test@example.com')
      .should('have.value', 'test@example.com')
  })
}) 