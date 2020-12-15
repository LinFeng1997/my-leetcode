/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const chars = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    let res = '';
    for (let i = 0; i < values.length && num >= 0; i++) {

        while (values[i] <= num) {
            num -= values[i];
            res += chars[i];
        }
    }

    return res;
};

module.exports = intToRoman;