/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let largeNum = nums1.length > nums2.length ? nums1 : nums2;
    let smallNum = nums1.length > nums2.length ? nums2 : nums1;
    const map1 = getMap(largeNum);
    const map2 = getMap(smallNum);
    const rst = [];

    smallNum.forEach(item => {
        const value1 = map1.get(item)
        const value2 = map2.get(item);
        if (value1 && value2) {
            rst.push(item);
            map1.set(item, value1 - 1);
            map2.set(item, value2 - 1);
        }
    });

    return rst;
};

function getMap(arr, map = new Map()) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (!map.has(item)) {
            map.set(item, 1);
        } else {
            map.set(item, map.get(item) + 1);
        }
    }
    return map;
}

module.exports = intersect;