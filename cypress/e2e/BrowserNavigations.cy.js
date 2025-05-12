describe("browser naigations",()=>{
    it("navigating into browser",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.visit("https://www.google.com/");
        cy.visit("https://testautomationpractice.blogspot.com/");
        //going back
        cy.go('back');

        //going forward
        cy.go('forward');

        //reloading the page
        cy.reload();

        //reloading the page
        cy.reload();

    })
})