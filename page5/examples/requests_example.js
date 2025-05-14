// Alias a request
cy.request('https://jsonplaceholder.cypress.io/comments').as('comments')

// Access the aliased request later
cy.get('@comments').should((response) => {
  if (response.status === 200) {
    expect(response).to.have.property('duration')
  } else {
    // whatever you want to check here
  }
}) 