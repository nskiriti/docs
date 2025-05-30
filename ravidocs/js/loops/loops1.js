function main() {
	console.log("main method start");
	// forLoop1();
	forLoop2();
	forLoop3();
	forLoop4();
	console.log("main method end");
}

function forLoop1() {
	for (let i=0; i<10; i++) {
		console.log("getEmployee " +i);
	}
}

function forLoop2() {
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	for (let i = 0; i <= employees.length; i+2) {
		console.log("Employee Name = "+ employees[i]);
	}
}
function forLoop3() {
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	for (let i = (employees.length-1) ; i > 0; i--) {
		console.log("Employee Name = "+ employees[i]);
	}
}
function forLoop4() {
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	for (let employee of employees) {
		console.log("Employee Name = "+ employee);
	}
}
