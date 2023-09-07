// Example
var myModule = (function () {
  // private variable
  var privateVar = 'I am private';

  // private method
  function privateMethod() {
    return 'This is a private method';
  }

  return {
    // public method
    publicMethod: function () {
      return 'This is a public method';
    },

    // public method accessing private members
    accessPrivateVar: function () {
      return privateVar;
    },
  };
})();

console.log(myModule.publicMethod()); // Outputs: "This is a public method"
console.log(myModule.accessPrivateVar()); // Outputs: "I am private"
console.log(myModule.privateVar); // Outputs: undefined
