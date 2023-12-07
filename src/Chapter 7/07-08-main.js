// String exercise
// Check if a string contains an email address with `@gmail.com` or not

// v1
function hasEmail(str) {
  return str.includes('@gmail.com');
}

console.log(hasEmail('ntn322003@gmail.com'));

// v2
function hasEmail(str) {
  return str.indexOf('@gmail.com') >= 0;
}

console.log(hasEmail('ntn322003@gmail.com'));
