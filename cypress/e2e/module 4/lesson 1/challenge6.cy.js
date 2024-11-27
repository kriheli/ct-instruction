describe('Floating Menu', () => {

    beforeEach(() => {
      // Step 1: Visit the Floating Menu page
      cy.visit('https://the-internet.herokuapp.com/floating_menu')
    })
  
    it('should remain visible after scrolling down', () => {
      // Step 2: Scroll down the page
      cy.scrollTo('bottom')
  
      // Step 3: Verify the floating menu is still visible
      cy.get('#menu').should('be.visible') // The floating menu should still be visible
    })
  
    it('should navigate to the correct section when clicking menu items', () => {
      // Verify navigation to "Home"
      cy.contains('Home').click()
      cy.url().should('include', '#home')  // Check if URL contains '#home'
      cy.get('h3').should('contain.text', 'Home')  // Check if the Home section is visible
  
      // Verify navigation to "About"
      cy.contains('About').click()
      cy.url().should('include', '#about')  // Check if URL contains '#about'
      cy.get('h3').should('contain.text', 'About')  // Check if the About section is visible
  
      // Verify navigation to "Contact"
      cy.contains('Contact').click()
      cy.url().should('include', '#contact')  // Check if URL contains '#contact'
      cy.get('h3').should('contain.text', 'Contact')  // Check if the Contact section is visible
    })
  
  })
  