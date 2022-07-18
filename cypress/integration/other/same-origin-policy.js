/// <reference types="Cypress" />



describe("Cypress web security", () => {
    //NOT ACTUAL ANYMORE sinse 9.7 version of cypress
    it("Validate visiting two different domains", () =>{
        cy.visit('http://www.webdriveruniversity.com/')       
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are requared", () =>{
        cy.visit('https://automationteststore.com/')
    });
        
});