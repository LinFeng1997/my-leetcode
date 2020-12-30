/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len = nums.length;
    let dp = new Array(len).fill(0);

    dp[0] = nums[0];
    for (let i = 1; i < len; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i],nums[i])
    }

    return Math.max(...dp);
};

// dp[i] = max(dp[i-1] + nums[i],nums[i])
module.exports = maxSubArray;