const result = [2, 4, 6].reduce((sum, number) => sum + number, 0);
console.log(result);

// reduce(arr, callbackFn, initialValue)
// rules:
// - arr should be an array and callbackFn should be a function
// - arr.length === 0 and initialValue === undefined ---> throw Error
// - arr.length === 0 and initialValue !== undefined ---> return initialValue
function reduce(arr, callbackFn, initialValue) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') {
    throw new Error('Invalid parameters');
  }
  //   arr is an array
  if (arr.length === 0) {
    if (initialValue === undefined) {
      throw new Error('Should have initialValue when arr is empty');
    }
    return initialValue;
  }

  const hasInitialValue = initialValue !== undefined;
  const startIndex = hasInitialValue ? 0 : 1;
  let accumulator = hasInitialValue ? initialValue : arr[0];

  //   loop
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callbackFn(accumulator, arr[i], i);
  }

  return accumulator;
}

function calcSum(prevSum, number, index) {
  return prevSum * number;
}

console.log(reduce([2, 4, 6], calcSum, 5));
