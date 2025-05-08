/// <reference types="cypress" />

describe("selecting checkboxes",()=>{
    it("This will select a checkbox",()=>{
        //This will open the website
    cy.visit('https://testautomationpractice.blogspot.com/')
//this will check the checkbox
    cy.get("#sunday").check();
    cy.wait(5000);

    //this will uncheck the checkbox
    cy.get("#sunday").uncheck();

    })
})