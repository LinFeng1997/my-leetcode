/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let rst = [];
    for (let i = 0;i<n;i++) {
        rst[i] = [];
    }

    let rows = n;
    let cols = n;

    let left = 0,right = cols - 1;
    let top = 0,bottom = rows - 1;
    let num = 1;

    while (left <= right && top <= bottom) {
        // 左 -> 右
        for (let col = left;col <= right;col++) {
            rst[top][col] = num++;
        }

        // 上 -> 下
        for (let row = top + 1;row <= bottom;row++) {
            rst[row][right] = num++;
        }

        if (left < right && top < bottom) {
            // 右 -> 左
            for (let col = right - 1;col >= left;col--) {
                rst[bottom][col] = num++;
            }
            // 下 -> 上，这里不能 row >= top 是因为 top 已经被填了数据了
            for (let row = bottom - 1;row > top;row--) {
                rst[row][left] = num++;
            }
        }

        left++;
        right--;
        top++;
        bottom--;
    }

    return rst;
};

module.exports = generateMatrix;