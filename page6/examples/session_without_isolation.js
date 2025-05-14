// Session behavior with test isolation disabled
describe('Session Tests without Isolation', { testIsolation: false }, () => {
  beforeEach(() => {
    // Session only clears browser context, not page
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
    // Page state is preserved between tests
    cy.get('[data-testid="welcome"]').should('contain', 'testuser')
  })
}) 