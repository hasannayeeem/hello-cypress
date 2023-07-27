import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("NAV", () => {
  // ___________________________________________
  //     test to set NAV's properties
  // -------------------------------------------
  it("test to set NAV's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("nav")


// SAVE
    // saveAndPublish()
  });
});