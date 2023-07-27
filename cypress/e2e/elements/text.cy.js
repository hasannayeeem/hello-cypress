import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("TEXT", () => {
  // ___________________________________________
  //     test to set TEXT's properties
  // -------------------------------------------
  it("test to set TEXT's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("text")


// SAVE
    // saveAndPublish()
  });
});