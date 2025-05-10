/// <reference types="cypress" />

export default class Rohit {
  googletype() {
    cy.visit("https://www.google.com/");
    cy.get("textarea[name='q']").click().type("rohit madan{enter}");
  }
}
