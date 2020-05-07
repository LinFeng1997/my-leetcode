/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const map = getMap(s);
    for (let i = 0; i < t.length; i++) {
        let key = t[i];
        let value = map.get(key);
        if (value > 0) {
            map.set(key, value - 1)
        } else {
            return false;
        }
    }

    return true;
};

function getMap(arr, map = new Map()) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (!map.has(item)) {
            map.set(item, 1);
        } else {
            map.set(item, map.get(item) + 1);
        }
    }
    return map;
}

module.exports = isAnagram;