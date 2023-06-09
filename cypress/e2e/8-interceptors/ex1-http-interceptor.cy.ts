describe("Submit Button", () => {
  beforeEach(() => {
    cy.visit('/8-interceptors/ex1-http-interceptor')
    cy.get("button").contains("submit", { matchCase: false }).as("formBtn");
  })

  it("display the success message if form is submitted", () => {

    cy.intercept(
      'https://jsonplaceholder.typicode.com/users',
      { method: 'POST' },
      {
        statusCode: 200,
        body: {
          id: "random id" + Math.random(),
          username: 'hello@fabiobiondi.io'
        }
      }
    )

    cy.get('@formBtn').click()
    cy.contains('Success')
  });

  it("display the error message if HTTP request fails", () => {
    cy.intercept(
      'https://jsonplaceholder.typicode.com/users',
      { method: 'POST' },
      {
        statusCode: 404,
        body: "some error here..."
      }
    )

    cy.get('@formBtn').click()
    cy.contains('Error!')
  })
})