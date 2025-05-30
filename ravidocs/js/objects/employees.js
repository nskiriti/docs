class Employees {

    constructor(employeeId, email, phoneNumber) {
        this.employeeId = employeeId;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    getEmployee() {
        return "{" + '"employeeId":' + this.employeeId + ',"email":' + this.email + ',"phoneNumber":' + this.phoneNumber + "}";
    }

    updateEmployee(email, phoneNumber) {
        this.email = email;
        this.phoneNumber = phoneNumber;
        return JSON.stringify(this);
    }

    deleteEmployee() {
        delete this.employeeId;
        delete this.email;
        delete this.phoneNumber;
        return JSON.stringify(this);
    }
}