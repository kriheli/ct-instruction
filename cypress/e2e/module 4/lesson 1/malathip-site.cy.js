describe('Visit Malathip Shop Page', () => {
    it('Open Website Shop Collection', () => {
      cy.visit('https://malathip.com/collections/all')
    })

    it('Find Wholesale link', () => {
        cy.visit('https://malathip.com/collections/all')
        cy.contains('Wholesale')
        cy.get('#HeaderMenu-wholesale > span')
      })

  })