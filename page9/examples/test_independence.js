describe('Test Independence', () => {
  // Good: Setting up test state before each test
  beforeEach(() => {
    cy.visit('/dashboard')
    cy.get('[data-cy="user-menu"]').click()
    cy.get('[data-cy="logout"]').click()
  })

  // Good: Each test is independent and can run alone
  it('can log in with valid credentials', () => {
    cy.get('[data-cy="email-input"]').type('user@example.com')
    cy.get('[data-cy="password-input"]').type('password123')
    cy.get('[data-cy="login-button"]').click()
    cy.url().should('include', '/dashboard')
  })

  // Good: Another independent test
  it('shows error with invalid credentials', () => {
    cy.get('[data-cy="email-input"]').type('invalid@example.com')
    cy.get('[data-cy="password-input"]').type('wrongpass')
    cy.get('[data-cy="login-button"]').click()
    cy.get('[data-cy="error-message"]').should('be.visible')
  })

  // Good: Using aliases for shared elements
  it('can reset password', () => {
    cy.get('[data-cy="forgot-password"]').as('forgotLink')
    cy.get('@forgotLink').click()
    cy.url().should('include', '/reset-password')
  })
}) 