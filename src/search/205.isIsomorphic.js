/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    return helper(s, t) && helper(t, s)
};

function helper(a, b) {
    const map = new Map()

    for (let i = 0; i < a.length; i++) {
        let key = a[i];
        if (map.has(key)) {
            if (map.get(key) !== b[i]) {
                return false
            }
        } else {
            map.set(key, b[i])
        }
    }

    return true
}

module.exports = isIsomorphic