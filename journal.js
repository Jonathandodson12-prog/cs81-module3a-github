// Greet a user by name
function greet(name) {
  return "Hello, " + name + "!";
}
// Check if a number is even
function isEven(num) {
  return num % 2 === 0;
}
// Check if a word is a palindrome
function isPalindrome(word) {
  let cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

