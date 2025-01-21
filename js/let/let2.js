let book = 60; // global scope
function main(){
	console.log("Main function starts");
	//redeclaration();
	//usagebeforedeclaration();
	//declarationanddefinitioninmultiplelines();
	//declarationAndDefinitionInSingleLine();
	//reAssignment();
	//blockScope();
	copyData();
	console.log("Main function Ends");
}

function redeclaration(){
	console.log("redeclaration function starts");
	let x;
	//let x; // expecting error(Uncaught SyntaxError: Identifier 'x' has already been declared)
	console.log("redeclaration function ends");
}

function usagebeforedeclaration(){
	console.log("usagebeforedeclaration function starts");
	//x3 = x2 + x1; Cannot access 'x2' before initialization
	let x2 = 20;
	let x1 = 10;
	let x3 = x1 + x2;
	console.log("value of x3 = "+ x3)
	console.log("type of x = "+typeof(x3));
	console.log("usagebeforedeclaration function ends");
}

function declarationanddefinitioninmultiplelines(){
	console.log("declarationanddefinitioninmultiplelines function starts");
	let x; //declaration
	let y; //declaration
	x = 10; //definition or Initialization
	y = 20; //definition or Initialization
	let z = x + y;	
	console.log("declarationanddefinitioninmultiplelines function ends");
}

function declarationAndDefinitionInSingleLine(){
	console.log("declarationAndDefinitionInSingleLine function start");
	let x = 20; // declaration + initialization
	let y = 30; // declaration + initialization
	let z = x + y;
	console.log("declarationAndDefinitionInSingleLine function end");
}

function reAssignment(){
	console.log("reAssignment function start");
	let x;  // Declaration
	x = 20; //Initialization
	x = 72	// Assignment
	console.log(x);
	console.log("reAssignment function End");
}

function blockScope(){
	console.log("function scope start");
	let book = 20;
	console.log(book);
	{
		console.log("blockScope function start");
		let book = 300;
		console.log(book);
		console.log("blockScope function start");
	}
	console.log("function scope End");
}
console.log(book);

function copyData(){
	console.log("copyData function starts");
	let n1 = 10;
	let n2 = n1;
	let n3 = n2;
	console.log("n1 "+ n1);
	console.log("n2 "+ n2 ) ;
	console.log("n3 "+ n3);
	console.log("copyData function ends");
}