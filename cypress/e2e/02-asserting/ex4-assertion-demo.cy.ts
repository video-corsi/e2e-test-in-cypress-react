describe('ex4 - assertion example', () => {
  beforeEach(() => {
    cy.visit(`2-asserting/ex4-assertion`);
  })

  it("get by class", () => {
    cy.get('h1')
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Hello Chai')
      .and('have.class', 'active')
      .and('have.css', 'fontSize', '10px')
      .and('contain', 'Chai')
      .and('have.data', 'testid', 'chai');
  });

})
