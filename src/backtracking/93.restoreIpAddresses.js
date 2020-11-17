/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = [];
    let stack = [];

    function dfs(s,start){
        if (start === s.length && stack.length === 4) {
            res.push(stack.join('.'));
            return; // 结算
        }

        // 超过 4 段了，直接结束
        if (stack.length >= 4) {
            return;
        }

        // 0 开头特殊成一段
        if (s[start] === 0) {
            dfs(s,start+1);
            return;
        }

        for (let len = 1; len <= 3; len++) {           // 枚举出三种切割长度
            if (start + len - 1 >= s.length) return;     // 加上要切的长度就越界，不能切这个长度
            let substring = s.substring(start, start + len); // 当前选择切出的片段
            if (isValid(substring)) {
                stack.push(substring);
                dfs(s, start + len);
                stack.pop();
            }

        }

    }

    dfs(s,0);

    return res;
};

function isValid(str) {
    if (str.length > 1 && str[0] === '0') {
        return false;
    }
    return +str <= 255;
}

module.exports = restoreIpAddresses;