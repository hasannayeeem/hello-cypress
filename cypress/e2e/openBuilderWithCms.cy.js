describe("open builder with sms", () => {
    it("open builder with cms", () => {
      cy.getOrCreateToken();
      cy.intercept({ method: "POST", url: "/api/auth" }).as("authpass");
      cy.intercept({ method: "POST", url: "/api/cms" }).as("cmsapi");
      cy.visit('https://test-with-cy.dcms.site/dashboard/design/64abf37eafc6980012bbbb95')
    //   cy.wait("@authpass")
      cy.get("#dorik-builder-iframe", {timeout: 30000}).should('be.visible')
      cy.get("#dorik-builder-iframe").its("0.contentDocument").should("exist")
      cy.get("#dorik-builder-iframe")
      .its("0.contentDocument")
      .within(($body) => {
        // cy.get(".dorik-section-aswwp93m").click({ position: "left" }); //section
        // cy.get(".dorik-heading-c44wu1fg").click({ position: "left" }); ////heading element general settings
        // cy.get(".dorik-heading-c44wu1fg").rightclick(); ///rightClick working fine and showing the contextmenu
        cy.get('[itemtype="section"]').eq(0).trigger("mouseover"); //section
        cy.contains("Add New Section").click();
      });
    });
  });