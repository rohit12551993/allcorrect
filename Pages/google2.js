import google1 from "./google1";
export default class google2 {
    
    g2(){
        const name = Cypress.env('sharedname')
        
        
    
        cy.visit("https://www.google.com/");
        cy.get("#APjFqb").click().type(name)
    }
}