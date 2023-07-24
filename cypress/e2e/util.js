import { checkPublishend } from "./publishend";

export const visitToPublishedUrl = (el) => {
  cy.visit(`${Cypress.env("publishedURL")}`);
  checkPublishend(el)
};
export const visitToCmsBuilder = () => {
  cy.intercept({ method: "POST", url: "/api/auth" }).as("authpass");
  cy.intercept({ method: "POST", url: "/api/cms" }).as("cmsapi");
  cy.visit(`${Cypress.env("cmsBuilderURL")}`);
  // cy.wait("@authpass");
  cy.wait("@cmsapi");
  cy.get("#dorik-builder-iframe", { timeout: 20000 }).should("be.visible");
  cy.get("#dorik-builder-iframe").its("0.contentDocument").should("exist"); //checked iframe's content visibility
};
export const visitToStaticBuilder = () => {
  cy.visit(`${Cypress.env("publishedURL")}`);
};
export const saveAndPublish = () => {
    // after(()=> {
        // to save
        cy.scrollTo("top");
        cy.contains(" Save").should("be.visible").click();
        // to publish
        cy.get(".active > button").should("contain", "Publish").click();
        // })
    };
    
    export const isExist = (el) => {
        return document.querySelector(`iframe#dorik-builder-iframe`).contentDocument.querySelector(`[itemtype="${el}"]`)
    };