import LoginPage from '../support/pages/LoginPage'
import EmployeePage from '../support/pages/EmployeePage'

describe('Employee Management', () => {
  const loginPage = new LoginPage()
  const employeePage = new EmployeePage()
  const employeeName = 'tailor swift'
  const employeeUsername = 'jandor'
  const employeePassword = 'empee123'

  beforeEach(() => {
    loginPage.visit()
    loginPage.login('Admin', 'admin123')
  })

  it('should create an Employee', () => {
    employeePage.fillInEmployeeForm(employeeName, employeeUsername, employeePassword)
    employeePage.saveEmployee()

    // Assertion to check if Employee is created
    cy.contains('Successfully Saved').should('be.visible')
  })

  it('should edit an Employee', () => {
    const updatedName = 'Jane Smith'
    employeePage.editEmployee(employeeUsername, updatedName)

    // Assertion to check if Employee is edited
    cy.contains('Successfully Updated').should('be.visible')
  })

  it('should delete an Employee', () => {
    employeePage.deleteEmployee(employeeUsername)

    // Assertion to check if Employee is deleted
    cy.contains('Successfully Deleted').should('be.visible')

    // Assertion to check if the deleted employee does not appear in the table
    cy.get('.odd').should('not.contain', employeeUsername)
  })
})
