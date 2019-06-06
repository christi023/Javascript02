// -----> SCOPE AND CLOSURES <----------
'use strict';

// Add your code here
// numberValues stringValues
const stringValues = ['a', 'b', 'a', 'c', 'a', 'd', 'a', 'e', 'e', 'f', 'c', 'f', 'f'];

const numberValues = [1, 2, 3, 4, 1, 6, 5, 4, 7, 7, 0, 6, 6, 6, 6, 6];

function sortUniquerNumberArryAndStringArry(arr) {
  if (typeof arr[0] == 'string') {
    arr.sort();
  } else if (typeof arr[0] == 'number') {
    arr.sort(function(a, b) {
      return a - b;
    });
  } else {
    return console.error('The array is neither a "string" or a "number" ');
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (typeof arr[i] === typeof arr[i + 1]) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i, 1);

        sortUniquerNumberArryAndStringArry(arr);
      }
    } else {
      return;
    }
  }
  return arr;
}

const uniqueStringValues = sortUniquerNumberArryAndStringArry(stringValues);
console.log(uniqueStringValues);

const uniqueNumberValues = sortUniquerNumberArryAndStringArry(numberValues);
console.log(uniqueNumberValues);
