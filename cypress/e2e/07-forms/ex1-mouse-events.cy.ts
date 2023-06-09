describe("Ex1 A Mouse Events", () => {
  beforeEach(() => {
    cy.visit('/7-forms/ex1a-a-mouse-events')
  })

  it('show the message when button is clicked', () => {
    cy.get('button').click();
    cy.contains('Button Clicked!').should('be.visible');
  })

  it('hide the message if clicked twice', () => {
    cy.get('button').click();
    cy.get('button').click();
    cy.contains('Button Clicked!').should('not.exist');
  })
});

describe("Ex1 B Mouse Events", () => {
  beforeEach(() => {
    cy.visit('/7-forms/ex1-b-mouse-events')
  })

  it('show the message at rollover', () => {
    cy.get('button')
      .trigger('mouseover')
    cy.contains('Button Clicked!')
      .should('be.visible');
  })

  it('hide the message at rollout', () => {
    cy.get('button')
      .trigger('mouseout')
    cy.contains('Button Clicked!')
      .should('not.exist');
  })
});