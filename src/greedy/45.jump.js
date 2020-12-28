/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let maxBorder = 0;
    let steps = 0;
    let end = 0;

    // 边界正好为最后一个位置的情况下，我们会增加一次「不必要的跳跃次数」
    for (let i = 0; i < nums.length - 1; i++) {
        const value = nums[i];

        // 可以跳到 [i,value + i] 去
        maxBorder = Math.max(maxBorder,value + i);

        // 做跳这个动作，可以贪心跳到最大的边界
        if (end === i) {
            steps++;
            end = maxBorder;
        }
    }

    return steps;
};

module.exports = jump;