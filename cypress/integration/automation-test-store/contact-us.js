/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />




describe("Test Contact US form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () =>{
         cy.visit("https://automationteststore.com");
         //cy.xpath('//a[contains(text(),"Contact Us")]').click();
         cy.get('a[href$="contact"]').click();
         cy.get('#ContactUsFrm_first_name').type("Natalia");
         cy.get('#ContactUsFrm_email').type("Zo");
         cy.get('#ContactUsFrm_email').type("nz@gmail.com");
         cy.get('#ContactUsFrm_enquiry').type("Do ypu provide smth for me?");
         //cy.xpath('//button[@title="Submit"]').click();
         cy.get('button[title="Submit"]').click();
         
       
              
    })
   
        
})