// Runtime: O(N) where N is the total number of elements in nums1 and nums2.
// Space complexity: O(M) where M is the total number of elements in nums1.

function intersectionOfNumbers(arr1, arr2) {
  const hashTable = {};
  let intersection = [];

  for (const value of arr1) {
    hashTable[value] ? (hashTable[value] += 1) : (hashTable[value] = 1);
  }

  for (const value of arr2) {
    if (hashTable[value]) {
      intersection.push(value);
      delete hashTable[value];
    }
  }

  console.log(hashTable);
  return intersection;
}

console.log(intersectionOfNumbers([2, 4, 4, 2], [2, 4])); // return [2, 4]
console.log(intersectionOfNumbers([1, 2, 3, 3], [3, 3])); // return [3]
console.log(intersectionOfNumbers([2, 4, 6, 8], [1, 3, 5, 7])); // return []
console.log(intersectionOfNumbers([1, 1, 1, 11], [11, 1, 1, 1, 1, 6, 3])); // return [1, 11]
