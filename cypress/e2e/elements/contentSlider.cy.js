import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("CONTENT SLIDER", () => {
  // ___________________________________________
  //     test to set CONTENT SLIDER's properties
  // -------------------------------------------
  it("test to set CONTENT SLIDER's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("contentSlider")


// SAVE
    // saveAndPublish()
  });
});