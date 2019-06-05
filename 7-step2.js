'use strict';
// 2.7 Here are two functions that look like they do the something similar but they print different results. Please explain what's going on here.
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);
// the f1 call that variable x which 9 & f2 retrieve f1 and add 1 to it to make it 10.
