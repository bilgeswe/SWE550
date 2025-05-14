describe('Selector Best Practices', () => {
  it('demonstrates proper selector usage', () => {
    cy.visit('/login')

    // Good: Using data-cy attribute (best practice)
    cy.get('[data-cy="email-input"]')
      .type('user@example.com')

    // Good: Using data-test attribute
    cy.get('[data-test="password-input"]')
      .type('password123')

    // Good: Using data-testid attribute
    cy.get('[data-testid="submit-button"]')
      .click()

    // Good: Using contains with specific text when text content is important
    cy.contains('Welcome back')
      .should('be.visible')

    // Good: Using parent-child relationships for specificity
    cy.get('form')
      .find('[data-cy="email-input"]')
      .should('have.value', 'user@example.com')
  })
}) 