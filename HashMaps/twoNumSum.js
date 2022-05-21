function twoNumSum(array, target) {
  const hashTable = {};
  for (let i = 0; i < array.length; i++) {
    const currentDifference = target - array[i];
    if (hashTable[currentDifference])
      return { status: true, numbers: `${array[i]} and ${currentDifference}` };
    hashTable[array[i]] = true;
  }

  return false;
}

console.log(twoNumSum([1, 3, 8, 2], 10)); // true 2+8
console.log(twoNumSum([3, 9, 13, 7], 8)); // false
console.log(twoNumSum([4, 2, 6, 5, 2], 4)); // true 2+2
