///<reference types="cypress"/>
describe('TestSuit', () =>
 {
    it('Verify The Title Of The PositivePage', () => {
      cy.visit('https://react-shopping-cart-67954.firebaseapp.com/')
      cy.title().should('eq','Typescript React Shopping cart')
    })
   // it('Verify The Title Of The NegativePage', () => {
        //cy.visit('https://react-shopping-cart-67954.firebaseapp.com/')
      //  cy.title().should('eq','e-Shopping cart')
     // })
      it('Product Checkout', () => {
        //cy.visit('https://react-shopping-cart-67954.firebaseapp.com/')
        cy.get('.dwOYCh > .sc-124al1g-0').click()
        
      })
      it('User Verification checkout', () => {
        //cy.visit('https://react-shopping-cart-67954.firebaseapp.com/')
        cy.get('.sc-1h98xa9-11').click()
      })

  })