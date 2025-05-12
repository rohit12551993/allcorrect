const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cz8zh8', // <-- Missing comma was here
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
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
