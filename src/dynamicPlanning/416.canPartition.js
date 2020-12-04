/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const len = nums.length;
    let max = 0;

    if (len < 2) {
        return false;
    }

    // nums.sort((a,b) => a - b);
    // const max = nums[len - 1];
    const sum = nums.reduce((pre,cur) => {
       max = max > cur ? max : cur;
       return pre + cur
    },0);

    if (sum % 2 !== 0) {
        return false;
    }

    const target = sum / 2;

    if (max > target) {
        return false;
    }

    const dp = new Array(len + 1).fill(false);
    dp[0] = true;

    for (let i = 0;i<len;i++) {
        for (let j = target;j>=nums[i];j--) {
            dp[j] |= dp[j - nums[i]]
        }
    }

    return !!dp[target];
};

// dp[i][j] 表示放 nums[i] 时，结果等于 j，可行
// F(i,j) = F(i - 1,j) | F(i - 1,j - nums[i])

// dp[j] 表示存在放 nums[i] 时，结果等于 j，可行
// F(j) = F(j) | F(j - nums[i])

module.exports = canPartition;