/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sLen = s.length;
    let pLen = p.length;
    let dp = makeBinaryArray(sLen + 1, pLen + 1);
    dp[0][0] = true;

    function match(i, j) {
        if (i === 0) return false;
        return s[i - 1] === p[j - 1] || p[j - 1] === '?';
    }

    for (let i = 0; i <= sLen; i++) {
        for (let j = 1; j <= pLen; j++) {

            if (i === 0) {
                dp[i][j] = p[j - 1] === '*' && dp[0][j - 1];
                continue;
            }

            if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            } else {
                if (match(i, j)) {
                    dp[i][j] = dp[i - 1][j - 1]
                }
            }
        }
    }


    return dp[sLen][pLen];
};

function makeBinaryArray(m, n) {
    let arr = new Array(m).fill(null);

    return arr.map(_ => new Array(n).fill(false));
}

// f[i][j] 表示 s 的前 i 个字符与 p 中的前 j 个字符是否能够匹配
// 如果 p 的第 j 个字符是一个小写字母,f[i][j] = f[i - 1][j - 1] && match(s,p,i,j)
// 如果 p 的第 j 个字符是一个 ?,f[i][j] = f[i - 1][j - 1]
// 如果 p 的第 j 个字符是一个 *,f[i][j] = f[i][j - 1] || f[i-1][j]

// f[0][0] 当字符串 ss 和模式 pp 均为空时，匹配成功
// f[i][0] false 空模式无法匹配非空字符串
// f[0][i] 星号才能匹配空字符串，所以只有当模式 p 的前 j 个字符均为星号时，dp[0][j] 才为真。
module.exports = isMatch;