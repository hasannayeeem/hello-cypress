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
    // cy.get("#dorik-builder-iframe", { timeout: 20000 }).should("be.visible");
    // cy.get("#dorik-builder-iframe").its("0.contentDocument").should("exist"); //checked iframe's content visibility
    // cy.get("iframe#dorik-builder-iframe")
    // .its("0.contentDocument.body")
    // .find("section.dorik-section")
    // .trigger("mouseover")
    // .find("button:eq(11)") //show general setting modal
    // .click();
    // cy.get('[data-testid="toggle"]').eq(1).click() //select accordion
    // cy.get('.sc-fyVfxW').contains("+ Add New").should("be.visible").click() //check adding button for add a new field of this accordion
    // cy.get('.sc-BQMaI:eq(1)').find(".icon-toggle").last().click()
    // cy.get(".sc-cKXybt").click().type("I'm a automatically typed ac heading")
    // cy.get('.notranslate').click().type("I'm a automatically typed accordion's description")
    
    // cy.get('.sc-hBUXXM') general body hlp u to scrl
    // cy.get('[data-testid="toggle"]').eq(0).click()
    // cy.get('[data-testid="toggle"]').eq(1).click()
    // cy.get('.sc-gVJvzJ').click().clear().type("50px")
    // cy.contains("Border & Radius").should("be.visible").click()
    // cy.get('.sc-gVJvzJ').eq(1).click().clear().type("5px")
    // cy.get('[placeholder="eg: #ff00ff"]').eq(0).click().clear().type("#ff00ff")
    // cy.get('.form-control--with-arrow').eq(5).click().clear().type("8px")
    // cy.get('.form-control--with-arrow').eq(4).click().clear().type("8px")
    // cy.get('.form-control--with-arrow').eq(2).click().clear().type("8px")
    // cy.get('.form-control--with-arrow').eq(3).click().clear().type("8px")
    // cy.contains("Background").should("be.visible").click()
    // cy.get('[placeholder="eg: #ff00ff"]').eq(1).click().clear().type("#ffffff")
    // cy.get('[data-testid="toggle"]').eq(1).click()
    // cy.get('[data-testid="toggle"]').eq(2).click()
    
    // cy.get('[data-testid="toggle"]').last().click()
    // cy.get(".sc-cDltVh > div").eq(0).click();

    // to publish
    // cy.get('.active > button').should("contain", "Publish").click()
    // to save
    //   cy.contains(' Save').should('be.visible').click()
  });
});
