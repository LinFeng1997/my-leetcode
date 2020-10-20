/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    const map = new Map();
    const step = t + 1;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const key = getKey(num, step);
        if (map.has(key)) {
            return true;
        } else if (map.has(key - 1) && Math.abs(map.get(key - 1) - num) < step) {
            return true;
        } else if (map.has(key + 1) && Math.abs(map.get(key + 1) - num) < step) {
            return true;
        }


        map.set(key, num);
        if (i >= k) {
            map.delete(getKey(nums[i - k], step))
        }
    }
    return false;
};

function getKey(value, step) {
    return Math.floor(value / step)
}

module.exports = containsNearbyAlmostDuplicate;