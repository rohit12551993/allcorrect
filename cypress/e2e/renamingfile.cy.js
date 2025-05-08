describe("renaming file", () => {
    it("this will rename the file", () => {
      // This will open the website
      cy.visit('https://testautomationpractice.blogspot.com/');
  
      // This will rename the file while uploading
      cy.get("#singleFileInput").attachFile({
        filePath: "test.csv",       // Correct key is filePath (not filepath)
        fileName: "rohit.csv"       // The new name to be used during upload
      });
    });
  });
  