function main() {
	//redeclaration();
	//useageBeforeDeclaration();
	ressaginment();
	//blockScope();
	//copyData();
	
}
function redeclaration() {
	let firstName = "Ravi";
	// Identifier 'firstName' has already been declared
	// let firstName = "Kireeti";
}
function useageBeforeDeclaration() {
	let firstName = "Ravi";
	let lastName = "Kumar";
	let fullName = firstName + lastName;
	console.log("fullName = "+fullName);
	// Cannot access 'firstName' before initialization
	// let firstName = "Ravi";
	// let lastName = "Kumar";
}
function ressaginment() {
	const firstName = "";
	console.log("firstName = "+firstName);
	firstName = "Kireeti";
	console.log("firstName = "+firstName);
}
function blockScope() {
	let x = 10;
	{
		let x = 20;
		console.log("x = " +x);
	}
	console.log("x = " +x);
}
function copyData() {
	console.log("copyData start");
	let n1 = 10;
	let n2;
	let n3;
	n3 = n2 = n1;
	console.log("value of n1 = "+n1);
	console.log("value of n2 = "+n2);
	console.log("value of n3 = "+n3);
	console.log("copyData end");
}