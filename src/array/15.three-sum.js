var findAllTwoSum = function (nums, target) {
    let map = {};
    let rst = [];

    nums.forEach((e, i) => {
        let left = map[target - e];
        if (left !== undefined) {
            rst.push([-target, target - e, e]);
        }
        map[e] = i;
    });
    return rst;
};

var uniqArray = function (array) {
    const map = new Map();
    return array.filter(item => {
        const key = item.toString();
        if (map.has(key)) {
            return false;
        } else {
            map.set(key, true);
            return true;
        }
    })
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let rst = [];

    nums.sort(((a, b) => a - b));
    while (nums.length){
        let num = nums.shift();
        // if (nums.length > 2 && nums[0] === nums[1] && nums[1] === nums[2] && nums[0] !== 0) {
        //     continue;
        // }

        const item = findAllTwoSum(nums,-num);
        if(item.length){
            rst = rst.concat(item);
        }
    }

    rst = uniqArray(rst);
    return rst;
};

module.exports = threeSum;