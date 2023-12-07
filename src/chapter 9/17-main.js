// Write a function to find the longest word
// For ... i
// forEach
// reduce
// ['a', 'ab', 'abc'] ---> 'abc'

// For ... i
function findLongestWordI(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  let longestWord = wordList[0];

  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i].length > longestWord.length) {
      longestWord = wordList[i];
    }
  }
  return longestWord;
}

console.log(findLongestWordI(['abc', 'baa', 'Tien Ngoc']));

// forEach

function findLongestWordEach(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  let longestWord = wordList[0];

  wordList.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

console.log(findLongestWordEach(['abc', 'baa', 'Tien Ngoc']));

// reduce

function findLongestWordReduce(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  return wordList.reduce((longestWord, currentWord) =>
    currentWord.length > longestWord.length ? currentWord : longestWord,
  );
}

console.log(findLongestWordReduce(['abc', 'baa', 'Tien Ngoc']));
