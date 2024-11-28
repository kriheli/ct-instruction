describe('Form Authentication Page', () => {

    beforeEach(() => {
        cy.clearCookies();        // Clears cookies before each test
        cy.clearLocalStorage();   // Clears local storage before each test
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('input[name="username"]').type('tomsmith')        // Username
        cy.get('input[name="password"]').type('SuperSecretPassword!') // Password
      });

   
      it('Confirm login', () => {
         // Step 3: Click the login button
        cy.get('button[type="submit"]').click()
  
    })

    it('Verify Secure Page Showing', () => {
    
        // Step 3: Click the login button
        cy.get('button[type="submit"]').click()

         // Step 4: Verify that we are redirected to the secure area
        cy.url().should('include', '/secure')  // Check if URL contains '/secure'
    
      })
  
      it('Verify Logout is visible', () => {
    
        // Step 3: Click the login button
        cy.get('button[type="submit"]').click()

         // Step 4: Verify that we are redirected to the secure area
        cy.url().should('include', '/secure')  // Check if URL contains '/secure'

        // Step 5: Verify that the logout button is visible
        cy.get('a[href="/logout"]').should('be.visible')  // The logout button should be visible
    
      })

      it('Confirm Logout', () => {
    
        // Step 3: Click the login button
        cy.get('button[type="submit"]').click()

         // Step 4: Verify that we are redirected to the secure area
        cy.url().should('include', '/secure')  // Check if URL contains '/secure'

        // Step 5: Verify that the logout button is visible
        cy.get('a[href="/logout"]').should('be.visible')  // The logout button should be visible

        // Step 6: Click the logout button to logout
         cy.get('a[href="/logout"]').click()
    
      })

      it('Verify user returns to Login page', () => {

        // Step 3: Click the login button
        cy.get('button[type="submit"]').click()

         // Step 4: Verify that we are redirected to the secure area
        cy.url().should('include', '/secure')  // Check if URL contains '/secure'

        // Step 5: Verify that the logout button is visible
        cy.get('a[href="/logout"]').should('be.visible')  // The logout button should be visible

        // Step 6: Click the logout button to logout
         cy.get('a[href="/logout"]').click()

        // Step 7: Verify that we are back on the login page
        cy.url().should('include', '/login')  // Ensure we are back on the login page
        cy.get('h2').should('contain.text', 'Login Page')  // Ensure we see the "Login Page" header
    
      })
  })
  