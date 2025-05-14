// Test isolation disabled
describe('Test Suite without Isolation', { testIsolation: false }, () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('first test', () => {
    cy.get('[data-testid="counter"]').should('contain', '0')
    cy.get('button').click()
    cy.get('[data-testid="counter"]').should('contain', '1')
  })

  it('second test', () => {
    // This test inherits state from previous test
    cy.get('[data-testid="counter"]').should('contain', '1')
  })
}) 