
 //Default parameter; both can be set to any values.
 function product(n1,n2=3){
  var result= n1*n2;
  return result;
 }
 console.log(product(8));
 //Default parameter
 console.log(product(5));
 //Rest parameter;

 function product(n1, n2, ...num){
     var result= n1*n2;
     console.log(arguments[4]);
     for(ele of num){
  result=result*ele;
     }
     return result;
 }
 console.log(product(8,2,7,8,6,5,4));
