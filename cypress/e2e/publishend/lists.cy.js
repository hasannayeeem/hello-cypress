export const lists = () => {
    it("test LIST on publishend", () => {
        cy.getOrCreateToken();
        cy.visit(`${Cypress.env("publishedURL")}`);
        
        // start to check list
        cy.get(".dorik-list").should("have.css", {
          "flex-direction": "row",
          "justify-content": "center",
          "background-color": "rgb(240, 240, 214)",
          "border-right-width": "5px",
        });
        cy.get(".dorik-list > .dorik-list--item").should("have.length", 3);
        cy.get(".dorik-list > .dorik-list--item").should(
          "have.css",
          "flex-direction",
          "row"
        );
        cy.get(".dorik-list > .dorik-list--item > .dorik-list--lists").should(
          "have.css",
          {
            "display": "flex",
            "align-items": "center",
            "flex-direction": "row-reverse",
            "text-align": "right",
            "font-size": "20px",
            "text-decoration": "none",
            "color": "green",
          }
        );
        cy.get(".dorik-list--gap").should("have.css", {
            "border-style": "solid",
      "border-radius": "5px",
      "border-color": "rgb(111, 113, 89)"
        })
        cy.get(
          ".dorik-list > .dorik-list--item > .dorik-list--lists > .dorik-list--icon"
        ).should("have.css", {
          "margin-left": "8px",
          "height": "50px",
          "width": "50px",
          "min-width": "50px",
          "border": "5px solid green",
          "border-radius": "5px",
          "font-size": "30px",
        });
        cy.get(
          ".dorik-list > .dorik-list--item > .dorik-list--lists > .dorik-list--text"
        ).should("have.css", {
          "line-height": "3",
          "letter-spacing": "1px",
        });
        //   cy.get('dorik-list')
      });
}