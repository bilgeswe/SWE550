class LoginPage {
  visit() {
    cy.visit('/login')
  }
  fillForm(username, password) {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
  }
  submit() {
    cy.get('form').submit()
  }
} 