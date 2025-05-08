describe("download file",()=>{
    it("downloading a pdf file",()=>{
        cy.visit("https://commitquality.com/practice-file-download")

        cy.contains("Download File").click();
    })
})