// Spread

// Array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];
console.log(combined); // Outputs: [1, 2, 3, 4, 5, 6]

// Object

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // Outputs: { a: 1, b: 2, c: 3, d: 4 }

// In functions
function greet(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}!`);
}

let names = ['John', 'Doe'];
greet(...names); // Outputs: Hello, John Doe!

// Rest
function sum(...numbers) {
  return numbers.reduce((prev, current) => prev + current, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Outputs: 15

function logData(userName, ...scores) {
  console.log('Name:', userName);
  console.log('Scores:', scores);
}

logData('Alex', 10, 20, 30, 40);
// Outputs:
// Name: Alex
// Scores: [10, 20, 30, 40]

let user = {
  name: 'John',
  age: 25,
  country: 'US',
  occupation: 'Developer',
};

let { name, ...rest } = user;

console.log(name); // Outputs: John
console.log(rest); // Outputs: { age: 25, country: 'US', occupation: 'Developer' }
