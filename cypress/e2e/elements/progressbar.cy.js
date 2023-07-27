import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("PROGRESSBAR", () => {
  // ___________________________________________
  //     test to set PROGRESSBAR's properties
  // -------------------------------------------
  it("test to set PROGRESSBAR's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("progressbar")


// SAVE
    // saveAndPublish()
  });
});