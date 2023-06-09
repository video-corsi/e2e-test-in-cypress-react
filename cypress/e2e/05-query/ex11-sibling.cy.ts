describe('Ex11 A Sibling', () => {
  beforeEach(() => {
    cy.visit('/5-query/ex11-a-sibling')
  })

  it('do something with First Name', () => {
    cy.contains('First Name')
      .siblings()
      .type('fabio')

  })
})

describe('Ex11 B Sibling', () => {
  beforeEach(() => {
    cy.visit('/5-query/ex11-b-sibling')
  })

  it('do something with First Name', () => {
    cy.contains('First Name')
      .siblings('input')
      .type('something...')

    cy.contains('First Name')
      .siblings('button')
      .click()

  })
})