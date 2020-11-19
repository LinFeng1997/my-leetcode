/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    const stack = [];

    function dfs(start) {
        if (stack.length === k) {
            res.push(stack.slice())
            return
        }

        for (let i = start; i <= n; i++) {
            stack.push(i);
            dfs(i + 1);
            stack.pop();
        }
    }

    dfs(1);

    return res;

};

module.exports = combine;