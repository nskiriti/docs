
 //Destructuring Arrays
 let cars = [10,20,30,40,50,60,70];
 let [a,,b,c,...d] = cars;
 console.log(a,b,c);
 console.log(d);// spread operator
 //Destructuring Objects
 let person = {
     name:"sai",
     age:"25",
     height:"176cm",
     address:{
  city:"Hyd",
  country:{
      district: "mancherial",
      taluka: "goleti",
  }
     }
 }
 console.log(person);
 //console.log(name,age,height); check to seereference error
 let {name:nam,age,height, address:{country:{taluka}}} = person;// this statement allows us
 // to assign properties(keys) of an object to another variables using a shorthand 
 //notation and the values of {keys only}
 console.log(name,age,height);
 console.log(person.name);// without destructuring
 console.log(taluka);
 console.log(person.address.country.taluka);// without destructuring
 // what if we are trying to access a variable which is not there in object reference error,
 console.log(nam); // reference error, so name:nam
