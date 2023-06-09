describe('Ex12 Alias', () => {
  beforeEach(() => {
    cy.visit('/5-query/ex12-alias')
    cy.contains('First Name').as('firstname')
  })

  it('do something with First Name', () => {
    cy.get('@firstname')
      .siblings('input')
      .type('something...')

    cy.get('@firstname')
      .siblings('button')
      .click()
  })
})