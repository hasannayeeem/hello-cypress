import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("IMAGE SLIDER", () => {
  // ___________________________________________
  //     test to set IMAGE SLIDER's properties
  // -------------------------------------------
  it("test to set IMAGE SLIDER's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("imageSlider")


// SAVE
    // saveAndPublish()
  });
});