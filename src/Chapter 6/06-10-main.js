//1. Convert hours to seconds
function convertSeconds(hours) {
  if (hours < 0) return 'Error';
  if (hours === 0) return 0;

  const SECOND_PER_HOUR = 3600;
  return hours * SECOND_PER_HOUR;
}

console.log(convertSeconds(1));

//2. Given 3 numbers, find max

function findMax(a, b, c) {
  let max = a;

  //   check with b
  if (b > max) max = b;
  //   Check with c
  if (c > max) max = c;

  return max;
}

console.log(findMax(10, 5, 7));

//3. Given 3 numbers, find max even number
function findMaxEven(a, b, c) {
  let max = Number.NEGATIVE_INFINITY;

  if (a > max && a % 2 === 0) max = a;
  if (b > max && b % 2 === 0) max = b;
  if (c > max && c % 2 === 0) max = c;

  return max;
}

console.log(findMaxEven(7, 5, 3));
