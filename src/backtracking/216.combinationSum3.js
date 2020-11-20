/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const res = [];
    const paths = [];

    function dfs(start, sum) {
        if (sum >= n) {
            if (sum === n && paths.length === k) res.push(paths.slice(0));
            return;
        }

        for (let i = start; i <= 9; i++) {
            paths.push(i);
            dfs(i + 1, sum + i);
            paths.pop();
        }
    }

    dfs(1, 0);

    return res;
};

module.exports = combinationSum3;