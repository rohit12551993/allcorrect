import 'cypress-file-upload';

describe("click", () => {
  it('click', () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    cy.fixture("creds.json").then((data) => {
      cy.log(data.username);
      



    });
  });
});




