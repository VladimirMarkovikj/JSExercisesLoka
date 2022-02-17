// 1. Write a function called runInOrder that accepts as arguments in this order -
// an array of functions
// an array of numbers representing times in milliseconds
// runInOrder should execute the functions in order, with the corresponding numbers
// in milliseconds being the time to wait from the previous invocation. For example -
// function sayHi() {
//   console.log('hi');
// }
// function sayBye() {
//   console.log('bye');
// }
// function sayHowdy() {
//   console.log('howdy');
// }

// runInOrder([sayHi, sayBye, sayHowdy], [300, 600, 200]);
// /* should log: 'hi' (after 300 ms) 'bye' (600 ms after 'hi') 'howdy' (200 ms after 'bye') */
const runInOrder = async (arrayFunctions, arrayMilliseconds) => {
  for (let i = 0; i < arrayFunctions.length; i++) {
    setTimeout(arrayFunctions[i], arrayMilliseconds[i]);
  }
};

function sayHi() {
  console.log("hi");
}
function sayBye() {
  console.log("bye");
}
function sayHowdy() {
  console.log("howdy");
}

runInOrder([sayHi, sayBye, sayHowdy], [300, 600, 200]);

// 2. The function ajaxSimulate takes an id and a callback function as input.
//  Modify the function so that after the database array,
// it will set a timer that will pass the element of database whose index matches id to the callback function after 0 ms.
// Create a second function storeData (outside of ajaxSimulate) that takes data as input
// and assigns it to the dataReceived variable already defined.
// Invoke the ajaxSimulate function with an id of 1 and the storeData function as the callback.
//  Immediately after, log to the console the value of dataReceived.
// let dataReceived;

// function ajaxSimulate(id, callback) {
//   const database = ['Aaron', 'Barbara', 'Chris'];
//   // Add code here
// }

// // Also add code here
let dataReceived;

const ajaxSimulate = async (id, callback) => {
  const database = ["Aaron", "Barbara", "Chris"];
  await new Promise((resolve) => {
    setTimeout(resolve.bind(callback(database[id])), 0);
  });
  console.log(dataReceived);
};

const storeData = (data) => {
  dataReceived = data;
};

ajaxSimulate(1, storeData);

// 3. Get the length of an array using recursion without accessing its length property.

const getLengthRecursion = (array) => {
  if (0 in array) {
    return 1 + getLengthRecursion(array.slice(1));
  }
  return 0;
};
console.log(getLengthRecursion(["Aaron", "Barbara", "Chris"]));

// 4. Write a function that takes an array of functions and a number
//  that will be piped through all those functions.
// The input number passes through the first function,
//  whose output is passed as input to the second function,
//  whose output is passed as input to the third function, and so on.
//  Use recursion to return the final output of the last function in the array.

// function flow(input, funcArray) {

// }

// // To check if you've completed the challenge, uncomment this code!
// // function multiplyBy2(num) { return num * 2; }
// // function add7(num) { return num + 7; }
// // function modulo4(num) { return num % 4; }
// // function subtract10(num) { return num - 10; }
// // const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
// // console.log(flow(2, arrayOfFunctions)); // -> -7

const flow = (number, arrOfFunc) => {
  for (let i = 0; i < arrOfFunc.length; i++) {
    if (arrOfFunc.length != 1) {
      return flow(arrOfFunc[i](number), arrOfFunc.slice(1));
    }
    return arrOfFunc[i](number);
  }
};

function multiplyBy2(num) {
  return num * 2;
}
function add7(num) {
  return num + 7;
}
function modulo4(num) {
  return num % 4;
}
function subtract10(num) {
  return num - 10;
}
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7

// 5. Create a function personFromPersonStore that takes as input a name and an age.
//  When called, the function will create person objects using the Object.create method on the personStore object.

// const personStore = {
//     greet: function() {
//       console.log('hello');
//     }
//   }

//   function personFromPersonStore(name, age) {
//       // add code here

//   }

//   const sandra = personFromPersonStore('Sandra', 26);

// Uncomment these lines to check your work!
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); // -> Logs 26
// sandra.greet(); // -> Logs 'hello'

const personStore = {
  greet: function () {
    console.log("hello");
  },
};
function personFromPersonStore(name, age) {
  return Object.create({...personStore, name, age});
}

const sandra = personFromPersonStore("Sandra", 26);
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); // -> Logs 26
sandra.greet(); // -> Logs 'hello'

