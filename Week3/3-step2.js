'use strict';
// 2.3 Please solve

// 2.3.1 ----- WITH A  FOR LOOP ------
function repeatStringNumTimesWithFor(str, num) {
  let x = '';
  for (let i = 1; i <= num; i++) result += str;
} 
  
console.log('abc', 3);

// 2.3.2 ------ USE A 'WHILE' LOOP -------
function repeatStringNumTimesWithFor(str, num) {
  let x = '';
  while (num > 0) {
    x += str;
    num--;
  }
  str = x;
  return str;
}

console.log('abc', 3);

// 2.3.3 ---------- WITH A 'DO...WHILE' LOOP --------
function repeatStringNumTimesWithDoWhile(str, num) {
  let x = '';
  do {
    if (num < 0) {
      return x;
    }
    x += str;
    num--;
  } while (num > 0);

  str = x;
  return str;
}

console.log('abc', 3);
