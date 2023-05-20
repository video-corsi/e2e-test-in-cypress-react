
describe('My First Group', () => {
  beforeEach(() => {
    cy.visit('/playground')
  })


  it('display the title in a H1 element', () => {
    cy.get('h1').then($el => {
      expect($el).to.contain('Home Page');
      expect($el).not.be.empty;
    })
  })
})
