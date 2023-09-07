// Closures

function outerFunction() {
  let outerVariable = 'I am outside!';

  function innerFunction() {
    console.log(outerVariable); // innerFunction has access to outerVariable
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // logs: 'I am outside!'

// Example
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();

console.log(counter.getCount()); // logs: 0
console.log(counter.increment()); // logs: 1
console.log(counter.increment()); // logs: 2
console.log(counter.decrement()); // logs: 1

// Here, count acts like a private variable. The functions increment, decrement, and getCount form closures and have access to count.
