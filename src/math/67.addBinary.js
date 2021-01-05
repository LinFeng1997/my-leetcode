/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    // 一位一位的存储结果
    let arr = new Array(len1 + len2).fill(0);

    let i = len1 - 1;
    let j = len2 - 1;
    let tail = arr.length - 1;

    while (i >= 0 || j >= 0) {
        const n1 = +a[i] || 0;

        const n2 = +b[j] || 0;

        const plus = n1 + n2;
        const sum = arr[tail] + plus;

        arr[tail] = sum % 2;
        arr[tail - 1] += Math.floor(sum / 2);

        j--;
        i--;
        tail--;
    }

    while (arr[0] === 0) {
        arr.shift();
    }

    return arr.length ? arr.join('') : '0';
};

module.exports = addBinary;