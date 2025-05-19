import Google from "./google";
export default class Wikipedia{
    typewikipedia(){
        let string1 = Cypress.env('string')
        cy.fixture("creds.json").then((data)=>{
            cy.visit(data.wikipediaurl);
            cy.get("#searchInput").click().type(string1);

        })
    }
}