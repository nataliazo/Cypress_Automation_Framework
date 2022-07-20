/// <reference types="Cypress" />



describe("Interact witn dropdown lists", () => {
    it("Select specific values via select dropdown list", () => {
        //cy.visit('http://www.webdriveruniversity.com') // site is not working
        //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });
        cy.visit('http://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get("select").select('opel')
        cy.get("select").select('audi').should('have.value', "audi")
        cy.get("select").select('saab').contains('Saab') // use contains when validate the text
        

    });
  



});