const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    login_path:
      "https://test-with-cy.dcms.site/dashboard/auth/login?auto_login=",
    auto_login:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybSI6ImRvcmlrIiwic2l0ZUlkIjoiNjE1YjFkM2NhZGQ2ZDI1MTYzNTgyYzI1IiwiZW1haWwiOiJzb2Z0d2FyZWVuZ2luZWVyLmRvcmlrQGdtYWlsLmNvbSIsImlhdCI6MTY4OTc2ODQ0NiwiZXhwIjoxNjg5NzY4NzQ2fQ.Rg32U9Gm-Xkm-GSe-WCKEu9AKcGAzNr-825fzAmoUac",
    email: "softwareengineer.dorik@gmail.com",
    password: "Acce$$D0rik",
    publishedURL: "https://test-with-cy.dcms.site/",
    staticURL: "https://app.dorik.com/",
    cmsBuilderURL: "https://test-with-cy.dcms.site/dashboard/design/64abf37eafc6980012bbbb95",
    cmsDashboard: "https://test-with-cy.dcms.site/dashboard/"
  },
  e2e: {
    // baseUrl: "https://test-with-cy.dcms.site/dashboard/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalSessionAndOrigin: true,
  },
});
