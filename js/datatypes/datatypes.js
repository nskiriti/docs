function main() {
  console.log("main function start");
  // undefined1);
  null1();
  // number();
  // bigint();
  // string();
  //boolean();
  // dynamic();
  // arrays();
  // objects();
  console.log("main function end");
}
function undefined1() {
	let n1;
	console.log("The value of n1 = " + n1);
	console.log("The datatype of n1 = " + typeof n1);
}
function null1() {
	let n1 = null;
	console.log("The value of n1 = " + n1);
	console.log("The datatype of n1 = " + typeof n1);
}
function number() {
  console.log("number function start");
  let n1;
  console.log("value of n1 = " + n1 + " and type of n1 = " + typeof n1);
  n1 = 9007199254740991;
  console.log("value of n1 = " + n1 + " and type of n1 = " + typeof n1);
  console.log("number function end");
	//let n1 = 9007199254740999;
	console.log(n1);
	console.log("The value of n1 = " + n1);
	console.log("The datatype of n1 = " + typeof n1);
}
function bigint() {
  console.log("bigint function start");
  let n1 = 9007199254740992n;
  console.log("value of n1 = " + n1 + " and type of n1 = " + typeof n1);
  console.log("bigint function end");
	let n1 = 9007199254740999n;
	console.log(n1);
	console.log("The value of n1 = " + n1);
	console.log("The datatype of n1 = " + typeof n1);
}
function string() {
  console.log("string function start");
  let s1 = "Ravi";
  let s2 = 'Kumar';
  console.log("value of 's1' = " + s1 + " and type of s1 = " + typeof s1);
  console.log('value of "s2" = ' + s2 + " and type of s2 = " + typeof s2);
  console.log("string function end");
}

function boolean() {
  console.log("boolean function start");
  let isManager = true;
  let isMale = "true";
  let x = 2;
  let y = 2;
  console.log(
    "value of isManager = " + isManager +
    " and type of isManager = " + typeof isManager);
  console.log(
    "value of isMale = " + isMale + " and type of isMale = " +
    typeof isMale
  );
  console.log(
    "value of expression = " + (x == y) +
    " and type of expression = " + typeof (x == y)
  );
  console.log("boolean function end");
	let s1 = "Surya";
	console.log("The value of s1 = " + s1);
	console.log("The datatype of s1 = " + typeof s1);
}
function boolean1() {
	let isManager = true;
	console.log("The value of isManager = " + isManager);
	console.log("The datatype of isManager = " + typeof isManager);
	let isEmployee = "true";
	console.log("The value of isManager = " + isEmployee);
	console.log("The datatype of isManager = " + typeof isEmployee);
	let x = 2;
	let y = 3;
	let z = 2;
	console.log("value is = "+(x==y));
	console.log("datatype is = "+typeof(x==y));
	console.log("value is = " +(x==z));
	console.log("datatype is = "+typeof(x==z));
}
function dynamic() {
  console.log("dynamic function start");
  let n1;
  console.log("value of n1 = " + n1 + " and type of n1 = " + typeof n1);
  n1 = 12;
  console.log("value of n1 = " + n1 + " and type of n1 = " + typeof n1);
  n1 = "12";
  //num1 = parseInt(n1);
  console.log("value of n1 = " + n1 + " and type of n1 = " + typeof n1);
  n1 = true;
  console.log("value of n1 = " + n1 + " and type of n1 = " + typeof n1);
  console.log("dynamic function end");
	let n1;
	console.log(n1);
	console.log("The value of n1 = " + n1);
	console.log("The datatype of n1 = " + typeof n1);
	n1 = 9007199254740999;
	console.log(n1);
	console.log("The value of n1 = " + n1);
	console.log("The datatype of n1 = " + typeof n1);
	n1 = 9007199254740999n;
	console.log(n1);
	console.log("The value of n1 = " + n1);
	console.log("The datatype of n1 = " + typeof n1);
	n1 = "9007199254740999n";
	console.log(n1);
	console.log("The value of n1 = " + n1);
	console.log("The datatype of n1 = " + typeof n1);
	n1 = true;
	console.log(n1);
	console.log("The value of n1 = " + n1);
	console.log("The datatype of n1 = " + typeof n1);
}
function arrays() {
  console.log("arrays function start");
  const employees = ["Ravi", "Prasanth", "Raja"];
  console.log("type of employees = " + typeof employees);
  console.log("arrays function end");
	let a1 = [];
	console.log("The value of a1 = " + a1);
	console.log("The datatype of a1 = " + typeof a1);
}
function objects() {
  console.log("objects function start");
  const employee1 = {
    firstName: "Ravi",
    lastName: "Kumar",
    age: 35, 
	email: "ravi.kumar@gmail.com",
    isPeminent: true
  };
  const employee2 = {
    firstName: "Hemanth",
    gender: "Bathula",
    age: 23,
    email: "hemanth.@gmail.com",
    isPeminent: true,
  };
  console.log(
    "employee firstName = " +
    employee1.firstName +
    " employee lastName = " +
    employee1.lastName +
    " age is = " +
    employee1.age +
    " and type of employee = " +
    typeof employee1
  );
  console.log("object function end");
	let o1 = {};
	console.log("The value of o1 = " + o1);
	console.log("The datatype of o1 = " + typeof o1);
}
main();