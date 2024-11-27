describe('Hover over User Avatars', () => {

    beforeEach(() => {
      // Step 1: Visit the Hovers page
      cy.visit('https://the-internet.herokuapp.com/hovers')
    })
  
    it('should display user name on hover', () => {
      // Step 2: Hover over the first user avatar
      cy.get('.figure').eq(0).trigger('mouseover') // Hover over the first avatar
      cy.get('.figcaption').eq(0).should('contain.text', 'name: user1') // Verify user name is displayed
  
      // Step 3: Hover over the second user avatar
      cy.get('.figure').eq(1).trigger('mouseover') // Hover over the second avatar
      cy.get('.figcaption').eq(1).should('contain.text', 'name: user2') // Verify user name is displayed
  
      // Step 4: Hover over the third user avatar
      cy.get('.figure').eq(2).trigger('mouseover') // Hover over the third avatar
      cy.get('.figcaption').eq(2).should('contain.text', 'name: user3') // Verify user name is displayed
    })
  
    it('should navigate to the correct profile page when clicking on user profile link', () => {
      // Step 5: Hover over the first user avatar
      cy.get('.figure').eq(0).trigger('mouseover')
      
      // Step 6: Click on the profile link for user1
      cy.get('.figcaption').eq(0).find('a')
  
      // Step 7: Verify that we navigate to the correct profile page
      cy.url().should('include', '/users/1')  // Ensure URL contains /users/1 for user1 profile page
    })
  
  })
  