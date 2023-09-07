// Set item
localStorage.setItem('username', 'JohnDoe');

// Get item
let username = localStorage.getItem('username');
console.log(username); // JohnDoe

// Remove item
localStorage.removeItem('username');

// Clear all
localStorage.clear();

// List all
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  let value = localStorage.getItem(key);
  console.log(`${key}: ${value}`);
}

// Example - set user browser theme

// Setting the preference
let isDarkMode = true; // or false
localStorage.setItem('isDarkMode', isDarkMode);

// Getting the preference and applying the theme
let preferredTheme = localStorage.getItem('isDarkMode');
if (preferredTheme === 'true') {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.remove('dark-mode');
}
