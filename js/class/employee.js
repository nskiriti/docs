console.log("This is employee.js start");
class Employee {
    // properties
    // Properties are declared in constructor itself
    // A class may only have one constructor
    // constructor with no arguments
     constructor() {}
    // constructor with arguments
    constructor(employeeId, email, phoneNumber) {
        this.employeeId = employeeId;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    //Methods
     createEmployee(employeeId, email, phoneNumber, address) {
        this.employeeId = employeeId;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    getEmployee() {
        return "{" + '"employeeId":' + this.employeeId + ',"email":' + this.email + ',"phoneNumber":' + this.phoneNumber + "}";
    }

    updateEmployee(email, phoneNumber) {
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    deleteEmployee() {
        delete this.employeeId;
        delete this.email;
        delete this.phoneNumber;
        return JSON.stringify(this);
    }
}
console.log("This is employee.js end");