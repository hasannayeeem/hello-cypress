const socialIcon = () => {
    // start to checking SOCIAL ICON
    cy.get(`[class^="dorik-socialIcon-"] > li svg`)
    cy.checkCssProperties(`[class^="dorik-socialIcon-"]`, {
      "display": "flex",
      "flex-direction": "column",
      "line-height": "16px",
      "margin-top": "0px",
      "margin-bottom": "0px",
      "margin-left": "0px",
      "margin-right": "0px",
      "padding-top": "0px",
      "padding-bottom": "0px",
      "padding-left": "0px",
      "padding-right": "0px",
      "justify-content": "flex-start",
      "align-items": "center",
      "background-color": "rgb(161, 69, 161)"
    });
    cy.get(`[class^="dorik-socialIcon-"]`)
    .trigger("mouseover")
    .should("have.css", {
      "background-color": "rgb(170, 17, 85)"
    })
    cy.checkCssProperties(`[class^="dorik-socialIcon-"] > li`, {
      "margin-bottom": "14px"
    });
    cy.checkCssProperties(`[class^="dorik-socialIcon-"] > li svg`, {
          "fill": "rgb(27, 25, 25)",
          "height": "40px",
          "width": "40px",
          "min-width": "40px"
      });
    cy.get(`[class^="dorik-socialIcon-"] > li a`).last().should("have.attr", "href", "/check-button")
    cy.get(`[class^="dorik-socialIcon-"] > li svg`).last()
    .trigger("mouseover")
    .should("have.css", {
      "background-color": "rgb(170, 17, 85)"
    })
  };
  export default socialIcon
  
  