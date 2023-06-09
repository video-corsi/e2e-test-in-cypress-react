describe('Ex4 Get vs Contains', () => {
  beforeEach(() => {
    cy.visit('/5-query/ex4-get-vs-contains')
  })

  it('test selectors', () => {
    cy.contains('Hello Cypress')
  })
})