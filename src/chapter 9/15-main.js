// Array exercise
// 1. print numbers: 1 --> 10
// 2. print even numbers [2, 4, 6, 8, 10]
// 3. print even numbers but less than n

// 1. print numbers: 1 --> 10
function printNumbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

printNumbers();

// 2. print even numbers [2, 4, 6, 8, 10]
// V1
function printEvenNumbers() {
  for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
printEvenNumbers();

// V2
function printEvenNumbers() {
  for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
}

printEvenNumbers();

// 3. print even numbers but less than n

function printEvenNumbersN(n) {
  if (n < 2) return;

  for (let i = 2; i < n; i += 2) {
    console.log(i);
  }
}

printEvenNumbersN(20);
