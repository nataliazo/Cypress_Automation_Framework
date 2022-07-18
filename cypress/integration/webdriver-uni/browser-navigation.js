/// <reference types="Cypress" />



describe("Validate webdriveruni homepage links", () => {
    it("Confirm links redirect to the correct page", () =>{
        
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true}); //to not open another tab, needs to remove target _blanl
        cy.url().should('include','contactus')
        // go to the previous page:
        cy.go('back')
        //reload :
        cy.reload()
        cy.url().should('include','http://www.webdriveruniversity.com')
        //cy.reload(true) - reload without using cash

        //go forward:
        cy.go('forward')
        //validation:
        cy.url().should('include','contactus')

        //go back, then go to the Login page and validate url
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true});
        cy.url().should('include','Login-Portal')

        //go back, then To do page, validate, back to the home page
        cy.go('back')
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true});
        cy.url().should('include','To-Do-List')

        cy.go('back')



    });

  
        
});