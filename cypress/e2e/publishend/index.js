import { accordion } from "./accordion.cy";
import { lists } from "./lists.cy";

export const checkPublishend = (el) =>{
  cy.visit(`${Cypress.env("publishedURL")}`);
    switch(el) {
        case "accordion":
          accordion()
          break;
        case "lists":
          lists()
          break;
        default:
            describe("check publish end", () => {
                accordion()
                lists()
              });
      }
}




