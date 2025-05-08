/// <reference types="cypress" />
describe("right click",()=>{
    it("right clicking on an element",()=>{
        //this will open up the website
        cy.visit("https://testautomationpractice.blogspot.com/")
//this will right click on an element
cy.contains("Point Me").click().rightclick();

    })
})