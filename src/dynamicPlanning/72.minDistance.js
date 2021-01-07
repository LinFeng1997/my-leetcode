/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;

    let dp = makeBinaryArray(m + 1, n + 1);

    for (let i = 0; i <= m; i++) {
        dp[i][0] = i
    }

    for (let i = 0; i <= n; i++) {
        dp[0][i] = i
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            let pre = dp[i - 1][j - 1];
            
            if (word1[i - 1] !== word2[j - 1]) {
                pre += 1;
            }
            
            dp[i][j] = Math.min(dp[i][j - 1] + 1, dp[i - 1][j] + 1, pre)
        }
    }

    return dp[m][n];
};

function makeBinaryArray(m, n) {
    let arr = new Array(m).fill(null);

    return arr.map(_ => new Array(n).fill(0));
}
// D[i][j] 为 A 的前 i 个字符和 B 的前 j 个字符编辑距离的子问题
// D[i][j]= 1 + min( D[i][j−1], D[i−1][j], D[i−1][j−1] )
// D[i][0] = i D[0][j] = j
module.exports = minDistance;