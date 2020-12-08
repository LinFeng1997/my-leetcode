/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let p = 0;
    let q = 0;

    while (p < s.length && q < t.length) {
        if (s[p] === t[q]) {
            p++;
            q++;
        } else {
            q++;
        }
    }

    return p === s.length;
};

module.exports = isSubsequence;