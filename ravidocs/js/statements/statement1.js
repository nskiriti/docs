function main() {
	console.log("main method start");
	addition();
	subtraction();
	multiplication();
	division();
	console.log("main method end");
}

function addition() {
	console.log("addition method start");
	let a, b, c;
	a = 5;
	b = 6;
	c = a + b;
	console.log("addition of " + a + " and " + b + " = " + c);
	console.log("addition method end");
}

function subtraction() {
	console.log("subtraction method start");
	let a, b, c;
	a = 12;
	b = 6;
	c = a - b;
	console.log("subtraction of " + b + " from " + a + " = " + c);
	console.log("subtraction method end");
}

function multiplication() {
	console.log("multiplication method start");
	let a, b, c;
	a = 6;
	b = 7;
	c = a * b;
	console.log("multiplication of " + a + " and " + b + " = " + c);
	console.log("multiplication method end");
}

function division() {
	console.log("division method start");
	let a, b, c, d;
	a = 25;
	b = 5;
	c = a % b;
	d = a / b;
	console.log("dividing " + a + " from " + b + " and remainder is  = " + c);
	console.log("dividing  " + a + " from " + b + " quotient is  = " + d);
	console.log("division method end");
}