/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const set = new Set(nums1);
    const rst = [];

    nums2.forEach(item => {
        if (set.has(item)) {
            rst.push(item);
        }
    });

    return Array.from(new Set(rst));
};

module.exports = intersection;