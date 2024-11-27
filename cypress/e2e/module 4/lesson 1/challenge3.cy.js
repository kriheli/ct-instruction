describe('Dynamic Controls', () => {

    beforeEach(() => {
      // Step 1: Visit the Dynamic Controls page
      cy.visit('https://the-internet.herokuapp.com/dynamic_controls')
    })
  
    it('should remove the checkbox when clicking the "Remove" button', () => {
      // Step 2: Click the "Remove" button
      cy.contains('Remove').click()
  
      // Step 3: Verify that the checkbox is removed
      cy.get('#checkbox').should('not.exist')  // Checkbox should no longer be visible
    })
  
    it('should add the checkbox back when clicking the "Add" button', () => {
      // Step 4: Click the "Add" button
      cy.contains('Add').click()
  
      // Step 5: Verify that the checkbox reappears
      cy.get('#checkbox').should('be.visible')  // Checkbox should be visible again
    })
  
    it('should enable the input field after clicking the "Enable" button', () => {
      // Step 6: Click the "Enable" button
      cy.contains('Enable').click()
  
      // Step 7: Verify that the input field is enabled
      cy.get('#input').should('not.be.disabled')  // The input field should now be enabled
  
      // Step 8: Enter text into the enabled input field
      cy.get('#input').type('Some text').should('have.value', 'Some text')  // Enter text and verify it's entered
    })
  
  })
  