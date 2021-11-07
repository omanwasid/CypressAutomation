it('Handling Web Elements', function(){

    cy.visit("https://industravel.dk/en") // Visit the browser
    cy.url().should('include','industravel')// verify URL should contain indus travel
    cy.get('.col-md-3 > .text-center > .btn').click()//Accept cookies
    
    cy.get('#dropdown-login-box').click() // Click on My Indus Travel Button
    
    cy.get('#login-email').should('be.visible').should('be.enabled').type('oman46@gmail.com')

    cy.get('#login-password').should('be.visible').should('be.enabled').type('XKl4pAfn')

    cy.get('#frm-login > div:nth-child(6) > div > div.col-md-6.pr-0 > div > button').should('be.visible').click()//Sign-In
    cy.title().should('eq','Indus Travel - Find the Cheapest Flight Tickets') // Verify Title

    //Radio-Buttons
   
    //cy.get('#flight > form > div.row.justify-content-between > div > div:nth-child(1) > label{').should('be.visible').should('be.checked')
    cy.get('#ow').should('not.be.visible').should('be.checked')
    cy.get('#rt').should('not.be.visible').should('not.be.checked')
    cy.get('#mt').should('not.be.visible').should('not.be.checked')
   //cy.get('.col-sm-12 > :nth-child(2) > label{requestTimeout:7000}').should('be.visible').should('not.be.checked')
    //cy.get(':nth-child(3) > label{requestTimeout:7000}').should('be.visible').should('not.be.checked')
    
  
   

 
  
  
  })