class LoginPage {
  elements = {
    title: () => cy.contains('Hello Cypress'),
    usernameInput: () =>  cy.get('input[name="username"]'),
    usernamePassword: () =>  cy.get('input[name="password"]'),
    loginBtn: () =>  cy.contains('SIGN IN')
  };

  login(username: string, password: string) {
    cy.visit('playground')
    this.elements.title().should('exist');
    this.elements.usernameInput().type(username);
    this.elements.usernamePassword().type(password)
    this.elements.loginBtn().click()
  }
}

export default new LoginPage();
