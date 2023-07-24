export const addElement = (element = '') => {
    console.log('worked');
    // it("add element", ()=> {

    //     // cy.get("iframe#dorik-builder-iframe")
    //     // .its("0.contentDocument.body")
    //     // .find("button.btn-primary")
    //     // .click();
    
    //     //     --if don't have any element--    //to open elements modal
    //     // cy.get("#dorik-builder-iframe")
    //     //   .its("0.contentDocument.body")
    //     //   .find("button.btn-primary-alt")
    //     //   .click();
    
    //     //     --if have a section/element--    //to add a section under the first section
    //     cy.get("#dorik-builder-iframe")
    //       .its("0.contentDocument.body")
    //       .eq(0)
    //       .trigger("mouseover")
    //       .contains("Add New Section")
    //       .should("be.visible")
    //       .click();
    
    //     cy.contains("Section Library").should("be.visible");
    //     cy.contains("Section Symbols").should("be.visible");
    //     cy.contains("Saved Sections").should("be.visible");
    //     cy.contains("Custom Section").should("be.visible").click();
    //     // const rgSection = cy.get('[data-testid="wrapper-1"] > div').specWindow.expect.length //.eq(1).its("length")
    //     // console.log(rgSection);
    //     const wrapper1 = cy.get('[data-testid="wrapper-1"] > div:eq(1) > div')
    //     console.log(wrapper1.specWindow.expect.length);
    //     wrapper1.its("length").should("eq", 14);
    //   cy.get('[data-testid="wrapper-1"] > div:eq(1) > div').eq(0).click(); // add section with one clumn
    //     cy.get("#dorik-builder-iframe")  // show elements modal
    //       .its("0.contentDocument.body")
    //       .find("button.btn-primary-alt")
    //       .click();
    //       cy.get('[data-testid="wrapper-1"] > div:eq(1) > div').its("length").should("eq", 28)   // check total element 28
    //       cy.get('[data-testid="wrapper-1"] > div:eq(1) > div').eq(0).click();    // add first Element(accordion)
    //   })
  };