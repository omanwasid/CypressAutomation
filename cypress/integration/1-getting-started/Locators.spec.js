///< reference types="cypress" />
describe('Locating Elements', () =>
 {
    it('Verify types of locator', () => {
      cy.visit('https://demo.nopcommerce.com/')

      cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch") // Search Input Box

      cy.get("button[type='submit']").click() //search Button

      cy.get(".button-2.product-box-add-to-cart-button").click() // Add to cart

      cy.get("#product_enteredQuantity_4").clear().type('2')

      cy.get("#add-to-cart-button-4").click()

      cy.get(".cart-label").click()

      //cy.wait("5000")

      cy.get(".product-unit-price").contains('$1,800.00')

      //cy.wait("3000")
      
    })
    
  })
 
 it.only('Login Test', function(){

  cy.visit("https://visa.vfsglobal.com/bgd/en/dnk/login") // Visit the browser

  cy.get('#mat-input-0').type('oman46@gmail.com') // Input Field for E-mail

  cy.get('#mat-input-1').type('dS3v8mm@') //Input Type for Password

  cy.get('#onetrust-accept-btn-handler').click() //Accept cookies

  cy.get('form.ng-dirty > .mat-focus-indicator').click()
  //cy.get('form.ng-untouched > .mat-focus-indicator').click() // Click Log-In Button


})