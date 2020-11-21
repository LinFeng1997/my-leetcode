/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const res = [];
    const paths = [];
    nums.sort((a,b) => a-b);

    function dfs(start) {
        res.push(paths.slice());

        for (let i = start;i<nums.length;i++) {
            if (uniq(i,start)) {
                paths.push(nums[i]);
                dfs(i+1);
                paths.pop();
            }

        }
    }


    function uniq(i,start) {
        return !(i > 0 && nums[i] === nums[i-1] && i !== start);
    }

    dfs(0);

    return res;
};

module.exports = subsetsWithDup;