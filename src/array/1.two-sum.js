/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let rst = [];
    let map = {};
    nums.forEach((e, i) => {
        let left = map[target - e];
        if (left !== undefined) {
            rst = [left, i];
        }
        map[e] = i;
    });
    return rst || [0, -1];
};

module.exports = twoSum;