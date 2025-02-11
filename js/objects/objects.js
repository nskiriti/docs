function main() {
    curlyBraceObject();
    newObject();
    constructorObject();
}

function curlyBraceObject() {
    let employee1 = {
        employeeId: 101,
        email: "ravi.p@gmail.com",
        phoneNUmber: 981234567
    };
    console.log(employee1);
}

function newObject() {
    let employee2 = new Object();
    employee2.employeeId = 102;
    employee2.email = "raj.k@gmail.com";
    employee2.phoneNUmber = 8976543210;
    console.log(employee2);
}

function constructorObject() {
    let employee3 = new Employees(103, "raghu.p@gmail.com", 7891234560);
    console.log(employee3);
}