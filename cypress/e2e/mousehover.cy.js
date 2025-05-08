describe("This will mouseover",()=>{
    it("mousehover over an element",()=>{
        //this will open up the website
        cy.visit("https://testautomationpractice.blogspot.com/")
        //this will mousehover
        cy.get(".dropbtn").trigger('mouseover');
    })
})