describe("Ex4 Forms Checkbox Date Select", () => {
  beforeEach(() => {
    cy.visit('/7-forms/ex4-forms-checkbox-date-select')
  })

  it('fill forms', () => {
    cy.get('input[name="firstName"]')
      .clear()
      .type('Lorenzo')

    cy.get('input[name="subscribe"]')
      .uncheck()

    cy.get('input[name="date"]')
      .type('2011-03-21')

    cy.get('input[name="subscribe"]')
      .check()

    cy.get('select[name="food"]')
      .select("3")
  })
});