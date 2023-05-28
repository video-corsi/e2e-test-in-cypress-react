describe('Ex5 Contains and Get', () => {
  beforeEach(() => {
    cy.visit('/5-query/ex5-contains-and-get')
  })

  it('test selectors', () => {
    cy.get('h1').contains('one')

    cy.get('h2').contains('one').should('be.visible')

    cy.contains('two').should('have.class', 'hello')

    cy.contains('four').should('have.css', 'fontSize', '10px')

    cy.contains('three').should('have.data', 'testid', 'hello')
  })
})