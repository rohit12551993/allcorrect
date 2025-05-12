describe("GET",()=>{
    it("GET API",()=>{
        cy.request("GET","https://api.restful-api.dev/objects")
        .its('status').should('equal',200);
    })
})