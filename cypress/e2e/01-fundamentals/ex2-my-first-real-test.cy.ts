describe('Ex2', () => {
  it('Visits the Hello Cypress page', () => {
    cy.visit('/1-fundamentals/ex2')
    cy.contains('Hello Cypress');
    cy.get('input[name="hello"]').type('Fabio Biondi{enter}');
    cy.url().should('include', '/home')
    cy.contains('Home');
  })
})
