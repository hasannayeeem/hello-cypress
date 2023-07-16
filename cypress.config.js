const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    login_path:
      "https://test-with-cy.dcms.site/dashboard/auth/login?auto_login=",
    auto_login:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybSI6ImRvcmlrIiwic2l0ZUlkIjoiNjE1YjFkM2NhZGQ2ZDI1MTYzNTgyYzI1IiwiZW1haWwiOiJzb2Z0d2FyZWVuZ2luZWVyLmRvcmlrQGdtYWlsLmNvbSIsImlhdCI6MTY4OTQ4Mzc1NSwiZXhwIjoxNjg5NDg0MDU1fQ.j73WYfHumB5gFKxDPDDAvqt1-CG6zNwgWaOGMSr7nqU",
    email: "softwareengineer.dorik@gmail.com",
    password: "Acce$$D0rik",
  },
  e2e: {
    // baseUrl: "https://test-with-cy.dcms.site/dashboard/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalSessionAndOrigin: true,
  },
});
