let book = 3; // global variable
function main() {
	console.log("main function start");
	// redeclaration();
	// usageBeforeDeclaration();
	// declarationAndDefinitionInMultipleLine();
	// declarationAndDefinitionInSingleLine();
	// reAssignment();
	//blockScope();
	 copyData();
	console.log("main function end");
}

function redeclaration() {
	console.log("redeclaration function start");
	let x = 2;
	// let x = 3; // SyntaxError: Identifier 'x' has already been declared
	console.log("redeclaration function end");
}

function usageBeforeDeclaration() {
	console.log("usageBeforeDeclaration function start");
	//let z = x + y; // ReferenceError: Cannot access 'x' before initialization
	let x = 2;
	let y = 3;
	let z = x + y;
	console.log("z = "+z)
	console.log("usageBeforeDeclaration function end");
}

function declarationAndDefinitionInMultipleLine() {
	console.log("declarationAndDefinitionInMultipleLine function start");
	let x; // declaration
	let y; // declaration
	x = 2; // Definition
	y = 3; // Definition
	let z = x + y;
	console.log("declarationAndDefinitionInMultipleLine function end");
}

function declarationAndDefinitionInSingleLine() {
	console.log("declarationAndDefinitionInSingleLine function start");
	let x = 2; // declaration + definition
	let y = 3; // declaration + definition
	let z = x + y; // declaration + definition 
	console.log("declarationAndDefinitionInSingleLine function end");
}

function reAssignment() {
	console.log("reAssignment function start");
	let x; // declaration
	x = 2; // assignment
	x = 3; // re-assignment
	console.log("x = "+x);
	console.log("reAssignment function end");
}

function blockScope() {
	console.log("function Scope start");
	let book = 1;
	{
		console.log("blockScope start");
		let book = 2;
		console.log("book = "+book);
		console.log("blockScope end");
	}
	console.log("book = "+book);
	console.log("function Scope end");
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
main();
console.log("book = "+book);
