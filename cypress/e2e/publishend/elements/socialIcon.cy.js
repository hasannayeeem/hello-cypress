import social_Icon from "../el_p_code/socialIcon";

export const socialIcon = () => {
  it("test SOCIAL ICON on publishend", () => {
    cy.getOrCreateToken();
    cy.visit(`${Cypress.env("publishedURL")}`);
    // start to checking SOCIAL ICON
    social_Icon();
  });
};
socialIcon();
