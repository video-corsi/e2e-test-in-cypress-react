/// <reference types="cypress" />

Cypress.Commands.add('login', (username: string, password: string) => {
  /*cy.visit('playground')
  cy.contains('Hello Cypress').should('exist');
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.contains('SIGN IN').click()
  cy.url().should('include', '/')
  cy.contains('Home Page').should('exist');*/
  cy.visit('/9-commands-page-object/ex1-command-simple-login')
  if (username === '' || password === '') return;
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);

})




// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
