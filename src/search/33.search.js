/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // 获取 mid
    // 如果 [l, mid] 是升序, target 在 [nums[l],nums[mid]] 找 [l,md-1]，否则找 [mid+1,r]
    // 如果 [mid,r] 是升序，target 在 [nums[mid + 1],nums[r]] ,那么找 [mid + 1,r]，否则找 [l,mid - 1]

    if (nums.length === 1) {
        return nums[0] === target ? 0 : -1
    }

    let tail = nums.length - 1;

    let l = 0;
    let r = tail;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)

        if (nums[mid] === target) {
            return mid
        }

        if (nums[l] <= nums[mid]) { // l - mid 是升序
            if (nums[l] <= target && target <= nums[mid]) {
                r = mid - 1 // mid 不在边界内
            } else {
                l = mid + 1 // mid 不在边界内
            }
        } else { // mid - r 是升序
            if (nums[mid] <= target && target <= nums[r]) {
                l = mid + 1 // mid 不在边界内
            } else {
                r = mid - 1 // mid 不在边界内
            }
        }
    }

    return -1;
};

module.exports = search;