// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name,id,email,school) {
    super(name,id,email);
    this.school = school;    
  }
  getRole(){
   
    return "Intern";
  }
  getSchool() {

    return "UCLA";
  }

}// end of class
module.exports = Intern;