// Write a function to classify student
// Receive mark as a number, output as below:
// mark > 8 --> 'Excellence'
// 7 <= mark <= 8 --> 'Good'
// 4 <= mark <= 6 --> 'Not Good'
// mark < 4 --> 'Bad'

// v1
function classifyStudent(mark) {
  // Validate arguments
  // mark should be in range of [0, 10]
  if (mark < 0 || mark > 10) return 'Invalid Number';
  let result;

  // Checking ...
  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not Good';
  else result = 'Bad';

  return result;
}
console.log(classifyStudent(11));

//v2
function classifyStudent(mark) {
  // Validate arguments
  // mark should be in range of [0, 10]
  if (mark < 0 || mark > 10) return 'Invalid Number';

  let result = 'Bad';

  // Checking ...
  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not Good';

  return result;
}

//v3
function classifyStudent(mark) {
  if (mark < 0 || mark > 10) return 'Invalid Number';

  if (mark > 8) return 'Excellence';
  if (mark >= 7) return 'Good';
  if (mark >= 4) return 'Not Good';

  return 'Bad';
}
