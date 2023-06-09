import { User } from "../../../src/model/user.ts";

const mockList: User[] = [
  { id: 1, name: "A", username: "Username A" },
  { id: 2, name: "B", username: "Username B" },
  { id: 3, name: "C", username: "Username C" },
  { id: 4, name: "D", username: "Username D" },
]

describe("Hello Cypress", () => {

  beforeEach(() => {

    cy.intercept(
      'https://jsonplaceholder.typicode.com/users',
      { method: 'GET'},
      mockList
    )

    cy.visit('/8-interceptors/ex2-mock-response')
    cy.get('[data-testid="userList"]')
      .as('list')
  })

  it(`should display exactly ${mockList.length} elements in the page`, () => {
    cy.get('@list')
      .children()
      .should('have.length', mockList.length)
  });

});