describe("CONTACT FORM", () => {
    it("test to set contact-form's properties", () => {
      cy.getOrCreateToken();
      cy.visit(`${Cypress.env("publishedURL")}`);
      cy.get("[itemtype='contact-form']")
    });
  });