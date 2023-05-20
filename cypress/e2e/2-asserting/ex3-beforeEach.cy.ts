describe('Before Each', () => {
  beforeEach(() => {
    cy.visit(`2-asserting/ex3-beforeEach`);
  })

  it("Chai BDD Assertions", () => {
    cy.get('#title')
      .should('exist')
      .and('have.class', 'text-xl')
      .and('not.have.class', 'text-sm')
  });

  it("Chai-jQuery Example", () => {
    cy.get('#title')
      .then($el => {
        expect($el).to.have.class('text-xl')
        expect($el).not.to.have.class('text-sm')
      })
  });

})
