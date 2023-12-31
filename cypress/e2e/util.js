import { checkPublishend } from "./publishend";

export const visitToPublishedUrl = (el) => {
  cy.visit(`${Cypress.env("publishedURL")}`);
  checkPublishend(el);
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
export const visitToCmsDashboard = () => {
  cy.intercept({ method: "POST", url: "/api/auth" }).as("authpass");
  cy.intercept({ method: "POST", url: "/api/cms" }).as("cmsapi");
  cy.visit(`${Cypress.env("cmsDashboard")}`);
  // cy.wait("@authpass");
  cy.wait("@cmsapi");
  cy.contains("Design & Pages").should("be.visible");
};
export const visitToStaticBuilder = () => {
  cy.intercept({ method: "POST", url: "/graphql" }).as("profile");
  cy.visit(`${Cypress.env("staticURL")}`);
  cy.wait("@profile");
  cy.contains("Static").should("be.visible");
  cy.contains("Static").click();
  cy.get('[gutter="32,40"] > :nth-child(3)')
    .contains("Edit Site")
    .should("be.visible")
    .click();
  cy.get("#dorik-builder-iframe", { timeout: 30000 }); //.should("be.visible");
  cy.get('[aria-label="Close"]').should("be.visible").click();
  cy.get("#dorik-builder-iframe").its("0.contentDocument").should("exist");
};
export const saveAndPublish = () => {
  // after(()=> {
  // to save
  cy.scrollTo("top");
  cy.contains(" Save").click();
  // to publish
  cy.get(".active > button").should("contain", "Publish").click();
  // })
};
export const openGeneralsettingModal = (type, i=0) => {
  cy.get("iframe#dorik-builder-iframe")
    .its("0.contentDocument.body")
    .find(`[itemtype="${type}"]`).eq(i)
    .trigger("mouseover")
    .find("button:eq(1)") // find edit element button
    .click(); //open general setting modal
};

export const isExist = (el) => {
  return document
    .querySelector(`iframe#dorik-builder-iframe`)
    .contentDocument.querySelector(`[itemtype="${el}"]`);
};
