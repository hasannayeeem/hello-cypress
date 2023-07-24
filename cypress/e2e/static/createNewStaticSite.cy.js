describe("template spec", () => {
  it("create a static site", () => {
    cy.login(`${Cypress.env("email")}`,`${Cypress.env("password")}`);
    cy.visit(`${Cypress.env("staticURL")}`);
    cy.contains("Static").click();
    cy.contains("Create New Site").click();
    cy.get("button.action-btn").first().click();
    cy.wait(30000)
    cy.get("#dorik-builder-iframe")
    .its("0.contentDocument")
    .within(($body) => {
      cy.get('[itemtype="section"]').eq(0).trigger("mouseover"); //section
      cy.contains("Add New Section").click();
    });
  });
});
