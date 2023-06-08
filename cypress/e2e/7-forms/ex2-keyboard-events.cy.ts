describe("Ex2 Keyboard Events", () => {
  beforeEach(() => {
    cy.visit('/7-forms/ex2-keyboard-events')
  })

  it("display the message when enter is pressed", () => {
    cy.get('input')
      .type(`Lorenzo{enter}`, { delay: 1000})
  });

})