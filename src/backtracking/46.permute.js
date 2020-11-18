/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    let visited = {};
    let path = [];

    function dfs() {
        if (path.length === nums.length) {
            result.push(path.slice());
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!isUsed(i)) {
                path.push(nums[i]);
                visited[i] = true;
                dfs();

                path.pop();
                visited[i] = false;
            }
        }
    }

    function isUsed(i) {
        return visited[i];
    }

    dfs();

    return result;
};

module.exports = permute;