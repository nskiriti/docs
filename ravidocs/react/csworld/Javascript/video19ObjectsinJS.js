
 let movie = {
   name: "RRR",
   release: 2022,
   director: "Rajamouli"
 };
 console.log(movie); // renders in alphabetical order
 console.log(movie['name']);// quotes are mandatory
 console.log(movie.director);
 let release= "release";
 console.log(movie[release]); // now works without ""
 console.log(movie["elease"]);// when we pass a key not there in object
 console.log(movie.elease);
 
 // adding new element to object

 console.log(movie);
 movie["budget"] = "400 crores";
 console.log(movie);
 movie.profit = "1000 crores";
 console.log(movie);
 // updating object

 movie.budget = "200 crores";
 console.log(movie);
 movie["release"] = 1992;
 console.log(movie);

 // Creation of object using new operator & object ()[object constructer]

 let movie2=new Object();
 movie2.name= "bahubali";
 movie2.release= 2022;
 console.log(movie2);

 // creating an object with New operator + constructer function
 // creatioon of constructer function

 function User(n, a, p){
  this.name= n;
  this.age= a; 
  this.place= p;  
 };
 
 // creation of new object by calling constructer function

 let user1=new User("shiva",20,"hyderabad");
 console.log(user1);
 let user2= new User("krishna", 20, "delhi");
 console.log(user2);

 // adding an element to existing object created by new operator + func. Constructer
 user2.mobile=9898989898;
 console.log(user2.mobile);
