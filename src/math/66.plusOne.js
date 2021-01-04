/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        let num = digits[i] + 1;
        digits[i] = num % 10;

        if (num < 10) {
            return digits;
        }
    }

    return [1, ...digits];
};

module.exports = plusOne;