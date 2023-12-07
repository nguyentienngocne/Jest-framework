//1. Write a function to check if a number is odd/even
function isEven(n) {
  return n % 2 === 0;
}

function isOdd(n) {
  return n % 2 !== 0;
}

//2. Write a function to check if a number is divisible by 5
function isDivisibleBy5(n) {
  return n % 5 === 0;
}

//3. Write a function to check if a number is perfect square

function isPerfectSquare(n) {
  if (n <= 0) return 'Error';

  const sqrtN = Math.sqrt(n);
  const sqrtNInt = Math.trunc(sqrtN);
  return sqrtNInt * sqrtNInt === n;
}

console.log(isPerfectSquare(62));
