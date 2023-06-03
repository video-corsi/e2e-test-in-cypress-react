describe("Image Placeholder", () => {
  beforeEach(() => {
    cy.intercept("https://www.fabiobiondi.dev/**/*.png", { fixture: "placeholder.jpg" })
    cy.visit('https://www.fabiobiondi.dev/tutorials')
  })

  it('', () => {
    cy.contains('Step-by-step')
      .should('be.visible')
  })
});
