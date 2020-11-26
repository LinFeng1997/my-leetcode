/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (!m) return 0;

    const memo = makeBinaryArray(m,n);

    memo[0][0] = 1;

    for (let i = 1; i < m; i++) {
        memo[i][0] = 1;
    }

    for (let j = 1; j < n; j++) {
        memo[0][j] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            memo[i][j] = memo[i][j - 1] + memo[i - 1][j];
        }
    }


    return memo[m-1][n-1];
};

function makeBinaryArray(m, n) {
    let arr = new Array(m).fill(null);

    return arr.map(_ => new Array(n).fill('.'));
}

module.exports = uniquePaths;

// 当 i > 0 且 j = 0 时，dp[i][0] = 1
//
// 当 i = 0 且 j > 0 时，dp[0][j] = 1
//
// 当 i > 0 且 j > 0 时，dp[i][j]= dp[i-1][j] + dp[i][j-1]