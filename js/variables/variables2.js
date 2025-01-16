function main(){
	console.log("main function starts");
	//nothing();
	//var1();
	//nan();
	//reassignament()
	//redeclaration();
	//usagebeforedeclaration();
	blockscope();
	console.log("main function ends");
}

function nothing(){
	x = 10;
	firstName = "surya";
	console.log("nothing method start");
	console.log("value of x = "+ x)
	console.log("type of x = "+typeof(firstName));
	console.log("value of firstName = "+ x)
	console.log("type of firstName = "+typeof(firstName));
	console.log("nothing method end");
}	

function var1(){
	var employeeId;
	var firstName;
	console.log("var1 method start");
	console.log("value of x = "+ employeeId)
	console.log("type of x = "+typeof(employeeId));
	console.log("value of firstName = "+ firstName)
	console.log("type of firstName = "+typeof(firstName));
	employeeId = 101;
	firstName = "surya";
	console.log("value of x = "+ employeeId)
	console.log("type of x = "+typeof(employeeId));
	console.log("value of firstName = "+ firstName)
	console.log("type of firstName = "+typeof(firstName));
	console.log("var1 method end");
}

function nan(){
	console.log("nan method start");
	var n1 = 10; 
	var n2;
	n3 = n1+n2;
	console.log("value of n3 = "+n3);
	console.log("type of n3 = "+typeof(n3));
	console.log("nan method start");
	
}

function reassignament(){
	console.log("reassignament method start");
	var x = 10;
	console.log("value of x = "+x);
	console.log("type of x = "+typeof(x));
	x = "surya";
	console.log("value of x = "+x);
	console.log("type of x = "+typeof(x));
	console.log("reassignament method end");
}

function redeclaration(){
	console.log("redeclaration method start");
	var x;
	var x;// expecting error here
	console.log("value of x = "+x);
	console.log("type of x = "+typeof(x));	
	console.log("redeclaration method end");
}

function usagebeforedeclaration(){
	console.log("usagebeforedeclaration method start");
	var x3 = x1 + x2;
	var x1 = 20;
	var x2 = 30;
	console.log("value of x3 = "+x3);
	console.log("type of x3 = "+typeof(x3));	
	console.log("usagebeforedeclaration method end");
	
}

function blockscope(){
	console.log("blockscope method start");
	var x = 20;
	{
		var x = "surya";
		console.log("value of x = "+x);
		console.log("type of x = "+typeof(x));
	}
	console.log("value of x = "+x);
	console.log("type of x = "+typeof(x));	
	console.log("blockscope method end");
	
}
	console.log("value of x = "+x);
	