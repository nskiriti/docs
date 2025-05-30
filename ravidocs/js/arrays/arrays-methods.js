function main() {
	//emptyArray();
	//arrayWithValues();
	//concat();
	//copyWithin();
	//entries();
	//every();
	//every1();
	//fill();
	//fill1();
	//filter();
	//find();
	//findIndex();
	//forEach();
	//arrayFrom();
	//includes();
	indexOf();
}
function emptyArray() {
	const cars = [];
	console.log(cars);
}
function arrayWithValues() {
	const cars = ["saab", "valvo", "bmw"];
	console.log(cars);
}
function concat() {
	const cars1 = ["saab", "valvo", "bmw"];
	const cars2 = ["Cecilie", "Lone"];
	const car = cars1.concat(cars2);
	console.log(car);
}
function copyWithin() {
	const fruits = ["Banan", "Orange", "Apple", "Mango"];
	const fruit = fruits.copyWithin(2, 0);
	console.log(fruit);
}
function entries() {
	const fruits = ["Banan", "Orange", "Apple", "Mango"];
	const fruit = fruits.entries();
	for (let x of fruit) {
		console.log(x);
	}
}
function every() {
	const ages = [32, 33, 16, 40]; //To check all elements >18 or not
	const ag = ages.every(checkAge);
	console.log(ag);
	function checkAge(age) {
		return age > 18; // condition is false.
	}
}
function every1() {
	const ages = [32, 33, 19, 40];  //To check all elements >18 or not
	const ag = ages.every(checkAge);
	console.log(ag);
	function checkAge(age) {
		return age > 18;  // condition is true.
	}
}
function fill() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	const f = fruits.fill("Kiwi"); //Fill all the elements with a value.
	console.log(f);
}
function fill1() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	const f = fruits.fill("Kiwi", 2, 4);     //Fill the last two elements.
	console.log(f);
}
function filter() {
	const ages = [32, 33, 16, 40];  //To check all elements.
	const f = ages.filter(checkElements);
	console.log(f);

	function checkElements(age) {
		return age >= 18;      //To print >18 elements.
	}
}
function find() {
	const ages = [3, 10, 18, 20];
	const ag = ages.find(checkAge);
	console.log(ag);
	function checkAge(age) {
		return age > 18; // To find the next value form user input, exsting form the array object.
	}
}
/*function findIndex(){
	const ages = [3, 10, 18, 20];
	const ag = ages.findIndex(checkAge);
	console.log(ag);
	function checkAge(age) {
	return age > 20;
	}
}*/
function forEach() {
	const numbers = [65, 44, 12, 4];

	numbers.forEach(myFunction)
	const numb = numbers;
	console.log(numb);

	function myFunction(item, index, arr) {
		arr[index] = item * 2;
	}
}
function arrayFrom() {
	let text = "ABCDEFG";  //"12345"  /output: [1,2,3,4,5]
	const myArr = Array.from(text);
	console.log(myArr);
}
function includes() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	const fruit = fruits.includes("Banana", 0);       
	//fruits.includes("Banana", 1); output : false
	console.log(fruit);
}
function indexOf() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	let index = fruits.indexOf("Apple");      //fruits.indexOf("Apple",3);   output:-1 
	console.log(index);
}