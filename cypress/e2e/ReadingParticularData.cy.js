describe('reading particular data from a file', () => {
  
    it('reads and logs first 2 characters - test 1', () => {
      cy.readFile("cypress/downloads/dummy_file.txt").then((data) => {
        const sliced = data.slice(0, 2);
        cy.log(sliced);
      });
    });
  
    it('reads and logs words split by space - test 2', () => {
      cy.readFile("cypress/downloads/dummy_file.txt").then((data) => {
        const sliced = data.split(" ");
        cy.log(sliced);
      });
    });
  
    it('reads and logs words split by space - test 3', () => {
      cy.readFile("cypress/downloads/dummy_file.txt").then((data) => {
        const alphabet = "i";
      const count = [...data].filter(char => char === alphabet).length;
        cy.log(count);
      });
    });
  
  });
  