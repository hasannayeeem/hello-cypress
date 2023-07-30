import accordion from "./el_p_code/accordion";
import heading from "./el_p_code/heading";
import links from "./el_p_code/links";
import list from "./el_p_code/list";
import regularButton from "./el_p_code/regularButton";
import socialIcon from "./el_p_code/socialIcon";


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
        case "socialIcon":
          socialIcon()
          break;
        case "heading":
          heading()
          break;
        default:
            describe("check publish end", () => {
                accordion()
                list()
                regularButton()
                links()
                socialIcon()
                heading()
              });
      }
}




