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

        for (let i = start; i < s.length; i++) {
            let substring = s.substring(start, i + 1);
            if (isValid(substring)) {
                stack.push(substring);
                dfs(s, i + 1);
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