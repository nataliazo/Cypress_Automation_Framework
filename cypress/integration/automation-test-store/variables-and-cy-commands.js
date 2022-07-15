/// <reference types="cypress" />



describe("Verifying veriables, cypress commands and jquery commands", () => {
    it("Navigated to specific product pages", () =>{
        cy.visit("https://automationteststore.com/");
        //The followinf will fail:
        //  const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")         
        //  const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        //  makeupLink.click();
        //  skincareLink.click();

        // // The following will pass:
        //  const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        //  makeupLink.click();
        //  const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        //  skincareLink.click();

        //Recomemended Approach:
        cy.get("a[href*='product/category&path=']").contains("Makeup") .click();
        cy.get("a[href*='product/category&path=']").contains("Skincare").click();
        })

    it.only("Navigated to specific product pages", () =>{
        cy.visit("https://automationteststore.com/");
            
        cy.get("a[href*='product/category&path=']").contains("Makeup") .click();
        
        //Following code will fail:
        // const header = cy.get(".maintext");
        // cy.log(header.text())

        cy.get(".maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq("Makeup")
        })
        
    })
        
})
