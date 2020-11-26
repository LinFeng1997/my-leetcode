/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    if (!m) return 0;

    const n = obstacleGrid[0].length;

    const memo = makeBinaryArray(m,n);

    if (obstacleGrid[0][0]) return 0;

    memo[0][0] = 1;

    for (let i = 1; i < m; i++) {
         memo[i][0] = obstacleGrid[i][0] === 1 || memo[i - 1][0] === 0 ? 0 : 1;
    }

    for (let j = 1; j < n; j++) {
        memo[0][j] = obstacleGrid[0][j] || memo[0][j-1] === 0 ? 0 : 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                memo[i][j] = memo[i][j - 1] + memo[i - 1][j];
            } else {
                memo[i][j] = 0;
            }
        }
    }


    return memo[m-1][n-1];
};

function makeBinaryArray(m, n) {
    let arr = new Array(m).fill(null);

    return arr.map(_ => new Array(n).fill(0));
}

// 当 i > 0 且 j = 0 时，[i,0] 和 [i-1,0] 不为障碍，dp[i][0] = 1，否则为 0
//
// 当 i = 0 且 j > 0 时，[0,j] 和 [0,j-1] 不为障碍，dp[0][j] = 1，否则为 0
//
// 当 i > 0 且 j > 0 时，[i,j] 不为障碍, dp[i][j]= dp[i-1][j] + dp[i][j-1]，否则为 0
module.exports = uniquePathsWithObstacles;