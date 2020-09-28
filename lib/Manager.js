const Employee = require("../lib/Employee");
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.setRole("Manager");
    }

    setOfficeNumber(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(officeNumber) {
        return this.officeNumber;
    }
}

module.exports = Manager;