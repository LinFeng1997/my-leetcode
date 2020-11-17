/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let res = [];
    let stack = [];

    function dfs(s, start) {
        if (start === s.length) {
            res.push([...stack]);
            return; // 结算
        }

        for (let i = start; i < s.length; i++) {
            if (isPalindrome(s, start, i)) {
                stack.push(s.substring(start, i + 1));
                dfs(s, i + 1);
                stack.pop();
            }
        }
    }

    dfs(s, 0);

    return res;
};

function isPalindrome(s, l, r) {
    while (l <= r) {
        if (s[l] !== s[r]) return false;
        l++
        r--
    }
    return true
}

module.exports = partition;