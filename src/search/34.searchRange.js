/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (!nums.length) {
        return [-1, -1]
    }

    let left = binarySearch(nums, target, true)
    let right = binarySearch(nums, target, false) - 1

    if (left <= right && right < nums.length) {
        return nums[left] === target && nums[right] === target ? [left, right] : [-1, -1]
    }

    return [-1,-1]
}

function binarySearch(nums, target, isLower) {
    let l = 0;
    let r = nums.length - 1;
    let ans = nums.length;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        // 找第一个大于 target 或者大于等于 target 的数，常规二分法找的是等于 target 的数
        const condition = isLower ? nums[mid] >= target : nums[mid] > target
        // if (condition) {
        // 	return mid;
        // }

        if (condition) {
            r = mid - 1
            ans = mid
        } else {
            l = mid + 1
        }
    }

    return ans;
}


module.exports = searchRange;