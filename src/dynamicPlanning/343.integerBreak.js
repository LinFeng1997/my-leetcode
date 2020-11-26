/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    let memo = new Array(n+1).fill(0);
    memo[1] = 1;
    memo[2] = 1;

    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            memo[i] = Math.max(memo[i], (i - j) * j, memo[i - j] * j)
        }
    }
    return memo[n];
};

// i = i - j + j
// dp[i] = max((i - j) * j, dp[i-j] * j)
module.exports = integerBreak;