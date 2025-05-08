describe("single file",()=>{
    it("uploading single file",()=>{
         //This will open the website
    cy.visit('https://testautomationpractice.blogspot.com/');

    //this will upload a single file
    cy.get("#singleFileInput").attachFile("test.csv")
    
    })
})