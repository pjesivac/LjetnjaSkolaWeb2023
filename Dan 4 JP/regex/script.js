// ^ - asserts position at start of a string
// $ - asserts position at end of a string
// . - matches any character except line terminators
// \d - matches a digit (equal to [0-9])
// \w - matches any word character (equal to [a-zA-Z0-9_])
// \s - matches any whitespace character
// + - matches between one and unlimited times
// * - matches zero or unlimited times
// ? - matches between zero and one times
// (…) - capturing group
// […] - match any character in the set
// | - matches either/or

// Modifiers
// i - ignore case
// g - global search
// m - multi-line search

// Creating regex
// Literal: const pattern = /abc/;
// Constructor: const pattern = new RegExp('abc');

// Simple Pattern Matching
const str = 'Hello World!';
const pattern = /world/i;
const result = str.match(pattern);
console.log(result); // ['World', index: 6, input: 'Hello World!', groups: undefined]

// Digit Matching
const str = 'My phone number is 123-456-7890';
const pattern = /\d{3}-\d{3}-\d{4}/;
const result = str.match(pattern);
console.log(result); // ['123-456-7890', index: 19, input: 'My phone number is 123-456-7890', groups: undefined]

// Word Boundary
const str = 'Hello World!';
const pattern = /\bWorld\b/;
const result = str.match(pattern);
console.log(result); // ['World', index: 6, input: 'Hello World!', groups: undefined]

//Capture Groups
const str = 'Jane Doe <jane.doe@example.com>';
const pattern = /(\w+)\s(\w+)\s<(.+)>/;
const result = str.match(pattern);
console.log(result); // ['Jane Doe <jane.doe@example.com>', 'Jane', 'Doe', 'jane.doe@example.com', index: 0, input: 'Jane Doe <jane.doe@example.com>', groups: undefined]

// Match All Instances
const str = 'cat bat mat fat rat';
const pattern = /[bcfr]at/g;
const result = str.match(pattern);
console.log(result); // ['cat', 'bat', 'fat', 'rat']

// Replacing Text
const str = 'The quick brown fox';
const pattern = /fox/;
const result = str.replace(pattern, 'wolf');
console.log(result); // 'The quick brown wolf'

// Positive Lookahead
const str = 'abc123 xyz789';
const pattern = /\w+(?=789)/;
const result = str.match(pattern);
console.log(result); // ['xyz', index: 7, input: 'abc123 xyz789', groups: undefined]

// Negative Lookahead
const str = 'abc123 xyz789';
const pattern = /\w+(?!789)/;
const result = str.match(pattern);
console.log(result); // ['abc123', index: 0, input: 'abc123 xyz789', groups: undefined]

// Testing Regex
const str = 'Hello World!';
const pattern = /world/i;
const result = pattern.test(str);
console.log(result); // true
