import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("TABS", () => {
  // ___________________________________________
  //     test to set TABS's properties
  // -------------------------------------------
  it("test to set TABS's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("tabs")


// SAVE
    // saveAndPublish()
  });
});