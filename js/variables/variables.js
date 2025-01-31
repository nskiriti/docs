var book = 1; // global variable
function main() {
	console.log("main method start");	
	//nothing();
	//var1();
	//nan();
	//redeclaration();
	//usageBeforeDeclaration();
	blockScope();
	console.log("main method end");
}
function nothing() {
	console.log("nothing method start");
	employeeId = 101;
	firstName = "Surya";
	console.log(employeeId);
	console.log(typeof employeeId);
	console.log(firstName);
	console.log(typeof firstName);
	console.log("nothing method end");
}
function var1() {
	console.log("var method start");
	var employeeId;
	var firstName;
	console.log("value = "+employeeId);
	console.log("typeof = "+typeof employeeId);
	console.log("value = "+firstName);
	console.log("typeof = "+typeof firstName);
	employeeId = 101;
	firstName = "Surya";
	console.log("value = "+employeeId);
	console.log("typeof = "+typeof employeeId);
	console.log("value = "+firstName);
	console.log("typeof = "+typeof firstName);
	console.log("var method end");
}
function nan() {
	console.log("nan method start");
	var n1;
	var n2 = 12;
	var n3 = n1 + n2;
	console.log("value of n3 = " +n3);
	console.log("type of n3 = " +typeof n3);
	console.log("nan method end");
}
function redeclaration() {
	console.log("redeclaration method start");
	var n1;
	var n1; // Expecting Error here
	console.log("redeclaration method end");
}
function usageBeforeDeclaration() {
	console.log("usageBeforeDeclaration method start");
	var n3 = n1 + n2; // Expecting Error here
 	var n1 = 12;
	var n2 = 13;
	console.log("value = "+n3);
	console.log("typeof = "+typeof n3);
	console.log("usageBeforeDeclaration method end");
}
function blockScope() {
	console.log("blockScope function start");
	let book = 1; // local variable
	
		{
			let book = 2; // block variable
			console.log("book = "+book);
		}
		console.log("book = "+book);
	console.log("blockScope function end");
}
console.log()
console.log("book = "+book);