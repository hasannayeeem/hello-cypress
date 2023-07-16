describe("open builder with sms", () => {
  it("open builder with sms", () => {
    cy.login(`${Cypress.env("email")}`, `${Cypress.env("password")}`);
    cy.visit("https://app.dorik.com/");
    cy.intercept({ method: "POST", url: "/graphql" }).as("profile");
    cy.wait("@profile");
    cy.contains("Static").should("be.visible");
    cy.contains("Static").click();
    cy.get('[gutter="32,40"] > :nth-child(3)')
      .contains("Edit Site")
      .should("be.visible")
      .click();
    cy.get("#dorik-builder-iframe", { timeout: 30000 }).should("be.visible");
    cy.get("#dorik-builder-iframe").its("0.contentDocument").should("exist");
    cy.get("iframe#dorik-builder-iframe")
      .its("0.contentDocument.body")
      .find("button.btn-primary")
      .click();
      cy.contains("Section Library").should("be.visible")
      cy.contains("Section Symbols").should("be.visible")
      cy.contains("Saved Sections").should("be.visible")
      cy.contains("Custom Section").should("be.visible").click()
      cy.get(".sc-cDltVh > div").eq(0).click()
      cy.get("#dorik-builder-iframe")
        .its("0.contentDocument.body").find("button.btn-primary-alt").click()
      cy.get(".sc-cDltVh > div").its("length") 
    //   .eq(1).click();
    // to save
    //   cy.contains(' Save').should('be.visible').click()
  });
});
