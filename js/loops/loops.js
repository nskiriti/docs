function main() {
	console.log("main function start");
	loop1(5);
	//loop2(100);
	console.log("main function end");
}

function loop1(n) {
	let i;
	for(i = 1; i <= n; i++) {
		getEmployee(i);
	}
}

function loop2(n) {
	let i;
	for(i = n; i >= 1; i--) {
		getEmployee(i);
	}
}

function getEmployee(empId) {
	console.log("get an employee from Database " + empId);
}