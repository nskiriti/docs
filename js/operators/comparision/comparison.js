function main() {
	console.log("main method start");
	comparison();
	//stringComparison();
	console.log("main method end");
}

function comparison() {
	console.log("comparison method start");
	let a = 5;
	let b = "5";
	console.log(a == b); //true
	console.log(a === b); //false
	//console.log(a != b); //false
	//console.log(a !== b); //true
	//console.log(a > b); //false
	//console.log(a < b); //false
	console.log(a >= b); //true 
	console.log(a <= b); //true
	console.log("comparison method end");
}

function stringComparison() {
	console.log("stringComparison method start");
	let a = "Hello";
	let b = "Hii";
	//console.log(a == b); //false
	//console.log(a === b); //false
	//console.log(a != b); //true
	//console.log(a !== b); //true
	//console.log(a > b); //false
	//console.log(a < b); //true
	console.log(a >= b); //false
	console.log(a <= b); //true
	console.log("stringComparison method end");
}
