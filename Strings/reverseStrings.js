function reverseString(string) {
  let reversedString = [];

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString.push(string[i]);
  }

  return reversedString.join('');
}

console.log(reverseString('Cat')); // 'taC'
console.log(reverseString('The Daily Byte')); // 'etyB yliaD ehT'
console.log(reverseString('civic')); // 'civic'
