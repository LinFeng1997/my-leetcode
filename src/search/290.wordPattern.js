/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    const arr1 = pattern.split('');
    const arr2 = str.split(' ');
    if (arr1.length !== arr2.length) {
        return false;
    }

    return wordPatternHelper(arr1, arr2) && wordPatternHelper(arr2, arr1)

};

function wordPatternHelper(a, b) {
    const map = new Map();
    let rst = true;
    a.forEach((item, i) => {
        if (map.has(item)) {
            if (map.get(item) !== b[i]) {
                rst = false
                return;
            }
        } else {
            map.set(item, b[i])
        }
    })
    return rst;
}


module.exports = wordPattern;