describe("open builder with sms", () => {
  it("open builder with sms", () => {
    cy.login(`${Cypress.env("email")}`, `${Cypress.env("password")}`);
    cy.visit("https://app.dorik.com/");
    cy.intercept({ method: "POST", url: "/graphql" }).as("profile");
    cy.wait("@profile");
    cy.contains("Static").should("be.visible");
    cy.contains("Static").click();
    cy.get('[gutter="32,40"] > :nth-child(5)')
      .contains("Edit Site")
      .should("be.visible")
      .click();
    cy.get("#dorik-builder-iframe", { timeout: 30000 }).should("be.visible");
    cy.get("#dorik-builder-iframe").its("0.contentDocument").should("exist");
    // cy.get("iframe#dorik-builder-iframe")
    //   .its("0.contentDocument.body")
    //   .find("button.btn-primary")
    //   .click();

    cy.get("#dorik-builder-iframe")
        .its("0.contentDocument.body").eq(0).trigger("mouseover").contains("Add New Section")
        .should("be.visible").click()
        //.should("be.visible").trigger("mouseover") //.find(`button`).eq(14).click() //.should("be.visible")

      cy.contains("Section Library").should("be.visible")
      cy.contains("Section Symbols").should("be.visible")
      cy.contains("Saved Sections").should("be.visible")
      cy.contains("Custom Section").should("be.visible").click()
      cy.get(".sc-cDltVh > div").its("length").should('eq', 14) 
    //   cy.get(".sc-cDltVh > div").eq(0).click()
      
    //   cy.get(".sc-cDltVh > div").eq(0).click();

    // to publish
    // cy.get('.active > button').should("contain", "Publish").click()
    // to save
    //   cy.contains(' Save').should('be.visible').click()
  });
});
