import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("HEADING", () => {
  // ___________________________________________
  //     test to set HEADING's properties
  // -------------------------------------------
  it("test to set HEADING's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    for(let i=0; i<6; i++){
      openGeneralsettingModal("heading", i)
      cy.contains(`H${i+1}`).click()
    }
    // title settings opened (default)
    cy.get(`[aria-label="rdw-editor"]`).click().clear().type(`Static Heading`)
    cy.get(`[aria-label="rdw-editor"]`).eq(0).click().type(`{selectAll}`)
    cy.get(`[title="Bold"]`).click()
    cy.contains(`Dynamic Text Items`).click()
    cy.get(`[aria-label="rdw-editor"]`).eq(1).click().clear().type(`test dynamic`)
    cy.get('[data-testid="toggle"]').eq(1).click() //close first
    cy.get('[data-testid="toggle"]').eq(2).click() //open second
    cy.get(`[aria-label="rdw-editor"]`).eq(1).click().clear().type(`last dynamic`)
    cy.get('[data-testid="toggle"]').eq(2).click() //close second
    cy.get('[data-testid="toggle"]').eq(3).click() //open third
    cy.get(`[aria-label="rdw-editor"]`).eq(1).click().clear().type(`first dynamic`)
    cy.contains(`Dynamic Text Items`).click()
    cy.contains(`Dynamic Options`).click()
    cy.get(".form-control--with-arrow").eq(0).click().clear().type("40") //type speed
    cy.get(".form-control--with-arrow").eq(1).click().clear().type("30") //back speed 
    cy.get('[data-testid="toggle"]').eq(0).click()
    
    // title styles
    cy.get('[data-testid="toggle"]').eq(1).click()
    cy.get(`[data-icon="align-center"]`).click()
    cy.get(`input[placeholder="eg: #ff00ff"]`).eq(0).click().clear().clear().type("#458032")
    cy.get(".form-control--with-arrow").eq(0).click().clear().type("20px")
    cy.get(`[name="style/lineHeight"]`).find("input").click().clear().type("48px") //line height
    cy.get(`[name="style/letterSpacing"]`).find("input").click().clear().type("4px")  // letter space
    cy.get(`ul > li:contains("None")`)
    cy.get(`ul > li:contains("AA")`)
    cy.get(`ul > li:contains("aa")`)
    cy.get(`ul > li:contains("Aa")`).click() //transform
    cy.contains(`Through`).click()
    cy.get("select:eq(0)").select("wavy").should("have.value", "wavy"); //set line type
    cy.get(`input[placeholder="eg: #ff00ff"]`).eq(1).click().clear().clear().type("#A91F1F") //line color
    // cy.contains(`Text Shadow`).parent().find(".ant-switch-inner").click()
    cy.contains(`Horizontal`).parent().find("input:eq(1)").click().clear().type("2px")
    cy.contains(`Vertical`).parent().find("input:eq(1)").click().clear().type("2px")
    cy.get(".form-control--with-arrow").last().click().clear().type("1px") //set blur value
    cy.get(`input[placeholder="eg: #ff00ff"]`).eq(2).click().clear().clear().type("#1C0101") //shadow color
    cy.contains(`Dynamic Text Styles`).click() //dynamic text styles
    cy.get('.ant-collapse-expand-icon').parent().parent().within(() => {
      cy.get(`input[placeholder="eg: #ff00ff"]`).eq(0).click().clear().clear().type("#631616") //dynamicText color
      cy.get(`input[placeholder="eg: #ff00ff"]`).eq(1).click().clear().clear().type("#0AB00A") // line color
      cy.contains(`Under`).click()
      cy.get("select:eq(0)").select("wavy").should("have.value", "wavy"); //set line type
      cy.get(`input[placeholder="eg: #ff00ff"]`).eq(2).click().clear().clear().type("#EEFC48") //dynamicText bg-color
    })
    cy.get('[data-testid="toggle"]').eq(1).click()

    // title background
    cy.get('[data-testid="toggle"]').eq(2).click()
    cy.get(`input[placeholder="eg: #ff00ff"]`).eq(0).click().clear().clear().type("#DAD0D0") //heading bg-color h:#C1C6B1
    cy.contains(`HOVER`).click()
    // cy.get(`input[placeholder="eg: #ff00ff"]`).eq(0).click().clear().clear().type("#C1C6B1") //heading hover:bg-color
    cy.get('[data-testid="toggle"]').eq(2).click()

    // title link
    cy.get('[data-testid="toggle"]').eq(3).click()
    cy.get("select:eq(0)").select("page").should("have.value", "page"); //set link type
    cy.get("select:eq(1)").select("check-button").should("have.value", "64bfb5599e25f700124b7a19"); //set page
    cy.contains("Same Tab").click()
    cy.contains("New Tab")
    cy.get('[data-testid="toggle"]').eq(3).click()
// SAVE
    saveAndPublish()
  });
});