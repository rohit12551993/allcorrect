describe("Fixture file",()=>{
    it("reading data from fixture file",()=>{
        cy.fixture("creds.json").then((data)=>{
            let name = data.username
            let password = data.password
            cy.log(name);
            cy.log(password);
        })
        
    })
})
