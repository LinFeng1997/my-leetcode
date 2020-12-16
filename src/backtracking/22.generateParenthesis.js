/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    const len = n * 2;

    function dfs(l,r,str) {
        if (str.length === len) {
            res.push(str);
            return;
        }

        if (l > 0) { // 左括号有剩余
            dfs(l-1,r,str + '(')
        }

        if (l < r) { // 右括号有剩余
            dfs(l,r - 1,str + ')')
        }
    }

    dfs(n,n,"");

    return res;
};

module.exports = generateParenthesis;