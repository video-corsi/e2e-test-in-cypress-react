export const mockList = [
  { id: 1, name: "A", username: "Username A" },
  { id: 2, name: "B", username: "Username B" },
  { id: 3, name: "C", username: "Username C" },
];

describe("Hello Cypress", () => {
  beforeEach(() => {
    cy.intercept(
      'https://jsonplaceholder.typicode.com/users',
      { method: 'GET' },
      mockList
    )

    cy.visit('/8-interceptors/ex4-interceptor-error')
    cy.get('[data-testid="userList"]').as("userList");
  });

  it(`should display exactly ${mockList.length} elements in the page`, () => {
    cy.get('@userList').children().should('have.length', mockList.length)
  });

  it(`should the first and last item display its own name and username`, () => {
    const firstItem = mockList[0];
    cy.get('@userList').children().first().contains(firstItem.name)
    cy.get('@userList').children().first().contains(firstItem.username)

    const lastItem = mockList[mockList.length - 1];
    cy.get('@userList').children().last().contains(lastItem.name)
    cy.get('@userList').children().last().contains(lastItem.username)
  });

  it(`should all items display its own name and username`, () => {
    cy.get('@userList')
      .children()
      .each(($el, index) => {
        cy.wrap($el).contains(mockList[index].name)
        cy.wrap($el).contains(mockList[index].username)
      })
  });

  it(`should delete an item`, () => {
    cy.get("@userList").children().first().contains('Delete').click()
    cy.get("@userList").children().should('have.length', mockList.length - 1)
  });
});



describe("Error Handling", () => {
  it(`should display an error message if API GET fails`, () => {
    cy.intercept(
      'https://jsonplaceholder.typicode.com/users',
      { method: 'GET' },
      {
        statusCode: 404,
        body: 'some errors here'
      }
    )
    cy.visit('/8-interceptors/ex4-interceptor-error')
    cy.contains('server error')
  });


  it(`should not delete an item if API DELETE fails`, () => {
    cy.intercept(
      'https://jsonplaceholder.typicode.com/users',
      { method: 'GET' },
      mockList
    )

    cy.intercept(
      'https://jsonplaceholder.typicode.com/users/**',
      { method: 'DELETE' },
      {
        statusCode: 404,
        body: 'some errors here'
      }
    )

    cy.visit('/8-interceptors/ex4-interceptor-error')
    cy.get('[data-testid="userList"]').as("userList");
    cy.get('[data-testid="userList"]').children().first().contains('Delete').click()
    cy.get('[data-testid="userList"]').children().should('have.length', mockList.length)
    cy.contains('server error')
  });
});