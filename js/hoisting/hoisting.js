function main() {
	noHoisting();
	hoisting();
}
//Bad way of writing program
function noHoisting() {
	//variable usage
	var c = a + b;
	console.log(c);
	//variable definition
	a = 5;
	b = 6;
	//variable declaration
	var a;
	var b;
}
//Good way of writing program
function hoisting() {
	//variable declaration
	var a;
	var b;
	//variable definition
	a = 7;
	b = 8;
	//variable usage
	c = a + b;
	console.log(c);
}