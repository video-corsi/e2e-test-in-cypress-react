import { mount } from "cypress/react18";
import Menu from './Menu';

const mock = [
  { value: 1, label: 'one'},
  { value: 2, label: 'two'},
  { value: 3, label: 'three'},
]

describe("<Menu /> props", () => {

  beforeEach(() => {
    mount(
      <Menu title="MY MENU" items={mock}/>
    );
  })

  it("title should be visible", () => {
    cy.contains('MY MENU').should('be.visible')
    // or
    cy.document().should("contain.text", "MY MENU");
  })

  it("should display items - version 1", () => {
    cy.document().should("contain.text", "one");
    cy.document().should("contain.text", "two");
    cy.document().should("contain.text", "three");
  })

  it("should display items - version 2", () => {
    cy.document().should("contain.text", mock[0].label);
    cy.document().should("contain.text", mock[1].label);
    cy.document().should("contain.text", mock[2].label);
  })

  it("should display items - version 3", () => {
    mock.forEach(item => {
      cy.document().should("contain.text", item.label);
    })
  })

});


describe("<Menu /> callbacks", () => {
  beforeEach(() => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    mount(
      <Menu
        title="MY MENU"
        items={mock}
        onItemClick={onChangeSpy}
      />
    );
  })
  it("click first item", () => {
    cy.contains('one').click()
    cy.get('@onChangeSpy').should('have.been.calledWith', { value: 1, label: 'one'})
    // or better
    cy.get('@onChangeSpy').should('have.been.calledWith', mock[0])
  });

  it("click all items", () => {
    mock.forEach(item => {
      cy.contains(item.label).click()
      cy.get('@onChangeSpy').should('have.been.calledWith', item)

    })
  });
})
