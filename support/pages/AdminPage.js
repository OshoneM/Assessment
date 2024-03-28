class AdminPage {
    navigateToAddAdmin() {
      cy.get('#menu_admin_viewAdminModule').click()
      cy.get('#btnAdd').click()
    }
  
  }
  export default AdminPage
  