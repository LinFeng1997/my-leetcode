/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    if (S > 1000) return 0;
    const n = nums.length;

    const dp = makeBinaryArray(n,2001);
    // 防止数组下标为负数
    dp[0][nums[0] + 1000] = 1;
    dp[0][-nums[0] + 1000] += 1; // nums[0] 为 0 的情况

    for (let i = 1; i < n; i++) {
        for (let j = -1000; j <= 1000; j++) {
            // dp[i][j + 1000] += dp[i - 1][j - nums[i] + 1000] + dp[i - 1][j + nums[i] + 1000]
            const sum = j;
            
            if (dp[i - 1][sum + 1000] > 0){
                // 分别代入 j - nums[i] 和 j + nums[i]
                dp[i][sum + nums[i] + 1000] += dp[i - 1][sum + 1000];
                dp[i][sum - nums[i] + 1000] += dp[i - 1][sum + 1000];
            }
        }
    }

    return dp[n - 1][S + 1000];
};

function makeBinaryArray(m, n) {
    let arr = new Array(m).fill(null);

    return arr.map(_ => new Array(n).fill(0));
}

// dp[i][j] 表示字符串 nums 前 i+1 个元素和为 j 的组合数
// dp[i][j] = dp[i - 1][j - nums[i]] + dp[i - 1][j + nums[i]]
// dp[i][j] += dp[i - 1][j - nums[i]] + dp[i - 1][j + nums[i]]

module.exports = findTargetSumWays;