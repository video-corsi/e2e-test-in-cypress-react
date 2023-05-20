describe('Playground', () => {
  beforeEach(() => {
    cy.visit('5-query/ex14-automatic-waiting')
  })

  it("should render 10 elements", () => {
    cy.get('ul > li')
      .should('have.length', 10); // ✅ wait for 4 seconds
  })
})
