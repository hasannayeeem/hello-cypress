import { accordion } from "./el_p_code/accordion";
import { links } from "./el_p_code/links";
import { list } from "./el_p_code/list";
import { regularButton } from "./el_p_code/regularButton";


export const checkPublishend = (el) =>{
  cy.visit(`${Cypress.env("publishedURL")}`);
    switch(el) {
        case "accordion":
          accordion()
          break;
        case "list":
          list()
          break;
        case "links":
          links()
          break;
        case "regularButton":
          regularButton()
          break;
        default:
            describe("check publish end", () => {
                accordion()
                list()
                regularButton()
                links()
              });
      }
}




