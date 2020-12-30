/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    return n > 0 ? pow(x, n) : 1 / pow(x, -n);
};

function pow(num, n) {
    if (n === 0) {
        return 1;
    }

    return n % 2 === 0
        ? pow(num * num, n / 2)
        : pow(num, n - 1) * num;
}

module.exports = myPow;