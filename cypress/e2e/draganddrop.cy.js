/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
import '@4tw/cypress-drag-drop'

describe("drag and drop",()=>{
    it("This will drag and drop an element",()=>{
        //This will open the website
    cy.visit('https://testautomationpractice.blogspot.com/')
    //this will drag and drop the file/element
    cy.get("#draggable").drag("#droppable")   
    

    })
})