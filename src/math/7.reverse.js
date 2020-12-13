/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0;
    let isPositive = x > 0;
    x = Math.abs(x);

    while (x > 0) {
        res = res * 10 + x % 10;

        x = Math.floor(x / 10);
    }

    if (isPositive && res > Math.pow(2,31) - 1) {
        return 0;
    }

    if (!isPositive && res > Math.pow(2,31)) {
        return 0;
    }

    return isPositive ? res : -res;
};

module.exports = reverse;