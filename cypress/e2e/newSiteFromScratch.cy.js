describe("from scratch", () => {
  it("passes", () => {
    cy.login(`${Cypress.env("email")}`, `${Cypress.env("password")}`);
    cy.visit("https://app.dorik.com/");
    cy.intercept({ method: "POST", url: "/graphql" }).as("profile");
    cy.wait("@profile");
    cy.viewport(1440, 800);
    cy.contains("Static").should("be.visible")
    cy.contains("Static").click()
    cy.contains("Create New Site").click();
    cy.contains("Create From Scratch").click();
    cy.get('#dorik-builder-iframe').contains("+ Add New Section").click();
  });
});
