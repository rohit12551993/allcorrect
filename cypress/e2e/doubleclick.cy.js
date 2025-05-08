describe("double click",()=>{
    it("this will double click on an element",()=>{
        //this will open up the website
        cy.visit("https://testautomationpractice.blogspot.com/")
        //this will double click on an element
        cy.get("button[ondblclick='myFunction1()']").dblclick();
    })
})