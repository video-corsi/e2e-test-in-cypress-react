describe('Ex1 List Get Find', () => {
  beforeEach(() => {
    cy.visit('/6-list/ex1-list-get-find')
  })


  it(`display 3 articles`, () => {
    cy.get('main article')
      .should('have.length', 3)

    cy.get('main')
      .find('article')
      .should('have.length', 3)

  });

})