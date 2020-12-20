/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let max = 0;
    let stack = [];
    stack.push(-1); // 兼容第一个字符为 ( 的情况 1 - (-1) = 2，所以栈底代表的是有效起始点

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();

            if (stack.length) {
                max = Math.max(max, i - stack[stack.length - 1]) // 结算，以该右括号为结尾的最长有效括号的长度

            } else {
                stack.push(i)
            }
        }
    }

    return max;
};

module.exports = longestValidParentheses;