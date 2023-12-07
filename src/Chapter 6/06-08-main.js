// 1. Write a function to calculate the area of a rectangle

function calcAreaOfRec(a, b) {
  if (a <= 0 || b <= 0) return 'Error';

  return a * b;
}

// 2. Write a function to calculate perimeter of a rectangle
function calcPerimeterOfRec(a, b) {
  if (a <= 0 || b <= 0) return 'Error';

  return (a + b) * 2;
}
// 3. Write a function to calculate the area of a circle

function calcAreaOfCircle(a) {
  if (a <= 0) return 'Error';

  return Math.PI * a ** 2;
}
// S = PI * R * R
