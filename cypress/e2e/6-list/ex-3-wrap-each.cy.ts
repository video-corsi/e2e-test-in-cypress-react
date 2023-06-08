import {myList} from "../../../src/data.ts";

describe("Ex3 A Wrap Each", () => {
  beforeEach(() => {
    cy.visit('/6-list/ex3-a-wrap-each')
  })

  it("list contains all items", () => {
    myList.forEach((item) => {
      cy.contains(item)
    })
  });

})

describe("Ex3 B Wrap Each", () => {
  beforeEach(() => {
    cy.visit('/6-list/ex3-b-wrap-each')
  })

  it("list contains all items", () => {

    cy.get('main')
      .find('article')
      .each(($article, index) => {
        cy.wrap($article)
          .should('have.class', 'item' + index)

        cy.wrap($article)
          .contains(myList[index])
      })

  });

})