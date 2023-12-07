const students = {
  name: 'Tien Ngoc',
  age: 20,
  gender: 'male',
};

for (let keys in students) {
  console.log(students[keys]);
}

const numberList = [2, 3, 1, 8, 9]; // [2, 3, 1, 4, 7] // [2, 3, 6, 1, 4, 7]

numberList.pop();
numberList.pop();
numberList.push(4);
numberList.push(7);

numberList.splice(2, 0, 6);

console.log(numberList);
