/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    const memo = ["","1","11","21","1211","111221"];

    function trans(str) {
        let left = 0,right = 0;

        let result = "";
        while (right < str.length) {
            while (str[left] === str[right]) {
                right++;
            }

            result += String(right - left) + str[left];// 比如说，3个1 -> 31
            left = right;
        }

        return result;
    }

    for (let i = memo.length;i <= n;i++) {
        memo[i] = trans(memo[i-1]);
    }

    return memo[n];
};

module.exports = countAndSay;