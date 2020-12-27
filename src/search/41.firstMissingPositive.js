/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let len = nums.length;

    // 将负数变成 n + 1,排除 [1,N] 范围，用来占位
    for (let i = 0; i < len; ++i) {
        if (nums[i] <= 0) {
            nums[i] = len + 1;
        }
    }

    // 将不是答案且在输入数组中的值变成负数,相当于打标记
    for (let i = 0; i < len; ++i) {
        let value = Math.abs(nums[i]);
        if (value <= len) {
            // 这里为什么不能直接是 -1 而是相反数：遍历的时候还要判断
            nums[value - 1] = -Math.abs(nums[value - 1]);
        }
    }

    // 再遍历一次，找到 [1,N] 缺失的数
    // 有负数，对应哈希表的 true 标记
    for (let i = 0; i < len; ++i) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }

    return len + 1;
};

module.exports = firstMissingPositive;