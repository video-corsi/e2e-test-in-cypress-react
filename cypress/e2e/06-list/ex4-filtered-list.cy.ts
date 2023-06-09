describe("Ex4 Filtered List", () => {
  beforeEach(() => {
    cy.visit('/6-list/ex4-filtered-list')
  })

  it("display all items by default", () => {
    cy.get('article').should('have.length', 3)
  });

  it("filter the list after writing a text", () => {
    cy.get('input').type('o')
    cy.get('article').should('have.length', 2)
  });

  it("display no items if the list does not contain text", () => {
    cy.get('input').type('something...')
    cy.get('article').should('have.length', 0)
  });
})