import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("CUSTOM FORM", () => {
  // ___________________________________________
  //     test to set CUSTOM FORM's properties
  // -------------------------------------------
  it("test to set CUSTOM FORM's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("customForm")


// SAVE
    // saveAndPublish()
  });
});