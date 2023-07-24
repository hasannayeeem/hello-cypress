const { checkPublishend } = require("../publishend");
const { visitToCmsBuilder, saveAndPublish } = require("../util");

describe("test to set accordion's properties", () => {
  before(() => {
    cy.getOrCreateToken();
  });
// ___________________________________________
//     test to set accordion's properties
// -------------------------------------------
  it("test to set accordion's properties", () => {
    visitToCmsBuilder()
    cy.get("iframe#dorik-builder-iframe")
      .its("0.contentDocument.body")
      .find("section.dorik-section:eq(0)")
      .trigger("mouseover")
      .find("button:eq(11)") // find edit element button
      .click(); //open general setting modal

    // open accordions
    cy.get('[data-testid="toggle"]').eq(1).click() // close first field
    cy.get('[style="margin-top: 8px; margin-bottom: 16px;"] > div:eq(0)')
    .find(".fa-trash-can").last().click() 
    cy.contains("+ Add New").click() //check adding button for add a new field of this accordion
    cy.get('[style="margin-top: 8px; margin-bottom: 16px;"] > div:eq(0)')
    .find(".icon-toggle").last().click()
    cy.get(`input[label="Accordion Heading"]`).click().type("I'm a automatically typed ac heading")
    cy.get('.notranslate').click().type("I'm a automatically typed accordion's description")
    cy.get('[data-testid="toggle"]').eq(0).click();
    // close accordions

    // open accordion styles
    cy.get('[data-testid="toggle"]').eq(1).click();
    cy.contains('Accordion Gap')
    cy.get("input:eq(1)").click().clear().type("50px");
    cy.contains("Border & Radius").should("be.visible").click();
    cy.contains("Border Width")
    cy.get("input").eq(4).click().clear().type("5px");
    cy.get('[placeholder="eg: #ff00ff"]').eq(0).click().clear().type("#ff00ff");
    cy.get(".form-control--with-arrow").eq(5).click().clear().type("8px");
    cy.get(".form-control--with-arrow").eq(4).click().clear().type("8px");
    cy.get(".form-control--with-arrow").eq(2).click().clear().type("8px");
    cy.get(".form-control--with-arrow").eq(3).click().clear().type("8px");
    cy.get('[placeholder="eg: #ff00ff"]')
      .eq(1)
      .click()
      .clear()
      .clear({ timeout: 2000 })
      .type("#ffffff");
    cy.get('[data-testid="toggle"]').eq(1).click();
    // close accordion styles

    // open heading style
    cy.get('[data-testid="toggle"]').eq(2).click();
    cy.get("input[type='range']").as("range").invoke("val", 25).click();
    cy.get("@range").should("have.value", "25"); // check heading range
    cy.get(".form-control--with-arrow").eq(0).click().clear().type("25px"); // set heading size with input and type
    cy.get('[placeholder="eg: #ff00ff"]')
      .eq(0)
      .click()
      .type("{selectall}{backspace}")
      .clear()
      .type("#ffffff"); // set heading color
    cy.get("select").select("500").should("have.value", "500"); //set font-weight
    cy.contains("Spacing & Line Height")
    cy.get("input:eq(3)").click().clear().type("3"); // set line height
    cy.get("input:eq(4)").clear().type("2px"); // set letter spacing
    cy.get(".form-control--with-arrow").eq(1).click().clear().type("8px"); // set paddingTop
    cy.get(".form-control--with-arrow").eq(2).click().clear().type("8px"); // set paddingBottom
    cy.get(".form-control--with-arrow").eq(3).click().clear().type("20px"); // set paddingLeft
    cy.get(".form-control--with-arrow").eq(4).click().clear().type("20px"); // set paddingRight
    cy.get(".fa-lock-alt").eq(1).click();
    cy.get(".fa-chevron-up:eq(6)").click(); // set paddingLeft-Right
    cy.contains("Gradient").should("be.visible"); //.click();
    cy.get('.tab > li:contains("Color")').click(); cy.wait(100);
    cy.get('[placeholder="eg: #ff00ff"]')
      .eq(1)
      .click()
      .type("{selectall}{backspace}")
      .clear()
      .type("#74C09F");
    cy.get('[data-testid="toggle"]').eq(2).click();
    // close heading style

    // open Content Styles
    cy.contains("Content Styles")
    cy.get('[data-testid="toggle"]').eq(3).click();
    cy.get('label:contains("Line Height")').eq(1)
    cy.get('label:contains("Spacing")').eq(1)
    cy.contains("Padding")
    cy.get('[data-testid="toggle"]').eq(3).click();
    // close Content Styles

    // open Background
    cy.get('[data-testid="toggle"]').eq(4).click();
    cy.contains("Color");
    cy.contains("Gradient") //.click();
    cy.contains("Image") //.click();
    cy.contains("Background Color");
    cy.get('[data-testid="toggle"]').eq(4).click();
    //close Background
    saveAndPublish() //save
    checkPublishend('accordion') //check publishend only accordion
  });
});
