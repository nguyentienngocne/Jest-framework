// Write function to find max
// For ... i
// ForEach
// Reduce

// For ... i
function findMaxI(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  // lính canh
  let max = numberList[0];
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > max) {
      max = numberList[i];
    }
  }
  return max;
}

console.log(findMaxI([1, 3, 5, 4]));

// ForEach
function findMaxEach(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  // lính canh
  let max = numberList[0];
  numberList.forEach((number) => {
    if (number > max) {
      max = number;
    }
  });
  return max;
}

console.log(findMaxEach([1, 3, 5, 4, 11]));

// Reduce

function findMaxReduce(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  //   return numberList.reduce((max, number) => {
  //     if (number > max) return number;
  //     return max;
  //   });

  //   return numberList.reduce((max, number) => {
  //     return number > max ? number : max;
  //   });

  return numberList.reduce((max, number) => (number > max ? number : max));
}

console.log(findMaxReduce([1, 3, 5, 4, 11]));
