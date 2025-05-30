// Anonymous Function
let onreadystatechange1 = function () {
	console.log("Anonymous Function");
};
// Anonymous Function with params
let onreadystatechange2 = function (n1,n2) {
	console.log("Anonymous Function with params");
	let res = n1+n2
	console.log(res)
	res;
};
// arrow function
let arrow1 =  () => console.log("arrow function");
// arrow function function with params and return value
 let arrow2 = (n1, n2) => n1+n2;
// arrow function function with params and block of code and return value
let arrow3 = (n1, n2) => {
	console.log("block of code");
	return n1+n2;
};
function main() {
	let ar1 = arrow1();
	console.log(ar1);
	let ar2 = arrow2(10,12);
	console.log(ar2);
	let ar3 = arrow2(10,13);
	console.log(ar3);
 }