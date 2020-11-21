/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    const paths = [];

    function dfs(start) {
        res.push(paths.slice());

        for (let i = start;i<nums.length;i++) {
            paths.push(nums[i]);
            dfs(i+1);
            paths.pop();
        }
    }

    dfs(0);

    return res;
};

module.exports = subsets;