// This won't work as expected
const button = cy.get('button')
const form = cy.get('form')

button.click()

// Instead, use .then()
cy.get('button').then(($btn) => {
  // $btn is the object that the previous command yielded
  const txt = $btn.text()
  
  cy.get('form').submit()
  
  cy.get('button').should(($btn2) => {
    expect($btn2.text()).not.to.eq(txt)
  })
}) 