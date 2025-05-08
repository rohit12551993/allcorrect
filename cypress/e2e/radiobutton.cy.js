describe("Radio buttons",()=>{
    it("This will check the radio button",()=>{
         //This will open the website
    cy.visit('https://testautomationpractice.blogspot.com/')
    //this will check the radio button

    //this will select the radio button
        cy.get("#male").click();
    })
})