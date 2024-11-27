describe('Drag and Drop Interaction', () => {

    beforeEach(() => {
      // Step 1: Visit the Drag and Drop page
      cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
    })
  
    it('should drag and drop one box onto the other and verify their positions', () => {
      // Step 2: Verify initial positions (boxes should be in their starting positions)
      cy.get('#column-a').should('have.text', 'A')
      cy.get('#column-b').should('have.text', 'B')
  
      // Step 3: Perform drag and drop (drag box A onto box B)
      cy.get('#column-a').drag('#column-b')
  
      // Step 4: Verify that the boxes have swapped places
      cy.get('#column-a').should('have.text', 'B')  // Box A should now contain "B"
      cy.get('#column-b').should('have.text', 'A')  // Box B should now contain "A"
    })
  
  })
  