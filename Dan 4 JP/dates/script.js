// Create a date

let currentDate = new Date();
console.log(currentDate);

//Specific date
let specificDate = new Date('2023-09-07');
console.log(specificDate);

// Date with time
let dateTime = new Date('2023-09-07T15:30:00');
console.log(dateTime);

// Date from Unix Timestamp
let dateFromTimestamp = new Date(1683631800000);
console.log(dateFromTimestamp);

// Getting Date Components

let date = new Date('2023-09-07T15:30:00');

console.log(date.getFullYear()); // 2023
console.log(date.getMonth()); // 8 (0-indexed: 0 = January, 1 = February, ...)
console.log(date.getDate()); // 7
console.log(date.getHours()); // 15
console.log(date.getMinutes()); // 30
console.log(date.getSeconds()); // 0
console.log(date.getDay()); // 4 (0 = Sunday, 1 = Monday, ...)

// Setting Date Components

let date = new Date();

date.setFullYear(2024);
date.setMonth(11); // December
date.setDate(25);
date.setHours(10);
date.setMinutes(45);
date.setSeconds(30);

console.log(date); // Outputs something like: Tue Dec 25 2024 10:45:30 GMT+0200 (Eastern European Standard Time)

// Date arithmetics

/// Adding days
let date = new Date();
date.setDate(date.getDate() + 7); // Add 7 days
console.log(date);

// Removing months
date.setMonth(date.getMonth() - 3); // Subtract 3 months
console.log(date);

// Comparing dates
let date1 = new Date('2023-09-07');
let date2 = new Date('2024-01-01');

console.log(date1 < date2); // true
console.log(date1 > date2); // false

// Formatting dates
let date = new Date('2023-09-07T15:30:00');

let formatted = `${date.getFullYear()}-${
  date.getMonth() + 1
}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
console.log(formatted); // Outputs: 2023-9-7 15:30

// Timestamps

let timestamp = Date.now(); // current timestamp in milliseconds since January 1, 1970
console.log(timestamp);

let dateFromTimestamp = new Date(timestamp);
console.log(dateFromTimestamp);

// Date parsing
let parsedDate = Date.parse('2023-09-07T15:30:00');
console.log(new Date(parsedDate));

// Using date libraries
// With moment.js
let date = moment('2023-09-07');
console.log(date.add(7, 'days').format('YYYY-MM-DD')); // Outputs: 2023-09-14
