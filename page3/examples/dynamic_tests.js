describe('if your app uses jQuery', () => {
  ;['mouseover', 'mouseout', 'mouseenter', 'mouseleave'].forEach((event) => {
    it('triggers event: ' + event, () => {
      // if your app uses jQuery, then we can trigger a jQuery
      // event that causes the event callback to fire
      cy.get('#with-jquery')
        .invoke('trigger', event)
        .get('[data-testid="messages"]')
        .should('contain', 'the event ' + event + 'was fired')
    })
  })
})

// The code above will produce a suite with 4 tests:
// > if your app uses jQuery
//   > triggers event: 'mouseover'
//   > triggers event: 'mouseout'
//   > triggers event: 'mouseenter'
//   > triggers event: 'mouseleave' 