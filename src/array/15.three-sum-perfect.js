/**
 * 延续 two-sum 的思路，用配对，但这道题要 3 个指针
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    var rtn = [];
    // optimize
    if (nums.length < 3) {
        return rtn;
    }
    nums = nums.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < nums.length - 2; i++) {
        // optimize
        if (nums[i] > 0) {
            return rtn;
        }
        // drop repeat
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        //第三个数从后面往前找
        for (var j = i + 1, k = nums.length - 1; j < k;) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                rtn.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                // repeat
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
                // repeat
                while (j < k && nums[k] === nums[k + 1]) {
                    k--;
                }
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return rtn;
};

module.exports = threeSum;