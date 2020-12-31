/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxBorder = 0;

    for (let i = 0; i < nums.length; i++) {
        // 在范围内
        if (i <= maxBorder) {
            const value = nums[i];
            maxBorder = Math.max(maxBorder, value + i);

            if (maxBorder >= nums.length - 1) {
                return true;
            }
        }
    }

    return false;
};

module.exports = canJump;