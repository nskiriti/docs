
 // creation of new set
 /*

 var s1= new Set();// s is capital
 console.log(s1);
 s1.add(5);
 console.log(s1);
 console.log(typeof(s1));
 s1.add(9);
 console.log(s1);
 s1.add(5);// already added, so doesnt reflect.
 s1.add(10);
 s1.add(11);
 s1.add(12);
 s1.add(13);
 s1.add(14); 

 let a1=[10,11,12,13,10,11,12,13]
 let s1= new Set(a1);
 console.log(a1);
 console.log(s1);

 let s2= "hyderabad";
 s3= new Set(s2);
 console.log(s3);

 s3.delete("h");
 console.log(s3);

       pratus = s3.delete("k");
       console.log(pratus);

       let fratus=s3.has("D"); // set is case sensitive
       console.log(fratus);

       console.log(s3.size);
       
       s3.clear();
       console.log(s3); 

       // for of loop

       let fruits = new Set();
       let s2= "secunderabad";
 fruits= new Set(s2);
 console.log(fruits);

 for(ele of fruits){
     console.log(ele);
 }*/
 // foreach method
 let fruits = new Set();
 let s2= "secunderabad";
 fruits= new Set(s2);

       fruits.forEach(function(ele){
 console.log(ele);
 });
