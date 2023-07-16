describe("template spec", () => {
    it("login main dashboard", () => {
      cy.login(`${Cypress.env("email")}`,`${Cypress.env("password")}`);
      cy.visit("https://app.dorik.com/");
      cy.intercept({ method: "POST", url: "/graphql" }).as("profile");
      cy.wait("@profile");
      cy.contains("Static").should("be.visible")
    });
  });
  