/*
    This question is asked by Amazon. 
    Given a string representing your stones and 
    another string representing a list of jewels, 
    return the number of stones that you have that are also jewels.
*/

// O(n + m) time compexity where n is the jewel size and m is the size of the stones
// O(n) space complexity each of our jewels are in a hash set

function jewelsAndStones(jewels, stones) {
  let jewelHashTable = {};
  for (const jewel of jewels) {
    jewelHashTable[jewel] = true;
  }

  let numberOfJewelsAndStones = 0;
  for (let stone of stones) {
    if (jewelHashTable[stone]) numberOfJewelsAndStones++;
  }

  return numberOfJewelsAndStones;
}

console.log(jewelsAndStones('abc', 'ac')); // 2
console.log(jewelsAndStones('Af', 'AaaddfFf')); // 3
console.log(jewelsAndStones('AYOPD', 'ayopd')); // 0
