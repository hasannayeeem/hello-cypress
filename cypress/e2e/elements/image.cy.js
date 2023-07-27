import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("IMAGE", () => {
  // ___________________________________________
  //     test to set IMAGE's properties
  // -------------------------------------------
  it("test to set IMAGE's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("image")


// SAVE
    // saveAndPublish()
  });
});