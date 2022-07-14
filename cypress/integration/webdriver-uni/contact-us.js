/// <reference types="Cypress" />



describe("Test Contact US form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () =>{
        
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        //cy.get("#contact-us").click({force: true});
        
        cy.get('[name="first_name"]').type("Natalia");
        cy.get('[name="last_name"]').type("Zo");
        cy.get('[name="email"]').type("na@gmail.com");
        cy.get('textarea.feedback-input').type("Hello, Cypress");
        cy.get('[type="submit"]').click();
     
              
    })
    it("Should not be able to submit a successful submission via contact us form as all fields are requared", () =>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        //cy.get("#contact-us").click({force: true});
        
        cy.get('[name="first_name"]').type("Nata");
        cy.get('[name="last_name"]').type("Zo");       
        cy.get('textarea.feedback-input').type("Hello, Cypress");
        cy.get('[type="submit"]').click();     
    })
        
})