describe('Form Authentication Page Dupe', () => {

    beforeEach(() => {
        cy.clearCookies();        // Clears cookies before each test
        cy.clearLocalStorage();   // Clears local storage before each test
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('input[name="username"]').type('tomsmith')        // Username
        cy.get('input[name="password"]').type('SuperSecretPassword!') // Password
      });

   
      it('Confirm login', () => {
        cy.get('button[type="submit"]').click()
      })

     it('Verify Secure Page Showing', () => {
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/secure') 
      })
  
      it('Verify Logout is visible', () => {
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/secure') 
        cy.get('a[href="/logout"]').should('be.visible')
      })

      it('Confirm Logout', () => {
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/secure')
        cy.get('a[href="/logout"]').should('be.visible')
        cy.get('a[href="/logout"]').click()
    
      })

      it('Verify user returns to Login page', () => {
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/secure') 
        cy.get('a[href="/logout"]').should('be.visible')
        cy.get('a[href="/logout"]').click()
        cy.url().should('include', '/login')
        cy.get('h2').should('contain.text', 'Login Page')
      })
  })
  