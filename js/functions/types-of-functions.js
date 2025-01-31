// CS video14
//named function
function add(a, b) {
    let c = a + b;
    console.log(c);
}
add(5, 8); //function call

// named function as a variable value
let res1 = add(7, 4);

//anonymous function as a variable value
let res2 = function (a, b) {
    let c = a + b;
    console.log(c);
};
res2(9, 14);
//anonymous function as a variable value
let res3 = function (a, b) {
    let c = a + b;
    console.log(c);
}
(9, 10);
res2(10, 14);
// iife with no parameters
(function () {
    console.log("iife with no parameters");
})
();
// iife with parameters
(function (a, b) {
    console.log("iife with parameters");
    console.log(a+b);
})
(2, 3);

//arrow function with single line of code
let arrowFun1 = (a, b, c) => console.log(a+b+c);
arrowFun1(3,4,5);

//arrow function with multi line of code
let arrowFun2 = (a, b, c) => {
    let sum = a + b + c;
    console.log(sum);
}
arrowFun2(3,7,5);

//arrow function with single line of code with one parameter
let arrowFun3 = (a) => console.log(a+a+a);
arrowFun3(3);

//arrow function with single line of code with one parameter and without paeranthesis
let arrowFun = a => console.log(a+a+a);
arrowFun(5);

//arrow function with single line of code with no parameters
let arrowFun4 = () => 
    console.log("arrow function with single line of code with no parameters");
arrowFun4();

//arrow function without parameters without parenthesis 
let arrowFun5 = _ => 
    console.log("arrow function without parameters without parenthesis");
arrowFun5();

//arrow function with multi line of code with no parameters
let arrowFun6 = () => {
    console.log("arrow function with multi line of code with no parameters");
    console.log("Hello");
}
arrowFun6();

//arrow function without parameters without parenthesis for multi lines
let arrowFun7 = _ => { 
    console.log("arrow function without parameters without parenthesis for multi lines");
    console.log("good morning")
}
arrowFun7();


