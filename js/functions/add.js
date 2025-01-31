function add(n1, n2){
	let n3 = n1 + n2;
	
	return n3;
}

function main(){
	let usr = add(10,20);
	console.log(usr);
	
}

// nodenode
// anonymous function - calling using variableName + () and use ; at end of the block {}
let user  = function (){
	console.log("anony func will end with ; after {}");
	console.log("anonymous function and with ; after {} as value of variable");
};
user();

// self invokng function
(function (n1, n2){
	console.log("self invokng function");
	console.log("no ; at end of {}");
	return n1 + n2;
})(10,20);

//
let tester = function (){
	console.log("self invokng function");
	console.log("no ; at end of {}");
}();

//arrow function
let arrowFunction = (a,b)=> a + b ;
	
	 



console.log(arrowFunction(2,3));