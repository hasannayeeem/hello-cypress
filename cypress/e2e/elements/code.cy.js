import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("CODE", () => {
  // ___________________________________________
  //     test to set CODE's properties
  // -------------------------------------------
  it("test to set CODE's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("code")


// SAVE
    // saveAndPublish()
  });
});