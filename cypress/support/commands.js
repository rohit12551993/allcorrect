/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
import 'cypress-file-upload';

// ✅ Custom command to perform login and save cookies
Cypress.Commands.add("Riselogin", () => {
  cy.visit("https://stg.risebuildings.com/pm/login");
  cy.get("#rise-login-email").click().type("harish@madan.com");
  cy.get("[data-testid='riseLoginBtn']").click();
  cy.get("[placeholder='Password']").click().type("Password@123");
  cy.get('[data-testid="riseLoginBtn"]').click();

  // Assertion
  cy.contains(" DASHBOARD ").should("be.visible");
  cy.url().should("eq", "https://stg.risebuildings.com/pm/dashboard");

  // ✅ Save cookies after login
  cy.getCookies().then((cookies) => {
    cy.writeFile('cypress/fixtures/cookies.json', cookies);
  });
});

// ✅ Custom command to type into Google
Cypress.Commands.add("typeintogoogle", () => {
  cy.visit("https://www.google.com/");
  cy.get("#APjFqb").click().type("Rohit Madan");
});

// ✅ Custom command to restore cookies
Cypress.Commands.add("restoreSession", () => {
  cy.readFile('cypress/fixtures/cookies.json').then((cookies) => {
    cookies.forEach((cookie) => {
      cy.setCookie(cookie.name, cookie.value);
    });
  });
});
