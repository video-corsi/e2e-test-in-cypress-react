class LoginPage {
  elements = {
    emailInput: () => cy.get('input[type="email"]'),
    passInput: () => cy.get('input[type="password"]'),
    loginButton: () => cy.contains('Login')
  }

  login(username: string, password: string) {
    cy.visit('http://127.0.0.1:8090/_/#/login')
    this.elements.emailInput().type(username)
    this.elements.passInput().type(password)
    this.elements.loginButton().click()
  }
}

export default new LoginPage();
