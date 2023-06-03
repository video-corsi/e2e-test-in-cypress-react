export interface Config {
  collectionName: string;
  fields: { type: string, value: string}[]
}

class CollectionsPage {
  elements = {
    sideBar: () => cy.get('.page-sidebar'),
    collectionPanelOverlay: () =>  cy.get('.overlay-panel-container'),
  }

  createCollection(cfg: Config) {
    this.elements.sideBar()
      .contains('New collection')
      .click()


    cy
      .get('.overlay-panel-container')
      .within(() => {

        cy
          .get('label')
          .contains('Name')
          .invoke('prop', 'for')
          .then(value => {
            cy.get(`#${value}`).type(cfg.collectionName)
          })

        cfg.fields.forEach(field => {
          console.log(field)
          switch (field.type) {
            case 'text':
              this.createFieldPlainText(field.value)
              break;
            case 'number':
              this.createFieldNumber(field.value)
              break;
          }
        })

        cy.contains('Create').click()

      })
    cy.contains('Successfully created collection').should('be.visible')

  }

  createFieldPlainText(value: string) {
    cy.contains('New field').click()
    cy.get('.dropdown').contains('Plain text').click()
    cy.get('input[placeholder="Field name"]').last().type(value)

  }

  createFieldNumber(value: string) {
    cy.contains('New field').click()
    cy.get('.dropdown').contains('Number').click()
    cy.get('input[placeholder="Field name"]').last().type(value)

  }

  deleteCollection(collectionName: string) {
    this.elements.sideBar()
      .contains(collectionName)
      .click()

    cy.get('.page-header [aria-label="Edit collection"]').click()

    this.elements.collectionPanelOverlay()
      .within(() => {
        cy.get('[aria-label="More"]').click()
        cy.contains('Delete').click()
        cy.contains('Yes').click()
      })

    cy.contains('Successfully deleted').should('be.visible')
  }
}

export default new CollectionsPage();
