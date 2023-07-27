import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("TESTIMONIAL SLIDER", () => {
  // ___________________________________________
  //     test to set TESTIMONIAL SLIDER's properties
  // -------------------------------------------
  it("test to set TESTIMONIAL SLIDER's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("testimonialSlider")


// SAVE
    // saveAndPublish()
  });
});