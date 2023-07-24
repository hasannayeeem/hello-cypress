import { accordion } from "./el_p_code/accordion";
import { list } from "./el_p_code/list";


export const checkPublishend = (el) =>{
  cy.visit(`${Cypress.env("publishedURL")}`);
    switch(el) {
        case "accordion":
          accordion()
          break;
        case "list":
          list()
          break;
        default:
            describe("check publish end", () => {
                accordion()
                list()
              });
      }
}




