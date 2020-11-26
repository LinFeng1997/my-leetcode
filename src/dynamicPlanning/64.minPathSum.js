/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    if (!m) return 0;

    const n = grid[0].length;
    const memo = makeBinaryArray(m,n);

    memo[0][0] = grid[0][0];

    for (let i = 1; i < m; i++) {
        memo[i][0] = memo[i - 1][0] + grid[i][0];
    }

    for (let j = 1; j < n; j++) {
        memo[0][j] = memo[0][j - 1] + grid[0][j];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            memo[i][j] = Math.min(memo[i][j - 1],memo[i - 1][j]) + grid[i][j];
        }
    }


    return memo[m-1][n-1];
};


function makeBinaryArray(m, n) {
    let arr = new Array(m).fill(null);

    return arr.map(_ => new Array(n).fill('.'));
}

module.exports = minPathSum;

// 当 i > 0 且 j = 0 时，dp[i][0] = dp[i-1][0] + grid[i][0]
//
// 当 i = 0 且 j > 0 时，dp[0][j] = dp[0][j-1] + grid[0][j]
//
// 当 i > 0 且 j > 0 时，dp[i][j]= min(dp[i-1][j],dp[i][j-1]) + grid[i][j]