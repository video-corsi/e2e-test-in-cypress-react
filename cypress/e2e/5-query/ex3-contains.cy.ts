describe('Ex3 Contains', () => {
  beforeEach(() => {
    cy.visit('5-query/ex3-contains')
  })

  it('test selectors', () => {
    cy.contains('hello cypress', { matchCase: false })
  })
})