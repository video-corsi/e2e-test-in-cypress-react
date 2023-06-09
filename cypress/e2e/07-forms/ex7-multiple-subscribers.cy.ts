describe("Submit Button", () => {
  beforeEach(() => {
    cy.visit('/7-forms/ex7-multiple-subscribes')
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

describe("Input", () => {
  beforeEach(() => {
    cy.visit('/7-forms/ex7-multiple-subscribes')
    cy.get('input[name="username"]').as('input');
  })

  it('input has the invalid class if form is invalid', () => {
    cy.get('@input')
      .type('Fa')
      .should('have.class', 'is-invalid')
  })


  it('input has not the invalid class if form is valid', () => {
    cy.get('@input')
      .type('Fabio')
      .should('not.have.class', 'is-invalid')
  })

})

describe('Messages', () => {
  beforeEach(() => {
    cy.visit('/7-forms/ex7-multiple-subscribes')
    cy.get('button').contains('submit', { matchCase: false})
      .as('formBtn')

    cy.get('input[name="username"]').as('input')
  })

  it("display the success message if form is submitted", () => {
    cy.get('@input').type('Fabio Biondi')
    cy.get('@formBtn').click()
    cy.contains('Success!')
  })


  it("display the SENT button label if form is submitted", () => {
    cy.get('@input').type('Fabio Biondi')
    cy.get('@formBtn').click()
    cy.get('button').contains('SENT')
  })
})