describe('Visit Malathip Shop Page', () => {
    it('Open Website Shop Collection', () => {
      cy.visit('https://malathip.com/collections/all')
    })

    it('Find Wholesale link & Click', () => {
        cy.visit('https://malathip.com/collections/all')
        cy.contains('Wholesale')
        cy.get('#HeaderMenu-wholesale > span').click()
      })

      it('Find Shop link & Click', () => {
        cy.visit('https://malathip.com/collections/all')
        cy.contains('Shop')
        cy.get('#HeaderMenu-shop > span').click()
      })

  })

