describe("Ex6 Form Validations", () => {
  beforeEach(() => {
    cy.visit('/7-forms/ex6-form-validations')
    cy.get('button').contains('submit', { matchCase: false})
      .as('formBtn')

    cy.get('input[name="username"]').as('input')
  })

  it("button is disabled when form is initialized", () => {
    cy.get('@formBtn').should('be.visible');
    cy.get('@formBtn').should('be.disabled');
  });

  it("button is disabled if inputs are invalid", () => {
    cy.get('@input').type('Fa')
    cy.get('@formBtn').should('be.disabled');
  });

  it("button is enabled if form is valid", () => {
    cy.get('@input').type('Fabio')
    cy.get('@formBtn').should('be.enabled');
  });
});