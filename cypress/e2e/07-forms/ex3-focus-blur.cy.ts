describe("Ex3 Focus Blur", () => {
  beforeEach(() => {
    cy.visit('/7-forms/ex3-focus-blur')
  })

  it('should apply the active cls when input is focused', () => {
    cy.get('input[name="username"]')
      .focus()
      .should('have.class', 'active')
  });

  it('should remove the active cls when blur', () => {
    cy.get('input[name="username"]')
      .focus()

    cy.get('input[name="username"]')
      .blur()
      .should('not.have.class', 'active')
  });
});

// version with alias
describe("Ex3 Focus Blur", () => {
  beforeEach(() => {
    cy.visit('/7-forms/ex3-focus-blur')
    cy.get('input[name="username"]').as('usernameInput')
  })

  it('should apply the active cls when input is focused', () => {
    cy.get('@usernameInput')
      .focus()
      .should('have.class', 'active')
  });

  it('should remove the active cls when blur', () => {
    cy.get('@usernameInput')
      .focus()

    cy.get('@usernameInput')
      .blur()
      .should('not.have.class', 'active')
  });
});