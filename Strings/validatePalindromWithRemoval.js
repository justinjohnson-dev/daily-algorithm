// cleaner solution takes the check for leftIdx + 1 and rightIdx -1 into a individual function
// time = O(n)
// space = O(1)

function validatePalindromeWithRemovalTwo(string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;

  while (leftIdx < rightIdx) {
    if (string.charAt(leftIdx) !== string.charAt(rightIdx)) {
      return (
        isPalindrome(string, leftIdx + 1, rightIdx) ||
        isPalindrome(string, leftIdx, rightIdx - 1)
      );
    }

    leftIdx++;
    rightIdx--;
  }

  return true;
}

function isPalindrome(string, left, right) {
  while (left < right) {
    if (string[left++] !== string[right--]) return false;
  }

  return true;
}

console.log(validatePalindromeWithRemovalTwo('abcba')); // true
console.log(validatePalindromeWithRemovalTwo('foobof')); // true -> remove 'o'
console.log(validatePalindromeWithRemovalTwo('abccab')); // false
console.log(validatePalindromeWithRemovalTwo('tollmot')); // true -> remove 'm'
console.log(validatePalindromeWithRemovalTwo('tobotf')); // true -> remove 'f'

// inital brute force way of solving ----------------------------------------
// time complexity of O(n) where n is size of input string
// space complexity of O(1)

function validatePalindromeWithRemoval(string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  let removedChar = null;

  while (leftIdx < rightIdx) {
    let currentMinChar = string.charAt(leftIdx);
    let currentMaxChar = string.charAt(rightIdx);

    if (currentMinChar !== currentMaxChar) {
      if (
        string.charAt(leftIdx + 1) === currentMaxChar &&
        removedChar === null
      ) {
        string.replace(currentMinChar, '');
        removedChar = currentMinChar;
        leftIdx++;
      } else if (
        string.charAt(rightIdx - 1) === currentMinChar &&
        removedChar === null
      ) {
        string.replace(currentMaxChar, '');
        removedChar = currentMaxChar;
        rightIdx--;
      } else {
        return false;
      }
    } else {
      rightIdx--;
      leftIdx++;
    }
  }

  return { palidrome: true, removedChar };
}

// console.log(validatePalindromeWithRemoval('abcba')); // true
// console.log(validatePalindromeWithRemoval('foobof')); // true -> remove 'o'
// console.log(validatePalindromeWithRemoval('abccab')); // false
// console.log(validatePalindromeWithRemoval('tollmot')); // true -> remove 'm'
// console.log(validatePalindromeWithRemoval('tobotf')); // true -> remove 'f'
