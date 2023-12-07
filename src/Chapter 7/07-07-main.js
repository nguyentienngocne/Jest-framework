// Write a function to transform a string:
// The first letter in UPPERCASE
// The rest in lowercase
// Eg: capitalize('easy FRontend') --> 'Easy frontend'
// p1 toUpperCase()
// p2 toLowerCase()
// p1 p2

function capitalize(str) {
  if (str === '') return '';

  const firstLater = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();

  //   firstLater + rest
  // firstLater.concat(rest)
  //   `${firstLater}${rest}`

  return `${firstLater}${rest}`;
}
console.log(capitalize('tienngochandSOME'));
