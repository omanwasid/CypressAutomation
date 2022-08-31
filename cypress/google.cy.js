///<reference types="cypress"/>

it('Verify The Title Of The PositivePage', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#twotabsearchtextbox', { timeout: 7000 }).type('Watch{enter}')
    cy.get('[data-asin="B0B2J1KDW7"] > .sg-col-inner > .s-widget-container >[data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image', { timeout: 7000 }).click()
    cy.get('.a-button-inner > #add-to-cart-button', { timeout: 7000 }).click()
    cy.contains('Cart',{ timeout: 7000 }).click()
    cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input', { timeout: 7000 }).click()

  })