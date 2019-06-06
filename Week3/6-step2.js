'use strict';
// 2.6
const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// 2d
let flatten1 = function(arr) {
  let flatMap = [];
  arr.forEach(function(value) {
    if (Array.isArray(value)) {
      flatMap = flatMap.concat(flatten1(value));
    } else {
      flatMap.push(value);
    }
  });
  return flatMap;
};

let result = flatten1(arr2d);

console.log(result);

// 3d
let flatten2 = function(arr) {
  let flatMap = [];
  arr.forEach(function(value) {
    if (Array.isArray(value)) {
      flatMap = flatMap.concat(flatten2(value));
    } else {
      flatMap.push(value);
    }
  });
  return flatMap;
};

let result1 = flatten2(arr3d);

console.log(result1);


/* for (let i = 0; i < arr3d.length; i++) {
  for (let j = 0; j < arr3d[i].length; j++) {
    console.log(arr3d[i][j]);
  }
} */
