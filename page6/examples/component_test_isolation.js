// Component testing always has test isolation
describe('Component Tests', () => {
  beforeEach(() => {
    // Component is unmounted and remounted for each test
    cy.mount(<Counter />)
  })

  it('first test', () => {
    cy.get('[data-testid="counter"]').should('contain', '0')
    cy.get('button').click()
    cy.get('[data-testid="counter"]').should('contain', '1')
  })

  it('second test', () => {
    // Component starts fresh for each test
    cy.get('[data-testid="counter"]').should('contain', '0')
  })
}) 