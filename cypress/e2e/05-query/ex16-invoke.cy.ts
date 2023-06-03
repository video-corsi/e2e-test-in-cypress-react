describe('Ex16 Invoke', () => {
  beforeEach(() => {
    cy.visit('/5-query/ex16-invoke')
  })

  it('write into first name input', () => {
    cy.get('label')
      .contains('First Name')
      .invoke('prop', 'for')
      .then(value => {
        cy.get('#' + value).type('something....')
        // cy.get(`#${value}`).type('something....')
      })
  })
})