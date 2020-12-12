/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length;
    let dp = makeBinaryArray(len,len);
    let res = '';

    for (let i = 0; i < len; i++) {
        for (let j = i; j >= 0; j--) { // 由短到长

            if (s[i] === s[j]) {
                dp[j][i] = i - j < 2 || dp[j + 1][i - 1]

                if (dp[j][i] && i - j + 1 > res.length) {
                    res = s.substring(j, i + 1)
                }
            }
        }
    }

    return res;
};

function makeBinaryArray(m, n) {
    let arr = new Array(m).fill(null);

    return arr.map(_ => new Array(n).fill(false));
}

// P(i,j) = P(i+1,j−1) ∧ (Si == Sj)
// P(i,j) = j - i < 2 ∧ (Si == Sj)
module.exports = longestPalindrome;