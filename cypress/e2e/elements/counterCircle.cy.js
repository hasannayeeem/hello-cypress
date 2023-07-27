import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("CONTENT CIRCLE", () => {
  // ___________________________________________
  //     test to set CONTENT CIRCLE's properties
  // -------------------------------------------
  it("test to set CONTENT CIRCLE's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("contentCircle")


// SAVE
    // saveAndPublish()
  });
});