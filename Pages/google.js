export default class Google {
    typegoogle() {
        cy.fixture("creds.json").then((data) => {
            cy.visit(data.googleurl);
            const string = "rohit madan"
            Cypress.env = ("string", "string");
            cy.get('#APjFqb').click().type(string);
        });
    }
}
