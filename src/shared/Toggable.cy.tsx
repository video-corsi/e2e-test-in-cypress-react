import { mount } from "cypress/react";
import { Toggable } from './Toggable';

describe("<Toggable /> ", () => {
  it("should display title and children by default", () => {
    mount(<Toggable title="My Profile" />);
    cy.document().should("contain.text", "My Profile");
  });

  it("should display children when component is opened", () => {
    mount(
      <Toggable title="My Profile" open>
        lorem ipsum
      </Toggable>
    );
    cy.document().should("contain.text", "lorem ipsum");
  });

  it("should not display children when component is mounted", () => {
    mount(
      <Toggable title="My Profile" open={false}>
        lorem ipsum
      </Toggable>
    );
    cy.document().should("not.contain.text", "lorem ipsum");
  });

  it("should display children when title bar is clicked", () => {
    mount(<Toggable title="My Profile">lorem ipsum</Toggable>);
    // click to hide children
    cy.document().contains("My Profile").click();
    // or
    // cy.document().contains("My Profile").trigger("click");
    cy.document().should("not.contain.text", "lorem ipsum");
  });

  it("should toggle children when title bar is clicked twice", () => {
    mount(<Toggable title="My Profile">lorem ipsum</Toggable>);
    // click to hide children
    cy.document().contains("My Profile").click();
    cy.document().contains("My Profile").click();
    cy.document().should("contain.text", "lorem ipsum");
  });


  it("should display an icon in the titlebar", () => {
    mount(<Toggable title="My Profile" icon="⭐️">Lorem ipsum</Toggable>);
    // SOLUTION 1: check if the document contains '⭐️'
    cy.document().contains("⭐️");

    // SOLUTION 2: check if the titlebar contains a closest icon '⭐️'
    cy.document()
      .contains("My Profile")
      .siblings()
      .within(() => {
        cy.contains("⭐️").should('exist')
      });
  });

  it("should invoke a function when icon is clicked", () => {
    const onClickSpy = cy.spy().as("onClickSpy"); // alias
    mount(
      <Toggable
        title="My Profile"
        icon="⭐️"
        onIconClick={onClickSpy}
        open
      > Lorem ipsum </Toggable>
    );
    cy.document().contains("⭐️").click()
    cy.get("@onClickSpy").should("have.been.called");
  });
});
