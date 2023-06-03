import loginPage from '../../pages/loginPage.ts';

describe('Login', () => {
  it('user can sign-in', () => {
    loginPage.login('hello@fake.com', '1234567890')
    cy.url().should('include', '/collections')
  })

  it('user cannot sign-in if credentials are wrong', () => {
    cy.intercept(
      'http://127.0.0.1:8090/api/admins/auth-with-password',
      { method: 'POST'},
      {
        statusCode: 400,
        body: {
          "identity": {
            "code": "validation_is_email (FAKE)",
            "message": "Must be a valid email address."
          }
        }
      }
    )
    loginPage.login('hello@fabio', '12345')
    cy.contains('Invalid login credentials').should('be.visible')
  })
})

