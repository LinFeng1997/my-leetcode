/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let rst = [];

    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return rst;
    }

    let rows = matrix.length;
    let cols = matrix[0].length;

    let left = 0,right = cols - 1;
    let top = 0,bottom = rows - 1;

    while (left <= right && top <= bottom) {
        // 左 -> 右
        for (let col = left; col <= right; col++) {
            rst.push(matrix[top][col]);
        }

        // 上 -> 下
        for (let row = top + 1;row <= bottom;row++) {
            rst.push(matrix[row][right])
        }

        if (left < right && top < bottom) {
            // 右 -> 左
            for (let col = right - 1;col >= left;col--) {
                rst.push(matrix[bottom][col]);
            }

            // 下 -> 上
            for (let row = bottom - 1;row > top;row--) {
                rst.push(matrix[row][left])
            }
        }

        left++;
        right--;

        top++;
        bottom--;
    }

    return rst;
};

module.exports = spiralOrder;