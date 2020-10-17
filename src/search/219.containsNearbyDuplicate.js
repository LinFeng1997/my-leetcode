/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const set = new Set();

    for (let i = 0;i < nums.length;i++){
        const num = nums[i];
        if (set.has(num)) {
            return true;
        }
        set.add(num);
        if (set.size >= k){
            set.delete(nums[i - k])
        }
    }
    return false;
};

module.exports = containsNearbyDuplicate;