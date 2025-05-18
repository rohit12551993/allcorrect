describe("download and read data",()=>{
    it("download and read data",()=>{
        cy.visit("https://commitquality.com/practice-file-download");
        cy.get("div[class='container'] div button").click();


       const filePath = "cypress/downloads/dummy_file.txt"
       cy.readFile(filePath).then((data)=>{
      cy.log("File content: " + data);

    

       })
    })
})