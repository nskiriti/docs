//function which is passed as argument is callback function. -  Definition.

function test1(x){
	console.log("this is test1");
	x();
}

function test2(){
	console.log("this is test2");
}

test1(test2);

// example:1

function add(a,b){
	console.log(a+b);
}

function product(a,b){
	console.log(a*b);
}

function calculator(x,y,z){
	z(x,y);
}

calculator(4,6,add);
calculator(4,6,product);


//Callback functions are used in map, reduce, filter, find , any. of array methods.

let arr = [2,5,8,4,7,9,6,5];
let newArray = arr.map((ele, index)=> index * 10);
console.log(newArray);


//alternate explanation for line number 23
let z = function add1(a,b){
	console.log(a+b);
};
z(x,y); // a = x, b = y;

