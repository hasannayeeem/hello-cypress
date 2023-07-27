import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("VIDEO", () => {
  // ___________________________________________
  //     test to set VIDEO's properties
  // -------------------------------------------
  it("test to set VIDEO's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("video")


// SAVE
    // saveAndPublish()
  });
});