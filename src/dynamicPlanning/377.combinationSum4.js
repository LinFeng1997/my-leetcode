/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const len = nums.length;
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (let j = 1; j <= target; j++) {
        for (let i = 0; i < len; i++) {
            const num = nums[i];

            if (j >= num) {
                dp[j] += dp[j - num]
            }
        }
    }

    return dp[target];
};

// dp[j] 表示结果为 j 的情况下，有效的组合数
// F(j) = F(j - nums[0]) + F(j - coins[1])...F(j - nums[i]))

module.exports = combinationSum4;