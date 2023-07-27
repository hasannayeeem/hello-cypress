import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("COUNTER DOWN", () => {
  // ___________________________________________
  //     test to set COUNTER DOWN's properties
  // -------------------------------------------
  it("test to set COUNTER DOWN's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("counterdown")


// SAVE
    // saveAndPublish()
  });
});