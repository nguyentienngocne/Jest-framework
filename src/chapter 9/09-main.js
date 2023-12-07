function findIndexFirstEven(numberList) {
  if (!Array.isArray(numberList)) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) {
      return i;
    }
  }
  return undefined;
}

console.log(findIndexFirstEven([1, 3, 5, 8, 9])); // 3
console.log(findIndexFirstEven([1, 3, 5, 7, 9])); // undefined
