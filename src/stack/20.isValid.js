/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 === 1) {
        return false;
    }
    let stack = [];
    let map = new Map([
        [')','('],
        ['}','{'],
        [']','[']
    ]);

    for (let i = 0;i<s.length;i++) {
        const value = s[i];

        if (map.has(value)) {
            if (!stack.length) {
                return false;
            }

            let left = stack.pop();

            if (left !== map.get(value)) {
                return false;
            }
        } else {
            // 入栈的都是左边的括号
            stack.push(value);
        }
    }

    return stack.length === 0;
};

module.exports = isValid;