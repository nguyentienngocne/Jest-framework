// const numberList = [1, 3, 5, 7];

// numberList.map((x) => x + 1);

// console.log(numberList);
// console.log(numberList.map((x) => x + 1));

// map(mappingFn)
// map(transformFn)
// map(callbackFn)

function map(arr, mappingFn) {
  // mappingFn should be a function
  // arr should be an array
  if (!Array.isArray(arr) || typeof mappingFn !== 'function') return undefined;
  const newArray = [];

  // mapping ....
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const newElement = mappingFn(element, i);
    newArray.push(newElement);
  }

  return newArray;
}

console.log(map([1, 2, 3], (x) => x + 1));
