describe("multiple file",()=>{
    it("uploading single file",()=>{
         //This will open the website
    cy.visit('https://testautomationpractice.blogspot.com/');

    //this will upload a multiple files
    cy.get("#multipleFilesInput").attachFile("test.csv" , "testing.csv")
    
    })
})