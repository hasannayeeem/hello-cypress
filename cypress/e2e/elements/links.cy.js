import { checkPublishend } from "../publishend";
import { openGeneralsettingModal, saveAndPublish, visitToCmsBuilder } from "../util";

describe("LINKS", () => {
  // ___________________________________________
  //     test to set LINKS's properties
  // -------------------------------------------
  it("test to set LINKS's properties", () => {
    cy.getOrCreateToken();
    visitToCmsBuilder();
    openGeneralsettingModal("links")


  });
});