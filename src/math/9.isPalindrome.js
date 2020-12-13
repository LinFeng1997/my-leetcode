/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x === 0) return true;
    if (x < 0 || x % 10 === 0) {
        return false;
    }

    let num = 0;
    let raw = x;

    while (x > 0) {
        num = num * 10 + x % 10;
        x = Math.floor(x / 10)
    }

    return num === raw;
};

module.exports = isPalindrome;