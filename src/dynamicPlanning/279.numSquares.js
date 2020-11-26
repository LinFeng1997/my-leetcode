/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = new Array(n+1).fill(0);

    for (let i = 1; i <= n; i++) {
        dp[i] = i; // 1 打底

        for (let j = 1; i - j * j >= 0; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1); // 动态转移方程
        }
    }
};


// dp[i] = min(dp[i], dp[i - j * j] + 1)
module.exports = numSquares;