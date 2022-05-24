/*
    This question is asked by Amazon. Given two strings representing sentences, 
    return the words that are not common to both strings (i.e. the words that only 
    appear in one of the sentences). You may assume that each sentence is a 
    sequence of words (without punctuation) correctly separated using space characters.
*/

// time complexity = O(n) n is the size of the input strings joined together in an array
// space complexity = O(n)

function uncommonWords(str1, str2) {
  // set strings to arrays
  const arr1 = str1.split(' ');
  const arr2 = str2.split(' ');
  const commonArray = arr1.concat(arr2);

  // generate hashTable of commonValues and a early exit case
  const [hashTable, exitEarly] = generateCommonHashTable(commonArray);

  // if not an early exit call function to return uncommon words
  if (!exitEarly) {
    return findUncommonWordsInHashTable(hashTable);
  } else {
    return Object.keys(hashTable);
  }
}

// generates our hashtable and potential early break
function generateCommonHashTable(commonArray) {
  const hashTable = {};
  let exitEarly = true;

  for (const value of commonArray) {
    if (!hashTable[value]) {
      hashTable[value] = true;
    } else {
      // already exists mark value as Infinity to be later removed
      hashTable[value] = Infinity;
      exitEarly = false;
    }
  }

  return [hashTable, exitEarly];
}

// deletes and returns only uncommon values in hashtable
function findUncommonWordsInHashTable(hashTable) {
  // remove all values in the hashtable that have Infinity value
  Object.keys(hashTable).forEach((key) => {
    if (hashTable[key] === Infinity) {
      delete hashTable[key];
    }
  });

  return Object.keys(hashTable);
}

console.log(uncommonWords('the quick', 'brown fox')); // return ["the", "quick", "brown", "fox"]
console.log(
  uncommonWords(
    'the tortoise beat the haire',
    'the tortoise lost to the haire',
  ),
); // return ["beat", "to", "lost"]
console.log(uncommonWords('copper coffee pot', 'hot coffee pot')); // return ["copper", "hot"]


























// ANOTHER APPROACH -----------------------------------------------------------------------------
// instead of infinity just increment value
// if value > 1 then it is not uncommon
function uncommonWords2(str1, str2) {
  // set strings to arrays
  const arr1 = str1.split(' ');
  const arr2 = str2.split(' ');

  const hashTable = {};
  const commonArray = arr1.concat(arr2);
  let exitEarly = true;

  for (const value of commonArray) {
    if (!hashTable[value]) {
      hashTable[value] = true;
    } else {
      // already exists mark value as Infinity to be later removed
      hashTable[value] += 1;
      exitEarly = false;
    }
  }

  if (exitEarly) return Object.keys(hashTable);

  // remove all values in the hashtable that have Infinity value
  Object.keys(hashTable).forEach((key) => {
    if (hashTable[key] > 1) {
      delete hashTable[key];
    }
  });

  return Object.keys(hashTable);
}

console.log(uncommonWords2('the quick', 'brown fox')); // return ["the", "quick", "brown", "fox"]
console.log(
  uncommonWords2(
    'the tortoise beat the haire',
    'the tortoise lost to the haire',
  ),
); // return ["beat", "to", "lost"]
console.log(uncommonWords2('copper coffee pot', 'hot coffee pot')); // return ["copper", "hot"]
