export const accordion = () => {
        // start to checking ACCORDION
        cy.get("details").click({ multiple: true });
        cy.get("summary:eq(0)").should("have.css", {
          "background-color": "rgb(116, 192, 159)",
          "color": "rgb(255, 255, 255)",
        });
        cy.get("summary:eq(0)").should("have.css", {
          "font-size": "25px",
          "line-height": "3",
          "font-weight": "500",
          "letter-spacing": "2px",
        });
        cy.get("summary:eq(0)").should("have.css", {
          "padding": "8px 21px",
        });
        cy.get("details > .details-content")
          .last()
          .should("contain", "I'm a automatically typed accordion's description");
}