describe('Ex2 Get', () => {
  beforeEach(() => {
    cy.visit('5-query/ex2-get');
  })

  it('test selectors', () => {
    cy.get('h1').contains('Hello Cyp');
    cy.get('div > div > h1').contains('Hello Cypress');
    cy.get('.hello').contains('Hello Class')
    cy.get('[data-testid="hello"]').contains('Hello DataTest')
    cy.get('input').should('have.value', 'Fabio Biondi')
    cy.get('input[name="firstname"]').should('have.value', 'Fabio Biondi')
  })
})
