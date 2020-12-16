/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) return 0;
    let p = 0;
    let q = needle.length;

    while (q <= haystack.length) {
        if (haystack.substring(p,q) === needle) {
            return p;
        }
        p++;
        q++;
    }

    return -1;
};

module.exports = strStr;