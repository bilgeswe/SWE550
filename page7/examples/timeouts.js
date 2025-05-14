// Increase timeout for a specific command
cy.get('[data-testid="mobile-nav"]', { timeout: 10000 })
  .should('be.visible')
  .and('contain', 'Home')

// Disable retry by setting timeout to 0
cy.get('[data-testid="ssr-error"]', { timeout: 0 }).should('not.exist') 