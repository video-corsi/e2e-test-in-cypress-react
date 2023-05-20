class HomePage {
  elements = {
    title: () => cy.contains('Home Page'),
    url: () => cy.url().should('include', '/home')
  };
  validate() {
    this.elements.title().should('exist');
    this.elements.url()
  }
}

export default new HomePage();
