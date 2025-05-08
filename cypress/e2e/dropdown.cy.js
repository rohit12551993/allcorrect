describe("dropdown",()=>{
    it("dropsown with select tag",()=>{
        //This will open the website
    cy.visit('https://testautomationpractice.blogspot.com/')

    //this will select the3 value from dropdown
        cy.get("#country").select("China")
    })
})