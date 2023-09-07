// Window Object
console.log(window.innerHeight); // e.g., 768
console.log(window.innerWidth); // e.g., 1366

// Window methods
let newWindow = window.open('https://www.google.com', '_blank'); // Opens a new window
newWindow.resizeTo(800, 600); // Resizes the new window to width 800px and height 600px
newWindow.close(); // Closes the new window

// Location Object

console.log(location.href); // Gets the entire URL
console.log(location.protocol); // Gets the protocol (http or https)
console.log(location.host); // Gets the host and port
console.log(location.pathname); // Gets the path after the domain name

// Navigate to a new page
// location.href = 'https://www.example.com';

// History Object
history.back(); // Same as clicking the browser's back button
history.forward(); // Same as clicking the browser's forward button
history.go(-2); // Goes back two pages

// Navigator Object
console.log(navigator.userAgent); // Gets the user agent string
console.log(navigator.language); // Gets the browser's language
console.log(navigator.online); // Gets the online status of the browser

// Screen Object
console.log(screen.width); // Gets the screen width
console.log(screen.height); // Gets the screen height
console.log(screen.colorDepth); // Gets the color depth of the screen

// Timers

// Executes the function after 2 seconds
setTimeout(() => {
  console.log('This will show after 2 seconds');
}, 2000);

// Executes the function every 3 seconds
let intervalId = setInterval(() => {
  console.log('This will show every 3 seconds');
}, 3000);

// Clears the interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
}, 10000);

// Alert, prompt and confirm
alert('This is an alert message'); // Shows an alert dialog
let userResponse = confirm('Do you agree?'); // Shows a confirm dialog
console.log(userResponse); // true if OK is clicked, false otherwise
let userName = prompt('What is your name?'); // Shows a prompt dialog
console.log(userName); // The entered value or null if canceled
