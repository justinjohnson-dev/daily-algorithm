/*
    Write a function that takes in an array of words and returns the smallest array of chars needed to form all the words.
    Note: the input words won't contain any space; however, they might include special chars
*/

// time complexity - this is tough, might be O(n^) as we loop through all the words, and for each word we loop through that words char,
// but it could be O(n * l) n as input string, l and length of string for each iteration
// O(c) we have two hashtables one for all the characters and one for all the characters of the current string you are looping through
function minimumCharactersForWords(words) {
  let hashTable = {};

  for (const str of words) {
    hashTable = updateHashTableWithCurrentStringValues(str, hashTable);
  }

  return makeFinalArrayFromCharValues(hashTable);
}

function updateHashTableWithCurrentStringValues(currentString, hashTable) {
  const currentStrHash = {};
  for (const char of currentString) {
    if (!currentStrHash[char]) {
      currentStrHash[char] = 1;
    } else {
      currentStrHash[char] += 1;
    }
  }

  Object.keys(currentStrHash).forEach((char) => {
    // check currentStrHash key is already in hashTable
    // if not push it in
    // if it is, update its value
    if (!hashTable[char]) {
      hashTable[char] = currentStrHash[char];
    } else {
      if (currentStrHash[char] > hashTable[char]) {
        hashTable[char] = currentStrHash[char];
      }
    }
  });

  return hashTable;
}

function makeFinalArrayFromCharValues(hashTable) {
  let finalArray = [];
  // map through all the keys and add the value of each key to the final array
  Object.keys(hashTable).forEach((char) => {
    // not necessary but this way we only hit while loop if char value > 1
    if (hashTable[char] > 1) {
      while (hashTable[char] !== 0) {
        finalArray.push(char);
        hashTable[char] -= 1;
      }
    } else {
      finalArray.push(char);
    }
  });

  return finalArray;
}

console.log(
  minimumCharactersForWords(['this', 'that', 'did', 'deed', 'them!', 'a']),
); // ["!", "a", "d", "d", "e", "e", "h", "i", "m", "s", "t", "t"]
console.log(minimumCharactersForWords(['a', 'abc', 'ab', 'boo'])); // ["a", "b", "c", "o", "o"]
console.log(minimumCharactersForWords(['a'])); // ["a"]
console.log(minimumCharactersForWords(['abc', 'ab', 'b', 'bac', 'c'])); // ["a", "b", "c"]
