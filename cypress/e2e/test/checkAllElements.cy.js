import { addAttribute, addEl, addsection } from "../common";
import { elements } from "../constants/elements";
import { openGeneralsettingModal } from "../util";

describe("test to set accordion's properties", () => {
  before(() => {
    cy.getOrCreateToken();
  });
  // ___________________________________________
  //     test to set accordion's properties
  // -------------------------------------------

  it("test to set accordion's properties", () => {
    cy.intercept({ method: "POST", url: "/api/auth" }).as("authpass");
    cy.intercept({ method: "POST", url: "/api/cms" }).as("cmsapi");
    cy.visit(
      `https://test-with-cy.dcms.site/dashboard/design/64c0d94ef5a8120012758331`
    );
    // cy.wait("@authpass");
    cy.wait("@cmsapi");
    cy.get("#dorik-builder-iframe", { timeout: 20000 }).should("be.visible");
    cy.get("#dorik-builder-iframe").its("0.contentDocument").should("exist"); //checked iframe's content visibility
    // openGeneralsettingModal(`heading`)
    // cy.contains(`Advanced`).click()
    // cy.get('[data-testid="toggle"]').eq(0).click()
    // cy.get('[data-testid="toggle"]').eq(2).click()
    // // cy.contains(`Add New Data Attribute`).click()
    // cy.get(`input:eq(2)`).click().clear().type(`data-type="heading"`)
    // cy.visit(`https://test-with-cy.dcms.site/check-all-elements`)
    // cy.wait("@cmsapi")
    // cy.get(`[data-type="heading"]`)
    for (let i = 0; i < 28; i++) {
      addsection();
      addEl(i);
      addAttribute(elements[i])
    }
  });
});
