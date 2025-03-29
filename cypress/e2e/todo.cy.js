import config from "../../src/config";

describe("template spec", () => {
  it("passes", () => {
    cy.visit(config.BASE_URL);
    cy.contains("Login to Your Account").should("be.visible");
  });
});
