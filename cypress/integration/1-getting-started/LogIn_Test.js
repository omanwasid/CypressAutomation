
      it('Login Test', function(){

        cy.visit("https://visa.vfsglobal.com/bgd/en/dnk/login") // Visit the browser
      
        cy.get('#mat-input-0').type('oman46@gmail.com') // Input Field for E-mail
      
        cy.get('#mat-input-1').type('dS3v8mm@') //Input Type for Password
        
      
        cy.get('#onetrust-accept-btn-handler').click() //Accept cookies
        

 //cy.get('.body > app-root > div > app-login > section > div > div > mat-card > form > button').contains('Sign In').click()

        cy.get('.mat-button-wrapper').contains('Sign In')

        //cy.get('.mat-button-wrapper').click()

        //cy.get('form.ng-dirty > .mat-focus-indicator').click()
        //cy.get('body > app-root > div > app-login > section > div > div > mat-card > form > button').find('.mat-button-wrapper').click()
        
      
        //cy.get('body > app-root > div > app-login > section > div > div > mat-card > form > button > span.mat-button-wrapper').click()
        //cy.get('form.ng-dirty > .mat-focus-indicator').click()
        //cy.get('form.ng-untouched > .mat-focus-indicator').click() // Click Log-In Button
      
      
      })