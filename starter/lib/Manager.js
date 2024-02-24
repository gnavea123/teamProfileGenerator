// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name,id,email,officeNumber) {
    super(name,id,email);
    this.officeNumber = officeNumber;    
  }
  getRole(){
    const role="Manager"
    console.log("value of Role: ");
    console.log(role);
    return role;
  }
  getOfficeManager() {
    const office = this.officeNumber
    console.log("value of officeNum: ");
    console.log(office);
    return office;
  }

}// end of class
module.exports = Manager;
//

// const testValue = 100;
// const e = new Manager("Foo", 1, "test@test.com", testValue);
// console.log(e);

// const e = new Manager("Foo", 1, "test@test.com", 100);
// //console.log(e);
// // e.getRole();
// // console.log(e);
// e.getOffice();
// e.getRole();



