describe("template spec", () => {
  it("create a static site", () => {
    cy.login(`${Cypress.env("email")}`,`${Cypress.env("password")}`);
    cy.visit("https://app.dorik.com/");
    cy.contains("Static").click();
    cy.contains("Create New Site").click();
    cy.get("button.action-btn").first().click();
    cy.wait(30000)
    for (let i = 0; i < 27; i++) {
    cy.get("#dorik-builder-iframe")
    .its("0.contentDocument")
    .within(($body) => {
      cy.get('[itemtype="section"]').eq(i).trigger("mouseover"); //section
      cy.contains("Add New Section").click();
    });}
  });
});
