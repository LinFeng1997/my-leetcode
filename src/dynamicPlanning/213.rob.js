/**
 * @param {number[]} nums
 * @return {number}
 */
var robUtil = function(nums) {
    const dp = new Array(nums.length + 1).fill(0);
    dp[0] = 0;
    dp[1] = nums[0];

    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
    }

    return dp[nums.length];
};

var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    const noRobHead = nums.slice(1);
    const noRobTail = nums.slice(0,nums.length - 1);

    return Math.max(robUtil(noRobHead),robUtil(noRobTail))
};

// dp[i] = max(dp[i−2] + nums[i],dp[i−1])
module.exports = rob;