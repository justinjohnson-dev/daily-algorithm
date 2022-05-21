// O(n) where n is the total number of characters in s and t
// O(n) we have a hash set with the size of characters in s and t

function validAnagram(s, t) {
  // if lengths are not equal, we know right away s and t are not valid anagrams
  if (s.length !== t.length) return false;

  let hashTable = {};

  // push input string into our hashtable
  for (const char of s) {
    if (!hashTable[char]) {
      hashTable[char] = 1;
    } else {
      hashTable[char] += 1;
    }
  }

  // loop through string in put t
  // if letter exists in hashtable, decrement value and continue
  for (const char of t) {
    if (!hashTable[char] || hashTable[char] === 0) {
      return false;
    } else {
      hashTable[char] -= 1;
    }
  }

  return true;
}

console.log(validAnagram('cat', 'tac')); // true
console.log(validAnagram('listen', 'silent')); // true
console.log(validAnagram('program', 'function')); // false
console.log(validAnagram('engineer', 'reenigne')); // true
console.log(validAnagram('ls', 'lst')); // false
console.log(validAnagram('label', 'balee')); // false
