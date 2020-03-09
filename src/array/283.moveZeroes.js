/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    for (let lastNonZeroIndex = 0, current = 0; current < nums.length; current++) {
        if (nums[current] !== 0) {
            swap(nums, lastNonZeroIndex, current);
            lastNonZeroIndex++;
        }
    }
    return nums;
};

function swap(array, source, target) {
    if (source === target) {
        return;
    }
    let temp = array[source];
    array[source] = array[target];
    array[target] = temp;
}

module.exports = moveZeroes;