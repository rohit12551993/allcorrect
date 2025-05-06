describe('template spec', () => {
  it('passes', () => {
    //This will open the website
    cy.visit('https://testautomationpractice.blogspot.com/')
    //This will click on the field name
    cy.get("#name").click();
    //This will verify that the name field is visible n the page
    cy.get("#name").should('be.visible');

    

    

  })
})