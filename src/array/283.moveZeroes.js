/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let lastNonZeroIndex = 0;
    // optimize
    // while (nums[lastNonZeroIndex] !== 0 && lastNonZeroIndex < nums.length){
    //     lastNonZeroIndex++;
    // }

    for (let current = lastNonZeroIndex + 1; current < nums.length; current++) {
        if (nums[current] !== 0) {
            swap(nums, lastNonZeroIndex, current);
            lastNonZeroIndex++;
        }
    }
    return nums;
};

function swap(array, source, target) {
    if (array[source] === array[target]) {
        return;
    }
    let temp = array[source];
    array[source] = array[target];
    array[target] = temp;
}

module.exports = moveZeroes;