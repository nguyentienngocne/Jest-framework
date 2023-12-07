//1. Get the ones of a number having 3 digits
function extractTheOnes(n) {
  if (n < 100 || n > 999) return -1;

  // 123 % 10 = 3
  return n % 10;
}
console.log(extractTheOnes(2343));

//2. Get the tens of a number having 3 digits
function extractTheTens(n) {
  if (n < 100 || n > 999) return -1;

  // 123 % 100 = 23
  // 23 / 10 = 2
  return Math.trunc((n % 100) / 10);
}

console.log(extractTheTens(253));
//3. Get the hundreds of a number having 3 digits
function extractTheHundreds(n) {
  if (n < 100 || n > 999) return -1;

  //   523 / 100 = 5,23 ---> 5
  return Math.trunc(n / 100);
}

console.log(extractTheTens(253));
//4. Sum all digits of a number having 3 digits
function sumDigits(n) {
  if (n < 100 || n > 999) return -1;

  //   523 / 100 = 5,23 ---> 5

  const ones = n % 10;
  const tens = Math.trunc((n % 100) / 10);
  const hundreds = Math.trunc(n / 100);

  return hundreds + tens + ones;
}
console.log(sumDigits(578));
