describe('Read Excel File', () => {
  it('should read data from Excel and log it', () => {
    const filePath = "cypress/fixtures/excelcreds.xlsx"; // ✅ correct path

    cy.task('readExcel', filePath).then((result) => { // ✅ match your task name
      console.log(result); // visible in terminal
      cy.log(JSON.stringify(result)); // visible in Cypress UI
    });
  });
});
