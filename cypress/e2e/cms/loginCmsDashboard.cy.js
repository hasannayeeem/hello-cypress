describe("template spec", () => {
  it("login cms dashboard", () => {
    cy.getOrCreateToken();
    cy.visit(`${Cypress.env("cmsDashboard")}`);
    cy.contains("Design & Pages").should("be.visible");
    cy.scrollTo(0, 500) // Scroll the window 500px down
    // cy.contains('Design & Pages', {ensureScrollable: false}).scrollTo('bottom') // Scroll 'sidebar' to its bottom
  });
});
