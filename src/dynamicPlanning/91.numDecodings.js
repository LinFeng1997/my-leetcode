/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s[0] === "0") return 0;

    let memo = new Array(s.length).fill(0);
    memo[0] = 1;
    memo[1] = 1;

    // 实际写代码要把索引都往前一位
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === "0") {
            if (s[i] === "0") {
                return 0;
            } else {
                memo[i + 1] = memo[i];
            }
        } else {
            let num = +s.substr(i - 1, 2);

            if (s[i] === "0") {
                if (num > 26) {
                    return 0
                } else {
                    memo[i + 1] = memo[i - 1]
                }
            } else {
                if (num > 26) {
                    memo[i + 1] = memo[i]
                } else {
                    memo[i + 1] = memo[i] + memo[i - 1]
                }
            }
        }
    }

    return memo[s.length];
};
// 输入：s = "226"
// 输出：3
// 解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。

// 斐波那契变种 dp[n] = dp[n - 1] + dp[n - 2]

// 条件判断：a0 = 0, a1 =  0,dp[n] = 0  200
// a0 = 0, a1 != 0, dp[n] = dp[n - 1]  206
// a0 != 0, a1 = 0, 若 a0a1 > 26, dp[n] = 0,否则 dp[n] = dp[n - 2] 260 220
// a0 != 0, a1 !=  0,若 a0a1 > 26, dp[n] = dp[n - 1],否则 dp[n] = dp[n -1] + dp[n - 2] 226 227
module.exports = numDecodings;