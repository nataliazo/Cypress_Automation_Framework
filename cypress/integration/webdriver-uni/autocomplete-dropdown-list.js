/// <reference types="Cypress" />



describe("Verify autocomplete dropdown list via webdriver uni", () => {
    it.only("Select specific product via autocomplete list", () => {
        cy.visit('http://www.webdriveruniversity.com') 
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true });
        
        cy.get('#myInput').type('A')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = "Avocado";

            if(prod === productToSelect) {
                
                //$el.click();
                $el.trigger(click)

                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
            }
        })

        

    });
    it("Select specific product via autocomplete list - 2", () => {
        cy.visit('http://www.webdriveruniversity.com') 
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true });
        
        cy.get('#myInput').type('A')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = "Grape";

            if(prod === productToSelect) {
                
                //$el.click();
                $el.trigger(click)

                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
            }
        })

        

    });
  



});