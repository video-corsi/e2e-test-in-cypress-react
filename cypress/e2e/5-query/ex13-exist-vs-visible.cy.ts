describe('Ex13 Exist vs Visible', () => {
  beforeEach(() => {
    cy.visit('/5-query/ex13-exist-vs-visible')
    cy.get('button').as('btn')
  })

  it('show message after one click', () => {
    cy.get('@btn').click()
    cy.contains('Button Clicked!').should('be.visible')
  })

  it('hide message after two clicks', () => {
    cy.get('@btn').click()
    cy.get('@btn').click()
    // cy.get('Button Click').should('not.be.visible') // ❌ does not work
    cy.contains('Button Clicked!').should('not.exist') // ✅ work
  })
})