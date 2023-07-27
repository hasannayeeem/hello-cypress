import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("SOCIAL ICON", () => {
  // ___________________________________________
  //     test to set SOCIAL ICON's properties
  // -------------------------------------------
  it("test to set SOCIAL ICON's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("socialIcon")

  });
});