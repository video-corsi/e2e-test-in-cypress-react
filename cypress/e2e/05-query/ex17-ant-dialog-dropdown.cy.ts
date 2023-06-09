describe('Ex17 AntDesign - Dialog and Dropdown', () => {
  beforeEach(() => {
    cy.visit('/5-query/ex17-antd')
    cy.get('[data-testid="list"]').as('list')
  })

  it(`should display exactly 3 elements in the page`, () => {
    cy.get('@list').children().should('have.length', 3)
  });

  it.only(`delete first element`, () => {
    cy.get('@list')
      .children()
      .first()
      .contains('Actions')
      .click()

    cy
      .get('.ant-dropdown-menu')
      .contains('Delete')
      .click()

    cy
      .get('[role="dialog"]')
      .within(() => {
        cy.contains('Confirm')
          .click()
      })

    cy.get('@list')
      .children()
      .should('have.length', 2)

  });


})
