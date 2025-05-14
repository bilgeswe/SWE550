// ❌ Incorrectly checking if the stub was called
const Clicker = ({ click }) => (
  <div>
    <button onClick={click}>Click me</button>
  </div>
)

it('calls the click prop twice', () => {
  const onClick = cy.stub()
  cy.mount(<Clicker click={onClick} />)
  cy.get('button')
    .click()
    .click()
    .then(() => {
      // works in this case, but not recommended
      // because .click() and .then() do not retry
      expect(onClick).to.be.calledTwice
    })
})

// ✅ Correctly waiting for the stub to be called
it('calls the click prop', () => {
  const onClick = cy.stub().as('clicker')

  cy.mount(<Clicker click={onClick} />)
  // Good practice 💡: Don't chain anything off of commands
  cy.get('button').click()
  cy.get('button').click()

  // Good practice 💡: Reference the stub with an alias
  cy.get('@clicker').should('have.been.calledTwice')
}) 