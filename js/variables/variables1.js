function practiceMain(){
	console.log("practiceMain function starts from here");
	//nothing();
	//var1();
	//nan();
	//redeclaration();
	//usageBeforeDeclaration();
	blockScope();
	console.log("main function ends here");
}

function nothing(){
	console.log("nothing functions starts here");
	employeeId = 201;
	firstName = "Ravi";
	console.log(employeeId);
	console.log(" including something in '' quotes prints that ");
	console.log("using console.log without quotes gives the value stored in the variable");
	console.log(typeof(employeeId));
	console.log(firstName);
	console.log(typeof(firstName));
	console.log("nothing function ended here");
}
	
function var1(){
	console.log("var1 functions starts here");
	var employeeId;
	var firstName;
	console.log("value "+employeeId);
	console.log("typeof "+typeof(employeeId));
	console.log("value "+firstName);
	console.log("typeof "+typeof(firstName));
	console.log("var1 function ended here");
	employeeId = 201;
	firstName = "Ravi";
	console.log("value "+employeeId);
	console.log("typeof "+typeof(employeeId));
	console.log("value "+firstName);
	console.log("typeof "+typeof(firstName));
	console.log("var1 function ended here");
}
function nan(){
	console.log("nan functions starts here");
	var sum1;
	var sum2 = 12;
	var sum3 = sum2 + sum3;
	console.log("value "+sum1);
	console.log("typeof "+typeof(sum1));
	console.log("value "+sum2);
	console.log("typeof "+typeof(sum2));
	console.log("value "+sum3);
	console.log("typeof "+typeof(sum3));
	console.log("nan function ended here");
	
	
}
function redeclaration(){
	console.log("redeclaration method start");
	var n1;
	var n1; // Expecting Error here since we are redeclaring n1
	console.log("typeof "+typeof(n1));
	console.log("value "+n1);
	console.log("redeclaration method end");
}
function usageBeforeDeclaration(){
	var n3 = n1 + n2;// expecting error since n3 is not declared yet
	var n2 = 12;
	var n1 = 13;
	console.log("value = "+n3);
	console.log("typeof = "+typeof(n3));
	console.log("usageBeforeDeclaration method end");
}
function blockScope(){
	console.log("blockScope method start");
	var x = 2;
	{
		var x = 3;
		console.log("value = "+x);		
	}
	console.log("value = "+x);		
}