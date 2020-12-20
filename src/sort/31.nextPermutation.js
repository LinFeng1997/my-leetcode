/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {

    // 找到右边较大的数和左边较小的数，做一个交换，然后对右边进行排序（升序）

    let i = nums.length - 2;

    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--; // 左边较小的数
    }

    // 如果是右边没大数，直接排序
    if (i >= 0) {
        let j = nums.length - 1;
        while (j >= 0 && nums[i] >= nums[j]) {
            j--; // 右边较大的数
        }

        swap(nums, i, j);
    }

    reverse(nums, i + 1);
    return nums;
};

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function reverse(arr, start = 0, end = arr.length - 1) {
    for (let i = start; i < end; i++) {
        swap(arr, i, end)
        end--
    }
}

module.exports = nextPermutation;