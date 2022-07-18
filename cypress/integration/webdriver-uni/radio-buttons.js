/// <reference types="Cypress" />



describe("Verify radiobuttons via webdriveruni", () => {
    it("Check specific radio buttons", () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });
        cy.get("#radio-buttons").find('[type = "radio"]').first().check()
        cy.get("#radio-buttons").find('[type = "radio"]').eq(2).check() //  select 2nd button (eq(index))


    });
    it.only("Validate the state of specific radio buttons", () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });
        
        cy.get("[value = 'lettuce']").should('not.be.checked')
        cy.get("[value = 'pumpkin']").should('be.checked')
        
        cy.get("[value = 'lettuce']").check()
        cy.get("[value = 'pumpkin']").should('not.be.checked')

        cy.get("[value = 'cabbage']").should('be.disabled')
        
         

    });



});