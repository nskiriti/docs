// // /*Higher order function is a function that receives another function as an argument 
// // or returns another function or both */

function first(x){
	console.log("this is first function");
	x();
}

function second(){
	console.log("this is second function");
}

first(second);

// square an array

let numbers = [1,2,3,4,5,6];
let squaredNumbers = numbers.map((ele)=> ele ** 2);
console.log(squaredNumbers);

// cube an array

let cubeNumber = squaredNumbers.map((ele)=> ele ** 3);
console.log(cubeNumber);

// square an array
function squaring(){
	let numbers = [1,2,3,4,5,6];
	let squaredNumbers = numbers.map((ele)=> ele ** 2);
	console.log(squaredNumbers);
	return squaredNumbers;
}
// cube an array

function cubing(x){	
	let squaredNumbers =  x();
	let cubeNumber = squaredNumbers.map((ele)=> ele ** 3);
	console.log(cubeNumber);

}
cubing(squaring);

// video example
let array = [1,2,3,4,5,6,7];

// square operation
function square(num){
	return num *num;
}
// cube operation
function cube(num){
	return num *num*num;
}
// higherorder function 
function anyOperation(arr,anyfunc){
	let output = [];
	for(let ele of arr){
		let temp = anyfunc(ele);
		output.push(temp);
	}
	return output;

}

console.log(anyOperation(array,cube));

//we need not write{} after for of loop if there is only one executable statement.
for(let i = 0; i<10; i++)
console.log(i)	;
//console.log(i); this statement will not be executed since it is not inside block


// returning a function inside another function = Higher order function.

function first1(){
	return second1;
}

function second1(){
	console.log("this is second function");
}
console.log(first1());