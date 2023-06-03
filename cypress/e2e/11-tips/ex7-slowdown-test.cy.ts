import { slowCypressDown } from 'cypress-slow-down';
slowCypressDown(1000)

describe("SlowDown test", () => {
  beforeEach(() => {
    cy.visit('/home')
  })

  it('Example slow tests (1sec for instruction)', () => {
    cy.contains('Home')
    cy.contains('Home')
    cy.contains('Home')
    cy.contains('Home')
    cy.contains('Home')
  })
});
