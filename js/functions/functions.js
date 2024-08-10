// Function as a value
function add1(n1, n2) {
	let res = n1 + n2;
	console.log(res);
	return res;
}
// Function Hoisting
function add2(n1, n2) {
	let res = n1 + n2;
	console.log(res);
	return res;
}
// Function in a expression
let funExpression1 = function (n1, n2) {
	let res = n1 + n2;
	console.log(res);
	return res;
};

function main() {
	console.log("Function as a Value");
	let resv = add1(10, 12);
	console.log("Function Hoisting");
	let resh = add2(10, 12);
	console.log("Function in a Expression");
	let rese = funExpression1(12, 14);
	console.log(rese);
	let funExpression2 = funExpression1;
	console.log(funExpression2);
	console.log(typeof funExpression2);
}