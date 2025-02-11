//why arrays?

// How do you declare 100 variables in JS?
	let num1, num2,num3;
	let num4, num5 //upto 100, to overcome this, we have arrays, where we can group few elements into
  // one variable thus reducing code complexity.
	console.log(num3);//undefined


// declaring arrays?

//1st way using array function or constructor function
  let fruits = new Array("apple","banana","cherry","plum"); // A is Caps
//2nd way using square brackets []
	let movies = ['bahubali', 'RRR', 'sarrinodu']; // declaring arrays
 	 console.log(movies);
   console.log(typeof(movies));// object
  
   //INSTANCE or PROTOTYPE methods
   
 // adding element to array using index  
 	movies[3]='acharya';
  movies[4]='maharshi';
  movies[100]=100; // JS arrays are Heterogeneous.
 	console.log(movies);
   console.log(movies[98]);//undefined

 // accessing an element in the arrow
  console.log(movies[16]);//undefined
 	console.log(movies[2]);
   console.log(movies.length);

 // adding an element to array using .push() methods
 	movies.push("Robo");
 	console.log(movies);    
 // push allows us to add at the end of already existing elements

 // pop allows us to delete element present at the end of already existing elements
 	movies.pop();
 	console.log(movies);
 // how to know which element is deleted? or print the deleted element when used pop.
    console.log(movies.pop());
    console.log(movies);

 // .unshift() method===> opposite side of push   
    movies.unshift("Shawshanks redemption");
    console.log(movies);
    console.log(movies[0]);

  // .shift() method===> opposite side of pop; and storing the deleted value in a new variable
    let xyz =movies.shift();
    console.log("removed is "+xyz);  
    console.log(movies); 

  // .indexof() method
    console.log(movies.indexOf("RRR")); 
  // .indexof() method and finding element which is not part of this array
    console.log(movies.indexOf("ppp"));//-1
    console.log(movies.indexOf("kkk"));//-1
    movies.push("yuva");
    movies.unshift("yuva");
    console.log(movies.indexOf("yuva"));//returns first match
    console.log(movies);
    movies.push("RRR");
    console.log(movies);
    console.log(movies.indexOf("RRR"));
    console.log(movies);
    movies.push("Game of thrones");
    console.log(movies);

    //slice method creates a new array which is part of old array
    console.log(movies);
    console.log("0 to 3-1 th index "+ movies.slice(0,3)); //(startingIndex, upto(index-1, included))
    console.log(movies.slice(0,2));
    console.log(movies.slice(0,22));

    //STATIC METHODS

    //Array.isArray method = static method
    console.log(Array.isArray(movies));//true

    //Array.from() method   
    console.log(Array.from("banana"));//(6) ['b', 'a', 'n', 'a', 'n', 'a']
    console.log(Array.from("123456789"));//(9) ['1','2','3','4','5','6','7','8','9']-strings

    //Array.of() method
    console.log(Array.of("apple",25,26,27,"sweets"));

    //Array.fromAsync() method
    //TODO

    //INSTANCE methods
    console.log(movies);
    console.log(movies.entries().next().value);

    //diff Use forEach when you need to iterate through an array to perform actions (like logging
    //  or modifying external state) without creating a new array.Use map when you need to transform 
    //  an array's elements and create a new array based on those transformations
    