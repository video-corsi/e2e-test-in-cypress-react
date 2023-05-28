describe('Ex7 A Children', () => {
  beforeEach(() => {
    cy.visit('/5-query/ex7-a-children')
  })

  // basic example
  it("display 4 <li> elements", () => {
    cy.get('li')
      .should('have.length', 4)
  })

  it("the list contains 4 children", () => {
    cy.get('ul')
      .children()
      .should('have.length', 4)
  })

})

describe('Ex7 B Children', () => {
  beforeEach(() => {
    cy.visit('/5-query/ex7-b-children')
  })

  it("form group has 2 children", () => {
    cy.get('.form-group')
      .children()
      .should('have.length', 2)
  })

})