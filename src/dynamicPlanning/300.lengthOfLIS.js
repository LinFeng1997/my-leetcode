/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const n = nums.length;

    if (!n) return 0;

    let memo = new Array(n + 1).fill(1);

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                memo[i] = Math.max(memo[i], memo[j] + 1)
            }
        }
    }

    return Math.max(...memo);
};

// dp[i] 表示结尾为第 i 个字符的情况下，最长上升子序列长度
// F(i) = max(F(j) + 1 (if nums[i] > nums[j]))

module.exports = lengthOfLIS;