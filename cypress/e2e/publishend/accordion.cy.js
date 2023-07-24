export const accordion = () => {
    it("test ACCORDION on publishend", () => {
        cy.getOrCreateToken();
        cy.visit(`${Cypress.env("publishedURL")}`);

        // start to checking ACCORDION
        cy.get("details").click({ multiple: true });
        cy.get("summary:eq(0)").should("have.css", {
          "background-color": "rgb(116, 192, 159)",
          "font-size": "25px",
          "line-height": "3",
          "padding": "8px 21px",
          "color": "rgb(255, 255, 255)",
          "font-weight": "500",
          "letter-spacing": "2px",
        });
        cy.get("details > .details-content")
          .last()
          .should("contain", "I'm a automatically typed accordion's description");
      })
}