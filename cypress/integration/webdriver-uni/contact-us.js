/// <reference types="Cypress" />



describe("Test Contact US form via WebdriverUni", () => {
    it.only("Should be able to submit a successful submission via contact us form", () =>{
        
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.url().should('include',"contactus.html")
        cy.document().should('have.property', 'charset').and('eq','UTF-8');
        cy.title().should('include',"WebDriver | Contact Us")
        //cy.get("#contact-us").click({force: true});  
        cy.get('[name="first_name"]').type("Natalia");
        cy.get('[name="last_name"]').type("Zo");
        cy.get('[name="email"]').type("na@gmail.com");
        cy.get('textarea.feedback-input').type("Hello, Cypress");
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text',"Thank You for your Message!")
     
              
    })
    it("Should not be able to submit a successful submission via contact us form as all fields are requared", () =>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        //cy.get("#contact-us").click({force: true});
        
        cy.get('[name="first_name"]').type("Nata");
        cy.get('[name="last_name"]').type("Zo");       
        cy.get('textarea.feedback-input').type("Hello, Cypress");
        cy.get('[type="submit"]').click();    
        cy.get('body').contains("Error: all fields are required");
    })
        
})