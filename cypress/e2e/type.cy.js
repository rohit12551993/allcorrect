describe('typing ', () => {
    it('typing into a specific field box', () => {
      //This will open the website
      cy.visit('https://testautomationpractice.blogspot.com/')
      //This will click and type on the field name
      cy.get("#name").click().type("ROHIT MADAN")
      //This will verify that the name field is visible n the page
      
  
      
  
      
  
    })
  })