/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let len1 = num1.length;
    let len2 = num2.length;
    // 一位一位的存储结果
    let arr = new Array(len1 + len2).fill(0);

    for (let i = len1 - 1; i >= 0; i--) {
        const n1 = num1[i];

        for (let j = len2 - 1; j >= 0; j--) {
            const n2 = num2[j];
            const multi = n1 * n2;
            const sum = arr[i + j + 1] + multi;

            arr[i + j + 1] = sum % 10;
            arr[i + j] += Math.floor(sum / 10)
        }
    }

    while (arr[0] === 0) {
        arr.shift();
    }

    return arr.length ? arr.join('') : '0'
};

module.exports = multiply;