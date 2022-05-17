function addBinary(str1, str2) {
  // result array
  let result = [];
  // find the length of str1,str2
  let aString = str1.length - 1;
  let bString = str2.length - 1;
  // value to keep track of the carry for binary addition
  let carry = 0;

  // while either aString or bString is >= 0
  while (aString >= 0 || bString >= 0) {
    // create a sum variable for current values
    // set it to carry value in case we had carry over
    let sum = carry;

    // add aString to sum if greater than 0
    if (aString >= 0) {
      // add current value to sum - 0
      // then decrement pointer
      sum += str1[aString--] - 0; // MINUS 0 to convert character to corresponding int
      // ASCII Artihmetric '1' represented by 31
      // ''                '0' represented by 30
      // '1' - '0' -> 31-30 -> 1 (integer)
    }

    // add aString to sum if greater than 0
    if (bString >= 0) {
      // add current value to sum - 0
      // then decrement pointer
      sum += str2[bString--] - 0;
    }

    // push value into result array
    // modulus 2 because
    // 2%2 = 0
    // 1%2 = 1
    // 0%2 = 0
    // math.floor to round down
    result.push(Math.floor(sum % 2));

    // update carry value now for next addition
    // carry should always be 1 / 0
    // so:
    // 2/2 = 1
    // 1/2 = Math.floor.. = 0
    // 0/2 = Math.floor.. = 0
    carry = Math.floor(sum / 2);
  }

  // latestly check if carry still has any values to add to results
  if (carry !== 0) result.push(1);
  return result.reverse().join('');
}

console.log(addBinary('111', '101')); // answer should be '1100
