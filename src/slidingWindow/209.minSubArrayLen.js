/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let ans = 0;
    let left = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        while (sum >= s) {
            ans = ans ? Math.min(ans, i + 1 - left) : i + 1 - left;
            sum -= nums[left];
            left++
        }
    }
    return ans;
};
module.exports = minSubArrayLen;