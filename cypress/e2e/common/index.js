export const addEl = (i) => {
    //     --if don't have any element--    //to open elements modal
    cy.get("#dorik-builder-iframe")
      .its("0.contentDocument.body")
      .find("button.btn-primary-alt")
      .click();
    cy.get('[data-testid="wrapper-1"] > div:eq(1) > div')
      .its("length")
      .should("eq", 28); // check total element 28
    cy.get('[data-testid="wrapper-1"] > div:eq(1) > div').eq(i).click(); // add first Element(accordion)
  };
export const addsection = () => {
    cy.get("#dorik-builder-iframe")
      .its("0.contentDocument.body")
      .find("[itemtype='section']")
      .last()
      .trigger("mouseover", "bottomLeft")
      .contains("Add New Section")
      .click();
    cy.contains("Custom Section").click();
    cy.get('[data-testid="wrapper-1"] > div:eq(1) > div')
      .its("length")
      .should("eq", 14);
    cy.get('[data-testid="wrapper-1"] > div:eq(1) > div').eq(0).click(); // add section with one column
  };
export const addAttribute = (type) => {
    cy.contains(`Advanced`).click()
    cy.get('[data-testid="toggle"]').eq(0).click()
    cy.get('[data-testid="toggle"]').eq(2).click()
    cy.contains(`Add New Data Attribute`).click()
    cy.get(`input:eq(1)`).click().clear().type(`data-type="${type}"`)
  };