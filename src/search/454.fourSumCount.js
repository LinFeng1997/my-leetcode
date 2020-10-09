/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let res = 0;

    let sum1 = [];
    A.forEach(a => {
        B.forEach(b => {
            sum1.push(a + b);
        })
    });

    let map = getMap(sum1);

    C.forEach(c => {
        D.forEach(d => {
            const sum = -( c + d)
            if (map.has(sum)){
                res += map.get(sum)
            }
        })
    });

    return res;
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

module.exports = fourSumCount;