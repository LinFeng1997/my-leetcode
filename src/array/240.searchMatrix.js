/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;

    let row = m - 1;
    let col = 0;

    while (row >= 0 && col <= n - 1) {
        let cur = matrix[row][col];

        if (cur === target) {
            return true;
        } else if (cur < target) {
            col++;
        } else {
            row--;
        }
    }

    return false;
};

module.exports = searchMatrix;