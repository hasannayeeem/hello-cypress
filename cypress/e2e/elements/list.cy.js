import { checkPublishend } from "../publishend";
import { saveAndPublish, visitToCmsBuilder } from "../util";
const listLastItem = "List item can have icon with different color";
describe("LIST", () => {
// ___________________________________________
//     test to set LIST's properties
// -------------------------------------------
  it("test to set list's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
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
    cy.contains("+ Add New").click() //check adding button for add a new field of this list
    cy.get('[style="margin-top: 8px; margin-bottom: 16px;"] > div:eq(0)')
    .find(".icon-toggle").last().click()
    cy.get(`[aria-label="rdw-editor"]`).click().clear().type(`${listLastItem}`);
    cy.get(`[aria-label="rdw-editor"]`).click().type(`{selectAll}`);
    cy.get(`[title="Bold"]`).click()
    cy.contains(`Icon Pack Selection`);
    cy.contains(`Font Awesome`).click();
    cy.contains("Feather") //.click()
    cy.get(`[placeholder="Search for Icon"]`).click().clear().type("moon")
    cy.wait(200)
    cy.get(`[placeholder="Search for Icon"]`).parent().find("ul > li").eq(0).click()
    cy.contains(`Icon Size`);
    cy.get(".form-control--with-arrow").eq(0).click().clear().type("25px"); // set icon size with input and type
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
    cy.contains(`Horizontal`).click();
    cy.contains(`Center`).click();
    cy.get(".form-control--with-arrow").eq(0).click().clear().type("25px");
    cy.contains(`Text`).click();
    cy.get(".form-control--with-arrow").eq(1).click().clear().type("20px");
    cy.get("input:eq(4)").click().clear().type("3"); // set line height
    cy.get("input:eq(5)").clear().type("1px"); // set letter spacing
    cy.get(".form-control--with-arrow").eq(2).click().clear().type("5px");
    cy.contains("Color")
    cy.get('[placeholder="eg: #ff00ff"]')
      .eq(0)
      .click()
      .clear()
      .clear()
      .type("#008000");
    cy.get('[data-testid="toggle"]').eq(1).click();
    // list items styles close

    // icon styles open
    cy.get('[data-testid="toggle"]').eq(2).click();
    cy.get(".form-control--with-arrow").eq(0).click().clear().type("8px");
    cy.get(".form-control--with-arrow").eq(1).click().clear().type("30px");
    cy.get('[placeholder="eg: #ff00ff"]')
      .eq(0)
      .click()
      .clear()
      .clear()
      .type("#800000");
    cy.contains("Filled").should("be.visible").click();
    cy.contains("Icon Background Color")
    cy.get('[placeholder="eg: #ff00ff"]')
      .eq(1)
      .click()
      .clear()
      .clear()
      .type("#000000");
    cy.contains("Icon Background size")
    cy.get(".form-control--with-arrow").eq(2).click().clear().type("40px");
    cy.contains("Rounded Corner")
    cy.get(".form-control--with-arrow").eq(3).click().clear().type("3px");
    cy.contains("Outline").click();
    cy.contains("Border Width")
    cy.get(".form-control--with-arrow").eq(2).click().clear().type("5px");
    cy.contains("Border Color")
    cy.get('[placeholder="eg: #ff00ff"]').eq(1)
    .click()
    .clear()
    .clear()
    .type("#008000")
    cy.get(".form-control--with-arrow").eq(3).click().clear().type("50px"); // Icon Background size
    cy.get(".form-control--with-arrow").eq(4).click().clear().type("5px");  // Rounded Corner
    cy.get('[data-testid="toggle"]').eq(2).click();
    // icon styles close
    
    // divider styles open
    cy.get('[data-testid="toggle"]').eq(3).click();
    cy.get(".form-control--with-arrow").eq(0).click().clear().type("5px");
    cy.contains("Dotted")
    cy.contains("Dashed");
    cy.get('[placeholder="eg: #ff00ff"]').eq(0).click().clear().clear().type("#6F7159")
    cy.get(".form-control--with-arrow").eq(1).click().clear().type("5px"); // rounded corner
    cy.get('[data-testid="toggle"]').eq(3).click();
    // divider styles close

    // list background open
    cy.get('[data-testid="toggle"]').eq(4).click();
    cy.contains("Color")
    cy.contains("Gradient")
    cy.get('[placeholder="eg: #ff00ff"]').eq(0).click().clear().clear().type("#F0F0D6") //set Background Color
    cy.get('[data-testid="toggle"]').eq(4).click();
    // list background close

    saveAndPublish()
    cy.wait(20000)
    checkPublishend("list")
  });
});
