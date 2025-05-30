function test(n1, n2,a){
	console.log("addition of n1 and n2 "+ (n1+n2));
	a();
}

 function user(){
	console.log("This is second function");
}

test(10,12,user);
// This is Call back function.