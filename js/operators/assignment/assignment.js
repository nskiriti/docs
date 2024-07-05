function main() {
	console.log("main method start");
	//addition();
	//subtraction();
	//multiplication();
	//division();
	//reminder();
	exponentiation();
	console.log("main method end");
}

function addition() {
	console.log("addition method start");
	let x = 2;
	let y = 3;
	x += y
	console.log(x);
	console.log("addition method end");
}

function subtraction() {
	console.log("subtraction method start");
	let x = 2;
	let y = 3;
	x -= y;
	console.log(x);
	console.log("subtraction method end");
}

function multiplication() {
	console.log("multiplication method start");
	let x = 2;
	let y = 3;
	x *= y;
	console.log(x);
	console.log("multiplication method end");
}

function division() {
	console.log("division method start");
	let x = 2;
	let y = 3;
	x /= y;
	console.log(x);
	console.log("division method end");
}

function reminder() {
	console.log("reminder method start");
	let x = 2;
	let y = 3;
	x %= y;
	console.log(x);
	console.log("reminder method end");
}

function exponentiation() {
	console.log("exponentiation method start");
	let x = 5;
	let y = 3;
	x **= y;
	//x = Math.pow(x, y);
	console.log(x);
	console.log("exponentiation method end");
}
