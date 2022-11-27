// Write your solution in this file!
const employee={
    name:"Mike",
    streetAddress: "Northland"
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
  
    newObj[key] = value;
  
    return newObj;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // const newObj = { ...obj };
  
    employee[key] = "Sam"
    employee[key]= '12 Broadway'
  
    return employee;
  }
  function deleteFromEmployeeByKey(employee,key){
    const newEmployee={ ...employee}
    delete newEmployee.name
    return newEmployee
  }
  function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee.name
    delete employee.streetAddress
    return employee
  }