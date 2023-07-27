import { checkPublishend } from "../publishend";
import { saveAndPublish, visitToCmsBuilder } from "../util";

describe("REGULAR BUTTON", () => {
// ___________________________________________
//     test to set REGULAR BUTTON's properties
// -------------------------------------------
  it("test to set regular button's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    cy.get("iframe#dorik-builder-iframe")
      .its("0.contentDocument.body")
      .find(`[itemtype="button"]`)
      .trigger("mouseover")
      .find("button:eq(1)") // find edit element button
      .click(); //open general setting modal
      
    // button type & contents opened (default)
    cy.get(`input[label="Button Text"]`).click().clear().type("Button Test")
    cy.get('span.ant-switch-inner:eq(0)').click()
    cy.contains("Left") 
    cy.contains("Center").click()
    cy.contains("Right")
    cy.get(`input[placeholder="eg: #ff00ff"]`).eq(0).click().clear().clear().type("#ff00ff")
    cy.get(".form-control--with-arrow").eq(0).click().clear().type("20px");
    cy.get("select").select("500").should("have.value", "500"); //set font-weight
    cy.contains(`Line Height`).parent().find("input").click().clear().type("20px")
    cy.contains(`Spacing`).parent().find("input").click().clear().type("2px")
    cy.get(`ul > li:contains("None")`)
    cy.get(`ul > li:contains("AA")`).click()
    cy.get(`ul > li:contains("aa")`)
    cy.get(`ul > li:contains("Aa")`)
    cy.contains(`Button Icon`).parent().find(".ant-switch-inner").click().dblclick()
    cy.wait(200)
    cy.contains(`Font Awesome`).click()
    cy.contains("None")
    cy.contains("Font Awesome")
    cy.contains("Feather")
    cy.get(`[placeholder="Search for Icon"]`).click().clear().type("circle")
    cy.wait(500)
    cy.get(`[placeholder="Search for Icon"]`).parent().find("ul > li").eq(2).click()
    cy.contains(`Icon Size`);
    cy.get(".form-control--with-arrow").eq(1).click().clear().type("27px"); // set icon size with input and type
    cy.contains(`Icon Color`);
    cy.get('[placeholder="eg: #ff00ff"]')
    .eq(1)
    .click()
    .clear()
    .clear()
    .type("#ff00ff");
    cy.get(".form-control--with-arrow").eq(2).click().clear().type("10px"); // set icon and text gap
    // cy.contains(`Text Shadow`).parent().find(".ant-switch-inner").click()
    cy.contains(`Horizontal`).parent().find("input:eq(1)").click().clear().type("4px")
    cy.contains(`Vertical`).parent().find("input:eq(1)").click().clear().type("4px")
    cy.get(".form-control--with-arrow").last().click().clear().type("1px") //set blur value
    cy.get(`input[placeholder="eg: #ff00ff"]`).eq(2).click().clear().clear().type("#1C0101")
    cy.contains(`HOVER`).click()
    cy.get(`input[placeholder="eg: #ff00ff"]`).eq(0).click().clear().clear().type("#99952B")
    cy.get('[data-testid="toggle"]').eq(0).click()
    // button type & contents close
    
    // button link
    cy.get('[data-testid="toggle"]').eq(1).click()
    cy.get("select:eq(0)").select("page").should("have.value", "page"); //set link type
    cy.get("select:eq(1)").select("check-button").should("have.value", "64bfb5599e25f700124b7a19"); //set page
    cy.contains("Same Tab").click()
    cy.contains("New Tab")
    cy.get('[data-testid="toggle"]').eq(1).click()
    
    // button background 
    cy.get('[data-testid="toggle"]').eq(2).click()
    cy.get(`input[placeholder="eg: #ff00ff"]`).eq(0).click().clear().clear().type("#3C3D51")
    cy.contains(`HOVER`).click()
    cy.get(`input[placeholder="eg: #ff00ff"]`).eq(0).click().clear().clear().type("#30359C")
    cy.get('[data-testid="toggle"]').eq(2).click()
    
    // inline button 
    cy.get('[data-testid="toggle"]').eq(3).click()
    cy.contains(`Inline Button with Other Buttons`).parent().find(".ant-switch-inner").dblclick()
    cy.get("iframe#dorik-builder-iframe")
      .its("0.contentDocument.body")
      .find(`section:eq(0)`).find(`a:contains("Button Test")`).parent().should("have.class", "el-ib")
    cy.get('[data-testid="toggle"]').eq(3).click()

    //save
    saveAndPublish()

    // check publish end 
    cy.wait("@cmsapi")
    checkPublishend("regularButton")

});
});