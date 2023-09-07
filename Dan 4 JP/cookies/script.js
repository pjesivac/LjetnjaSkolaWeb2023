// Create cookie
document.cookie =
  'username=John; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/';

// Reading cookie
console.log(document.cookie);

// Update cookie
document.cookie =
  'username=Jane; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/';

// Deleting a cookie
document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';

// Fetching a Specific Cookie

function getCookie(name) {
  let cookieArr = document.cookie.split('; ');
  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split('=');
    if (name == cookiePair[0]) {
      return cookiePair[1];
    }
  }
  return null;
}

console.log(getCookie('username')); // will print the value of the "username" cookie

// Setting a Secure Cookie
document.cookie =
  'username=John; Secure; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/';

// Setting a SameSite Attribute
document.cookie =
  'username=John; SameSite=Lax; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/';
