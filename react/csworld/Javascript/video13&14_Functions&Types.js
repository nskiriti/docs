
 /*doesnt work bcz, we need to define sum  console.log(sum(6,7));
   function sum(num1, num2){
   var result= num1+num2;
   return result;
 }
  console.log(sum(8,9));
  document.write(sum(10,19));
 // sum is defined only once but we can use it any number of times.
 
  console.log(sum(7,7)); 
  var add= function sum(num1, num2){
   var result= num1+num2;
   return result;
  }
   console.log(add(9,5));

/// anonymous function
  var sum= function(sum1, sum2){ 
   var result= sum1 + sum2;
   return result;
   }
  console.log(sum(5,9)); */

  // IIFE Immediately Invoked Function Expression- 1 way
  var prod= (function product(prod1, prod2){
    var result= prod1*prod2;
    document.write(result);
   })(7,7);// accessing immediately after definition.
   console.log(prod);// if we dont assign F. def. to a variable, we cannot access it
   // I cannot perform console.log(prod(7,9)); here in IIFE
  // IIFE Immediately Invoked Function Expression- 2 way
  var prod= (function product(prod1, prod2){
    var result= prod1*prod2;
    return result;
   })(10,7);// accessing immediately after definition.
   console.log(prod);// if we dont assign F. def. to a variable, we cannot access it
   // I cannot perform console.log(prod(7,9)); here in IIFE
   // if function definition is not giving any value as a result, we get undefined in console
 
 // Arrow Functions - No usage of word function- pqr need not be declared
   pqr= (sum1, sum2)=>{
    var result= sum1+sum2;
    return result;
   }
   console.log(pqr(10,10));
 // Arrow Functions - printing without return statement
  pqr=  (sum1,sum2)=>{
    var result= sum1+sum2;
    console.log(result);
  }  
   pqr(17,7);
 // Arrow Functions forms
 // If only one statement in function body
 var sum=(sum1, sum2)=> sum1+sum2;
 console.log(sum(8,7));
 // If only one parameter and one statement in function body
 var cube= num1=> num1*num1*num1;
 console.log(cube(5));
 // If No argument=input=parameter- using()
 //var greet=()=> console.log("Good Morning ");
 //greet();
 // if no argument using _
 //var greet=_=> console.log("Good Mooorning ");
 //greet();
 //when multi statements are executed in function body-use{}
 greet=()=>{
  console.log("Good Morning dear");
  console.log("hello");
 }
 greet();
