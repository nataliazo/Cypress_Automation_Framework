/// <reference types="Cypress" />



describe("Test mouse actions", () => {
    
    it("Scroll element into view", () => {
        //cy.visit('https://the-internet.herokuapp.com/') // site is not working
        //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get('a[href ="/tinymce" ]').scrollIntoView()
        

    });
    it("I should be able to drag and drop a draggable item", () => {
        //cy.visit('https://the-internet.herokuapp.com/') // site is not working
        //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get('a[href ="/drag_and_drop" ]').scrollIntoView().click()
        //hever mouse over element and mousdown of the centre of the element
        cy.get('#column-a').trigger('mousedown',{which: 1})
        //drop the element
        cy.get('#column-b').trigger('mousemove').trigger('mouseup', {force:true})
    });

    it("I should be able to perform double mouse click", () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });
        
        cy.get('#double-click').dblclick();
    });

    it.only("I should be able to hold down the left mous click on a given element", () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });
        //which:1 - click on a centre of the element
        //validate if $element has right background color
        cy.get('#click-box').trigger('mousedown', {which:1}).then(($element) =>{
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    });
  
  



});