describe('JavaScript Alerts', () => {

    beforeEach(() => {
      // Step 1: Visit the JavaScript Alerts page
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
  
    it('should accept a JS Alert', () => {
      // Step 2: Interact with the JS Alert
      cy.window().then((win) => {
        cy.stub(win, 'alert').callsFake(() => {}); // Suppress alert so test can continue
      });
  
      cy.contains('Click for JS Alert').click();  // Click the JS Alert button
  
      // Optionally, you can use this to check that the alert was called
      cy.on('window:alert', (text) => {
        expect(text).to.contains('I am a JS Alert');
      });
    })
  
    it('should accept a JS Confirm and verify the result message', () => {
      // Step 3: Interact with the JS Confirm
      cy.window().then((win) => {
        cy.stub(win, 'confirm').returns(true);  // Automatically accept the confirm dialog
      });
  
      cy.contains('Click for JS Confirm').click();  // Click the JS Confirm button
  
      // Verify the result message after accepting the confirm
      cy.get('#result').should('have.text', 'You clicked: Ok');
    })
  
    it('should dismiss a JS Confirm and verify the result message', () => {
      // Step 4: Interact with the JS Confirm and dismiss it
      cy.window().then((win) => {
        cy.stub(win, 'confirm').returns(false);  // Automatically dismiss the confirm dialog
      });
  
      cy.contains('Click for JS Confirm').click();  // Click the JS Confirm button
  
      // Verify the result message after dismissing the confirm
      cy.get('#result').should('have.text', 'You clicked: Cancel');
    })
  
    it('should enter text in a JS Prompt and verify the result', () => {
      // Step 5: Interact with the JS Prompt
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('Custom Message');  // Provide a custom message in the prompt
      });
  
      cy.contains('Click for JS Prompt').click();  // Click the JS Prompt button
  
      // Verify the result message after entering the text in the prompt
      cy.get('#result').should('have.text', 'You entered: Custom Message');
    })
  
  })
  