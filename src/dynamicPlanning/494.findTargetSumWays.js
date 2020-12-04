/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
    if (S > 1000) return 0;
    const n = nums.length;
    const max = nums.reduce((pre, cur) => {
        return pre + cur;
    }, 0);

    const dp = makeBinaryArray(n, max * 2 + 1);
    // 防止数组下标为负数
    dp[0][nums[0] + max] = 1;
    dp[0][-nums[0] + max] += 1; // nums[0] 为 0 的情况

    function isValid(value) {
        return value >= -max && value <= max;
    }

    for (let i = 1; i < n; i++) {
        for (let j = -max; j <= max; j++) {

            if (isValid(j)) {
                dp[i][j - nums[i] + max] += dp[i - 1][j + max]
            }

            if (isValid(j)) {
                dp[i][j + nums[i] + max] += dp[i - 1][j + max]
            }
        }
    }

    return dp[n - 1][S + max] || 0;
};

function makeBinaryArray(m, n) {
    let arr = new Array(m).fill(null);

    return arr.map(_ => new Array(n).fill(0));
}

// dp[i][j] 表示字符串 nums 前 i+1 个元素和为 j 的组合数
// dp[i][j] = dp[i - 1][j - nums[i]] + dp[i - 1][j + nums[i]]
// dp[i][j] += dp[i - 1][j - nums[i]] + dp[i - 1][j + nums[i]]

// dp[i][j] += dp[i - 1][j + nums[i]]
// dp[i][j] += dp[i - 1][j - nums[i]]

module.exports = findTargetSumWays;