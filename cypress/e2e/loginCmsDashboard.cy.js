describe("template spec", () => {
  it("login cms dashboard", () => {
    cy.getOrCreateToken();
    cy.visit("https://test-with-cy.dcms.site/dashboard/");
    cy.contains("Design & Pages").should("be.visible");
    cy.scrollTo(0, 500) // Scroll the window 500px down
    // cy.contains('Design & Pages', {ensureScrollable: false}).scrollTo('bottom') // Scroll 'sidebar' to its bottom
  });
});
