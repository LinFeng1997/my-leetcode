/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        let a = s[left].toLowerCase();
        let b = s[right].toLowerCase();
        if (a === b) {
            left++;
            right--;
        } else if (!/[\da-zA-Z]/.test(a)) {
            left++
        } else if (!/[\da-zA-Z]/.test(b)) {
            right--;
        } else {
            return false;
        }
    }
    return true;
};
module.exports = isPalindrome;