describe("reading data from file", () => {
    it("reading data from downloaded file", () => {
      cy.readFile("cypress/downloads/dummy_file.txt").then((data) => {
        cy.log(data);
      });
    });
  });
  