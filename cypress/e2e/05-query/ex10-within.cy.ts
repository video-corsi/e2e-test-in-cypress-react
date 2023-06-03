describe('Ex10 A Within', () => {
  beforeEach(() => {
    cy.visit('/5-query/ex10-a-within')
  })

  it('User Form has a label and an input', () => {
    cy.get('.form-user').within(() => {
      cy.get('label').should('be.visible')
      cy.get('input').type('Fabio')
    })
  })

  it('Car Form has a label and an input', () => {
    cy.get('.form-car').within(() => {
      cy.get('label').should('be.visible')
      cy.get('input').type('Audi')
    })
  })
})

describe('Ex10 B Within', () => {
  beforeEach(() => {
    cy.visit('/5-query/ex10-b-within')
  })

  it('User Form has a default value', () => {
    cy.get('.form-user').within(() => {
      cy.get('input').should('have.value', 'Fabio')
    })
  })

  it('Car Form has a default value', () => {
    cy.get('.form-car').within(() => {
      cy.get('input').should('have.value', 'Fiat')
    })
  })
})