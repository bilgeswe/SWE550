// Using aliases with beforeEach
beforeEach(() => {
  // alias the users fixtures
  cy.fixture('users.json').as('users')
})

it('utilize users in some way', function () {
  // access the users property
  const user = this.users[0]

  // make sure the header contains the first user's name
  cy.get('header').should('contain', user.name)
})

// Using cy.get() with @ syntax
it('utilize users with @ syntax', function () {
  cy.get('@users').then((users) => {
    const user = users[0]
    cy.get('header').should('contain', user.name)
  })
}) 