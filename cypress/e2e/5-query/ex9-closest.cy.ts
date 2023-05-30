describe('Ex9 Closest', () => {
  beforeEach(() => {
    cy.visit('/5-query/ex9-closest')
  })

  it('form is a form-group', () => {
    cy.contains('First Name')
      .closest('form')
      .should('have.class', 'form-group')
  })
})