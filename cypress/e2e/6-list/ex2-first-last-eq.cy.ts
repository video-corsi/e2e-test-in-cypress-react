describe("Ex2 First Last Eq", () => {
  beforeEach(() => {
    cy.visit('/6-list/ex2-first-last-eq')
  })

  it("first element is 'one'", () => {
    cy.get('main')
      .find('article')
      .first()
      .contains('one')
  })


  it("middle element is 'two'", () => {
    cy.get('main')
      .find('article')
      .eq(1)
      .contains('two')
  })

  it("last element is 'one'", () => {
    cy.get('main')
      .find('article')
      .last()
      .contains('three')
  })
})