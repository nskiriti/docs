//Example 1: Convert all strings in an array to uppercase
let words = ['apple', 'banana', 'cherry'];
let upperCaseWords;
upperCaseWords = words.map(function (ele, index) {
    return words[index].toUpperCase();
});
console.log(upperCaseWords);

//Example 2: Add 5 to each number in an array.
let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.map(function(ele){
    return ele + 5;
});
console.log(newNumbers);

//Example 3: Append the index of each element to the element itself.
let elements = ['a', 'b', 'c', 'd'];
let newElements = elements.map(function(ele, index){
   let item =  elements[index];
   let indi = elements.indexOf(ele);
   return item + indi;
});
console.log(newElements);

//Example 3: Append the index of each element to the element itself.
let items = ['a', 'b', 'c', 'd'];
let newItems = elements.map(function(ele, index){
   return ele + index;
});
console.log(newItems);

//Example 4: Square each number in an array.
let beforeSquares = [1, 2, 3, 4, 5];
let afterSquares = beforeSquares.map(function (ele, index){
    return ele*ele;
});
console.log(afterSquares);

//Example 5: Prepend "Hello, " to each name in an array.
let names = ['Alice', 'Bob', 'Charlie'];
let newNames = names.map(function(ele){
    return "Hello " + ele;
});
console.log(newNames);

//Example 5.1: Prepend "Hello, " to each name in an array.
let names1 = ['Alice', 'Bob', 'Charlie'];
function prepend(ele){
    return "Hello " + ele;
};
let newNames1 = names1.map(prepend);
console.log(newNames1);

//Example 6: find ages
let birthyears = [2000, 2001, 2005, 2008, 2021];
let ages = birthyears.map(function newAge(ele) {
    let nAge = 2024 - ele;
    return nAge;
});
console.log(ages);

//Example 1: Convert an array of objects into an array of strings with 
//a specific format.

let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ]
let newPeople = people.map(function(ele, index, arr){
    return people[index].name +" is "+people[index].age +" years old"
    
});
console.log(newPeople);

//Example 1: Convert an array of objects into an array of strings with 
//a specific format.

let people1 = [
    { name: 'kireeti', age: 25 },
    { name: 'Ravi', age: 30 },
    { name: 'Charlie', age: 35 }
  ]
let newPeople1 = people1.map(arrstr);
    
    function arrstr(ele, index){
    return people1[index].name +" is "+people1[index].age +" years old"
    
};
console.table(newPeople1);






















