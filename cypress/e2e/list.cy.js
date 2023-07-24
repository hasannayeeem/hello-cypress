import { addElement } from "./common/addelement";
import { checkPublishend } from "./publishend";
import { isExist, saveAndPublish, visitToCmsBuilder, visitToPublishedUrl } from "./util";
const list1 = "that list one is typed automaticallly for e2e";
const listLastItem = "List item can have icon with different color";
describe("LIST", () => {
// ___________________________________________
//     test to set LIST's properties
// -------------------------------------------
  it("test to set list's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    //       setTimeout(function(){
    //         //code goes here
    //         !isExist('lists') && addElement()
    //    }, 50000);
    cy.get("iframe#dorik-builder-iframe")
      .its("0.contentDocument.body")
      .find(`[itemtype="lists"]`)
      .trigger("mouseover")
      .find("button:eq(1)") // find edit element button
      .click(); //open general setting modal

      // list items opened (default)
      cy.get('[data-testid="toggle"]').eq(1).click() // close first field
      cy.get('[style="margin-top: 8px; margin-bottom: 16px;"] > div:eq(0)')
      .find(".fa-trash-can").last().click()  
      cy.contains("+ Add New").should("be.visible").click() //check adding button for add a new field of this accordion
    cy.get('[style="margin-top: 8px; margin-bottom: 16px;"] > div:eq(0)')
    .find(".icon-toggle").last().click()
    cy.get(`[aria-label="rdw-editor"]`).click().clear().type(`${listLastItem}`);
    cy.get(`[aria-label="rdw-editor"]`).click().type(`{selectAll}`);
    cy.get(`[title="Bold"]`).click()
    cy.contains(`Icon Size`); //.should(`be.visible`)
    cy.get(".form-control--with-arrow").eq(0).click().clear().type("25px"); // set heading size with input and type
    cy.contains(`Icon Color`);
    cy.get('[placeholder="eg: #ff00ff"]')
      .eq(0)
      .click()
      .clear()
      .clear()
      .type("#ff00ff");
    cy.get('[data-testid="toggle"]').eq(0).click();
    // list items close

    // list items styles open
    cy.get('[data-testid="toggle"]').eq(1).click();
    cy.contains(`List Direction`).should(`be.visible`);
    cy.contains(`Horizontal`).should(`be.visible`).click();
    cy.contains(`Horizontal Align`).should(`be.visible`);
    cy.contains(`Center`).should(`be.visible`).click();
    cy.contains(`Gap Between Items`).should(`be.visible`);
    cy.get(".form-control--with-arrow").eq(0).click().clear().type("25px");
    cy.contains(`Text`).should(`be.visible`).click();
    cy.contains(`Text Size`).should(`be.visible`);
    cy.get(".form-control--with-arrow").eq(1).click().clear().type("20px");
    cy.contains("Spacing & Line Height").should("be.visible");
    cy.contains("Line Height").should("be.visible");
    cy.get("input:eq(4)").click().clear().type("3"); // set line height
    cy.contains("Spacing").should("be.visible");
    cy.get("input:eq(5)").clear().type("1px"); // set letter spacing
    cy.contains("Icon Margin Top").should("be.visible");
    cy.get(".form-control--with-arrow").eq(2).click().clear().type("5px");
    cy.contains("Color").should("be.visible");
    cy.get('[placeholder="eg: #ff00ff"]')
      .eq(0)
      .click()
      .clear()
      .clear()
      .type("green");
    cy.get('[data-testid="toggle"]').eq(1).click();
    // list items styles close

    // icon styles open
    cy.get('[data-testid="toggle"]').eq(2).click();
    cy.contains("Icon Position").should("be.visible");
    cy.contains("Icon & Text Gap"); //.should("be.visible");
    cy.get(".form-control--with-arrow").eq(0).click().clear().type("8px");
    cy.contains("Icon Size"); //.should("be.visible");
    cy.get(".form-control--with-arrow").eq(1).click().clear().type("30px");
    cy.contains("List Icon Color").should("be.visible");
    cy.get('[placeholder="eg: #ff00ff"]')
      .eq(0)
      .click()
      .clear()
      .clear()
      .type("maroon");
    cy.contains("Icon Shape").should("be.visible");
    cy.contains("None").should("be.visible");
    cy.contains("Filled").should("be.visible").click();
    cy.contains("Icon Background Color").should("be.visible");
    cy.get('[placeholder="eg: #ff00ff"]')
      .eq(1)
      .click()
      .clear()
      .clear()
      .type("black");
    cy.contains("Icon Background size").should("be.visible");
    cy.get(".form-control--with-arrow").eq(2).click().clear().type("40px");
    cy.contains("Rounded Corner").should("be.visible");
    cy.get(".form-control--with-arrow").eq(3).click().clear().type("3px");
    cy.contains("Outline").should("be.visible").click();
    cy.contains("Border Width").should("be.visible");
    cy.get(".form-control--with-arrow").eq(2).click().clear().type("5px");
    cy.contains("Border Color").should("be.visible");
    cy.get('[placeholder="eg: #ff00ff"]').eq(1)
    .click()
    .clear()
    .clear()
    .type("green")
    cy.contains("Icon Background size").should("be.visible");
    cy.get(".form-control--with-arrow").eq(3).click().clear().type("50px");
    cy.contains("Rounded Corner").should("be.visible");
    cy.get(".form-control--with-arrow").eq(4).click().clear().type("5px");
    cy.get('[data-testid="toggle"]').eq(2).click();
    // icon styles close
    
    // divider styles open
    cy.get('[data-testid="toggle"]').eq(3).click();
    cy.contains("Divider Styles").should("be.visible");
    cy.contains("Type").should("be.visible");
    cy.contains("Solid").should("be.visible");
    cy.get(".form-control--with-arrow").eq(0).click().clear().type("5px");
    cy.contains("Dotted").should("be.visible");
    cy.contains("Dashed").should("be.visible");
    cy.contains("Size").should("be.visible");
    cy.contains("Color").should("be.visible");
    cy.get('[placeholder="eg: #ff00ff"]').eq(0).click().clear().clear().type("#6F7159")
    cy.contains("Rounded Corner").should("be.visible"); // only visible when selected solid
    cy.get(".form-control--with-arrow").eq(1).click().clear().type("5px");
    cy.get('[data-testid="toggle"]').eq(3).click();
    // divider styles close

    // list background open
    cy.get('[data-testid="toggle"]').eq(4).click();
    cy.contains("Background Style").should("be.visible");
    cy.contains("Color").should("be.visible") //.click();
    cy.contains("Gradient").should("be.visible") //.click();
    // cy.contains("Gradient Background").should("be.visible") //.click();
    // cy.contains("Add Custom Gradient").should("be.visible") //.click();
    cy.contains("Background Color").should("be.visible");
    cy.get('[placeholder="eg: #ff00ff"]').eq(0).click().clear().clear().type("#F0F0D6")
    cy.get('[data-testid="toggle"]').eq(4).click();
    saveAndPublish()
    // visitToPublishedUrl("lists")
    cy.wait(10000)
    checkPublishend("lists")
    // list background close
  });
});
