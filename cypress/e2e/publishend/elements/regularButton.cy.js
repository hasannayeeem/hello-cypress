export const regularButton = () => {
  it("test REGULAR BUTTON on publishend", () => {
    cy.getOrCreateToken();
    cy.visit(`${Cypress.env("publishedURL")}`);

    // start to checking REGULAR BUTTON
    cy.checkCssProperties(".dorik-btn", {
      "justify-content": "center",
      "padding": "20px",
      "border-radius": "5px",
      "background-color": "rgb(60, 61, 81)",
      "font-size": "20px",
      "color": "rgb(255, 0, 255)",
      "line-height": "20px",
      "font-weight": "500",
      "letter-spacing": "2px",
      "text-transform": "uppercase",
      "text-shadow": "rgb(28, 1, 1) 4px 4px 1px",
    });
    cy.checkCssProperties(`svg[data-icon="circle-check"]`, {
      "font-size": "27px",
      "color": "rgb(255, 0, 255)",
      "margin-right": "10px",
    });
    cy.get(`.dorik-btn`).click();
    cy.wait(1000);
    cy.get(`button.dorik-btn[href="popup-text"]`).click();
    cy.get(`a.dorik-btn:contains("mail to")`).should("have.attr", "href", "mailto:hasannayeeem@gmail.com");
    cy.get(`svg[data-icon="xmark"]`).click();
    cy.contains(`pageNewTab`).should(($link) => {
      expect($link).to.have.attr("target", "_blank");
    });
    cy.contains(`external`)
      .should("have.attr", "href", "https://test-with-cy.dcms.site/")
      .click();
  });
};
regularButton()
