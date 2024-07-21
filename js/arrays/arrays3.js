//Example 1: Filter Even Numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers;
evenNumbers = numbers.filter(function (ele){
    if(ele%2==0){
        return ele;
    }
});
console.log(evenNumbers);

//Example 2:Filter Strings with More Than 5 Characters
let words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
let newWords5;
newWords5 = words.filter(function(ele){
    if(ele.length>5){
        return ele;
    } 
    console.log(`${ele} is of length ${ele.length}`);
});
console.log(newWords5);

//Example 3:Given an array of objects, filter out objects where the property age 
//is greater than 30.
//Method 1
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 40 }
];
let people30 = people.filter(function(ele,index, arr){
    if(arr[index].age > 30){
        return ele;
    }
});
console.log(people30);

//Example 3:Given an array of objects, filter out objects where the property age 
//is greater than 30.
//Method 2
let people1 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 40 }
];
let people_30 = people.filter(function(ele,index, arr){
    if(ele.age > 30){
        return ele;
    }
});
console.log(people_30);

//Example 4:Given an array of numbers, filter out all the positive numbers.
let mixedNumbers = [-3, -1, 2, -4, 5, 0, -6];
let positiveNumbers = mixedNumbers.filter(function(ele){
    if(ele>0){
        return ele;
    }
});
console.log(positiveNumbers);


//Example 5:Given an array of numbers and a threshold value, filter out numbers that are 
//greater than the threshold.

let nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let threshold = 50;
let newNums = nums.filter(function (ele){
    if(ele>threshold){
        return ele;
    }
});
console.log(newNums);

// split() method in strings

let str = "Hello world is the best phrase";
console.log(str.length);
console.log(str.split(" "));
console.log(str.split(" ",4));
console.log(str.split(""));
let nWords = str.split(" ");
console.log(nWords);
console.log(nWords[3]);
console.log(str.split()); // string is converted to array
let chars = str.split("");
console.log(chars[0]);
console.log(chars[3]);
console.log(chars[8]);

// reverse() method
let numbers1 = ['one', 'two', 'three'];
let reverse = numbers1.reverse();
console.log(reverse);
let splitNumbers1 = numbers1.map(function(ele){
    ele = ele.split("");
    return ele;
});
console.log(splitNumbers1);










// //Example 6: Given an array of strings, filter out all the strings that are palindromes.
let phrases = ["madam", "hello", "racecar", "world", "level", "javascript"];
let newPhrases = phrases.filter(function(ele){
    let newEle = ele.split("");
    console.log(newEle);
    let revEle = newEle.reverse();
    console.log(revEle);
    let newRevEle = revEle.join("");
    console.log(newRevEle);
    if(ele === newRevEle){
        return ele;
    }
});
console.log(newPhrases);