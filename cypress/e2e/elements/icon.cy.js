import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("ICON", () => {
  // ___________________________________________
  //     test to set ICON's properties
  // -------------------------------------------
  it("test to set ICON's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("icon")


// SAVE
    // saveAndPublish()
  });
});