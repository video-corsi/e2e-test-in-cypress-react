describe("ViewPort Example", () => {
  beforeEach(() => {
    cy.viewport('iphone-8', 'portrait')
    cy.visit('/home')
  })

  it('', () => {
    // empty test
  })
});
