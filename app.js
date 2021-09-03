console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

var a = 20;
var b = 4;
var add = a + b;
var minus = a - b;
var multiply = a * b;
var dividing = a / b;
console.log(add); // outputs -> 24
console.log(minus); // outputs -> 16
console.log(multiply); // outputs -> 80
console.log(dividing); // outputs -> 5

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

let a = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";
console.log(a + str); // outputs -> 1111
console.log(a + str2); // outputs -> 11eleven
console.log(a + isPresent); // outputs -> 12
console.log(a + firstName); // outputs -> 11Jackie
console.log(a + lastName); // outputs -> 11Chan

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

let a = 5;
let str = "5";
let str2 = "five";
let isPresent = false;
let firstName = "Robin";
let lastName = "Williams";
console.log(a == str); // output -> true
console.log(a === str); // output ->false
console.log(!isPresent); // output -> true
console.log("eleven" == str2 && a >= str); // output -> false
console.log(!isPresent || isPresent); // output -> true
console.log(0 == false); // output -> true
console.log(0 === false); // output -> false
console.log(0 != false); // output -> false
console.log(0 !==false); // output -> true