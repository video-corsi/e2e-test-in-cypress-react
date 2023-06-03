
class HomePage {
  elements = {
    title: () => cy.contains('Home Page'),
    items: () => cy.get('[data-testid="userList"]')
      .children().as('items')
  }

  visit() {
    cy.visit('http://localhost:5173/home')
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
