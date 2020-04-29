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

// function getMap(arr, map = new Map()) {
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];
//         if (!map.has(item)) {
//             map.set(item, 1);
//         } else {
//             map.set(item, map.get(item) + 1);
//         }
//     }
//     return map;
// }

module.exports = intersection;