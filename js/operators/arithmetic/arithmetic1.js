function main(){
	console.log("main method start");
	//exponentiation();
	//increment1();
	increment2();
	//decrement1();
	//decrement2();
	//precedence();
	console.log("main method end");
}

function exponentiation(){
	console.log("exponentation method start");
	let x = 6;
	let y = 3;
	//z = x ** y;
	z = Math.pow(x,y);
	console.log(z);	
	console.log("exponentation method end");
}

function increment1() {
	console.log("increment1 method start");
	let x = 3;
	let y = 3;
	console.log(x); //
	console.log(y); //
	x = x++; //3 assigned value
	y = ++y; //4
	console.log(x); //
	console.log(y); //
	
	console.log(x++); //
	console.log(++y); //
	
	x = x++; //4
	y = ++y; //6
	console.log(x); //
	console.log(y); //
	
	console.log(x++); //
	console.log(++y); //
	
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
	console.log(x); //3
	console.log(y); //4
	console.log(a); //3
	console.log(b); //4
	
	console.log(x++); //3
	console.log(++y); //5
	
	console.log(x++); //4
	console.log(++y); //6
	
	console.log(x++); //5
	console.log(++y); //7
	console.log("increment2 method end");
}