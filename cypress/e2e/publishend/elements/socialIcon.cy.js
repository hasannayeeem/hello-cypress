import social_Icon from "../el_p_code/socialIcon";

export const socialIcon = () => {
    it("test SOCIAL ICON on publishend", () => {
        cy.getOrCreateToken();
        cy.visit(`${Cypress.env("publishedURL")}`);

    // start to checking SOCIAL ICON
    social_Icon()
    // cy.checkCssProperties(".selector", {
    // })
    
    // cy.wait(200)
    // cy.get(".dorik-list--link:eq(1)")
    // .trigger("mouseover")
    // .should("have.css", {
    //   "color": "rgb(161, 69, 161)",
    //   "text-decoration": "overline rgb(161, 69, 161)"
    // })
})
};
socialIcon()