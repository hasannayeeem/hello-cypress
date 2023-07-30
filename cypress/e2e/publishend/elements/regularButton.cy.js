import regular_Button from "../el_p_code/regularButton";
export const regularButton = () => {
  it("test REGULAR BUTTON on publishend", () => {
    cy.getOrCreateToken();
    cy.visit(`${Cypress.env("publishedURL")}`);
    // start to checking REGULAR BUTTON
    regular_Button()
  });
};
regularButton()
