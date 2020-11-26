/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const m = triangle.length;
    if (!m) return 0;

    const n = triangle[0].length;
    const memo = makeBinaryArray(m,n);
    memo[0][0] = triangle[0][0];

    for (let i = 1;i<m;i++) {
        // memo[i-1][-1] 无意义
        memo[i][0] = memo[i-1][0] + triangle[i][0];

        for (let j = 1; j < i; j++) {
            memo[i][j] = Math.min(memo[i - 1][j], memo[i - 1][j - 1]) + triangle[i][j];
        }

        // memo[i-1][i] 无意义
        memo[i][i] = memo[i - 1][i - 1] + triangle[i][i];
    }

    let rows = [];
    for (let i = 0; i < m; i++) {
        rows[i] = memo[m - 1][i];
    }

    return Math.min(...rows);
};


function makeBinaryArray(m, n) {
    let arr = new Array(m).fill(null);

    return arr.map(_ => new Array(n).fill('.'));
}

// 状态转移方程：f[i][j] = min(f[i−1][j−1],f[i−1][j]) + c[i][j]
module.exports = minimumTotal;