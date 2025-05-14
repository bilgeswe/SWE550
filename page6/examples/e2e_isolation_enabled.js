// Test isolation enabled (default)
describe('Test Suite with Isolation', () => {
  beforeEach(() => {
    // Each test starts with a clean slate
    cy.visit('/')
  })

  it('first test', () => {
    cy.get('[data-testid="counter"]').should('contain', '0')
    cy.get('button').click()
    cy.get('[data-testid="counter"]').should('contain', '1')
  })

  it('second test', () => {
    // This test starts fresh, counter is back to 0
    cy.get('[data-testid="counter"]').should('contain', '0')
  })
}) 