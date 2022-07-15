/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />




describe("Inspect automation Test Store ite, using chain of commends", () => {
    it("Click on the item using item header", () =>{
         cy.visit("https://automationteststore.com");
         cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
              
    })
    it.only("Click on the item using item text", () =>{
        cy.visit("https://automationteststore.com");
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
            console.log("Selected the following item: " + itemHeaderText.text())
        })
             
   })
   it("Click on the item using index", () =>{
    cy.visit("https://automationteststore.com");
    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
         
   })
   
        
})