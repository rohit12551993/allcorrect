describe("Screenshot",()=>{
    it("capturing screenshot",()=>{
        cy.visit("https://www.google.com/");

        //capturing SS
        cy.screenshot();
    })
})