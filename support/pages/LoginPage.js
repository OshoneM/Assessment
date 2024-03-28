describe('Login Test', () => {
  it('should log in with valid credentials', () => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/')

    // Enter username and password
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')

    // Click on the Login button
    cy.get('#btnLogin').click()

    // Assertion to check if login is successful
    cy.url().should('include', '/dashboard')
  })
})
