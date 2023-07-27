import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("LINE", () => {
  // ___________________________________________
  //     test to set LINE's properties
  // -------------------------------------------
  it("test to set LINE's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("line")


// SAVE
    // saveAndPublish()
  });
});