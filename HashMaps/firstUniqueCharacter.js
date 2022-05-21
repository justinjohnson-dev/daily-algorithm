// O(n * n) => O(n) time complexity where n is the size of the characters from input string
// O(n) as we have a hashset with size of input string (could have upper case letters)

function firstNonRepeatingCharacter(string) {
  // loop through the string
  // nested loop to recheck the string with outer loop index
  let indexHash = {};

  // "abcdcaf"
  // loop through string and create hash table
  // to track frequencies
  for (let index = 0; index < string.length; index++) {
    let currentLetter = string[index];
    indexHash[currentLetter]
      ? (indexHash[currentLetter] += 1)
      : (indexHash[currentLetter] = 1);
  }

  // using constant lookup loop through string again
  // figure out which index has the first non-repeating value
  // using constant-lookups with hash table
  for (let index = 0; index < string.length; index++) {
    let currentLetter = string[index];
    if (indexHash[currentLetter] === 1) {
      return index;
    }
  }

  return -1;
}

console.log(firstNonRepeatingCharacter('abcabd')); // return 2
console.log(firstNonRepeatingCharacter('thedailybyte')); // return 1
console.log(firstNonRepeatingCharacter('developer')); // return 0
console.log(firstNonRepeatingCharacter('justin')); // return 0
console.log(firstNonRepeatingCharacter('algoaexlpegrt')); // return 3
