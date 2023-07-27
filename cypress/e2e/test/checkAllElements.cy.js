
describe("test to set accordion's properties", () => {
  before(() => {
    cy.getOrCreateToken();
  });
  // ___________________________________________
  //     test to set accordion's properties
  // -------------------------------------------

  it("test to set accordion's properties", () => {
    cy.intercept({ method: "POST", url: "/api/auth" }).as("authpass");
    cy.intercept({ method: "POST", url: "/api/cms" }).as("cmsapi");
    cy.visit(`https://test-with-cy.dcms.site/dashboard/design/64c0d94ef5a8120012758331`);
    // cy.wait("@authpass");
    cy.wait("@cmsapi");
    cy.get("#dorik-builder-iframe", { timeout: 20000 }).should("be.visible");
    cy.get("#dorik-builder-iframe").its("0.contentDocument").should("exist"); //checked iframe's content visibility

    //     --if have a section/element--    //to add a custom section under the first section
    cy.get("#dorik-builder-iframe")
      .its("0.contentDocument.body")
      .eq(0)
      .trigger("mouseover")
      .contains("Add New Section")
      .should("be.visible")
      .click();
    cy.contains("Custom Section").click();
    cy.get('[data-testid="wrapper-1"] > div:eq(1) > div').its("length").should("eq", 14);
    cy.get('[data-testid="wrapper-1"] > div:eq(1) > div').eq(0).click(); // add section with one column
    cy.get("#dorik-builder-iframe")
      .its("0.contentDocument.body")
    .find("[itemtype='section']").last()
    .trigger("mouseover", "bottomLeft").find("button:eq(2)").click()


  });
});
