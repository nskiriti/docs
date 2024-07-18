function main() {
	console.log("This is main method start");
	// CRUD
	// stringType();
	// emptyArray();
	// emptyArrayWithNewKeyword();
	// arrayWithInitialIndex();
	// arrayWithValues();
	// getEmployees();
	// updateEmployees();
	console.log("This is main method end");
}

function stringType() {
	let employee = "Ravi";
	console.log("value of employee = " + employee);
	console.log("tpyeof employee = " + typeof employee);
}

function emptyArray() {
	let employees = [];
	console.log("value of employees = " + employees);
	console.log("tpyeof employees = " + typeof employees);
}

function emptyArrayWithNewKeyword() {
	let employees = new Array();
	console.log("value of employees = " + employees);
	console.log("tpyeof employees = " + typeof employees);
}

function arrayWithValues() {
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	console.log("value of employees = " + employees);
	console.log("tpyeof employees = " + typeof employees);
}

function arrayWithNewKeyword() {
	let employees =
		new Array("Steven", "Neena", "Lex", "Alexander", "David", "Valli");
	console.log("value of employees = " + employees);
	console.log("tpyeof employees = " + typeof employees);
}

function arrayWithInitialIndex() {
	let employees = new Array(5);
	console.log("value of employees = " + employees);
	console.log("tpyeof employees = " + typeof employees);
	employees[0] = "Steven";
	employees[1] = "Neena";
}

function getEmployees() {
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	console.log(employees[0]);
	console.log(employees[3]);
	console.log(employees[5]);
	console.log(employees[6]);
}

function updateEmployees() {
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	console.log("value of employees = " + employees);
	employees[2] = "Leena";
	console.log("value of employees = " + employees);
}

function getFirstEmployee() {
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	console.log(employees[0]);
}

function getLastEmployee() {
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	console.log(employees[length - 1]);
}
function differenceBetweenTypeofAndInstanceof() {
	let employees = [];
	console.log("typeof = "+ typeof employees);
	console.log("instanceof = "+ employees instanceof Array );
	console.log("isArray = "+ Array.isArray(employees));
}