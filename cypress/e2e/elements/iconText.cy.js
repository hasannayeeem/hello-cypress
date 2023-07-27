import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("ICON TEXT", () => {
  // ___________________________________________
  //     test to set ICON TEXT's properties
  // -------------------------------------------
  it("test to set ICON TEXT's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("iconText")


// SAVE
    // saveAndPublish()
  });
});