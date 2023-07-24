Cypress.Commands.add("getOrCreateToken", () => {
  cy.session("getOrCreateToken", () => {
    cy.intercept({ method: "POST", url: "/api/auth" }).as("authpass");
    cy.intercept({ method: "POST", url: "/api/cms" }).as("cmsapi");
    cy.visit(`${Cypress.env("login_path")}${Cypress.env("auto_login")}`);
    cy.wait("@authpass");
    cy.contains("Design & Pages").should("be.visible");
    cy.contains("Team Members").should("be.visible");
    cy.contains("Custom Domain").should("be.visible");
    cy.contains("Settings").should("be.visible");
    cy.contains("Design & Pages").click();
    cy.wait("@cmsapi");

    cy.get("#dorik-builder-iframe", { timeout: 20_000 }).should("be.visible"); 
  },
  {
    cacheAcrossSpecs: true
  });

  // Set login token as a cookie
  //   Cypress.Cookies.preserveOnce("login-cridential-of-dorik");
});
Cypress.Commands.add("login", (username, password) => {
  cy.session("login", () => {
    cy.visit("https://app.dorik.com/");
      cy.get('input[name="username"]').type(username);
      cy.get('input[name="password"]').type(password, { sensitive: true });
      cy.get('[type="submit"]').click();
      cy.wait(10000);
      cy.contains("Static").should("be.visible")
  },
  {
    cacheAcrossSpecs: true
  });
});

Cypress.Commands.add("checkCssProperties", (element, cssProperties) => {
  for (const prop in cssProperties) {
    cy.get(element).should("have.css", prop, cssProperties[prop]);
  }
});
