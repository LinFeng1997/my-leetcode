/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
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
        // !visited[i - 1] 代表它上一位在回溯的过程中被重置了
        const nonUniq = i > 0 && nums[i] === nums[i - 1] && !visited[i - 1];
        return visited[i] || nonUniq;
    }

    nums.sort((a,b) => a - b);
    dfs();

    return result;
};

module.exports = permuteUnique;