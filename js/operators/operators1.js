document.write("This is from Javascript");

function main(){
		console.log("main method start");
		//add();
		//mul();
		//sub();		
		//rem();
		//div();
		//increment();
		decrement();
		//append();
		//comparision();
		//find();
		console.log("main method end");
}

function add(){
		console.log("add method start");
		let x;
		console.log(x);
		console.log(typeof(x));
		x = 5;
		console.log(x);
		console.log(typeof(x));
		let y = 55;
		let z = x + y;
		console.log(z);
		console.log(typeof(z));
		console.log("add method end");
}

function mul(){
		console.log("mul method start");
		let x = 2;
		let y = 5;
		let z = x*y;
		console.log(z);
		console.log(typeof(z));		
		console.log("mul method end");
}

function sub(){
		console.log("sub method start");
		let x = 2;
		let y = 5;
		let z = y-x;
		console.log(z);
		console.log(typeof(z));		
		console.log("sub method end");
}

function rem(){
		console.log("div-quotient method start");
		let x = 2;
		let y = 5;
		let z = y%x;
		console.log(z);
		console.log(typeof(z));		
		console.log("div-quotient method end");
}

function div(){
		console.log("div-rem method start");
		let x = 2;
		let y = 5;
		let z = y/x;
		console.log(z);
		console.log(typeof(z));		
		console.log("div-rem method end");
}

function increment(){
		console.log("increment method start");
		let x = 2;
		let a = x++;
		console.log(x);
		console.log(a);
		let y = 5;
		let b = ++y;
		console.log(y);
		console.log(b);			
		console.log("increment method end");
}

function decrement(){
		console.log("decrement method start");
		let x = 2;
		let a = x--;
		console.log(x);
		console.log(a);
		let y = 5;
		let b = --y;
		console.log(y);
		console.log(b);			
		console.log("decrement method end");
}

function append(){
		console.log("append method start");
		let fn = 'Ravi';
		let ln = 'kumar';
		let x = 10;
		let y = 11;
		let z = '13';
		let a = x + y + z;
		let b = z + y + x;
		console.log(a);
		console.log(b);
		console.log("append method end");
}

function comparision(){
		console.log("comparision method start");
		let x = 10;
		let y = 11;
		let z = 12;
		console.log(x == y);
		console.log(x == z);
		console.log(x != y);
		console.log(x != z);
		console.log("comparision method end");
}

function find(){
		let x = "Hello";
		let y = "Hi";
		console.log(x > y); //false
		console.log(x < y); //true
}