import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("MOVE TO TOP", () => {
  // ___________________________________________
  //     test to set MOVE TO TOP's properties
  // -------------------------------------------
  it("test to set MOVE TO TOP's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("moveToTop")


// SAVE
    // saveAndPublish()
  });
});