const { defineConfig } = require("cypress"); // ✅ REQUIRED
const xlsx = require("xlsx");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  projectId: 'cz8zh8',
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/html",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    requestTimeout: 5000,
    responseTimeout: 30000,
    setupNodeEvents(on, config) {
      // Attach Mochawesome Reporter
      require("cypress-mochawesome-reporter/plugin")(on);

      // Register Excel reading task
      on('task', {
        readExcel(filePath) {
          const absolutePath = path.resolve(filePath);
          const workbook = xlsx.readFile(absolutePath);
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = xlsx.utils.sheet_to_json(sheet, { defval: "" });
          return jsonData;
        }
      });
    },
  },
});
