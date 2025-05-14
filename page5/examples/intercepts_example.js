// Alias an intercepted route
cy.intercept('POST', '/users', { id: 123 }).as('postUser')

cy.get('form').submit()

// Wait for the intercepted route and make assertions
cy.wait('@postUser').then(({ request }) => {
  expect(request.body).to.have.property('name', 'Brian')
})

cy.contains('Successfully created user: Brian') 