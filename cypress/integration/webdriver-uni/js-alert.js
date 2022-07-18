/// <reference types="Cypress" />



describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {

        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true }); //to not open another tab, needs to remove target _blanl

        cy.get('#button1').click();

        //to handle allert manually
        cy.on('window:alert', (str) => {
            expect(str).to.eq('I am an alert box!')
        })
    });

    it("Validate js confirm alert box works correctlu when clicking OK", () => {

        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true }); //to not open another tab, needs to remove target _blanl

        cy.get('#button4').click();

        //to handle allert manually
        cy.on('window:confirm', (str) => {
            return true; // to press OK button, fals to press Cancel button
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!');

    });

    it("Validate js confirm alert box works correctlu when clicking Cancel", () => {

        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true }); //to not open another tab, needs to remove target _blanl

        cy.get('#button4').click();

        //to handle allert manually
        cy.on('window:confirm', (str) => {
            return false; // window.confirm instead of window.alert and false to press Cancel button
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!');

    });
    it.only("Validate js confirm alert box using a stub", () => {

        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true }); //to not open another tab, needs to remove target _blanl

        const stub = cy.stub();
        cy.on('window:confirm', stub)

        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;
        }).then(() => {
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!');

    });
});