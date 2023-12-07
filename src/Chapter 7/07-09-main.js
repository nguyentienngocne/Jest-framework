// String exercise
// Write a javascript function to parameterize a string.
// Eg: parameterize('Code JS Is Fun') ---> 'code-js-is-fun'
// toLowerCase()
// p1: replaceAll()
// p2: split and join
// ['code', 'js', 'is', 'fun']

// p1
function parameterize(str) {
  //   const lowerCaseString = str.toLowerCase();

  return str.toLowerCase().replaceAll(' ', '-');
}

console.log(parameterize('Code JS Is Fun'));

// p2

function parameterize(str) {
  //   const lowerCaseString = str.toLowerCase();

  return str.toLowerCase().split(' ').join('-');
}

console.log(parameterize('Code JS Is Fun'));
