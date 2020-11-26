/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const memo = {
        0: 1,
        1: 1
    };

    // function caclWays(n) {
    //     if (!memo[n]) {
    //         memo[n] = caclWays(n - 1) + caclWays(n - 2);
    //     }
    //
    //     return memo[n];
    // }
    //
    // return caclWays(n);

    for (let i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2]
    }

    return memo[n];
};

// 状态转移方程: f(n) = f(n-1) + f(n-2)
module.exports = climbStairs;