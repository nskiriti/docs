
 //method+function
 /*var salaries=[1000,2000,3000,4000,5000];
 console.log(salaries);
 

 salaries.forEach(function add(salary,index){
 	console.log(salary);
 	console.log(index);
 	let increment = salary/10;
 	salaries[index]= salary + increment;	
 	
 	
 });
 console.log(salaries);
 // Arrow function method

 var salaries=[1000,2000,3000,4000,5000];
 console.log(salaries);

 salaries.forEach((salary, index)=>{
 	let bonus=2000;
 	salaries[index]= salary + bonus;
 	console.log(salaries);
 })*/
 // calling function first, then definition(can be anywhere)
 var salaries=[1000,2000,3000,4000,5000];
 console.log(salaries);
  
 salaries.forEach(bonus);
 console.log(salaries);

 function bonus(salary, index){
 	let bonus=250;
 	salaries[index]= salary + bonus;
 	return salary; // what is this for?
 };
