function detectCapitalUse(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) {
      count++;
    }
  }

  return (
    count == word.length ||
    count == 0 ||
    (count == 1 && word[0].toUpperCase() === word[0])
  );
}

console.log(detectCapitalUse('USA')); // true
console.log(detectCapitalUse('Calvin')); // true
console.log(detectCapitalUse('compUter')); // false
console.log(detectCapitalUse('coding')); // true
