export const links = () => {
    it("test LINKS on publishend", () => {
        cy.getOrCreateToken();
        cy.visit(`${Cypress.env("publishedURL")}`);

    // start to checking LINKS
    cy.checkCssProperties(".dorik-list", {
        "flex-direction": "column",
        "align-items": "center",
    });
    cy.checkCssProperties(".dorik-list--link", {
      "text-decoration": "underline double rgb(255, 0, 255)",
      "font-size": "17px",
      "line-height": "20px",
      "letter-spacing": "1px",
      "color": "rgb(255, 0, 255)",
      "margin-bottom": "17px",
      "flex-direction": "row-reverse"
    });
    cy.wait(200)
    cy.get(`.dorik-list--link:eq(1)`).should("have.attr", "href", "/check-button")
    cy.wait(200)
    cy.checkCssProperties(".dorik-list--link:eq(1) > .dorik-list--icon", {
        "font-size": "17px",
        "color": "rgb(255, 0, 255)",
        "margin-left": "7px"
    });
    cy.wait(200)
    cy.get(".dorik-list--link:eq(1)")
    .trigger("mouseover")
    .should("have.css", {
      "color": "rgb(161, 69, 161)",
      "text-decoration": "overline rgb(161, 69, 161)"
    })
})
};
links()
  