/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = '';
    if (!strs.length) return res;

    res = strs[0];
    for (let i = 1; i < strs.length; i++) {
        const str = strs[i];

        let j = 0;

        for (; j < str.length; j++) {
            if (str[j] !== res[j]) break;
        }

        if (j === 0) {
            return '';
        }

        res = str.substring(0,j);
    }

    return res;
};

module.exports = longestCommonPrefix;