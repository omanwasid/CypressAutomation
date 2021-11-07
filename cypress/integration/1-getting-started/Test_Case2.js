    //< reference types="cypress"/>
    
    it('Google Test', function(){
        cy.visit("https://www.google.dk/") // Visit the browser

        cy.get('#L2AGLb > div').click() // Accept the cookies

        cy.get('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').type('Automation in Cypress{enter}')
         // Write someting inside the input box and press the Enter.
         //cy.get(':nth-child(4) > [data-text-ad="1"] > .cUezCb > .d5oMvf > .Krnil > .cfxYMc > span').click()
         cy.contains('Billeder').click()
         cy.wait(5000)
         //cy.get('#rso > div > div:nth-child(2) > div > div:nth-child(2) > div.i0X6df > div.sh-dgr__content > div.zLPF4b > a > div.aULzUe.IuHnof').click()
        cy.get('body').click()
        

    })

