function main() {
   undefinedFun();
  // nullFun();
  // number();
  // bigint();
  // string();
   //boolean();
  // dynamic();
  // arrays();
  // objects();
}

function undefined() {
  let n1 =;
  console.log("value of n1 = "+ n1 + " and datatype of n1 = "+typeof n1);
}

function nullFun() {
  let n1 = null;
  console.log("value of n1 = " + n1 + " and datatype of n1 = " + typeof n1);
}

function number() {
  let n1;
  console.log("value of n1 = " + n1 + " and type of n1 = " + typeof n1);
  n1 = 9007199254740991;
  console.log("value of n1 = " + n1 + " and type of n1 = " + typeof n1);
}

function bigint() {
  let n1 = 9007199254740992n;
  console.log("value of n1 = " + n1 + " and type of n1 = " + typeof n1);
}

function string() {
  let s1 = "Ravi";
  let s2 = 'Kumar';
  console.log("value of 's1' = " + s1 + " and type of s1 = " + typeof s1);
  console.log('value of "s2" = ' + s2 + " and type of s2 = " + typeof s2);
}

function boolean() {
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
}

function dynamic() {
  let n1;
  console.log("value of n1 = " + n1 + " and type of n1 = " + typeof n1);
  n1 = 12;
  console.log("value of n1 = " + n1 + " and type of n1 = " + typeof n1);
  n1 = "12";
  //num1 = parseInt(n1);
  console.log("value of n1 = " + n1 + " and type of n1 = " + typeof n1);
  n1 = true;
  console.log("value of n1 = " + n1 + " and type of n1 = " + typeof n1);
}

function arrays() {
  const employees = ["Ravi", "Prasanth", "Raja"];
  console.log("type of employees = " + typeof employees);
}

function objects() {
  const employee1 = {
    firstName: "Ravi",
    lastName: "Kumar",
    age: 35, email: "ravi.kumar@gmail.com",
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
}
// main();