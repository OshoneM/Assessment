import LoginPage from '../support/pages/LoginPage'
import AdminPage from '../support/pages/AdminPage'

describe('Admin Management', () => {
  const loginPage = new LoginPage()
  const adminPage = new AdminPage()
  const adminName = 'cameroo diazz'
  const adminUsername = 'loveyy2'
  const adminPassword = 'admin123'

  beforeEach(() => {
    loginPage.visit()
    loginPage.login('Admin', 'admin123')
  })

  it('should create an Admin', () => {
    adminPage.navigateToAdminList()
    adminPage.navigateToAddAdmin()

    // Fill in the admin form
    adminPage.fillInAdminForm(adminName, adminUsername, adminPassword)

    // Save the admin
    adminPage.saveAdmin()

    // Assertion to check if Admin is created
    cy.contains('Successfully Saved').should('be.visible')
  })

  it('should edit an Admin', () => {
    adminPage.navigateToAdminList()

    // Edit the admin
    adminPage.editAdmin(adminUsername)

    // Update the admin name
    adminPage.updateAdminName('Jane Smith')

    // Save the updated admin
    adminPage.saveUpdatedAdmin()

    // Assertion to check if Admin is edited
    cy.contains('Successfully Saved').should('be.visible')
  })

  it('should delete an Admin', () => {
    adminPage.navigateToAdminList()

    // Delete the admin
    adminPage.deleteAdmin(adminUsername)

    // Assertion to check if Admin is deleted
    cy.contains('Successfully Deleted').should('be.visible')

    // Assertion to check if the deleted admin does not appear in the table
    cy.get('.odd').should('not.contain', adminUsername)
  })
})
