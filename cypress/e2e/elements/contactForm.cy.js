import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("CONTACT FORM", () => {
  // ___________________________________________
  //     test to set CONTACT FORM's properties
  // -------------------------------------------
  it("test to set CONTACT FORM's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("contactForm")


// SAVE
    // saveAndPublish()
  });
});
