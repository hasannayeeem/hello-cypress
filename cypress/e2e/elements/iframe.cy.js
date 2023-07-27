import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("IFRAME", () => {
  // ___________________________________________
  //     test to set IFRAME's properties
  // -------------------------------------------
  it("test to set IFRAME's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("iframe")


// SAVE
    // saveAndPublish()
  });
});