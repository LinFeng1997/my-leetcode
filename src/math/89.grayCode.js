/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    let head = 1;
    let res = [0];

    for (let i = 0; i < n; i++) {
        for (let j = res.length - 1; j >= 0; j--) {
            res.push(head + res[j])
        }

        head <<= 1;
    }

    return res;
};

module.exports = grayCode;