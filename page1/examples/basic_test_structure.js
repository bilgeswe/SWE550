describe('Test Suite', () => {
  it('Test Case', () => {
    cy.visit('/page')
    cy.get('.element').click()
    cy.get('.result').should('contain', 'Expected Text')
  })
}) 