function main(){
	console.log("main method start");
	/*
	add();
	mul();
	sub();
	div();
	rem();
	increment();
	decrement();
	append();
	*/
	comparison();
	console.log("main method end");
}

function add() {
	console.log("add method start");
	let x;
	console.log(typeof x);
	console.log(x);
	x = 5;
	console.log(typeof x);
	console.log(x);
	x = "s";
	console.log(typeof x);
	console.log(x);
	let y = 2;
	let z = x + y;
	console.log(z);
	console.log("add method end");
}

function mul() {
	console.log("mul method start");
	let x = 5;
	let y = 2;
	let z = x * y;
	console.log(z);
	console.log("mul method end");
}

function sub() {
	console.log("sub method start");
	let x = 5;
	let y = 2;
	let z = x - y;
	console.log(z);
	console.log("sub method end");
}

function div() {
	console.log("div method start");
	let x = 5;
	let y = 2;
	let z = x / y;
	console.log(z);
	console.log("div method end");
}
function rem() {
	console.log("rem method start");
	let x = 5;
	let y = 2;
	let z = x % y;
	console.log(z);
	console.log("rem method end");
}

function increment() {
	console.log("increment method start");
	let x = 5;
	let y = 5;
	let a = x++; //post
	let b = ++y; //pre
	console.log(x);
	console.log(y);
	console.log(a);
	console.log(b);
	console.log("increment method end");
}

function decrement() {
	console.log("decrement method start");
	let x = 5; // 4
	let y = 5; // 4
	console.log(x);
	console.log(y);
	let a = x--; //post // 5
	let b = --y; //pre // 4
	console.log(x);
	console.log(y);
	console.log(a);
	console.log(b);
	console.log("decrement method end");
}

function add() {
	console.log("add method start");
	let x = 5;
	let y = 2;
	x += y;
	x = x + y;
	console.log(x);
	console.log("add method end");
}

function append() {
	console.log("append method start");
	let fn = 'Ravi';
	let ln = 'Kumar';
	let x = 11;
	let y = 12;
	let z = '13';
	let a = x + y + z;
	let b = z + y + x;
	console.log(a);
	console.log(b);
	console.log(fn+" "+ln);
	console.log("append method end");
}

function comparison() {
	console.log("comparison method start");
	let x = 11;
	let y = 12;
	let z = 11;
	console.log(x==y);
	console.log(x==z);
	console.log(x!=y);
	console.log(x!=z);
	console.log("comparison method end");
}

/*
What is the overloaded operator in javascript and java? 
+ addition and append
What is difference between == and === operators?
What is ternary ? operator?
*/