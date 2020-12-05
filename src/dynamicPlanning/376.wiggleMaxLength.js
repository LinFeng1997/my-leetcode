/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    const n = nums.length;

    if (!n) return 0;

    let up = new Array(n).fill(1);
    let down = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                up[i] = Math.max(up[i], down[j] + 1)
            } else if ((nums[j] > nums[i])) {
                down[i] = Math.max(down[i], up[j] + 1)
            }
        }
    }

    return Math.max(...up.concat(down));
};


// dp[i] 表示结尾为第 i 个字符的情况下，最长摇摆子序列长度
// F(i) = max(F(j) + 1 (if nums[i] > nums[j] when up,nums[i] < nums[j] when down))
// 所以需要两个记忆化数组，分别存 up 和 down 时的值

module.exports = wiggleMaxLength;