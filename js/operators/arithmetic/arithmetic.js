function main() {
	console.log("main method start");
	//addition();
	//subtraction();
	//multiplication();
	//division();
	//reminder();
	//exponentiation();
	increment1();
	//increment2();
	//decrement1();
	//decrement2();
	//precedence();
	console.log("main method end");
}

function addition() {
	console.log("addition method start");
	let x = 2;
	let y = 3;
	let z = x + y;
	console.log(z);
	console.log("addition method end");
}

function subtraction() {
	console.log("subtraction method start");
	let x = 2;
	let y = 3;
	let z = x - y;
	console.log(z);
	console.log("subtraction method end");
}

function multiplication() {
	console.log("multiplication method start");
	let x = 2;
	let y = 3;
	let z = x * y;
	console.log(z);
	console.log("multiplication method end");
}

function division() {
	console.log("division method start");
	let x = 2;
	let y = 3;
	let z = x / y;
	console.log(z);
	console.log("division method end");
}

function reminder() {
	console.log("reminder method start");
	let x = 2;
	let y = 3;
	let z = x % y;
	console.log(z);
	console.log("reminder method end");
}

function exponentiation() {
	console.log("exponentiation method start");
	let x = 5;
	let y = 3;
	//let z = x ** y;
	let z = Math.pow(x, y);
	console.log(z);
	console.log("exponentiation method end");
}

function increment1() {
	console.log("increment1 method start");
	let x = 3;
	let y = 3;
	console.log(x); //3
	console.log(y); //3
	x = x++; //3 assigned value
	y = ++y; //4
	console.log(x); //3
	console.log(y); //4
	
	console.log(x++); //3
	console.log(++y); //5
	
	x = x++; //4
	y = ++y; //6
	console.log(x); //4
	console.log(y); //6
	
	console.log(x++); //4
	console.log(++y); //7
	
	console.log("increment1 method end");
}

function increment2() {
	console.log("increment2 method start");
	let x = 3;
	let y = 3;
	console.log(x); //3
	console.log(y); //3
	let a = x++;
	let b = ++y;
	console.log(x); //4
	console.log(y); //4
	console.log(a); //3
	console.log(b); //4
	
	console.log(x++); //4
	console.log(++y); //5
	
	console.log(x++); //5
	console.log(++y); //6
	
	console.log(x++); //6
	console.log(++y); //7
	console.log("increment2 method end");
}

function decrement1() {
	console.log("decrement1 method start");
	let x = 3;
	let y = 3;
	console.log(x); //3
	console.log(y); //3
	x = x--; //3
	y = --y; //2
	console.log(x); //3
	console.log(y); //2
	
	console.log(x--); //3
	console.log(--y); //1
	
	x = x--; //2
	y = --y; //0
	console.log(x); //2
	console.log(y); //0
	
	console.log(x--); //2
	console.log(--y); //-1
	
	console.log("decrement1 method end");
}

function decrement2() {
	console.log("decrement2 method start");
	let x = 3;
	let y = 3;
	console.log(x); //3
	console.log(y); //3
	let a = x--;
	let b = --y;
	console.log(x); //2
	console.log(y); //2
	console.log(a); //3
	console.log(b); //2
	
	console.log(x--); //2
	console.log(--y); //1
	
	console.log(x--); //1
	console.log(--y); //0
	
	console.log(x--); //0
	console.log(--y); //-1
	console.log("decrement2 method end");
}

function precedence() {
	console.log("precedence method start");
	let a = 100 + 50 * 3; 
	console.log(a); //250
	
	let b = (100 + 50) * 3; 
	console.log(b); //450
	
	let c = 100 / 50 * 3; 
	console.log(c); //6
	
	let d = 200 / 50 + 10 - 5 * 2;
	console.log(d); //4
	
	console.log("precedence method end");
}