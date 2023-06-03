class HomePage {
  elements = {
    title: () => cy.contains('Home Page'),
    items: () => cy.get('[data-testid="userList"]')
      .children().as('items')
  }

  visit() {
    cy.visit('/9-commands-page-object/ex4-organize-in-page-object')
  }

  displayTitle() {
    this.elements.title().should('be.visible');
  }

  titleIsStyled() {
    this.elements.title().should('have.class', 'main_title');
  }

  displayList<T>(data: T[]) {
    this.elements.items().should('have.length', data.length)
  }

  displayName(str: string) {
    this.elements.items().first().contains(str)
  }

}

export default new HomePage();
