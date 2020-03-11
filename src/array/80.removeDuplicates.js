/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 1;
    let j = 1;
    let count = 1;
    for (; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) count++;
        else count = 1;

        if (count <= 2) {
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
};
module.exports = removeDuplicates;