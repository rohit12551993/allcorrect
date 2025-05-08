describe("simpelalert",()=>{
    it("simple JS alert",()=>{
        //This will open the website
    cy.visit('https://testautomationpractice.blogspot.com/')

    //this will handle the alert
    cy.get("#alertBtn").click();

    //if you want to verify some text on alert box
    cy.on('window:alert',(t)=>{
        expect(t).to.contains("I am an alert box!")
    })
    })
})