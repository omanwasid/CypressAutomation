it('Assertions Test Case', function(){
    cy.visit('https://example.cypress.io/')

    //.............Implicit Assertions with Example...................

    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain','Button')
        .should('have.class','query-btn btn btn-primary')
        .should('be.visible')
        .should('be.enabled')
        //.should('be.disabled')
        //.should('be.empty')

    cy.get('#query-btn').invoke('attr','id')
        .should('equal','query-btn')

    cy.get('#query-btn')
        .should('contain','Button')
        .and('have.class','query-btn btn btn-primary')


    //.............Explicit Assertions with Examples...................
    //Expect

    expect(true).to.be.true

    let name = 'Muhammad Al Mahmud Wasid'
    expect(name).to.be.equal('Muhammad Al Mahmud Wasid')
    

    // assert.equal or assert.notEqual or assert.strictEqual or assert.isAbove or  
    // assert.isBelow or assert.exists or assert.notExists or assert.true or 
    // assert.false or assert.isString or assert.isNotString or assert.isNumber or  assert.isNotNumber


    assert.equal(4,4, 'Expected value is not equal with Actual value')
    assert.strictEqual( 4, 4, ' Not Strict Equal')
    //assert.strictEqual( 4, '4', ' Not Strict Equal')






})
