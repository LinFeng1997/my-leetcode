/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    const used = new Set();

    let group = 1;

    for (let i = n; i > 1; i--) {
        group *= i;
    }

    function dfs(stack = []) {
        const index = stack.length;
        
        if (index === n) { // 回溯结束
            return stack.join('');
        }

        group /= n - index;// 对排列进行分组，结果一定在某组里

        for (let i = 1; i <= n; i++) {
            // 非重复元素型排列
            if (used.has(i)) {
                continue;
            }

            // k 大于一组的个数，说明不在这一组里面，剪枝跳过
            if (k > group) {
                k -= group;
                continue;
            }

            stack.push(i);
            used.add(i);

            return dfs(stack);
        }
    }

    return dfs();
};

module.exports = getPermutation;