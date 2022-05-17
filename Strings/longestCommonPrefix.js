// O(n * c) time where n is input array and c is characters for each input
// O(n) space where n is the size of the input array

function longestCommonPrefix(array) {
  let currentChar = [];
  let currentIdx = 0;
  let answer = [];
  let breakCase = true;

  array.sort();
  const longestArrayString = array[array.length - 1].length;

  while (breakCase) {
    for (const value of array) {
      const char = value[currentIdx];

      if (currentChar.length > 0) {
        if (char === currentChar[0]) {
          currentChar.push(char);
        } else {
          breakCase = false;
        }
      } else {
        currentChar.push(char);
      }
    }

    if (currentChar.length === array.length) {
      answer.push(currentChar[0]);
      currentChar = [];
    } else {
      breakCase = false;
    }

    if (currentIdx > longestArrayString) {
      breakCase = false;
    } else {
      currentIdx++;
    }
  }

  return answer.length === 0 ? '' : answer.join('');
}

console.log('answer: ->', longestCommonPrefix(['colorado', 'color', 'cold'])); // answer should be 'col'
console.log('answer: ->', longestCommonPrefix(['a', 'b', 'c'])); // answer should be ''
console.log('answer: ->', longestCommonPrefix(['spot', 'spotty', 'spotted'])); // answer should be 'spot'
