
it("chai implicit subject example", () => {
  cy.visit('/2-asserting/ex2-chai-implicit')

  cy.get('main h1').should('have.contain', 'Chai Implicit Subject')
  cy.get('main p').should('be.visible')
  cy.get('main em').should('not.be.visible')

  // longest way
  cy.get('main a').should('have.class', 'active')
  cy.get('main a').should('contain', 'Visit here')
  cy.get('main a').should('have.attr', 'href', '/posts')

  // preferred way
  cy.get('main a')
    .should('have.class', 'active')
    .and('have.attr', 'href', '/posts')
    .and('contain', 'Visit here')

});
