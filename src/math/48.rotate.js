/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < Math.floor(m / 2); i++) {
    for (let j = 0; j < n; j++) {
      swap(matrix,i,j,n-i-1,j)
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < i; j++) {
      swap(matrix,i,j,j,i)
    }
  }

  return matrix;
};

function swap(arr,i1,j1,i2,j2) {
    let temp = arr[i1][j1];
    arr[i1][j1] = arr[i2][j2];
    arr[i2][j2] = temp;
}

module.exports = rotate;