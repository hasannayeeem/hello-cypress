const { visitToCmsBuilder } = require("./util");

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
    // cy.get('.sc-hBUXXM') general body hlp u to scrl

    // open accordions
    // cy.get('[data-testid="toggle"]').eq(1).click() // close first field
    // cy.contains("+ Add New").should("be.visible").click() //check adding button for add a new field of this accordion
    // cy.get('[style="margin-top: 8px; margin-bottom: 16px;"] > div:eq(0)')
    // .find(".icon-toggle").last().click()
    // cy.get(`input[label="Accordion Heading"]`).click().type("I'm a automatically typed ac heading")
    // cy.get('.notranslate').click().type("I'm a automatically typed accordion's description")
    cy.get('[data-testid="toggle"]').eq(0).click();
    // close accordions

    // open accordion styles
    cy.get('[data-testid="toggle"]').eq(1).click();
    cy.contains('Accordion Gap').should('be.visible')
    cy.get("input:eq(1)").click().clear().type("50px");
    cy.contains("Border & Radius").should("be.visible").click();
    cy.contains("Border Width").should("be.visible")
    cy.get("input").eq(4).click().clear().type("5px");
    cy.get('[placeholder="eg: #ff00ff"]').eq(0).click().clear().type("#ff00ff");
    cy.get(".form-control--with-arrow").eq(5).click().clear().type("8px");
    cy.get(".form-control--with-arrow").eq(4).click().clear().type("8px");
    cy.get(".form-control--with-arrow").eq(2).click().clear().type("8px");
    cy.get(".form-control--with-arrow").eq(3).click().clear().type("8px");
    cy.contains("Background").should("be.visible").click();
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
    cy.contains("Heading Size").should("be.visible"); // check heading size's visibility
    cy.get("input[type='range']").as("range").invoke("val", 25).click();
    cy.get("@range").should("have.value", "25"); // check range
    cy.get(".form-control--with-arrow").eq(0).click().clear().type("25px"); // set heading size with input and type
    cy.contains("Color").should("be.visible");
    // cy.intercept({ method: "POST", url: "/collect" }).as("collect");
    cy.get('[placeholder="eg: #ff00ff"]')
      .eq(0)
      .click()
      .type("{selectall}{backspace}")
      .wait(1000)
      .clear({ timeout: 2000 })
      .type("#ffffff"); // set heading color
    cy.contains("Font Weight").should("be.visible");
    cy.get("select").select("500").should("have.value", "500"); //set font-weight
    cy.contains("Spacing & Line Height").should("be.visible");
    cy.contains("Line Height").should("be.visible");
    cy.get("input:eq(3)").click().clear().type("3"); // set line height
    cy.contains("Spacing").should("be.visible");
    cy.get("input:eq(4)").clear().type("2px"); // set letter spacing
    cy.contains("Padding").should("be.visible");
    cy.get(".form-control--with-arrow").eq(1).click().clear().type("8px"); // set paddingTop
    cy.get(".form-control--with-arrow").eq(2).click().clear().type("8px"); // set paddingBottom
    cy.get(".form-control--with-arrow").eq(3).click().clear().type("20px"); // set paddingLeft
    cy.get(".form-control--with-arrow").eq(4).click().clear().type("20px"); // set paddingRight
    cy.get(".fa-lock-alt").eq(1).click();
    cy.get(".fa-chevron-up:eq(6)").click(); // set paddingLeft-Right
    cy.contains("Background").should("be.visible").click();
    cy.contains("Background Style").should("be.visible");
    cy.contains("Gradient").should("be.visible"); //.click();
    cy.get('.tab > li:contains("Color")').should("be.visible").click(); cy.wait(100)
    cy.contains("Background Color").should("be.visible");
    cy.get('[placeholder="eg: #ff00ff"]')
      .eq(1)
      .click()
      .type("{selectall}{backspace}")
      .wait(1000)
      .clear({ timeout: 2000 })
      .type("#74C09F");
    cy.get('[data-testid="toggle"]').eq(2).click();
    // close heading style

    // open Content Styles
    cy.contains("Content Styles").should("be.visible");
    cy.get('[data-testid="toggle"]').eq(3).click();
    cy.contains("Text Size").should("be.visible");
    cy.contains("Color").should("be.visible");
    cy.contains("Spacing & Line Height").should("be.visible");
    cy.get('label:contains("Line Height")').eq(1).should("be.visible");
    cy.get('label:contains("Spacing")').eq(1).should("be.visible");
    cy.contains("Padding").should("be.visible");
    cy.get('[data-testid="toggle"]').eq(3).click();
    // close Content Styles

    // open Background
    cy.get('[data-testid="toggle"]').eq(4).click();
    cy.contains("Background Style").should("be.visible");
    cy.contains("Color").should("be.visible") //.click();
    cy.contains("Gradient").should("be.visible") //.click();
    cy.contains("Image").should("be.visible") //.click();
    cy.contains("Background Color").should("be.visible");

    cy.get('[data-testid="toggle"]').eq(4).click();
    //close Background

  });

  it.only("check publish end", () => {
    cy.visit(`${Cypress.env("publishedURL")}`);
    cy.get("details").click({ multiple: true });
    cy.get("summary:eq(0)").should("have.css", {
      "background-color": "rgb(116, 192, 159)",
      "font-size": "25px",
      "line-height": "3",
      "padding": "8px 21px",
      "color": "rgb(255, 255, 255)",
      "font-weight": "500",
      "letter-spacing": "2px",
    });
    cy.get('details > .details-content').last().should("contain", "I'm a automatically typed accordion's description")
    // Find all "details" elements and click on each one
    // cy.get("details").each(($el, index) => {
    //   cy.wrap($el).click();
  
    //   // Check CSS properties for each "summary" element within the clicked "details"
    //   cy.checkCssProperties("summary:eq(" + index + ")",
    //    {
    //     "background-color": "rgb(116, 192, 159)",
    //     "font-size": "25px",
    //     // "line-height": "3",
    //     "padding": "8px 21px",
    //     "color": "rgb(255, 255, 255)",
    //     "font-weight": "500",
    //     "letter-spacing": "2px",
    //   }
    //   );
    // });
  });
});
