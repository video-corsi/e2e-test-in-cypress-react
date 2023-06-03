describe('Ex15 Find', () => {
  beforeEach(() => {
    cy.visit('/5-query/ex15-find')
  })

  it("should render 10 elements", () => {
    cy.get('ul')
      .find('li')
      .should('have.length', 10)
  })
})