import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("HEADING", () => {
  // ___________________________________________
  //     test to set HEADING's properties
  // -------------------------------------------
  it("test to set HEADING's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("heading")


// SAVE
    // saveAndPublish()
  });
});