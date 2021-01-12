/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    function sum(i,n) {
        return dp[i - 1] * dp[n - i];
    }

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += sum(j, i)
        }
    }

    return dp[n];
};

// dp[i] = 累加 dp[i - 1] * dp[n - i]
module.exports = numTrees;