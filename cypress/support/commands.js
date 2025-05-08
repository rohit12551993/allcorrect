/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
import 'cypress-file-upload';

Cypress.Commands.add("Riselogin", () => {
  cy.visit("https://stg.risebuildings.com/pm/login");
  cy.get("#rise-login-email").click().type("harish@madan.com");
  cy.get("[data-testid='riseLoginBtn']").click();
  cy.get("[placeholder='Password']").click().type("Password@123");
  cy.get('[data-testid="riseLoginBtn"]').click();

  // Assertion
  cy.contains(" DASHBOARD ").should("be.visible");
  cy.url().should("eq", "https://stg.risebuildings.com/pm/dashboard");
});
