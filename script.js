// 1. Declare 2 variables x & y, and set their values to any number you like.
// Next declare a constant solution which is a string that prints to the console like the example below:
// let x = 2;
// let y = 5;
// const solution = <insert your code here>;
// console.log(solution) // => "The sum of 2 and 5 is 7"
console.log("TASK 1:");
let x = 1;
let y = 2;
const solution = `The sum of ${x} and ${y} is ${x + y}`;
console.log(solution);
console.log("-----------------------------------------");

// 2.  Use a loop to iterate through the numbers 1 through 16.
// Push each number into fb, but push the string "fizz" in place of numbers divisible by 3,
// "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5.
// Log fb to the console to see the output.
// const fb = [];
// ADD CODE HERE
// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]
console.log("TASK 2:");
const fb = [];
for (let i = 1; i < 17; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fb.push("fizzbuzz");
  } else if (i % 3 === 0) {
    fb.push("fizz");
  } else if (i % 5 === 0) {
    fb.push("buzz");
  } else {
    fb.push(i);
  }
}

console.log(fb);
console.log("-----------------------------------------");

// 3. You are provided with an object called checkObj. Using a for... in loop,
// determine if the object contains the property foundNum. If it exists, reassign the value of found to 1.
// const checkObj = {
//   oddNum: 1,
//   evenNum: 2,
//   foundNum: 5,
//   randomNum: 18
// };
// let found = 0;
// // ADD CODE HERE
console.log("TASK: 3");
const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18,
};

let found = 0;

for (const prop in checkObj) {
  if (prop === "foundNum") {
    found = 1;
    break;
  }
}

console.log(found);
console.log("-----------------------------------------");

// 4. You are given an object called sumMe containing several key/value pairs and
// a variable called total whose initial value is 0. Using a for... in loop,
// iterate through the keys of sumMe; if the value corresponding to a key is a number, add it to total.
// const sumMe = {
//   hello: 'there',
//   you: 8,
//   are: 7,
//   almost: '10',
//   done: '!'
// };
// let total = 0;
// ADD CODE HERE
console.log("TASK 4:");
const sumMe = {
  hello: "there",
  you: 8,
  are: 7,
  almost: "10",
  done: "!",
};
let total = 0;

for (const key in sumMe) {
  if (typeof sumMe[key] === "number") {
    total += sumMe[key];
  }
}

console.log(total);
console.log("-----------------------------------------");

// 5. Create a function addTwo that accepts a number, and returns the number plus 2.
//   // ADD CODE HERE

// Uncomment these to check your work!
// console.log(typeof addTwo); // should log: 'function'
// console.log(addTwo(10)); // should log: 12
console.log("TASK 5:");
const addTwo = (num) => num + 2;

console.log(typeof addTwo);
console.log(addTwo(10));
console.log("-----------------------------------------");

// 6. Create a function makePlans that accepts a string. This string should be a name.
//  The function makePlans should call the function callFriend and return the result.
//  callFriend accepts a boolean value and a string.
// Pass in the friendsAvailable variable and name to callFriend.
// Create a function callFriend that accepts a boolean value and a string.
//  If the boolean value is true, callFriend should return the string 'Plans made with NAME this weekend'.
//  Otherwise it should return 'Everyone is busy this weekend'.
// let friendsAvailable = true;

// function makePlans(name) {
//   // INSERT CODE HERE
// }

// function callFriend(bool, name) {
//   // INSERT CODE HERE
// }

// Uncomment these to check your work!
// console.log(makePlans("Mary")) // should return: "Plans made with Mary this weekend'
// friendsAvailable = false;
// console.log(makePlans("James")) //should return: "Everyone is busy this weekend."
console.log("TASK 6:");
let friendsAvailable = true;
function makePlans(name) {
  return callFriend(friendsAvailable, name);
}

function callFriend(bool, name) {
  if (bool) return `Plans made with ${name} this weekend`;
  return "Everyone is busy this weekend.";
}

console.log(makePlans("Mary")); // should return: "Plans made with Mary this weekend'
friendsAvailable = false;
console.log(makePlans("James")); //should return: "Everyone is busy this weekend."
console.log("-----------------------------------------");

// 7. Using a FOR loop, write a function getTheSum which adds each element in arr to find the array total.
// function getTheSum(arr){
//   // ADD CODE HERE
// }

// Uncomment these to check your work!
//console.log(getTheSum([3, 6, 9])); // expected log 18
//console.log(getTheSum([10, 11, 12])); // expected log 33
console.log("TASK 7:");
const getTheSum = (arr) => {
  let mem = 0;
  for (let i = 0; i < arr.length; i++) {
    mem += arr[i];
  }
  return mem;
};

console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33
console.log("-----------------------------------------");

// 8. Write a function disemvowel that takes in a string and returns a new string with all vowels removed.
// function disemvowel(string) {
//   // ADD CODE HERE
// }

// Uncomment these to check your work!
// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'
console.log("TASK 8:");

function disemvowel(string) {
  var regex = /a|A|e|E|i|I|o|O|u|U/gi;
  return string.replace(regex, "");
}

console.log(disemvowel("CodeSmith")); // => 'CdSmth'
console.log(disemvowel("BANANA")); // => 'BNN'
console.log(disemvowel("hello world")); // => 'hll wrld'
console.log("-----------------------------------------");

// 9. Write a function arrayBuilder that takes in a count object
// and returns an array filled with the appropriate numbers of elements.
// The order of the elements in the array does not matter, but repeated elements should be grouped.
// function arrayBuilder(obj) {
//   // ADD CODE HERE
// }

// Uncomment these to check your work!
// console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); // => []
console.log("TASK 9:");
const arrayBuilder = (obj) => {
  const arrResult = [];
  for (const key in obj) {
    for (let i = 0; i < obj[key]; i++) {
      arrResult.push(key);
    }
  }
  return arrResult;
};

console.log(arrayBuilder({ cats: 2, dogs: 1 })); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []
console.log("-----------------------------------------");

// 10. Create a console log that displays the contents of the function rather than executing it.
// For example, your result should be function add20 (num){ return num + 20 }.
// function add20 (num){
//   return num + 20
// }

// CREATE YOUR CONSOLE.LOG BELOW
console.log("TASK 10:");
function add20(num) {
  return num + 20;
}

console.log(`${add20.toString()}`);
console.log("-----------------------------------------");

// 11. Create a function findWaldo that accepts an object and returns the value associated with the key 'Waldo'.
//  If the key 'Waldo' is not found, the function should return 'Where's Waldo?'
// ADD CODE HERE

// Uncomment these to check your work!
// const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
// const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
// console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
// console.log(findWaldo(supernatural)) // should log: 'unknown'
console.log("TASK 11:");
const findWaldo = (obj) => (obj["Waldo"] ? obj["Waldo"] : `Where's Waldo?`);

const DC = { Bruce: "Wayne", Harley: "Quinn" };
const supernatural = {
  Sam: "Winchester",
  Dean: "Winchester",
  Waldo: "unknown",
};
console.log(findWaldo(DC)); // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)); // should log: 'unknown'
console.log("-----------------------------------------");

// 12. Create a function subtractTwo that accepts a number and returns that number minus 2.
// Then create a function map that takes two inputs -
//  1. an array of numbers (a list of numbers)
//  2. a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
// Have your map function return a new array filled with numbers that
// are the result of using the 'callback' function on each element of the input array.
// Please do not use the native map or forEach method.
// map([3,4,5], subtractTwo); //-> [1,2,3]
// subtractTwo(10); //-> 8
// subtractTwo(12); //-> 10
console.log("TASK 12:")

const subtractTwo = (num) => num - 2;
const map = (arrNum, callback) => {
  const newArr = [];
  for (let i = 0; i < arrNum.length; i++) {
    newArr.push(callback(arrNum[i]));
  }
  return newArr;
};

console.log(map([3, 4, 5], subtractTwo)); //-> [1,2,3]
console.log(subtractTwo(10)); //-> 8
console.log(subtractTwo(12)); //-> 10

