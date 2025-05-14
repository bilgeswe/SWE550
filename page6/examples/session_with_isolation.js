// Session behavior with test isolation enabled
describe('Session Tests with Isolation', () => {
  beforeEach(() => {
    // Session clears page and browser context
    cy.session('user', () => {
      cy.visit('/login')
      cy.get('[data-testid="username"]').type('testuser')
      cy.get('[data-testid="password"]').type('password')
      cy.get('form').submit()
    })
  })

  it('first test', () => {
    cy.visit('/dashboard')
    cy.get('[data-testid="welcome"]').should('contain', 'testuser')
  })

  it('second test', () => {
    // Session is cleared between tests
    cy.visit('/dashboard')
    cy.get('[data-testid="welcome"]').should('contain', 'testuser')
  })
}) 