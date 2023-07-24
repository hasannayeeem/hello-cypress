import { saveAndPublish } from "../util";

describe("test to set accordion's properties", () => {
    it("test to set accordion's properties", () => {
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
      cy.get("#dorik-builder-iframe", { timeout: 20000 }).should("be.visible");
      cy.get("#dorik-builder-iframe").its("0.contentDocument").should("exist"); //checked iframe's content visibility
      cy.get("iframe#dorik-builder-iframe")
        .its("0.contentDocument.body")
        .find("section.dorik-section")
        .trigger("mouseover")
        .find("button:eq(11)") // find edit element button
        .click(); //open general setting modal
      // cy.get('.sc-hBUXXM') general body hlp u to scrl
  
      // open accordions
      // cy.get('[data-testid="toggle"]').eq(1).click() // close first field
      // cy.get('.sc-fyVfxW').contains("+ Add New").should("be.visible").click() //check adding button for add a new field of this accordion
      // cy.get('.sc-BQMaI:eq(1)').find(".icon-toggle").last().click()
      // cy.get(".sc-cKXybt").click().type("I'm a automatically typed ac heading")
      // cy.get('.notranslate').click().type("I'm a automatically typed accordion's description")
      cy.get('[data-testid="toggle"]').eq(0).click();
      // close accordions
  
      // open accordion styles
      // cy.get('[data-testid="toggle"]').eq(1).click();
      // cy.get(".sc-gVJvzJ").click().clear().type("50px");
      // cy.contains("Border & Radius").should("be.visible").click();
      // cy.get(".sc-gVJvzJ").eq(1).click().clear().type("5px");
      // cy.get('[placeholder="eg: #ff00ff"]').eq(0).click().clear().type("#ff00ff");
      // cy.get(".form-control--with-arrow").eq(5).click().clear().type("8px");
      // cy.get(".form-control--with-arrow").eq(4).click().clear().type("8px");
      // cy.get(".form-control--with-arrow").eq(2).click().clear().type("8px");
      // cy.get(".form-control--with-arrow").eq(3).click().clear().type("8px");
      // cy.contains("Background").should("be.visible").click();
      // cy.get('[placeholder="eg: #ff00ff"]')
      //   .eq(1)
      //   .click()
      //   .clear()
      //   .clear({ timeout: 2000 })
      //   .type("#ffffff");
      // cy.get('[data-testid="toggle"]').eq(1).click();
      // close accordion styles
  
      // open heading style
      // cy.get('[data-testid="toggle"]').eq(2).click();
      // cy.contains("Heading Size").should("be.visible"); // check heading size's visibility
      // cy.get(".sc-feoqov > input").as("range").invoke("val", 25).click();
      // cy.get("@range").should("have.value", "25"); // check range
      // cy.get(".form-control--with-arrow").eq(0).click().clear().type("25px"); // set heading size with input and type
      // cy.contains("Color").should("be.visible");
      // cy.get("div.sc-djTQaJ.iivMaw > div").eq(1).should("be.visible");
      // // cy.intercept({ method: "POST", url: "/collect" }).as("collect");
      // // cy.intercept({ method: "POST", url: "/graphql" }).as("published");
      // cy.get(".sc-cKXybt")
      //   .eq(0)
      //   .click()
      //   .type("{selectall}{backspace}")
      //   .wait(1000)
      //   .clear({ timeout: 2000 })
      //   .type("#ffffff"); // set heading color
      // cy.contains("Font Weight").should("be.visible");
      // cy.get("select").select("500").should("have.value", "500"); //set font-weight
      // cy.contains("Spacing & Line Height").should("be.visible");
      // cy.contains("Line Height").should("be.visible");
      // cy.get("input:eq(3)").click().clear().type("3"); // set line height
      // cy.contains("Spacing").should("be.visible");
      // cy.get("input:eq(4)").clear().type("2px"); // set letter spacing
      // cy.contains("Padding").should("be.visible");
      // cy.get(".form-control--with-arrow").eq(1).click().clear().type("8px"); // set paddingTop
      // cy.get(".form-control--with-arrow").eq(2).click().clear().type("8px"); // set paddingBottom
      // cy.get(".form-control--with-arrow").eq(3).click().clear().type("20px"); // set paddingLeft
      // cy.get(".form-control--with-arrow").eq(4).click().clear().type("20px"); // set paddingRight
      // cy.get(".fa-lock-alt").eq(1).click();
      // cy.get(".fa-chevron-up:eq(6)").click(); // set paddingLeft-Right
      // cy.contains("Background").should("be.visible").click();
      // cy.contains("Background Style").should("be.visible");
      // cy.get('.bvYKmd:contains("Color")').should("be.visible").click();
      // cy.contains("Background Color").should("be.visible");
      // cy.contains("Gradient").should("be.visible"); //.click();
      // cy.get(".sc-cKXybt")
      //   .eq(1)
      //   .click()
      //   .type("{selectall}{backspace}")
      //   .wait(1000)
      //   .clear({ timeout: 2000 })
      //   .type("#74C09F");
      // cy.get('[data-testid="toggle"]').eq(2).click();
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
      // cy.get('[data-testid="toggle"]').eq(4).click();
      // cy.contains("Background Style").should("be.visible");
      // cy.contains("Color").should("be.visible") //.click();
      // cy.contains("Gradient").should("be.visible") //.click();
      // cy.contains("Image").should("be.visible") //.click();
      // cy.contains("Background Color").should("be.visible");
  
      // cy.get('[data-testid="toggle"]').eq(4).click();
      //close Background
  
      saveAndPublish()
    });
  });
  