/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let arr = s.split('');
    let map = getMap(s);

    let rst = '';
    Array.from(map.entries()).sort((a, b) => b[1] - a[1]).forEach(item => {
        rst += item[0].repeat(item[1]);
    });

    return rst;
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

module.exports = frequencySort;