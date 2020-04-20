/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let p0 = cur = 0;
    let p2 = nums.length - 1;
    while (cur <= p2) {
        const num = nums[cur];
        if (num === 0) {
            swap(nums, cur, p0);
            p0++;
            cur++;
        } else if (num === 1) {
            cur++;
        } else if (num === 2) {
            swap(nums, cur, p2);
            p2--;
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

module.exports = sortColors;