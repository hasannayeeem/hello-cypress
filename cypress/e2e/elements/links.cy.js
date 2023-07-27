import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("LINKS", () => {
  // ___________________________________________
  //     test to set LINKS's properties
  // -------------------------------------------
  it("test to set LINKS's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("links")

// link items opened (default)
    cy.get('[data-testid="toggle"]').eq(1).click() // close first field
    cy.get('[style="margin-top: 8px; margin-bottom: 16px;"] > div:eq(0)')
    .find(".fa-trash-can").last().click() 
    cy.contains("+ Add New").click() //check adding button for add a new field of this accordion
    cy.get('[style="margin-top: 8px; margin-bottom: 16px;"] > div:eq(0)')
    .find(".icon-toggle").last().click()
    cy.get(`[label="Link Text"]`).eq(1).click().clear().type("Profile")
    cy.get("select:eq(0)").select("page").should("have.value", "page"); //set link type
    cy.get("select:eq(1)").select("check-button").should("have.value", "64bfb5599e25f700124b7a19"); //set page
    cy.contains("Same Tab").click()
    cy.contains("New Tab")
    cy.get(`.ant-select-selector`).click()
    cy.contains("None")
    cy.contains("Font Awesome").click()
    cy.contains("Feather")
    cy.get(`[placeholder="Search for Icon"]`).click().clear().type("user")
    cy.wait(500)
    cy.get(`[placeholder="Search for Icon"]`).parent().find("ul > li").eq(1).click()
    cy.contains(`Icon Size`);
    cy.get(".form-control--with-arrow").eq(0).click().clear().type("17px"); // set icon size with input and type
    cy.contains(`Icon Color`);
    cy.get('[placeholder="eg: #ff00ff"]')
    .click()
    .clear()
    .clear()
    .type("#ff00ff");
    cy.get('[data-testid="toggle"]').eq(0).click();
// link items close
    
// link item styles open
    cy.get('[data-testid="toggle"]').eq(1).click();
    cy.contains(`Vertical`).click()
    cy.contains(`Center`).click()
    cy.get(".form-control--with-arrow").eq(0).click().clear().type("17px"); //icon gap
    cy.get(`.ant-collapse-header-text:contains("Text")`).click()
    cy.get(".form-control--with-arrow").eq(1).click().clear().type("17px"); //set text size
    cy.get(`[name="links/style/lineHeight"]`).find("input").click().clear().type("20px") //line height
    cy.get(`[name="links/style/letterSpacing"]`).find("input").click().clear().type("1px")  // letter space
    cy.get('[placeholder="eg: #ff00ff"]:eq(0)').click().clear().clear().type("#ff00ff");
    cy.contains(`Under`).click()
    cy.get("select:eq(0)").select("double").should("have.value", "double"); //set line type
    cy.get('[placeholder="eg: #ff00ff"]:eq(1)').click().clear().clear().type("#ff00ff"); //line color
    cy.get(`.ant-collapse-header-text:contains("Text")`).click()
    cy.get(`.ant-collapse-header-text:contains("Icon")`).click()
    cy.get(`.tab:contains("Right")`).eq(1).click()
    cy.get(".form-control--with-arrow").eq(2).click().clear().type("7px"); //icon and text gap
    cy.get(`.ant-collapse-header-text:contains("Icon")`).click()
    cy.contains(`HOVER`).click() //set link item styles hover
    cy.get(`.ant-collapse-header-text:contains("Text")`).click()
    cy.get('[placeholder="eg: #ff00ff"]:eq(0)').click().clear().clear().type("#A145A1");
    cy.contains(`Over`).click()
    cy.get("select:eq(0)").select("double").should("have.value", "double"); //set line type
    cy.get('[placeholder="eg: #ff00ff"]:eq(1)').click().clear().clear().type("#A145A1"); //line color
    cy.get(`.ant-collapse-header-text:contains("Text")`).click()
    cy.get(`.ant-collapse-header-text:contains("Icon")`).click()
    cy.get('[data-testid="toggle"]').eq(1).click();
// link item styles close

// SAVE 
    saveAndPublish()
// CHECK PUBLISH END
    checkPublishend("links")
    
  });
});