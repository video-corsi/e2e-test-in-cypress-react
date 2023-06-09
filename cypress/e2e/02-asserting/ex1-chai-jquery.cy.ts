it("ex1 - chai jquery example", () => {
  cy.visit('/2-asserting/ex1-chai-jquery')

  cy.get('main h1').then($el => {
    expect($el).to.contain('Chai jQuery')
  })

  cy.get('main p').then($el => {
    expect($el).to.be.visible
  })
  cy.get('main em').then($el => {
    expect($el).not.to.be.visible
  })

  cy.get('main a').then($el => {
    expect($el).to.have.class('active');
    expect($el).to.have.attr('href', '/posts');
  })
});
