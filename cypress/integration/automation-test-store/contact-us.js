/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />




describe("Test Contact US form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () =>{
         cy.visit("https://automationteststore.com");
         //cy.xpath('//a[contains(text(),"Contact Us")]').click();
         cy.get('a[href$="contact"]').click().then(function(linkText) {
            cy.log("Selected link is " + linkText.text())
        })
         cy.get('#ContactUsFrm_first_name').type("Natalia");
         cy.get('#ContactUsFrm_email').type("nz@gmail.com");
         cy.get('#ContactUsFrm_email').should('have.attr','name','email')
         cy.get('#ContactUsFrm_enquiry').type("Do ypu provide smth for me?");
         //cy.xpath('//button[@title="Submit"]').click();
         cy.get('button[title="Submit"]').click();
         cy.get('.mb40 > :nth-child(3)').should('have.text',"Your enquiry has been successfully sent to the store owner!");
         cy.log('Test is completed');
       
              
    })
   
        
})