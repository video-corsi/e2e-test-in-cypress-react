import { mount } from "cypress/react18";
import Stats from '../../src/shared/Stats';

const mock = [
  { value: '100%', label: 'Open Source'},
  { value: 'h24', label: 'Support'},
  { value: 'Fabio', label: 'Maintainer'},
]

describe("<Stats />", () => {
  beforeEach(() => {
    mount(<Stats title="My Stats" items={mock}/>
    );
  })

  it("should display title", () => {
    cy.document().should("contain.text", "My Stats");
  });

  it("should display labels and values", () => {
    // 1. hard coded values
    // cy.document().should("contain.text", "Open Source");
    // cy.document().should("contain.text", "Fabio");
    // cy.document().should("contain.text", "Maintainer");
    // 2. from mock
    // cy.document().should("contain.text", mock[0].label);
    // cy.document().should("contain.text", mock[1].label);
    // cy.document().should("contain.text", mock[2].label);

    // 3. iterate mock
    mock.forEach(item => {
      cy.document().should("contain.text", item.label);
      cy.document().should("contain.text", item.value);
    })
  });

  it("should display labels with adiacent values", () => {

    // 1. check if label 0 has an adiancent value
    cy.contains(mock[0].label)
      .siblings()
      .should("contain.text", mock[0].value);

    // 2. iterate mock
    mock.forEach(item => {
      cy.contains(item.label)
        .siblings()
        .should("contain.text", item.value);

    })
  });
});
