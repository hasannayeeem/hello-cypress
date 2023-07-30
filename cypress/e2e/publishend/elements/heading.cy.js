import _heading from "../el_p_code/heading";

export const heading = () => {
  it("test HEADING / TITLE on publishend", () => {
    cy.getOrCreateToken();
    cy.visit(`${Cypress.env("publishedURL")}`);
    // start to checking HEADING / TITLE
    _heading();
  });
};
heading();