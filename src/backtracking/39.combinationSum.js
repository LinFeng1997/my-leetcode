/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const res = [];
    const paths = [];

    function dfs(start, sum) {
        if (sum >= target) {
            if (sum === target) res.push(paths.slice(0));
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            paths.push(candidates[i]);
            dfs(i, sum + candidates[i]);
            paths.pop();
        }
    }

    dfs(0, 0);
    return res;
};

module.exports = combinationSum;