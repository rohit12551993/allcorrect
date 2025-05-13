describe("Secrets in Cypress", () => {
    it("Should read GitHub secret", () => {
        const password = Cypress.env('PASSWORD'); // read from env
        cy.log("The password is: " + password);   // Avoid logging in real use
    });
});
