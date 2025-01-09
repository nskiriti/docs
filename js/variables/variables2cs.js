// please call main(); function in order to execute in Nodejs.
function main(){
    console.log("main function starts");
  /*   document.write("This matter is written in JS file");
    document.write("note that matter written in html page is over written by  js"); */
    let n1 = 20;
    console.log(n1);
    n1 = 30;
    console.log(n1);
    const n2 = 50;
    console.log(n2);
    //n2 = 500; Uncaught TypeError: Assignment to constant variable.
    //const n3; Uncaught SyntaxError: Missing initializer in const declaration
    let n3;
    console.log(n3);
    n4 = 25;
    console.log(n4);
    console.log(typeof(n4));
    /* In JavaScript, there isn't a specific "nothing" type per se. However, you can declare a variable with a value of null or undefined, which are often used to represent "nothing" or the absence of a value */
    console.log(n5); // can access n5 before initialization = Hoisting
    var n5 = 100;
    console.log(n5);
    /* console.log(n6); // variables2.js:23 Uncaught ReferenceError: Cannot access 'n6' before initialization
    let n6 = 200;
    console.log(n6); */
    var n5 = 250; // Var allows to redeclare
    console.log(n5);
   /*  let n3 = 500;
    console.log(n3); variables2.js:28 Uncaught SyntaxError: Identifier 'n3' has already been declared (at..) */
    //Block level scope for let, var and const.
    {
        let x = 40;
        console.log(x);
    }
    /* console.log(x); Uncaught ReferenceError: x is not defined 
    undefined and not defined are not same*/
    {
        var x = 50;
        console.log(x);
    }
    console.log(x);
    {
        const y = 60;
        console.log(y);
    }
    /* console.log(y); Uncaught ReferenceError: y is not defined */
    /* Rules for Variable name
    1. only (a-z), (A-Z) & (0-9), '_' & "$' 
    2. cannot start with number or $
    3. Variable names are case sensitive
    4. recommeded camelCase notation*/


}
main();
