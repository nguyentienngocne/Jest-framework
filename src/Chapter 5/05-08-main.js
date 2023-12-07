v1;
function isPositiveEvenNumber(n) {
  let isValid; //undefined

  // checking ....
  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}

// v2
function isPositiveEvenNumber(n) {
  let isValid = false;

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  }

  return isValid;
}

// v3
function isPositiveEvenNumber(n) {
  if (n > 0 && n % 2 === 0) {
    return true;
  }

  return false;
}

// v4
function isPositiveEvenNumber(n) {
  return n > 0 && n % 2 === 0;
}
