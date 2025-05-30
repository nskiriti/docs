function main() {
	console.log("main method start");
	redeclaration();
	//usageBeforeDeclaration();
	//declarationAndDefination();
	//reAssignment();
	//blockScope();
	//hoisting();
	//redeclarationAndBlockScope();
	console.log("main method end");
}

function redeclaration() {
	console.log("redeclaration method start");
	const x = 1;
	//const x = 2; // Error : Identifier 'x' has already been declared
	console.log("redeclaration method end");
}

function usageBeforeDeclaration() {
	console.log("usageBeforeDeclaration method start");
	//let z = x + y; // Error : Cannot access 'x' before initialization
	const x = 1;
	const y = 2;
	const z = x + y;
	console.log("z = " + z);
	console.log("usageBeforeDeclaration method end");
}

function declarationAndDefination() {
	console.log("declarationAndDefination method start");
	//const aadharNo; // declaration // SyntaxError: Missing initializer in const 
	// aadharNo = 1234 1234 4567; // defination
	 const aadharNo = 123412344567;
	console.log("declarationAndDefination method end");
}

function reAssignment() {
	console.log("reAssignment method start");
	const aadharNo = 100023432333; // declaration + defination
	aadharNo = 123412344567; // TypeError: Assignment to constant variable.
	console.log("reAssignment method end");
}

function blockSpace() {
	console.log("function scope start");
	const a = 2;
	{
		console.log("blockSpace start");
		var x = 1;
		const y = 2;
		console.log("a");
		console.log("y");
		console.log("blockSpace end");
	}
	console.log(x);	// x can be used here.
	console.log(y); //ReferenceError: y is not defined
	console.log("function scope end");
}

function hoisting() {
	console.log("hoisting method start");
	//const z = x + y; 
	//ReferenceError: Cannot access 'x' before initialization
	const x = 1;
	const y = 2;
	const z = x + y;
	console.log(z);
	console.log("hoisting method end");
}

function redeclarationAndBlockScope() {
	console.log("redeclarationAndBlockScope method start");
	var x = 1;
	const y = 2;
	console.log(x);
	console.log(y);
	{
		console.log("blockSpace method start");
		var x = 3;
		const y = 4;
		console.log(x);
		console.log(y);
		console.log("blockSpace method end");
	}
	console.log(x);
	console.log(y);
	console.log("redeclarationAndBlockScope method end");
}
main();