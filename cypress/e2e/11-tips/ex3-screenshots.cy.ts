describe('Screenshots', () => {
  beforeEach(() => {
    cy.viewport('iphone-8', 'portrait')
    cy.visit('/playground')
  })

  it(`take screenshot`, () => {
    cy.screenshot('myPicture', { overwrite: true })
    // cy.screenshot('myPicture', { overwrite: true, capture: 'runner'  })
  });

})
