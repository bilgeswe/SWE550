describe('TodoMVC', () => {
  it('is not written yet')

  it.skip('adds 2 todos', function () {
    cy.visit('/')
    cy.get('[data-testid="new-todo"]').as('new').type('learn testing{enter}')
    cy.get('@new').type('be cool{enter}')
    cy.get('[data-testid="todo-list"] li').should('have.length', 100)
  })

  xit('another test', () => {
    expect(false).to.true
  })

  it('only test chrome', { browser: 'chrome' }, () => {
    cy.visit('/')
    cy.contains('To Do')
  })
}) 