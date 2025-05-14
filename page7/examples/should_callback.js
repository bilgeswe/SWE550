// ❌ Incorrectly waiting for values
cy.get('[data-testid="random-number"]') // <div>🎁</div>
  .invoke('text') // "🎁"
  .then(parseFloat) // NaN
  .should('be.gte', 1) // fails
  .and('be.lte', 10) // never evaluates

// ✅ Correctly waiting for values using .should(callbackFn)
cy.get('[data-testid="random-number"]').should(($div) => {
  // all the code inside here will retry
  // until it passes or times out
  const n = parseFloat($div.text())

  expect(n).to.be.gte(1).and.be.lte(10)
}) 