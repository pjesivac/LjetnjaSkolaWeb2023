// Arrow Functions
const hello = () => 'Hello World';
console.log(hello()); // "Hello World"

// Template Literals
const name = 'John';
console.log(`Hello, my name is ${name}.`); // "Hello, my name is John."

// Destructuring, spread, rest is on other file

// Default parameters
function greet(name = 'World') {
  console.log(`Hello ${name}!`);
}
greet(); // "Hello World!"

// Let and const are passed

// Modules

// lib.js
export const hello = () => 'Hello World';

// main.js
import { hello } from './lib.js';
console.log(hello()); // "Hello World"
