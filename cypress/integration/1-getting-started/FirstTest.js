describe('MyFirstSuit', () =>
 {
    it('Verify The Title Of The PositivePage', () => {
      cy.visit('https://www.jobindex.dk/')
      cy.title().should('eq','Job og ledige stillinger. Find ledige job | Jobindex')
    })
    it('Verify The Title Of The NegativePage', () => {
        cy.visit('https://www.jobindex.dk/')
        cy.title().should('eq','Job og ledige stillinger. Find ledige job ')
      })

  })