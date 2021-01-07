/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    let l = 0;
    let r = x;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        const multi = mid * mid;
        if (multi === x) {
            return mid;
        } else if (multi < x) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    // 向上取整
    return l - 1;
};

module.exports = mySqrt;