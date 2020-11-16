/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        2:'abc',
        3:'def',
        4:'ghi',
        5:'jkl',
        6:'mno',
        7:'pqrs',
        8:'tuv',
        9:'wxyz',
    };

    let res = [];

    function dfs(pre,index) {
        if (index === digits.length) {
            if (pre) res.push(pre);
            return;
        }

        let key = digits[index];
        let chars = map[key];

        for(let i = 0;i<chars.length;i++) {
            dfs(pre + chars[i],index + 1)

        }
    }

    dfs('',0);

    return res;
};

module.exports = letterCombinations;