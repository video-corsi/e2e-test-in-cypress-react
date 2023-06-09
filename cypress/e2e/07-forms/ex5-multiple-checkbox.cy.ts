describe("Ex5 Multiple Checkbox", () => {
  beforeEach(() => {
    cy.visit('/7-forms/ex5-multiple-checkbox')
  })

  it("test selectors", () => {
    cy.contains('privacy')
      .siblings()
      .check()
  })
})