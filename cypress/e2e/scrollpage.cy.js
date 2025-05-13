describe("scroll page",()=>{
    it("This will scroll the page",{retries : 2},()=>{
        //This will open the website
    cy.visit('https://testautomationpractice.blogspot.com/');
    

    cy.get("div[id='HTML1'] h2[class='title']").scrollIntoView();
    
    
    })
})