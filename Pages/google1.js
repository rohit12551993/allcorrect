import { faker } from "@faker-js/faker";

export default class google1{
    
    g1(){
        let name = faker.person.firstName();
        Cypress.env('sharedname',name)
        cy.visit("https://www.google.com/");
       cy.get("#APjFqb").click().type(name)
       
    
    }
}