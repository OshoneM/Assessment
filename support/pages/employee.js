class EmployeePage {
    navigateToAddEmployee() {
      cy.get('#menu_pim_viewPimModule').click()
      cy.get('#menu_pim_addEmployee').click()
    }
  
  }
  export default EmployeePage
  