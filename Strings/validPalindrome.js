// ignores all case and non alph chars

function validPalindrome(string) {
  // regex for space and non alpha chars case doesn't matter
  string = string.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

  let leftIdx = 0;
  let rightIdx = string.length - 1;

  while (leftIdx < rightIdx) {
    if (string[leftIdx++] !== string[rightIdx--]) return false;
  }

  return true;
}

console.log(validPalindrome('level')); // true
console.log(validPalindrome('algorithm')); // false
console.log(validPalindrome('A man, a plan, a canal: Panama.')); // true
