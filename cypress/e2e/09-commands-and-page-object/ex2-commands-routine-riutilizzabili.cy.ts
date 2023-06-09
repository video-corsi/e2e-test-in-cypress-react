describe("Ex1 Command Simple Login", () => {
  beforeEach(() => {
    cy.visit('/9-commands-page-object/ex1-command-simple-login')
  })
  it('the SignIn button should be disabled by default', () => {
    cy.login('', '')
    cy.contains('SIGN IN').should('be.disabled');
  })

  it('the SignIn button should be disabled if validation fails', () => {
    cy.login('ma', '12')
    cy.contains('SIGN IN').should('be.disabled');
  })

  it('the SignIn button should be enabled if validation is successful', () => {
    cy.login('mario', '12345')
    cy.contains('SIGN IN').should('be.enabled');
  })

  it('visit home after login', () => {
    cy.login('mario', '12345')
    cy.contains('SIGN IN').click()
    cy.url().should('include', '/')
  })

});
