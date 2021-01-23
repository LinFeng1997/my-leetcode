/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length;

    const dp = new Array(n + 1).fill(false);
    dp[0] = true;

    function check(i,j) {
        const str = s.substring(j,i);
        return wordDict.includes(str);
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 0;j < i;j++) {
            if (dp[j] && check(i, j)) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
};

// dp[i] 表示字符串 s 前 i 个字符组成的字符串能被拆分成字典里的单词
// F(i) = F(j) && check(s[j,...i-1])

module.exports = wordBreak;