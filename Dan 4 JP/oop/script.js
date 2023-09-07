// Object and methods
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2010,
  getCarInfo: function () {
    return `${this.brand} ${this.model} (${this.year})`;
  },
};

console.log(car.getCarInfo()); // "Toyota Corolla (2010)"

// Prototype and Inheritance
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

Car.prototype.getCarInfo = function () {
  return `${this.brand} ${this.model} (${this.year})`;
};

function ElectricCar(brand, model, year, batteryCapacity, range) {
  Car.call(this, brand, model, year);
  this.batteryCapacity = batteryCapacity;
  this.range = range;
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.getBatteryInfo = function () {
  return `Battery capacity: ${this.batteryCapacity} kWh, Range: ${this.range} miles`;
};

const eCar = new ElectricCar('Tesla', 'Model S', 2020, 100, 396);
console.log(eCar.getCarInfo()); // "Tesla Model S (2020)"
console.log(eCar.getBatteryInfo()); // "Battery capacity: 100 kWh, Range: 396 miles"

// Encapsulation

function Account(username, password) {
  this.username = username;
  let _password = password;

  this.login = function (attemptedPassword) {
    if (attemptedPassword === _password) {
      console.log('Login successful');
    } else {
      console.log('Incorrect password');
    }
  };
}

const user = new Account('john_doe', '123456');
user.login('123456'); // "Login successful"

// Polymorphism

function Shape() {}

Shape.prototype.area = function () {
  return 0;
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {
  return Math.PI * this.radius ** 2;
};

const myCircle = new Circle(5);
console.log(myCircle.area()); // 78.53981633974483

// Getters and Setters
const person = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  },
};

console.log(person.fullName); // "John Doe"
person.fullName = 'Jane Smith';
console.log(person.fullName); // "Jane Smith"

// Creating classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const john = new Person('John', 30);

// Class Methods
class Calculator {
  static add(x, y) {
    return x + y;
  }

  static subtract(x, y) {
    return x - y;
  }
}

console.log(Calculator.add(5, 3)); // 8

// Inheritance

class Employee extends Person {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }

  work() {
    console.log(`${this.name} is working as a ${this.role}`);
  }
}

const alice = new Employee('Alice', 25, 'Engineer');
alice.greet(); // Hello, my name is Alice
alice.work(); // Alice is working as a Engineer

// Encapsulation

class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log('Insufficient balance');
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500

// Polymorphism

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.area()); // 78.53981633974483

// Getters and Setters
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  }
}

const myPerson = new Person('John', 'Doe');
console.log(myPerson.fullName); // John Doe
myPerson.fullName = 'Jane Smith';
console.log(myPerson.fullName); // Jane Smith
