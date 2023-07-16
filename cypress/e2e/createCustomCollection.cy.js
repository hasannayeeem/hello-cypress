describe("template spec", () => {
  it("create a custom collection", () => {
    cy.getOrCreateToken();
    cy.visit("https://test-with-cy.dcms.site/dashboard/");
    cy.contains("+ Add New Collection").click(); 
    cy.get(".ant-select-selection-item").click();
    cy.contains("Project").click();
    cy.get('[type="submit"]').contains("Add Collection").click();
  });
});
