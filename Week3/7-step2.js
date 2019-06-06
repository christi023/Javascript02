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
/* f1 and f2 not call each other, the only difference is that f1 handles a simple
variable, but because its a const the value does not change. While f2 changes the 
property on an object, which is changeable even if the object is a const */

