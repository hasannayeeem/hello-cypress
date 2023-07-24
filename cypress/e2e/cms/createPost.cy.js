const { visitToCmsDashboard } = require("../util");

describe("create a post on cms dashboard", () => {
  it("create a post", () => {
    cy.getOrCreateToken();
    visitToCmsDashboard()
    cy.contains("Posts").click();
    cy.contains("New Post", { timeout: 5000 }).click();
    cy.get(".blog--post__title").type("Hello, Test");
    cy.get(".ce-paragraph").should('be.visible');
    // cy.get(".ce-paragraph").trigger('paste');
    // cy.get(".ce-paragraph").type("this post is autometically typed with cypress");
    cy.window().its('navigator.clipboard')
    .then((clip) => clip.readText())
    // .should('equal', 'this post is autometically typed with cypress')
    .then((text) => {
      // paste the text from the clipboard into the text area
      cy.get('.ce-paragraph').click().invoke('text', text)
    })
    cy.get(".ant-space > :nth-child(3) > div").click();
    cy.get(".ant-popover-inner-content").contains("OK").click();
  });
});
