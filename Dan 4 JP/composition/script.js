/* Use inheritance when there is a clear hierarchical relationship between your objects, and you want to leverage the polymorphism and code reuse that inheritance can offer.
Use composition when you want to assemble complex functionality from simpler, more focused components, or when you want to avoid the rigidity and hierarchy of inheritance. */

// Inheritance
function Vehicle(make) {
  this.make = make;
}

Vehicle.prototype.getMake = function () {
  return this.make;
};

function Car(make, model) {
  Vehicle.call(this, make);
  this.model = model;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.getModel = function () {
  return this.model;
};

const car = new Car('Toyota', 'Corolla');
console.log(car.getMake()); // "Toyota"
console.log(car.getModel()); // "Corolla"

// Composition
function canEat() {
  return {
    eat: function (food) {
      console.log(`Eating ${food}`);
    },
  };
}

function canWalk() {
  return {
    walk: function () {
      console.log('Walking');
    },
  };
}

function canSwim() {
  return {
    swim: function () {
      console.log('Swimming');
    },
  };
}

function Person(name) {
  this.name = name;
  Object.assign(this, canEat(), canWalk());
}

function Fish(name) {
  this.name = name;
  Object.assign(this, canEat(), canSwim());
}

const person = new Person('John');
person.eat('apple'); // "Eating apple"
person.walk(); // "Walking"

const fish = new Fish('Goldfish');
fish.eat('worms'); // "Eating worms"
fish.swim(); // "Swimming"
