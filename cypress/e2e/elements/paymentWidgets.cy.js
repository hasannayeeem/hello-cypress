import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("PAYMENT WIDGETS", () => {
  // ___________________________________________
  //     test to set PAYMENT WIDGETS's properties
  // -------------------------------------------
  it("test to set PAYMENT WIDGETS's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("paymentWidgets")


// SAVE
    // saveAndPublish()
  });
});