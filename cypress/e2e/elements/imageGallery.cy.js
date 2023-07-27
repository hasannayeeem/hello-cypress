import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("IMAGE GALLERY", () => {
  // ___________________________________________
  //     test to set IMAGE GALLERY's properties
  // -------------------------------------------
  it("test to set IMAGE GALLERY's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("imageGallery")


// SAVE
    // saveAndPublish()
  });
});