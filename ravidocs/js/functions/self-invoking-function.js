// Anonymous Function
let onreadystatechange1 = function () {
	console.log("Anonymous Function");
};
// Anonymous Function with params
let onreadystatechange2 = function (n1,n2) {
	console.log("Anonymous Function with params");
	let res = n1+n2
	console.log(res)
	return res;
};
// Self invoking function
(function () {
	console.log("Self invoking function");
})
();
// Self invoking function with params
(function (n1, n2) {
	console.log("Self invoking function with params");
	let res = n1+n2
	console.log(res)
	return res;
})
(10,12);
function main() {
	onreadystatechange1();
	onreadystatechange2(10,12);
 }