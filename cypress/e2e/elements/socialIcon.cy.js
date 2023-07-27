import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("SOCIAL ICON", () => {
  // ___________________________________________
  //     test to set SOCIAL ICON's properties
  // -------------------------------------------
  it("test to set SOCIAL ICON's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("socialIcon")
// social icon list opened (default)
    cy.get('[data-testid="toggle"]').eq(1).click() // close first field
    cy.get('[style="margin-top: 8px; margin-bottom: 16px;"] > div:eq(0)')
    .find(".fa-trash-can").last().click() 
    cy.contains("+ Add New").click() //check adding button for add a new field of this accordion
    cy.get('[style="margin-top: 8px; margin-bottom: 16px;"] > div:eq(0)')
    .find(".icon-toggle").last().click()
    cy.get("select:eq(0)").select("LinkedIn").should("have.value", "LinkedIn");
    cy.get("select:eq(1)").select("page").should("have.value", "page"); //set link type
    cy.get("select:eq(2)").select("check-button").should("have.value", "64bfb5599e25f700124b7a19"); //set page
    cy.contains("Same Tab").click()
    cy.contains("New Tab")
    cy.get('[data-testid="toggle"]').eq(0).click();
// social icon list close

// icon style open
    cy.get('[data-testid="toggle"]').eq(1).click();
    cy.contains(`Custom Color`).click()
    cy.contains(`Outline`).click()
    cy.contains(`Circle`).click()
    cy.get(".form-control--with-arrow").eq(0).click().clear().type("40px");
    cy.get('[placeholder="eg: #ff00ff"]:eq(0)').click().clear().clear().type("#1B1919"); //icon color
    cy.get(".form-control--with-arrow").eq(1).click().clear().type("14px");
    cy.contains(`Center`).click()
    cy.contains(`Vertical`)
    cy.contains(`HOVER`).click()
    // cy.get('[placeholder="eg: #ff00ff"]:eq(0)').click().clear().clear().type("#CFC1C1"); //icon color not work
    cy.get('[data-testid="toggle"]').eq(1).click();
    // icon style close
    
    // background open
    cy.get('[data-testid="toggle"]').eq(2).click();
    cy.get('[placeholder="eg: #ff00ff"]:eq(0)').click().clear().clear().type("#A145A1");
    cy.contains(`HOVER`).click()
    // cy.get('[placeholder="eg: #ff00ff"]:eq(0)').click().clear().clear().type("#A145A1"); //clear not work
    cy.get('[data-testid="toggle"]').eq(2).click();
// background close

// saveAndPublish()
    saveAndPublish()

  });
});