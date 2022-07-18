/// <reference types="Cypress" />



describe("Verify checkboxes via webdriveruni", () => {
    it("Check and validate checkbox", () =>{
        
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true}); 
    
        //cy.get('#checkboxes > :nth-child(1) > input').check()
        //validation:
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
    
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check();
        cy.get('@option-1').check().should('be.checked')
    
    }); 
    it("Uncheck and validate it", () =>{
        
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true}); 
    
    
        cy.get('#checkboxes > :nth-child(5) > input').as('option-2')
        cy.get('@option-2').uncheck()
        cy.get('@option-2').uncheck().should('not.be.checked')
    
    }); 

    it.only("Check multiple checkboxes", () => {
        
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true}); 
        
        //choose a selector of all 4 checkboxes:
        cy.get('input[type = "checkbox"]').check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
    
    }); 
        
});