describe("confirmational alert",()=>{
    it("this is confirmational alert",()=>{
        //This will open the website
    cy.visit('https://testautomationpractice.blogspot.com/')

    //this will handle the alert
    cy.get("#confirmBtn").click();
   // cy.on('window:confirm',()=>false) 
    })
})