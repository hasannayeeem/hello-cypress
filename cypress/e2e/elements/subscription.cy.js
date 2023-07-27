import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("SUBSCRIPTION FORM", () => {
  // ___________________________________________
  //     test to set SUBSCRIPTION FORM's properties
  // -------------------------------------------
  it("test to set SUBSCRIPTION FORM's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("subscription")




    saveAndPublish()
  });
});
