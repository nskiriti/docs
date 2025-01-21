const x = 7;
function main(){
	console.log("main function starts");
	//redeclaration();
	//usageBeforeDeclaration();
	//declarationAndDefinition();
	//reAssignment();
	//blockScope();
	hoisting();	
	console.log("main function ends");
}

function redeclaration(){
	console.log("redeclaration function starts");
	const x = 10;
	//const x = 11; Uncaught SyntaxError: Identifier 'x' has already been declared 
	console.log("redeclaration function ends");	
}

function usageBeforeDeclaration(){
	console.log("usageBeforeDeclaration function starts");
	console.log(x);
	const x = 25;
	console.log("usageBeforeDeclaration function ends");
}	

function declarationAndDefinition(){
	console.log("declarationAndDefinttion function starts");
	/*const x;
	x = 20; */
	const x = 25;
	console.log(x);
	console.log("declarationAndDefinttion function ends");
}

function reAssignment(){
	console.log("declarationAndDefinttion function starts");
	const x = 15;
	x = 25; // TypeError: Assignment to constant variable.
	console.log(x);
	console.log("declarationAndDefinttion function ends");
}
function blockScope(){
	console.log("blockScope function starts");
	const x = 5;
	console.log(x);
	{
		const x = 6;
		console.log(x);
	}
	console.log("blockScope function ends");
}
console.log(x);

function hoisting(){
	console.log("hoisting function starts");
	const z = x + y; //const1.js:57 Uncaught ReferenceError: Cannot access 'x' before initialization
	const x = 20;
	const y = 10;
	console.log("hoisting function ends");
}
