/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const res = [];
    const paths = [];

    candidates.sort((a,b) => a-b);

    function dfs(start, sum) {
        if (sum >= target) {
            if (sum === target) res.push(paths.slice(0));
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (uniq(i,start)) {
                paths.push(candidates[i]);
                dfs(i+1, sum + candidates[i]);
                paths.pop();
            }
        }
    }

    function uniq(i,start) {
        return !(i > 0 && candidates[i] === candidates[i-1] && i !== start);
    }

    dfs(0, 0);

    return res;
};

module.exports = combinationSum2;