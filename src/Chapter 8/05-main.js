// Object exercise
// 1. Create an object student with name is Easy Frontend and age is 18.
// 2. Check if an object is empty (means has no key)
// 3. Get average mark of an object
// calc AvgMark({ math: 10, english: 8 }) ---> 9

// 1.
const student = {
  name: 'Easy Frontend',
  age: 18,
};

// 2.

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmpty({}));
console.log(isEmpty({ id: 1 }));

// 3.
function calcAvgMark(mark) {
  if (!mark) return -1;

  // avg = sum / length
  const length = Object.keys(mark).length;

  let sum = 0;
  for (const key in mark) {
    const value = mark[key];
    sum += value;
  }
  return (sum / length).toFixed(1);
}

console.log(calcAvgMark({ math: 10, english: 7 }));
