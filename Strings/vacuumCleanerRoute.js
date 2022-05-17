function vaccumCleanerRoute(moves) {
  let UD = 0;
  let LR = 0;

  for (let i = 0; i < moves.length; i++) {
    const currentMove = moves.charAt(i);
    if (currentMove === 'U') UD++;
    if (currentMove === 'D') UD--;
    if (currentMove === 'R') LR++;
    if (currentMove === 'L') LR--;
  }

  return UD === 0 && LR === 0;
}

console.log(vaccumCleanerRoute('LR')); // true
console.log(vaccumCleanerRoute('URURD')); // false
console.log(vaccumCleanerRoute('RUULLDRD')); // true
