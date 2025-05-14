// Implicit assertions
cy.get('.element').should('exist')
cy.get('.button').should('be.visible')

// Explicit assertions
cy.get('.element').should(($el) => {
  expect($el).to.have.length(3)
}) 