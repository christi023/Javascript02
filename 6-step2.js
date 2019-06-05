'use strict';
// 2.6
const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

for (let i = 0; i < arr3d.length; i++) {
  for (let j = 0; j < arr3d[i].length; j++) {
    console.log(arr3d[i][j]);
  }
}
