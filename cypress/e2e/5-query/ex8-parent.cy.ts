describe('Ex8 Parent', () => {
  beforeEach(() => {
    cy.visit('/5-query/ex8-parent')
  })

  it('first name is inline', () => {
    cy.contains('First Name')
      .parent()
      .should('have.class', 'inline')
  })

  it('last name is multiline', () => {
    cy.contains('Last Name')
      .parent()
      .should('have.class', 'multiline')
  })
})